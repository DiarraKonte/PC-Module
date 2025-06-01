// components/modules/ModuleProgress.tsx
"use client";

export default function ModuleProgress() {
  
  const progress = 0; 
  
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {progress}% complété
      </span>
    </div>
  );
}