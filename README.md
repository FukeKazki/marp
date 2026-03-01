# スライド資料

スライドは **1 資料 1 ディレクトリ** で管理します。

```
slides/
  [タイトル]/           # 資料ごとのディレクトリ
    [タイトル].md       # ソース
    [タイトル].html     # ビルド成果物（gitignore）
```

Node.js と npm が入っていれば、インストール不要で次のコマンドで利用できます。

**カスタムテーマ**: 共通テーマは `themes/tech.css`（Marp の theme 名: `tech`）です。**リポジトリルートで**実行し、コマンドに **`--theme-set themes/tech.css`** を付けてテーマを読み込んでください。

## ビルド

```bash
# HTML に出力（例: hello-world）
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/hello-world/hello-world.md -o slides/hello-world/hello-world.html

# PDF に出力
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/hello-world/hello-world.md -o slides/hello-world/hello-world.pdf

# プレビュー（ブラウザで開く）
npx @marp-team/marp-cli@latest --theme-set themes/tech.css slides/hello-world/hello-world.md --preview
```

## GitHub Pages での公開

`slides/` や `themes/` に変更を push すると、GitHub Actions が自動でビルドし GitHub Pages にデプロイします。

**初回セットアップ**: リポジトリの **Settings > Pages** で、Source に **GitHub Actions** を選択してください。

**URL 形式**（`https://<owner>.github.io/<repo>/` がベース）:

| ページ | URL |
|--------|-----|
| 一覧 | `https://<owner>.github.io/<repo>/` |
| 各スライド | `https://<owner>.github.io/<repo>/<タイトル>/<タイトル>.html` |

例: `hello-world` の場合 → `.../hello-world/hello-world.html`