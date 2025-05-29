'use client';
import Link from 'next/link';
import Image from 'next/image';
import { BadgeCheck, Lock, Star, Clock } from 'lucide-react';

type ModuleCardProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  paid?: boolean;
  duration?: string;
  difficulty?: string;
  rating?: number;
};

export default function ModuleCard({
  slug,
  title,
  description,
  image,
  paid = true,
  duration = "2h",
  difficulty = "Débutant",
  rating = 4.5
}: ModuleCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {paid && (
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <Lock className="w-3 h-3 mr-1" />
              Premium
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">
            {difficulty}
          </span>
        </div>
        
        <Link
          href={`/modules/${slug}`}
          className={`w-full block text-center px-4 py-2 rounded-lg font-medium transition-colors ${
            paid
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
          }`}
        >
          {paid ? 'Accéder au module' : 'Commencer gratuitement'}
        </Link>
      </div>
    </div>
  );
}