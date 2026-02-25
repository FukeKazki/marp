---
marp: true
theme: default
---

# Cursor の AI まわりを整理する

**AGENTS.md / RULE / SKILL / MCP** の解説

---

# この資料で扱う 4 つ

| 種類 | 役割のイメージ |
|------|----------------|
| **AGENTS.md** | このプロジェクトの「エージェント指示書」 |
| **RULE** | いつ・どこで適用するか決めた「ルール」 |
| **SKILL** | タスク別の「やり方メモ」（再利用可能） |
| **MCP** | 外部サービスとつなぐ「ツール」 |

---

# 1. AGENTS.md

---

## AGENTS.md とは

- プロジェクトの**ルート**に置く Markdown ファイル
- Cursor の **Agent / Composer** が参照する「**エージェント向け指示**」
- モデルのコンテキストの**先頭付近**に含められ、毎回のやり取りで一貫した前提になる

**ポイント**: プロジェクトごとに「誰向けか」「何をしてほしいか」をまとめて書いておく。

---

## AGENTS.md の例 1: GEM-QUEEN-SHOPIFY

宝石EC向け Shopify テーマ。**主要ディレクトリ**と**セットアップ・開発コマンド**をまとめている。

```markdown
# AGENTS.md
このリポジトリは、宝石EC向けのShopifyテーマです。AIエージェントが作業する際の要点をまとめています。

## 主要ディレクトリ
- assets/, blocks/, config/, layout/, locales/, sections/, snippets/, templates/

## セットアップ
1. Shopify CLI をインストール
2. pnpm i

## 開発
pnpm dev  # ローカル開発サーバー
```

---

## AGENTS.md の例 2: yoshinani-template-base

モノレポの基本テンプレート。**構成**と**コーディング規約・コマンド**を明示。

```markdown
# AGENTS.md
AIエージェントがこのプロジェクトを理解し、適切にコードを生成・修正するためのガイドライン。

## プロジェクト構成
- apps/web: Next.js メインアプリ
- packages/ui: 共通UIコンポーネント

## コーディング規約
- TypeScript: strict、any は避ける
- React/Next.js: Server Components がデフォルト
- 変更後に Biome と ESLint を実行

## コマンド
pnpm dev / build / format / check / test / e2e
```

---

# 2. RULE（.cursor/rules）

---

## RULE とは

- **`.cursor/rules/`** に置く **`.mdc`** ファイル
- フロントマター（YAML）で「いつ・どのファイルで効かせるか」を指定
- **常に効かせる**か、**特定ファイルを開いたときだけ**かを選べる

コード規約・スタイル・パターンを「ルール」として永続化し、AI に毎回読ませるイメージ。

例）日付の実装には **date-fns** を利用する／TS では try/catch でログを取る

---

## ルールファイルの形

```markdown
---
description: このルールの説明（ルールピッカーに表示）
globs: "**/*.ts"        # このパターンのファイルのときだけ適用
alwaysApply: false     # true にすると常に適用
---

# ルールのタイトル

ここに本文（規約・パターン・例）を書く。
```

- **globs**: 例）`**/*.ts`, `backend/**/*.py`
- **alwaysApply: true**: プロジェクト全体に共通のルール向け

---

## RULE の運用のコツ

- **1 ルール 1 テーマ**: 短く分けた方が適用されやすい
- **50 行以内**が目安、長い場合は分割
- **具体例**（❌ BAD / ✅ GOOD）があると伝わりやすい
- ファイル単位で効かせたいときは **globs** をはっきり書く

---

# 3. MCP（Model Context Protocol）

---

## MCP とは

- **Model Context Protocol**: Cursor が外部の**ツール・データソース**とつなぐための仕組み
- 「MCP サーバー」を登録すると、そのサーバーが提供する**ツール**を Agent が呼び出せる
- **イメージ**: Agent に「道具」を渡すだけ。その道具を**いつ・どういう手順で使うか**は、MCP の範囲外

---

## .mcp ファイルの説明

MCP サーバーを**ファイルで定義**。`.cursor/mcp.json` やユーザー設定に置き、バージョン管理・共有しやすい。

```json
{
  "mcpServers": {
    "google-calendar": {
      "command": "npx",
      "args": ["-y", "@cocal/google-calendar-mcp"]
    },
    "notionApi": {
      "command": "npx",
      "args": ["-y", "@mieubrisse/notion-mcp-server"],
      "env": {
        "NOTION_TOKEN": "YOUR_TOKEN"
      }
    }
  }
}
```

---

## よくある MCP の例

- **Figma**: デザイン仕様・スクリーンショット取得
- **Notion**: ページ検索・取得・作成・更新
- **GitHub**: リポジトリ・PR 操作
- **chrome-devtools-mcp**: ブラウザの操作・スナップショット（Browser の代わり）
- **time**: 現在時刻の取得
- **Slack**: メッセージ送信・チャンネル操作
- **Google Calendar**: 予定の確認・作成・更新

「このサービスと Cursor を連携させたい」と思ったら、そのサービス用の MCP サーバーがあるか検索するとよい。

---

# 4. SKILL

---

## SKILL とは

- **スキル** = 特定のタスクやワークフロー用の「**やり方**」をまとめたもの
- **`SKILL.md`** を中核に、オプションで `reference.md` や `scripts/` を置ける
- **個人用**: `~/.cursor/skills/`（全プロジェクトで利用）
- **プロジェクト用**: `.cursor/skills/`（リポジトリで共有）

Agent が「このタスクにはこのスキルを使う」と判断するための説明が重要。

