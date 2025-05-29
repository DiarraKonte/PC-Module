'use client';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { Lock, Zap, Crown } from 'lucide-react';

export type ModuleCardProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  price?: number;
  duration?: string;
};

export function PreviewModuleCard({ 
  slug, 
  title, 
  description, 
  image,
  price = 0,
}: ModuleCardProps) {
  const isFree = price === 0;
  const router = useRouter();
  const { hasPremiumAccess } = useAuth();

  const handleAccess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isFree && !hasPremiumAccess) {
      e.preventDefault();
      router.push(`/pricing?redirect=/modules/${slug}`); 
    }
  };

  const canAccess = isFree || hasPremiumAccess;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all border ${
      canAccess 
        ? 'border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
        : 'border-gray-300 dark:border-gray-600'
    }`}>
      {image && (
        <div className="relative h-40 w-full">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover ${!canAccess ? 'opacity-80' : ''}`}
          />
          {!canAccess && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Lock className="text-white w-8 h-8" />
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className={`text-lg font-bold ${
            canAccess ? 'text-gray-800 dark:text-white' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {title}
          </h2>
          <div className="flex items-center gap-2">
            {!isFree && hasPremiumAccess && (
              <Crown className="w-4 h-4 text-yellow-500" />
            )}
            <span className={`text-xs px-2 py-1 rounded-full ${
              isFree
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                : canAccess
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}>
            </span>
          </div>
        </div>

        <p className={`text-sm mb-4 line-clamp-2 ${
          canAccess ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'
        }`}>
          {description}
        </p>

        <div className="flex items-center justify-between text-xs mb-4">
          <span className={`flex items-center ${
            canAccess ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'
          }`}>
            <Zap className="w-3 h-3 mr-1" />
          </span>
          <span className={canAccess ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}>
          </span>
        </div>

      </div>
    </div>
  );
}