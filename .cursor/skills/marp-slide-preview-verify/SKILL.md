---
name: marp-slide-preview-verify
description: Serves Marp slides via local server and opens them in Browser IDE so the AI can verify slide content. Use when the user wants to confirm generated slides, when the AI needs to check slide display, or when verifying Marp output in the browser.
---

# スライド表示確認

AI が生成したスライドを、Marp サーバーで配信し Browser IDE で開いて内容を確認するための手順。

## 前提

- **cursor-ide-browser** MCP が有効であること
- スライドは **1 資料 1 ディレクトリ**: `slides/[タイトル]/[タイトル].md`
- リポジトリルートで作業する想定

## ワークフロー

### 1. Marp サーバーを起動する

サーバーを **バックグラウンド** で起動する。

```bash
npx @marp-team/marp-cli@latest slides --server
```

- 待ち受け: **http://localhost:8080/**
- 起動ログに `Start server listened at http://localhost:8080/` と出れば OK

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
| 1 | `npx @marp-team/marp-cli@latest slides --server` をバックグラウンドで実行 |
| 2 | `browser_navigate` で `http://localhost:8080/<タイトル>/<タイトル>.md` を開く |
| 3 | `browser_snapshot` または `browser_take_screenshot` で内容を確認 |

## 補足

- サーバーは 1 回起動すれば、別のスライドも同じポートで `http://localhost:8080/<別タイトル>/<別タイトル>.md` で開ける
- 既にサーバーが動いている場合は、起動せず 2 から実行する
