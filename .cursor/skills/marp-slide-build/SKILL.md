---
name: marp-slide-build
description: Build and export Marp slides from Markdown using the CLI (HTML/PDF/PPTX output). Use when building slides, exporting to file, or when the user explicitly asks to "ビルド" or "export". Do NOT use for 表示確認 or プレビュー — use marp-slide-preview-verify (server + browser) instead.
---

# Marp スライドビルド

このリポジトリでは **Marp** で Markdown からスライドを生成する。インストールは不要で、`npx @marp-team/marp-cli@latest` で実行する。

**注意**: ユーザーが「表示確認」「プレビューして」と言った場合は **ビルドや `--preview` ではなく**、**marp-slide-preview-verify**（サーバー起動＋Browser IDE）のワークフローで対応する。

## 前提

- Node.js と npm が入っていること
- スライドは **1 資料 1 ディレクトリ**: `slides/[タイトル]/[タイトル].md`（同ディレクトリに `.html` 等を出力）
- **カスタムテーマ**: `themes/tech.css` を利用するため、**リポジトリルート**で実行し、必ず **`--theme-set themes/tech.css`** を付ける。

## CLI の基本

```bash
npx @marp-team/marp-cli@latest --no-stdin --theme-set themes/tech.css [options] -o <出力パス> <input.md>
```

**重要（Marp CLI v4）**: 単一ファイルを HTML/PDF/PPTX に変換するときは **`-o <出力>` を `<input.md>` より前に書く**。`<input.md> -o ...` の順だと変換されず Usage のみ表示されることがある。

CLI v4 では、非対話環境では先頭に **`--no-stdin`** を付けないと入力待ちで止まることがある。PDF/PPTX は **`--pdf` / `--pptx`** と **`-o` の出力パス**を明示する（順序は上記どおり）。

## よく使うコマンド

**HTML に出力**
```bash
npx @marp-team/marp-cli@latest --no-stdin --theme-set themes/tech.css -o slides/<title>/<title>.html slides/<title>/<title>.md
```

**プレビュー（ブラウザで開く）**
```bash
npx @marp-team/marp-cli@latest --no-stdin --theme-set themes/tech.css slides/<title>/<title>.md --preview
```

ユーザーが「表示確認」「プレビューして」と依頼した場合は、この `--preview` ではなく **marp-slide-preview-verify** を優先すること（冒頭の注意）。

**PDF に出力**
```bash
npx @marp-team/marp-cli@latest --no-stdin --pdf --theme-set themes/tech.css -o slides/<title>/<title>.pdf slides/<title>/<title>.md --allow-local-files
```

（Markdown やテーマから **ローカルファイル** を参照する場合のみ `--allow-local-files`。HTTPS の外部画像のみなら省略可。）

**PowerPoint に出力**（拡張子 `.pptx`）
```bash
npx @marp-team/marp-cli@latest --no-stdin --theme-set themes/tech.css -o slides/<title>/<title>.pptx slides/<title>/<title>.md
```

**サーバーモード**（プレビュー用。表示確認の主手順は **marp-slide-preview-verify**）
```bash
npx @marp-team/marp-cli@latest --no-stdin --server --theme-set themes/tech.css -I slides
```

`--server` でディレクトリを渡すときは **`slides` を positional に置かず `-I slides`** を使う。`slides --server` だけだと Usage のみでサーバーが立たないことがある。

## スライド Markdown の約束

- 先頭に **フロントマター**（`---` で囲んだ YAML）で `marp: true` と `theme` などを指定する
- スライドの区切りは **水平線 `---`**（フロントマターの直後から有効）
- 見出し・リスト・コードブロックなど通常の Markdown が使える

## 作業時の注意

- 生成物（`.html`, `.pdf`, `.pptx`）は `.gitignore` で無視しているため、必要なら上記コマンドで都度ビルドする
- 複数ファイルをまとめてビルドする場合は、各ファイルに対して上記コマンドを実行するか、`--input-dir` / `--output` など CLI の一括オプションを利用する
