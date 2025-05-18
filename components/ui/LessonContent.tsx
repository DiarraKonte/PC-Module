
"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { useState, useEffect } from "react";

interface LessonContentProps {
  title: string;
  content: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function LessonContent({
  title,
  content,
  image,
  imageWidth = 800,
  imageHeight = 450,
}: LessonContentProps) {
  const [readingTime, setReadingTime] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Calculer le temps de lecture estimé
  useEffect(() => {
    if (content) {
      // Moyenne de 200 mots par minute pour la lecture
      const wordCount = content.split(/\s+/).length;
      const minutes = Math.ceil(wordCount / 200);
      setReadingTime(minutes);
    }
  }, [content]);

  if (!title || !content) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">Le contenu de cette leçon n'est pas disponible.</p>
      </div>
    );
  }

  return (
    <article className="prose dark:prose-invert prose-xl max-w-4xl mx-auto py-8 px-4">
      {/* En-tête avec temps de lecture */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{readingTime} min de lecture</span>
        </div>
        <h1 className="text-4xl font-bold mb-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          {title}
        </h1>
      </div>

      {/* Image avec effet d'apparition */}
      {image && (
        <div className="mb-8 relative overflow-hidden rounded-xl shadow-xl">
          <div className={`transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={image}
              alt={`Illustration pour ${title}`}
              width={imageWidth}
              height={imageHeight}
              className="w-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
          </div>
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Table des matières automatique pour les articles longs */}
      {content.split('##').length > 3 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
            Dans cette leçon
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {content.split('\n').filter(line => line.startsWith('## ')).map((heading, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm mr-2">
                  {index + 1}
                </span>
                <span className="text-base">{heading.replace('## ', '')}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contenu principal avec mise en forme améliorée */}
      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-6 md:p-8">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 border-b pb-2 dark:border-gray-700" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200" {...props} />,
            ul: ({node, ...props}) => <ul className="space-y-2 my-4" {...props} />,
            li: ({node, ...props}) => <li className="flex items-start"><span className="inline-block mr-2 mt-1 text-blue-600 dark:text-blue-400">•</span><span {...props} /></li>,
            strong: ({node, ...props}) => <strong className="font-bold text-blue-700 dark:text-blue-400" {...props} />,
            p: ({node, ...props}) => <p className="my-4 leading-relaxed" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Call-to-action pour continuer l'apprentissage */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Prêt à continuer ton apprentissage ?</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Découvre la prochaine leçon pour approfondir tes connaissances.</p>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
          Passer à la suite →
        </button>
      </div>
    </article>
  );
}