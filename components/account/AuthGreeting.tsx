// components/AuthGreeting.tsx
'use client';

import { useAuth } from '@/context/AuthContext';

export function AuthGreeting() {
  const { user } = useAuth();

  if (!user?.displayName) return null;

  return (
    <h2 className="text-3xl font-bold mb-6">
      {user.displayName} !
    </h2>
  );
}