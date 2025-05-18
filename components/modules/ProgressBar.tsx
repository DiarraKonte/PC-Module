'use client';

type ProgressBarProps = {
  currentLessonSlug: string | undefined;
  lessons: { slug: string; title: string }[];
};

export function ProgressBar({ currentLessonSlug, lessons }: ProgressBarProps) {
  const currentIndex = lessons.findIndex((l) => l.slug === currentLessonSlug);
  const progress =
    currentIndex >= 0 ? Math.round(((currentIndex + 1) / lessons.length) * 100) : 0;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-1">
        <span>Progression</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
