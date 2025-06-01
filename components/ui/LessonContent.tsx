"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface LessonContentProps {
  title: string;
  content: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  category?: string;
  tags?: string[];
}

export default function LessonContent({
  title,
  content,
  image,
  imageWidth = 800,
  imageHeight = 450,
  category,
  tags = [],
}: LessonContentProps) {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<HTMLElement[]>([]);




  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setReadingProgress(progress);

      const headings = headingsRef.current;
      if (headings.length > 0) {
        let activeIndex = 0;
        for (let i = 0; i < headings.length; i++) {
          const rect = headings[i].getBoundingClientRect();
          if (rect.top <= 100) {
            activeIndex = i;
          }
        }
        setActiveHeading(headings[activeIndex]?.textContent || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extraire les titres pour la table des matières
  const headings = content
    .split('\n')
    .filter(line => line.startsWith('## '))
    .map(heading => ({
      id: heading.replace('## ', '').toLowerCase().replace(/\s+/g, '-'),
      text: heading.replace('## ', ''),
    }));

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  if (!title || !content) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">Le contenu de cette leçon n&apos;est pas disponible.</p>
      </div>
    );
  }

 

  return (
    <>
      {/* Barre de progression de lecture */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Table of Contents */}
      {headings.length > 2 && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 mb-4 hover:shadow-xl transition-shadow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
            </svg>
          </button>

          {showTableOfContents && (
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 max-w-xs">
              <h4 className="font-semibold mb-3 text-sm">Sommaire</h4>
              <nav className="space-y-2">
                {headings.map((heading, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block text-left text-sm w-full px-2 py-1 rounded transition-colors ${activeHeading === heading.text
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {heading.text}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      )}

      {/* Actions flottantes */}
      <div className="fixed right-4 top-24 flex flex-col gap-2 z-30">
   

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>

      <article className="prose dark:prose-invert prose-xl max-w-4xl mx-auto py-8 px-4" ref={contentRef}>
        {/* En-tête amélioré avec métadonnées */}
        <div className="flex flex-col mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            </div>


            {category && (
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                {category}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-tight">
            {title}
          </h1>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Image avec effet d'apparition amélioré */}
        {image && (
          <div className="mb-8 relative overflow-hidden rounded-2xl shadow-2xl group">
            <div className={`transition-all duration-1000 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
              <Image
                src={image}
                alt={`Illustration pour ${title}`}
                width={imageWidth}
                height={imageHeight}
                className="w-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
            </div>
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse rounded-2xl">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Table des matières mobile */}
        {headings.length > 2 && (
          <div className="lg:hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl mb-8 border border-blue-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-800 dark:text-blue-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Sommaire de la leçon
            </h3>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {headings.map((heading, index) => (
                <button
                  key={index}
                  onClick={() => scrollToHeading(heading.id)}
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-blue-50 dark:hover:bg-gray-700 text-left group"
                >
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mr-3 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {heading.text}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Contenu principal avec mise en forme avancée */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => <h1 className="text-4xl font-bold mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700" {...props} />,
              h2: (props) => {
                const text = props.children?.toString() || '';
                const id = text.toLowerCase().replace(/\s+/g, '-');
                return (
                  <h2
                    id={id}
                    className="text-2xl font-bold mt-12 mb-6 text-blue-700 dark:text-blue-400 flex items-center group"
                    {...props}
                    ref={(el) => {
                      if (el && !headingsRef.current.includes(el)) {
                        headingsRef.current.push(el);
                      }
                    }}
                  >
                    <span className="mr-3 w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-80"></span>
                    {props.children}
                    <button
                      onClick={() => scrollToHeading(id)}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m-.758 4.899L7.76 7.05"></path>
                      </svg>
                    </button>
                  </h2>
                );
              },
              h3: (props) => <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200 flex items-center"><span className="w-1 h-6 bg-purple-500 rounded mr-3"></span>{props.children}</h3>,
              ul: (props) => <ul className="space-y-3 my-6" {...props} />,
              li: (props) => (
                <li className="flex items-start group">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span className="leading-relaxed" {...props} />
                </li>
              ),
              strong: (props) => <strong className="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1 py-0.5 rounded" {...props} />,
              p: (props) => <p className="my-6 leading-relaxed text-gray-700 dark:text-gray-300" {...props} />,
              blockquote: (props) => (
                <blockquote className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 pl-6 pr-4 py-4 italic my-8 rounded-r-lg" {...props} />
              ),
              code: (props) =>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono text-purple-600 dark:text-purple-400" {...props} />
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

      </article>
    </>
  );
}