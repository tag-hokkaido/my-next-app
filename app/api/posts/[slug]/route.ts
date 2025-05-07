import { NextResponse } from 'next/server';
import { getAllPosts } from '@/app/lib/posts';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const posts = await getAllPosts();
    const post = posts.find(p => p.slug === params.slug);
    
    if (!post) {
      return NextResponse.json({ error: '投稿が見つかりません' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: '投稿の取得に失敗しました' }, { status: 500 });
  }
} 