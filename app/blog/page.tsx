// app/blog/page.tsx
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  content: string;
};

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json() as Promise<Post[]>;
}

export default async function BlogList() {
  const posts = await getPosts();
  return (
    <section className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-6 space-y-2">
        {posts.map((p: Post) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600 hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/blog/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block mt-4">
        新規投稿
      </Link>
    </section>
  );
}
