'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/firebase';

interface PremiumData {
  hasPremiumAccess: boolean;
  premiumUntil?: Date | null;
  subscriptionId?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  premium: PremiumData;
}

interface AuthContextType extends AuthState {
  logout: () => Promise<void>;
  refreshPremiumStatus: () => void;
  hasPremiumAccess: boolean;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<Omit<AuthState, 'isAuthenticated'>>({
    user: null,
    loading: true,
    premium: {
      hasPremiumAccess: false,
      premiumUntil: null,
      subscriptionId: undefined,
    },
  });

  const isAuthenticated = !!state.user;

  const refreshPremiumStatus = () => {
    if (!state.user) return;
    
    const userDocRef = doc(db, 'users', state.user.uid);
    const unsubscribe = onSnapshot(userDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setState(prev => ({
          ...prev,
          premium: {
            hasPremiumAccess: data.hasPremiumAccess || false,
            premiumUntil: null,
            subscriptionId: data.subscriptionId,
          },
        }));
      } else {
        setState(prev => ({
          ...prev,
          premium: {
            hasPremiumAccess: false,
            premiumUntil: undefined,
            subscriptionId: undefined,
          },
        }));
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          // Initialiser l'état avant la souscription Firestore
          setState(prev => ({
            ...prev,
            user: currentUser,
            loading: false,
          }));

          // Configurer l'écouteur Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          const unsubscribeFirestore = onSnapshot(userDocRef, (snap) => {
            try {
              if (snap.exists()) {
                const data = snap.data();
                setState(prev => ({
                  ...prev,
                  premium: {
                    hasPremiumAccess: data.hasPremiumAccess || false,
                    premiumUntil: data.premiumUntil?.toDate(),
                    subscriptionId: data.subscriptionId,
                  },
                }));
              } else {
                setState(prev => ({
                  ...prev,
                  premium: {
                    hasPremiumAccess: false,
                    premiumUntil: undefined,
                    subscriptionId: undefined,
                  },
                }));
              }
            } catch (firestoreError) {
              console.error("Firestore error:", firestoreError);
            }
          });

          return unsubscribeFirestore;
        } else {
          setState({
            user: null,
            loading: false,
            premium: {
              hasPremiumAccess: false,
              premiumUntil: undefined,
              subscriptionId: undefined,
            },
          });
        }
      } catch (error) {
        console.error("Auth state error:", error);
        setState(prev => ({
          ...prev,
          loading: false,
        }));
      }
    });

    return unsubscribeAuth;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setState({
        user: null,
        loading: false,
        premium: {
          hasPremiumAccess: false,
          premiumUntil: undefined,
          subscriptionId: undefined,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    ...state,
    isAuthenticated,
    logout,
    refreshPremiumStatus,
    hasPremiumAccess: state.premium.hasPremiumAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}