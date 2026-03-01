---
name: marp-slide-preview-verify
description: Serves Marp slides via local server and opens them in Browser IDE so the AI can verify slide content. Use when the user says 表示確認, プレビューして, 確認して, or wants to confirm generated slides, check slide display, or verify Marp output in the browser. Do NOT use marp-slide-build (CLI build/--preview) for this — use this skill's server + browser_navigate workflow.
---

# スライド表示確認

AI が生成したスライドを、Marp サーバーで配信し Browser IDE で開いて内容を確認するための手順。

## 前提

- **cursor-ide-browser** MCP が有効であること
- スライドは **1 資料 1 ディレクトリ**: `slides/[タイトル]/[タイトル].md`
- リポジトリルートで作業する想定

## ワークフロー

### 1. Marp サーバーを起動する

サーバーを **バックグラウンド** で起動する。**テーマ（tech）を反映させるため** `--theme-set themes/tech.css` を付ける。非対話環境では `--no-stdin` を先頭に付ける。

```bash
npx @marp-team/marp-cli@latest --no-stdin --server --theme-set themes/tech.css slides
```

- 待ち受け: **http://localhost:8080/**
- 起動ログに `Start server listened at http://localhost:8080/` と出れば OK
- リポジトリルートで実行する

### 2. Browser IDE でスライドの URL を開く

cursor-ide-browser の **browser_navigate** で次の URL を開く。

```
http://localhost:8080/<タイトル>/<タイトル>.md
```

例: `cursor-cloud-agent` のスライドなら  
`http://localhost:8080/cursor-cloud-agent/cursor-cloud-agent.md`

### 3. 表示内容を確認する

- **browser_snapshot**: ページのアクセシビリティスナップショット（DOM 等）を取得
- **browser_take_screenshot**: 必要なら `fullPage: true` でフルページのスクリーンショットを取得

これで AI がスライドの表示内容を「見て」検証できる。

## まとめ

| ステップ | 操作 |
|---------|------|
| 1 | `npx @marp-team/marp-cli@latest --no-stdin --server --theme-set themes/tech.css slides` をバックグラウンドで実行（リポジトリルート） |
| 2 | `browser_navigate` で `http://localhost:8080/<タイトル>/<タイトル>.md` を開く |
| 3 | `browser_snapshot` または `browser_take_screenshot` で内容を確認 |

## 補足

- サーバーは 1 回起動すれば、別のスライドも同じポートで `http://localhost:8080/<別タイトル>/<別タイトル>.md` で開ける
- 既にサーバーが動いている場合は、起動せず 2 から実行する
- **HTML プレビューでテーマを反映するには** 上記のとおり `--theme-set themes/tech.css` を付けてサーバーを起動すること。または、先に `--theme-set themes/tech.css` 付きで HTML にビルドし、その HTML を開いて確認する方法もある。
