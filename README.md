# スライド資料

スライドは **1 資料 1 ディレクトリ** で管理します。

```
slides/
  [タイトル]/           # 資料ごとのディレクトリ
    [タイトル].md       # ソース
    [タイトル].html     # ビルド成果物（gitignore）

web/                    # 公開用フロントエンド (Vite + TypeScript)
themes/tech.css         # Marp 共通テーマ
```

## ローカルでのビルド・プレビュー

Node.js と npm が入っていれば、インストール不要で次のコマンドで利用できます。

**カスタムテーマ**: 共通テーマは `themes/tech.css`（Marp の theme 名: `tech`）です。**リポジトリルートで**実行し、コマンドに **`--theme-set themes/tech.css`** を付けてテーマを読み込んでください。

```bash
# HTML に出力（例: local-llm）
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/local-llm/local-llm.md -o slides/local-llm/local-llm.html

# PDF に出力
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/local-llm/local-llm.md -o slides/local-llm/local-llm.pdf

# プレビュー（ブラウザで開く）
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/local-llm/local-llm.md --preview
```

## 公開用サイト（`web/`）

`web/` 配下に Vite + TypeScript で組んだ一覧ページがあります。ビルド時に `scripts/build-slides.mjs` が `slides/` 配下の Markdown を Marp で HTML 化し、`public/slides/<title>/<title>.html` に出力します。

```bash
cd web
npm install
npm run dev      # 開発サーバー（スライドビルド → vite dev）
npm run build    # スライドビルド → vite build。成果物は web/dist/
npm run preview  # ビルド成果物をローカルで確認
```

## Cloudflare へのデプロイ

GitHub Actions / GitHub Pages は使いません。Cloudflare のダッシュボードから GitHub リポジトリを接続して自動デプロイします。

### Workers (Static Assets) を使う場合

Cloudflare ダッシュボード → **Workers & Pages** → **Create** → **Import a repository** から `FukeKazki/marp` を選択し、以下を設定します。

| 項目 | 値 |
|------|----|
| Root directory | `web` |
| Build command | `npm install && npm run build` |
| Deploy command | `npx wrangler deploy` |

`web/wrangler.jsonc` に `assets.directory = ./dist` を定義しているので、ビルド後の `web/dist/` がそのまま静的サイトとして配信されます。

### Cloudflare Pages を使う場合

Cloudflare ダッシュボード → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** で同じリポジトリを選び、以下を設定します。

| 項目 | 値 |
|------|----|
| Framework preset | None (or Vite) |
| Build command | `npm install && npm run build` |
| Build output directory | `dist` |
| Root directory (advanced) | `web` |

どちらの場合も `main` ブランチへ push すると自動でビルド・デプロイされます。

### URL 形式

| ページ | パス |
|--------|------|
| 一覧 | `/` |
| 各スライド | `/slides/<タイトル>/<タイトル>.html` |
