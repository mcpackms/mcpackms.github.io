import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-zinc-800">
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            我的博客
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            记录技术探索与生活感悟
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all duration-200 hover:scale-105"
            >
              阅读文章
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © 2026 · 保留所有权利
          </p>
        </footer>
      </main>
    </div>
  );
}
