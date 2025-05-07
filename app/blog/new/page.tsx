// app/blog/new/page.tsx
'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPostPage() {
  const router = useRouter();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      slug: formData.get('slug') as string,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || '投稿に失敗しました');
      }

      alert('投稿しました');
      router.push('/blog');
    } catch (error) {
      alert(error instanceof Error ? error.message : '投稿に失敗しました');
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <input name="slug" placeholder="slug" className="border p-2 w-full" required />
      <input name="title" placeholder="タイトル" className="border p-2 w-full" required />
      <textarea name="content" placeholder="本文 (HTML可)" className="border p-2 w-full h-32" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        送信
      </button>
    </form>
  );
}
