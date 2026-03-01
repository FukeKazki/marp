---
name: marp-slide
description: Create professional Marp presentation slides using the tech theme (themes/tech.css). Use when users request slide creation, presentations, or Marp documents. Supports image layouts and "make it look good" requests with automatic quality improvements.
---

# Marp Slide Creator

Create professional, visually appealing Marp presentation slides using the tech theme (GitHub-style dark, code-friendly). Theme is defined in `themes/tech.css` (Marp theme name: `tech`). Each slide uses frontmatter `theme: tech`; **ビルド・プレビュー・サーバー時は必ず `--theme-set themes/tech.css` を付けてリポジトリルートで実行する**（PDF/HTML でテーマが反映される）。Use template `assets/template-tech.md` as the starting point.

## When to Use This Skill

Use this skill when the user:
- Requests to create presentation slides or Marp documents
- Asks to "make slides look good" or "improve slide design"
- Provides vague instructions like "良い感じにして" (make it nice) or "かっこよく" (make it cool)
- Wants to create lecture or seminar materials (especially technical/developer content)
- Needs bullet-point focused slides with occasional images

## Quick Start

### Step 1: Create Slides

1. **参照**: スライド記述の規約は .cursor/rules の Marp 用ルールを、構文・画像・詳細は marp-slide-reference スキルを参照すること。

2. **Copy content from the template**:
   - Use **`assets/template-tech.md`** as the only template. Set frontmatter **`theme: tech`**. ビルド時は `--theme-set themes/tech.css` を付ける（README / marp-slide-build スキル参照）。

3. Structure content following conventions (title slide `<!-- _class: lead -->`, h2 は 5–7 文字、箇条書き 3–5 項目、適度な余白)。

4. Add images if needed（詳細は marp-slide-reference スキル内の image-patterns 参照）。

5. Save to `slides/[タイトル]/[タイトル].md` (1 presentation per directory; see AGENTS.md)

## Tech Theme

- **Theme file**: `themes/tech.css` (Marp custom theme with `/* @theme tech */`). Frontmatter: `theme: tech`. ビルド時は `--theme-set themes/tech.css` を付ける。
- **Colors**: GitHub-style dark background (#0d1117), blue headings (#58a6ff), green accent (#7ee787)
- **Style**: Code fonts (Fira Code), Markdown-style headers with `#` / `##` symbols, left border accent
- **Use for**: Programming tutorials, tech meetups, developer content, technical seminars

## Creating Slides Process

### Basic Workflow

1. **Understand requirements**
   - Identify content: title, topics, key points
   - Determine target audience
   - Assess formality level

2. **Apply template**
   - Load `assets/template-tech.md`
   - Frontmatter: `theme: tech`. ビルド・プレビュー・サーバーでは `--theme-set themes/tech.css` を付けて実行する。
   - Maintain template structure (frontmatter + slide content only)

3. **Structure content**
   - Title slide: `<!-- _class: lead -->` + h1
   - Content slides: h2 title + bullet points
   - Keep titles to 5-7 characters (Japanese)
   - Use 3-5 bullet points per slide

4. **Refine quality**
   - .cursor/rules の Marp 規約および marp-slide-reference スキルに従う
   - Ensure adequate whitespace, consistency, concise text (15-25 chars per line)

5. **Add images**
   - If needed, 詳細は marp-slide-reference スキル内の image-patterns を参照
   - Common: `![bg right:40%](image.png)` for side images

6. **Output file**
   - Save to `slides/[タイトル]/[タイトル].md`
   - Use descriptive directory and filename (e.g. `slides/MyTalk/MyTalk.md`)

## Quality Checklist

Before delivering slides, verify:
- [ ] Template used is `assets/template-tech.md` and frontmatter includes `theme: tech` (build with `--theme-set themes/tech.css`)
- [ ] Title slide uses `<!-- _class: lead -->`
- [ ] All h2 titles are concise (5-7 chars)
- [ ] Bullet points are 3-5 items per slide
- [ ] Images use proper Marp syntax
- [ ] File saved to `slides/[タイトル]/[タイトル].md`
- [ ] Content follows .cursor/rules の Marp 規約および marp-slide-reference スキルのガイド

## 記述時の参照

- **スライド記述規約**: .cursor/rules の Marp 用ルール（`slides/**/*.md` で適用）
- **詳細リファレンス**: marp-slide-reference スキル（構文・画像・ベストプラクティス等）
- **Theme**: `themes/tech.css`（frontmatter: `theme: tech`）。ビルド時は `--theme-set themes/tech.css`。
- **Template**: `assets/template-tech.md`
