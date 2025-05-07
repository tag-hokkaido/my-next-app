// lib/posts.ts
export type Post = { slug: string; title: string; content: string };

const initialPosts: Post[] = [
  { slug: 'hello-world', title: 'Hello World', content: 'This is the **first** post.' },
  { slug: 'second-post', title: 'Second Post', content: 'Here is the _second_ post.' },
  { slug: 'nextjs-hands-on', title: 'Next.js Hands-On', content: "Let's learn Next.js step by step." },
];

// グローバルな状態として保持
let posts: Post[] = [...initialPosts];

export function getAllPosts(): Post[] {
  return [...posts]; // 配列のコピーを返す
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const post = posts.find(p => p.slug === slug);
  return post ? { ...post } : undefined; // オブジェクトのコピーを返す
}

export function addNewPost(post: Post) {
  // 重複チェック
  if (posts.some(p => p.slug === post.slug)) {
    throw new Error('このスラッグは既に使用されています');
  }
  posts = [...posts, { ...post }]; // 新しい配列を作成
  return { ...post }; // 追加した投稿のコピーを返す
}

// 開発用のデバッグ関数
export function debugPosts() {
  console.log('Current posts:', posts);
  return posts;
}
