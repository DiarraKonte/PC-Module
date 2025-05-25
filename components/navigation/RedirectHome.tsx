'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

export default function RedirectHome() {
  const router = useRouter();
  const {isAuthenticated} = useAuth(); 

  useEffect(() => {
    if(!isAuthenticated)
    router.push('/');
  }, [router]);

  return null; 
}
