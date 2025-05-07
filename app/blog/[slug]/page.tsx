import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await Promise.resolve(params.slug);
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Blog: {slug}</h1>
      <p className="mt-4">ここにブログ記事「{slug}」の内容を表示します。</p>
      <Link 
        href="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        トップへ戻る
      </Link>
    </main>
  );
}
