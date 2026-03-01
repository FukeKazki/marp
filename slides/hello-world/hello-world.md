---
marp: true
theme: tech
paginate: true
---

<!-- _class: lead -->

![会社ロゴ](../assets/yoshinani-icon_full_500x500.png)

# Marp ハローワールド

構文学習用のサンプル資料です。

<p class="lead-meta">所属: 株式会社YOSHINANI<br>名前: ふっけ<br>日付: 作成日</p>

---

# Hello, World!

Marp では **Markdown** でスライドを書けます。

- 見出しは `#` や `##`
- リストは `-` や `*`
- 区切り線 `---` でスライドを分ける

---

# 構文の要点

- **スライド区切り**: 水平線 `---` のたびに新しいスライドになる
- **フロントマター**: 先頭の `---` で囲んだ YAML でテーマなどを指定
- **Markdown**: 見出し・リスト・コードブロックなどがそのまま使える

```markdown
---
marp: true
---
# タイトル
内容
---
# 次のスライド
```