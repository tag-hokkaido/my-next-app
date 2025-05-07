import { NextResponse } from 'next/server';
import { getAllPosts, addNewPost } from '@/app/lib/posts';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: '投稿の取得に失敗しました' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newPost = await addNewPost(data);
    return NextResponse.json(newPost);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: '投稿の追加に失敗しました' }, { status: 500 });
  }
} 