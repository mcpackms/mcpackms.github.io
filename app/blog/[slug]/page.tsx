import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { CodeBlockWrapper } from '@/components/code-block';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-16 px-4">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← 返回博客列表
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {postData.title}
          </h1>
          <time className="text-zinc-500 dark:text-zinc-400">{postData.date}</time>
        </header>

        <CodeBlockWrapper>
          <div
            className="prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
          />
        </CodeBlockWrapper>
      </article>
    </div>
  );
}