---

## SKILL がなかったとき（Before）

同じことをさせるのに、**毎回**こんな指示をしていたイメージ：

- チャットのたびに「Marp で PDF 出したい。npx で marp-cli 使って、-o で .pdf 指定して…」と**長い手順を貼る**
- プロジェクト固有の約束（「スライドは `slides/タイトル/タイトル.md` で 1 資料 1 ディレクトリ」など）を**その都度書く**
- やり方を忘れたら、自分のメモや過去の会話を**また探してコピペ**する

→ **再利用できない・文脈が毎回バラバラ・手順の抜け漏れ**が起きやすい。

---

## SKILL があると（メリット）

- **一度書いておけば**、同じタスクで Agent がそのスキルを**自動で参照**する
- 手順・コマンド・プロジェクトの約束を **SKILL.md に集約**できるので、毎回長文を貼らなくてよい
- **description** で「いつ使うか」を書いておくと、「スライド PDF にして」と言うだけで、適切なスキルが選ばれ、その中の手順に沿って動いてくれる

「やり方」を**資産として残し、同じ依頼を何度でも再現しやすくする**のが SKILL のメリット。

---

## スキルのディレクトリ例

```
.cursor/skills/
  marp-slides/
    SKILL.md        # 必須：メインの手順・説明
    reference.md    # 任意：詳細
    scripts/        # 任意：実行用スクリプト
```

- **SKILL.md**: 必須。YAML フロントマター（`name`, `description`）＋ Markdown 本文

---

## 具体的に SKILL の例を 2 つ紹介

---

### 例 1: スライド生成（marp-slides）

    ---
    name: marp-slides
    description: Build and preview Marp slides from Markdown using the CLI. Use when building slides, exporting to ...
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

---

### 例 2: PR の作成（submit-pr）

    ---
    name: submit-pr
    description: PRの本文を作成・更新する。PRを作成するとき、PR本文を編集するとき、PRのテンプレートに従って記述するときに使用する。
    ---

    # PR提出

    ## 概要

    PRの本文をプロジェクトのテンプレートに従って作成・更新する。

    ## 使用するコマンド

    ```bash
    # PR本文の更新
    gh pr edit <PR番号> --body "$(cat <<'EOF'
    <本文>
    EOF
    )"

    # 既存PRの確認
    gh pr view <PR番号>
    ```

---

## SKILL を書くときのコツ

- **簡潔に**: Agent はすでに能力が高いので、**ないと困る情報だけ**書く（長い説明は reference.md へ）
- **トリガーをはっきり**: description に「Marp」「slides」「PDF 出力」など、**言及されたら使ってほしい単語**を入れる
- **手順は具体的に**: コマンド例・ディレクトリの約束・実行順を書いておくと再現しやすい
- **500 行以内**が目安。詳細は別ファイルにリンクして「必要なときだけ読む」形にするとよい

---

## RULE と SKILL の違い（イメージ）

| | RULE | SKILL |
|---|------|--------|
| **目的** | 守るべきこと・規約 | やり方・ワークフロー |
| **単位** | ファイル（.mdc） | ディレクトリ（SKILL.md など） |
| **適用** | ファイルパターン or 常時 | description に基づき Agent が選択 |
| **例** | 「日付には date-fns」「try/catch でログを取る」 | 「Marp で PDF を出す手順」 |

---

## MCP と SKILL の違い（道具 vs 使い方）

| | MCP | SKILL |
|---|-----|--------|
| **役割** | Agent に**道具**を渡す | その道具の**使い方・手順**を教える |
| **中身** | ツール（API・操作）の提供 | いつ使うか・どう並べるか・約束ごと |
| **例** | Notion を「検索する」「ページを作る」ツールとして追加 | 「朝のタスク確認では Notion をこう検索して、結果をこうまとめる」と手順を書く |

- **MCP だけ**: 道具はあるが、毎回「Notion で今日のタスク取って、要約して」と指示しないといけない
- **MCP + SKILL**: 「朝のタスク確認」スキルに手順を書いておけば、「今日のタスク」と言うだけで、同じ流れで動かせる

**MCP = 道具。SKILL = 道具の使い方まで教える。**

---

# まとめ

---

## 4 つの役割の整理

| 名前 | 何か | どこに置く |
|------|------|------------|
| **AGENTS.md** | エージェント向けの総合指示 | プロジェクトルート |
| **RULE** | 規約・スタイル（いつ・どのファイルで効かせるか） | `.cursor/rules/*.mdc` |
| **SKILL** | タスク別の手順・ワークフロー | `~/.cursor/skills/` または `.cursor/skills/` |
| **MCP** | 外部サービス用のツール | Cursor Settings → MCP でサーバー登録 |

---

## 使い分けの目安

- **プロジェクトの前提・役割をまとめたい** → **AGENTS.md**
- **コーディング規約をファイル単位で効かせたい** → **RULE**
- **「この作業はこうやる」を再利用したい** → **SKILL**
- **Notion / Figma / ブラウザなどと連携したい** → **MCP**

---

## 今回話していない内容

この資料では触れていませんが、Cursor にはこのほかにも：

- **サブエージェント**: タスクを細かく分けて、別のエージェントに任せる仕組み
- **Agent Team**: 複数のエージェントをチームとして組み合わせて動かす機能

といった機能があります。**この 2 つについては筆者もまだよくわかっていません。** 興味があれば Cursor のドキュメントやブログで確認してみてください。

---

以上、Cursor の AGENTS.md・RULE・SKILL・MCP の解説でした。
