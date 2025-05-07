// app/profile/page.tsx
import { mockUser } from '@/app/lib/user';

export default function ProfilePage() {
  // App Router では fetch せず直接モジュールから取得
  // 補足：外部 API を使う場合は
  // const user = await fetch('…',{ cache:'no-store' }).then(r=>r.json())
  // を用いますが、モックなら直接インポートで OK。
  const user = mockUser;
  return (
    <section className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-semibold">ようこそ、{user.name}さん</h2>
      <p>メールアドレス: {user.email}</p>
    </section>
  );
}
