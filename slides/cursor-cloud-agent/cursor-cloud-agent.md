---
marp: true
theme: tech
paginate: true
---

<style>
/* このスライド専用: 2枚の画像を横並びに・背景を透明に */
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
section.step3-images table *,
section.step3-images div:has(> table) {
  background: transparent !important;
  background-color: transparent !important;
}
</style>

<!-- _class: lead -->

![会社ロゴ](../assets/yoshinani-icon_full_500x500.png)

# CursorのCloud Agentを使いこなす

開発効率を上げるエージェント活用術

<p class="lead-meta">所属: 株式会社YOSHINANI<br>名前: ふっけ<br>日付: 作成日</p>

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
