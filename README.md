This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**第1回ハンズオン：環境構築と基本ルーティング**

---

## 🎯 目標

- VS Code の開発環境を整備できる
- GitHub リポジトリを作成し、Git フロー（feature ブランチ→PR→main）を体験できる
- `create-next-app` で Next.js プロジェクトを立ち上げ、基本のページ（`/`・`/about`）と動的ルート（`/blog/[slug]`）を実装できる

---

## 🛠 前提条件

- Node.js（LTS v18.x 以上）がインストール済み
- Git と GitHub アカウントが準備済み
- VS Code がインストール済み

---

## 1. VS Code 拡張機能セットアップ (約30分)

1. VS Code を起動
2. 左サイドバーの「拡張機能」アイコンをクリック
3. 以下を検索してインストール

   - **ESLint**
   - **Prettier – Code formatter**
   - **GitLens — Git supercharged**
   - **Next.js Snippets**
   - **Tailwind CSS IntelliSense**
   - **Docker** (任意)

4. ワークスペース設定（`.vscode/settings.json`）を作成し、以下を追加

   ```json
   {
     "editor.formatOnSave": true,
     "eslint.format.enable": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "always"
     },
     "gitlens.hovers.currentLine.over": "line",
     "next-intellisense.showSuggestions": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[json]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

---

## 2. GitHub リポジトリ作成＆初回コミット (約30分)

1. GitHub で新規リポジトリを作成

   - 名前：`nextjs-app-tutorial`
   - Public/Private はお好みで
   - README は作らずローカルで作成
   - デフォルトブランチ（main）は作成時に自動的に作られます

2. ローカルでクローン＆ブランチ運用の開始

   ```bash
   # お好きなディレクトリで
   # GitHubからリポジトリをクローン
   git clone git@github.com:<your-username>/nextjs-app-tutorial.git
   # プロジェクトディレクトリに移動
   cd my-next-app

   # 開発用のfeature/initial-setupブランチを作成して切り替え
   git checkout -b feature/initial-setup
   ```

   ```

   ```

3. VS Code でフォルダを開き、README.md を作成

   ```md
   # my-next-app

   Next.js を学ぶためのプロジェクトです。
   ```

4. コミット & プッシュ → プルリク作成

   ```bash
   # READMEをステージングエリアに追加
   git add README.md

   # 初期のREADMEファイルをコミット
   git commit -m "docs: add README"

   # リモートブランチを作成し、プッシュ
   # リモートブランチとは、GitHubなどのリモートリポジトリ上に作成されるブランチです
   # --set-upstreamオプションで、ローカルブランチとリモートブランチを紐付けます
   git push --set-upstream origin feature/initial-setup
   ```

5. GitHub 上で “feature/initial-setup → main” のプルリクを作成し、Self-Review してマージ

---

## 3. Next.js プロジェクト立ち上げ (約30分)

1. main ブランチに切り替え、ローカルをクリーンに

   ```bash
   git checkout main
   git pull
   ```

2. `create-next-app` 実行

   ```bash
   npx create-next-app@latest . --typescript
   ```

   - プロンプトはすべてデフォルトで進めて OK

3. 依存パッケージがインストールされたら、Lint／Format を一度走らせておく

   ```bash
   npm run lint
   # formatスクリプトが存在しないためエラーになります
   npm install --save-dev prettier
   npm run format
   ```

4. 初期セットアップをコミット

   ```bash
   git checkout -b feature/nextjs-setup
   git add .
   git commit -m "chore: initial Next.js setup with TypeScript"
   git push --set-upstream origin feature/nextjs-setup
   ```

5. GitHub で PR → Self-Review → main へマージ

---

## 4. Pages ディレクトリの基本理解＆実装 (約1時間)

### 4.1 `/` と `/about` ページ作成

1. `pages/index.tsx`

   ```tsx
   import Link from "next/link";

   export default function Home() {
     return (
       <main className="p-8">
         <h1 className="text-2xl font-bold">Welcome to My Next.js App</h1>
         <p className="mt-4">これはトップページです。</p>
         <Link href="/about">
           <a className="text-blue-600 underline mt-4 block">About ページへ</a>
         </Link>
       </main>
     );
   }
   ```

2. `pages/about.tsx`

   ```tsx
   import Link from "next/link";

   export default function About() {
     return (
       <main className="p-8">
         <h1 className="text-2xl font-bold">About</h1>
         <p className="mt-4">このアプリの概要を説明するページです。</p>
         <Link href="/">
           <a className="text-blue-600 underline mt-4 block">トップへ戻る</a>
         </Link>
       </main>
     );
   }
   ```

3. ローカル起動して動作確認

   ```bash
   npm run dev
   ```

   - ブラウザで `http://localhost:3000/` → トップページ表示
   - `http://localhost:3000/about` → About ページ表示

### 4.2 動的ルート `/blog/[slug]` のひな形

1. `pages/blog/[slug].tsx` を作成

   ```tsx
   import { useRouter } from "next/router";
   import Link from "next/link";

   export default function BlogPost() {
     const router = useRouter();
     const { slug } = router.query;

     return (
       <main className="p-8">
         <h1 className="text-2xl font-bold">Blog: {slug}</h1>
         <p className="mt-4">ここにブログ記事「{slug}」の内容を表示します。</p>
         <Link href="/">
           <a className="text-blue-600 underline mt-4 block">トップへ戻る</a>
         </Link>
       </main>
     );
   }
   ```

2. ブラウザで動作確認

   - `http://localhost:3000/blog/hello-next` → “Blog: hello-next” と表示されれば OK

3. コミット & プルリク → マージ

   ```bash
   git checkout -b feature/basic-routing
   git add pages
   git commit -m "feat: add basic pages and dynamic blog/[slug] route"
   git push --set-upstream origin feature/basic-routing
   ```

4. GitHub で PR → Self-Review → main マージ

---

## ✅ 本日のチェックリスト

- [ ] VS Code の推奨拡張がインストール済み
- [ ] GitHub で feature ブランチから PR → main へマージを体験
- [ ] Next.js プロジェクトが起動し、 `/` `/about` `/blog/[slug]` が動作
- [ ] コード整形（Prettier）・Lint（ESLint）が設定され、エラーがない

---

### 🎁 次回予告（第2回）

- Tailwind CSS を導入し、レイアウトとスタイリングを学ぶ
- 共通レイアウトコンポーネント（ヘッダー／フッター）を作成

---

これで第1回は完了です！何かつまずいた箇所があれば教えてください。
