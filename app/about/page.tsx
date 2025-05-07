import Link from "next/link";

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-4">このアプリの概要を説明するページです。</p>
      <Link 
        href="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        トップへ戻る
      </Link>
    </main>
  );
}
