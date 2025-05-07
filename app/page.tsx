import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome to My Next.js App</h1>
      <p className="mt-4">これはトップページです。</p>
      <Link href="/about" className="text-blue-600 underline mt-4 block">
        About ページへ
      </Link>
    </main>
  );
}
