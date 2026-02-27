---
marp: true
theme: default
paginate: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Fira+Code:wght@400;500;700&display=swap');

:root {
  --color-background: #0d1117;
  --color-foreground: #c9d1d9;
  --color-heading: #58a6ff;
  --color-accent: #7ee787;
  --color-code-bg: #161b22;
  --color-border: #30363d;
  --font-default: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  --font-code: 'Fira Code', 'Consolas', 'Monaco', monospace;
}

section {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-default);
  font-weight: 400;
  box-sizing: border-box;
  border-left: 4px solid var(--color-accent);
  position: relative;
  line-height: 1.6;
  font-size: 20px;
  padding: 56px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
  padding: 0;
  font-family: var(--font-code);
}

h1 {
  font-size: 52px;
  line-height: 1.3;
  text-align: left;
}

h1::before {
  content: '# ';
  color: var(--color-accent);
}

h2 {
  font-size: 38px;
  margin-bottom: 40px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-border);
}

h2::before {
  content: '## ';
  color: var(--color-accent);
}

h3 {
  color: var(--color-foreground);
  font-size: 26px;
  margin-top: 32px;
  margin-bottom: 12px;
}

h3::before {
  content: '### ';
  color: var(--color-accent);
}

ul, ol {
  padding-left: 32px;
}

li {
  margin-bottom: 10px;
}

li::marker {
  color: var(--color-accent);
}

pre {
  background-color: var(--color-code-bg);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 16px;
  overflow-x: auto;
  font-family: var(--font-code);
  font-size: 16px;
  line-height: 1.5;
}

code {
  background-color: var(--color-code-bg);
  color: var(--color-accent);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: var(--font-code);
  font-size: 0.9em;
}

pre code {
  background-color: transparent;
  padding: 0;
  color: var(--color-foreground);
}

footer {
  font-size: 14px;
  color: #8b949e;
  font-family: var(--font-code);
  position: absolute;
  left: 56px;
  right: 56px;
  bottom: 40px;
  text-align: right;
}

footer::before {
  content: '// ';
  color: var(--color-accent);
}

section.lead {
  border-left: 4px solid var(--color-accent);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

section.lead h1 {
  margin-bottom: 24px;
}

section.lead p {
  font-size: 22px;
  color: var(--color-foreground);
  font-family: var(--font-code);
}

strong {
  color: var(--color-accent);
  font-weight: 700;
}

/* Step 3: 2枚の画像を横並びに・背景を透明に */
section.step3-images table,
section.step3-images thead,
section.step3-images tbody,
section.step3-images tr,
section.step3-images td,
section.step3-images th {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
}
section.step3-images table {
  width: 100%;
  table-layout: fixed;
  margin: 16px 0;
}
section.step3-images td,
section.step3-images th {
  width: 50%;
  padding: 0 8px;
  vertical-align: middle;
}
section.step3-images td img {
  max-width: 100%;
  height: auto;
  display: block;
}
/* 表を囲むラッパーなど、Marp が生成する要素の白背景を打ち消す */
section.step3-images table *,
section.step3-images div:has(> table) {
  background: transparent !important;
  background-color: transparent !important;
}
</style>

<!-- _class: lead -->

# CursorのCloud Agentを使いこなす

開発効率を上げるエージェント活用術

---

## アジェンダ

- 具体的な使い方（GitHub連携フロー）
- コスト
- まとめ

---

## Step 1: GitHubアカウントとCursorを連携

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/1408cf3d38af-20260226.png)

- Cursorの設定でGitHubと連携する
- リポジトリへのアクセスを許可する

---

## Step 2: リポジトリにIssueを作成してCursorをメンション

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/15ac7bb77225-20260227.png)

- やりたいこと・修正したい内容をIssueに書く（タイトルと本文で要件を明確に）
- Issue内で **@Cursor** をメンションする
- CursorがIssueを検知して作業を開始

---

<!-- _class: step3-images -->

## Step 3: CursorがPRを出す

|  |  |
|:--|:--|
| ![](https://storage.googleapis.com/zenn-user-upload/de3872e66a9d-20260227.png) | ![](https://storage.googleapis.com/zenn-user-upload/a363ee118622-20260227.png) |

- Cursorがコードを書いてPRを作成
- 変更内容を確認する

---

## Step 4: Cursorをメンションしてレビュー・修正

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/b94611a2debe-20260227.png)

- PRのコメントでCursorをメンション（レビュー依頼や指摘への対応を依頼）
- レビュー指摘に応じてCursorが修正（必要に応じて何度でもメンション可能）

---

## Cloud Agentからの引き継ぎ

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/c5303e4951ca-20260227.png)

- Cursor Editor の Agent パネルから Cloud Agent の作業を引き継ぎできる（branch に切り替えなど）
- **New Agent** から Cloud Agent への依頼もできる

---

## 使い方のポイント

- Issueに「何をしてほしいか」を書いてCursorをメンションするだけ
- PRのレビューもCursorに依頼すると修正案まで出してくれる
- 実装 → レビュー → 修正を一連の流れで任せられる

---

## Cloud Agentのコスト

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/30a42f004f4f-20260227.png)

- **Pro**: $20 の API エージェント利用
- **Pro+**: $70 の API エージェント利用
- **Ultra**: $400 の API エージェント利用枠
- Cloud Agent で利用するモデルによって消費するクレジットが異なる（上記はモデル比較表）
- **Max Mode** は、モデルの API 料金レートに **20% 上乗せ** したトークンベースの料金体系
- コストが複雑な点は Claude Code の方が良いなって思う

---

## 実際のコストを見てみた

![bg right:45% contain](https://storage.googleapis.com/zenn-user-upload/b5cb6ea855b8-20260227.png)

- **Max Mode が Yes** のものだけを Cloud Agent 利用回数としてカウント → **今月は 100 回**
- **よく使っているモデル**（Max Mode=Yes の内訳）: **gpt-5.2-codex-high** 52回 / **gpt-5.2-codex** 34回 / **claude-4.5-opus-high-thinking** 15回 / **composer-1** 13回 / **claude-4.6-opus-high-thinking** 1回
- 今月 100 回利用で API 利用が **27%** → **$70 のクレジットなら同ペースで約 370 回** 使える目安

---

## まとめ

- GitHub連携でIssue → PR → レビュー → 修正 → マージまでCursorに任せられる
- コストを把握したうえで、段階的に活用範囲を広げる
