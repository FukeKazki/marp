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
</style>

<!-- _class: lead -->

# Cursor Tips

効率よく使うための実践テクニック

---

## アジェンダ

- コンテキストの渡し方
- ショートカットとチャット
- Rules と Skills
- まとめ

---

## @ でファイル・コードを指定

- **@ファイル名** でファイルをコンテキストに追加
- **@フォルダ** でディレクトリ全体を参照可能
- **@Codebase** でコードベース検索の結果を渡せる
- 聞く前に「何を見て答えてほしいか」を明示すると精度が上がる

---

## 選択範囲を活用する

- 答えさせたいコードを選択してからチャットを開く
- 「この関数をリファクタして」のように範囲を限定すると無駄な変更が減る
- 複数箇所を選択して「差分を揃えて」も使える

---

## Cmd+K インライン編集

- エディタ上で **Cmd+K**（Mac）でその場で AI に編集させる
- 選択範囲があるとその部分だけ、なければ自然な単位で変更
- 小さな修正・リネーム・スタイル統一に最適

---

## ターミナルとエージェント

- チャットから「このコマンドを実行して」と依頼できる
- 実行前にコマンド内容を確認する習慣をつける
- 長時間処理はバックグラウンド実行を指定するとよい

---

## Rules で前提を固定する

- **.cursor/rules/** にプロジェクト固有のルールを書く
- 言語・フォーマット・命名規則を書いておくと毎回説明しなくてよい
- ファイルパス指定で「このファイルを開いているときだけ」も可能

---

## Skills で得意分野を追加する

- **Agent Skills** で「Marp スライド作成」「Figma 実装」などを追加できる
- スキル名に反応して適切な手順やテンプレートを参照する
- 自分用・チーム用のスキルを `.cursor/skills/` に置ける

---

## 曖昧な指示より具体的に

- ❌ 「直して」 → ✅ 「この関数のエラーハンドリングを追加して」
- ❌ 「きれいにして」 → ✅ 「ESLint の指摘を解消して」
- 入力・期待する出力・制約を一言添えると一発で近い結果になる

---

## 長い作業は分割する

- 大きなタスクは「まず設計だけ」「次に API」「最後に UI」のように分ける
- 途中で「ここまでをコミットして」と区切ると履歴が追いやすい
- エージェントに任せる範囲を小さくするとコスト・失敗も抑えられる

---

## まとめ

- **@** と選択でコンテキストを渡し、**Cmd+K** で手軽に編集
- **Rules** で前提を固定し、**Skills** で得意分野を拡張
- 指示は具体的に、大きな作業は分割して依頼する
