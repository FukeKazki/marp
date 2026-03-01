---
name: marp-slide-reference
description: スライドの Markdown を記述・編集する際の Marp 構文・画像・ベストプラクティス等のリファレンス。slides/ 内の .md 編集時や、Marp の書き方について質問されたときに使用する。
---

# Marp Slide Reference

スライド記述時に参照する Marp の構文・画像配置・ベストプラクティス等のリファレンス。**スライドの新規作成ワークフロー**は marp-slide スキル、**記述規約の要約**は .cursor/rules の Marp 用ルールを参照すること。

## When to Use This Skill

- スライド用 Markdown（`slides/**/*.md`）を編集・記述しているとき
- Marp の構文・ディレクティブ・画像の書き方について質問されたとき
- スライドの品質（見出し長さ・箇条書き・余白など）のガイドが必要なとき

## References

このスキル配下の `references/` に以下を格納している。必要に応じて該当ファイルを読むこと。

| ファイル | 内容 |
|----------|------|
| `references/marp-syntax.md` | 基本構文（frontmatter、ディレクティブ、ページネーション等） |
| `references/image-patterns.md` | 画像の公式構文（bg、フィルター、分割背景等） |
| `references/advanced-features.md` | 数式・絵文字・フラグメント・Marp CLI / VS Code |
| `references/theme-css-guide.md` | Marpit 仕様に基づくカスタムテーマの作り方 |
| `references/official-themes.md` | 公式テーマ（default, gaia, uncover）の説明 |
| `references/best-practices.md` | 「かっこいい」スライドのための品質ガイド |
| `references/theme-selection.md` | テーマ選択の目安（本リポジトリでは tech のみ使用） |

## このリポジトリでの前提

- **テーマ**: `tech` のみ（`themes/tech.css`、frontmatter: `theme: tech`）。ビルド時は `--theme-set themes/tech.css`。
- **保存先**: `slides/[タイトル]/[タイトル].md`。詳細は .cursor/rules の Marp 規約を参照。
