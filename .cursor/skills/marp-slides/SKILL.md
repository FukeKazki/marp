---
name: marp-slides
description: Build and preview Marp slides from Markdown using the CLI. Use when building slides, exporting to HTML/PDF/PPTX, previewing presentations, or when the user mentions Marp, presentation slides, or slides/.
---

# Marp スライドビルド

このリポジトリでは **Marp** で Markdown からスライドを生成する。インストールは不要で、`npx @marp-team/marp-cli@latest` で実行する。

## 前提

- Node.js と npm が入っていること
- スライドは **1 資料 1 ディレクトリ**: `slides/[タイトル]/[タイトル].md`（同ディレクトリに `.html` 等を出力）

## CLI の基本

```bash
npx @marp-team/marp-cli@latest <input.md> [options]
```

## よく使うコマンド

**HTML に出力**
```bash
npx @marp-team/marp-cli@latest slides/<title>/<title>.md -o slides/<title>/<title>.html
```

**プレビュー（ブラウザで開く）**
```bash
npx @marp-team/marp-cli@latest slides/<title>/<title>.md --preview
```

**PDF に出力**（出力拡張子を `.pdf` にすると PDF が生成される）
```bash
npx @marp-team/marp-cli@latest slides/<title>/<title>.md -o slides/<title>/<title>.pdf
```

**PowerPoint に出力**（拡張子 `.pptx`）
```bash
npx @marp-team/marp-cli@latest slides/<title>/<title>.md -o slides/<title>/<title>.pptx
```

## スライド Markdown の約束

- 先頭に **フロントマター**（`---` で囲んだ YAML）で `marp: true` と `theme` などを指定する
- スライドの区切りは **水平線 `---`**（フロントマターの直後から有効）
- 見出し・リスト・コードブロックなど通常の Markdown が使える

## 作業時の注意

- 生成物（`.html`, `.pdf`, `.pptx`）は `.gitignore` で無視しているため、必要なら上記コマンドで都度ビルドする
- 複数ファイルをまとめてビルドする場合は、各ファイルに対して上記コマンドを実行するか、`--input-dir` / `--output` など CLI の一括オプションを利用する
