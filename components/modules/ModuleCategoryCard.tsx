'use client';
import { useState } from 'react';
import ModuleCard from './ModuleCard';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SubModule = {
  slug: string;
  title: string;
  description: string;
  price?: number;
};

type Props = {
  categoryTitle: string;
  modules: SubModule[];
};

export default function ModuleCategoryCard({ categoryTitle, modules }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {categoryTitle}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {modules.length} modules disponibles
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          {open ? (
            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {modules.map((mod) => (
                <motion.div
                  key={mod.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ModuleCard
                    slug={mod.slug}
                    title={mod.title}
                    description={mod.description}
                    price={mod.price}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}