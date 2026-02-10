# スライド資料

スライドは **1 資料 1 ディレクトリ** で管理します。

```
slides/
  [タイトル]/           # 資料ごとのディレクトリ
    [タイトル].md       # ソース
    [タイトル].html     # ビルド成果物（gitignore）
```

Node.js と npm が入っていれば、インストール不要で次のコマンドで利用できます。

## ビルド

```bash
# HTML に出力（例: hello-world）
npx @marp-team/marp-cli@latest slides/hello-world/hello-world.md -o slides/hello-world/hello-world.html

# プレビュー（ブラウザで開く）
npx @marp-team/marp-cli@latest slides/hello-world/hello-world.md --preview
```

## ディレクトリ

- `hello-world/` — 構文学習用のハローワールド資料
