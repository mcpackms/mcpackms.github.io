import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">博客</h1>
        
        {allPostsData.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">暂无文章，敬请期待...</p>
        ) : (
          <div className="space-y-8">
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <article
                key={id}
                className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
              >
                <Link href={`/blog/${id}`} className="block group">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{date}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-3">{excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
