// components/LessonList.tsx
import Link from 'next/link';

export default function ModuleList({
  lessons,
  moduleSlug
}: {
  lessons: { slug: string; title: string }[];
  moduleSlug: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold mb-4">Leçons disponibles :</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link
              href={`/modules/${moduleSlug}/${lesson.slug}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="font-medium">{lesson.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}