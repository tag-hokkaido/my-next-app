// app/blog/[slug]/page.tsx
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 動的なパス生成を有効化
export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts = await res.json();
  return posts.map((p: { slug: string }) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return <p>記事が見つかりません。</p>;
  return (
    <article className="prose mx-auto p-4">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}