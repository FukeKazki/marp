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

1. **Read relevant references first**:
   - Always start by reading `references/marp-syntax.md` for basic syntax
   - For images: `references/image-patterns.md` (official Marpit image syntax)
   - For advanced features (math, emoji): `references/advanced-features.md`
   - For custom themes: `references/theme-css-guide.md`

2. **Copy content from the template**:
   - Use **`assets/template-tech.md`** as the only template. Set frontmatter **`theme: tech`**. ビルド時は `--theme-set themes/tech.css` を付ける（README / marp-slide-build スキル参照）。

3. Read `references/best-practices.md` for quality guidelines

4. Structure content following best practices:
   - Title slide with `<!-- _class: lead -->`
   - Concise h2 titles (5-7 characters in Japanese)
   - 3-5 bullet points per slide
   - Adequate whitespace

5. Add images if needed using patterns from `references/image-patterns.md`

6. Save to `slides/[タイトル]/[タイトル].md` (1 presentation per directory; see AGENTS.md)

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
   - Read `references/best-practices.md`
   - Ensure adequate whitespace
   - Maintain consistency
   - Keep text concise (15-25 chars per line)

5. **Add images**
   - If needed, consult `references/image-patterns.md`
   - Common: `![bg right:40%](image.png)` for side images
   - Use proper Marp image syntax

6. **Output file**
   - Save to `slides/[タイトル]/[タイトル].md`
   - Use descriptive directory and filename (e.g. `slides/MyTalk/MyTalk.md`)

## Handling "Make It Look Good" Requests

When users give vague instructions like "良い感じにして", "かっこよく", or "make it cool":

1. **Use the tech template** (only option) and keep structure consistent.

2. **Apply best practices automatically**:
   - Shorten titles to 5-7 characters
   - Limit bullet points to 3-5 items
   - Add adequate whitespace
   - Use consistent structure

3. **Enhance visual hierarchy**:
   - Use h3 for sub-sections when appropriate
   - Break up dense text into multiple slides
   - Ensure logical flow (intro → body → conclusion)

4. **Maintain professional tone**:
   - Match formality to content
   - Use parallel structure in lists
   - Keep technical terms consistent

## Image Integration

For slides with images, consult `references/image-patterns.md` for detailed syntax.

Common patterns:
- **Side image**: `![bg right:40%](image.png)` - Image on right, text on left
- **Centered**: `![w:600px](image.png)` - Centered with specific width
- **Full background**: `![bg](image.png)` - Full-screen background
- **Multiple images**: Multiple `![bg]` declarations

Example lecture pattern:
```markdown
## Slide Title

![bg right:40%](diagram.png)

- Explanation point 1
- Explanation point 2
- Explanation point 3
```

## File Output

Save the final Marp file under the workspace slides directory:
- Path: `slides/[タイトル]/[タイトル].md`
- One directory per presentation; build artifacts (e.g. `.html`) in the same directory, gitignored.

## Quality Checklist

Before delivering slides, verify:
- [ ] Template used is `assets/template-tech.md` and frontmatter includes `theme: tech` (build with `--theme-set themes/tech.css`)
- [ ] Title slide uses `<!-- _class: lead -->`
- [ ] All h2 titles are concise (5-7 chars)
- [ ] Bullet points are 3-5 items per slide
- [ ] Images use proper Marp syntax
- [ ] File saved to `slides/[タイトル]/[タイトル].md`
- [ ] Content follows best practices

## References

### Core Documentation
- **Marp syntax**: `references/marp-syntax.md` - Basic Marp/Marpit syntax (directives, frontmatter, pagination, etc.)
- **Image patterns**: `references/image-patterns.md` - Official image syntax (bg, filters, split backgrounds)
- **Theme CSS guide**: `references/theme-css-guide.md` - How to create custom themes based on Marpit specification
- **Advanced features**: `references/advanced-features.md` - Math, emoji, fragmented lists, Marp CLI, VS Code
- **Official themes**: `references/official-themes.md` - default, gaia, uncover themes documentation

### Quality Guides
- **Best practices**: `references/best-practices.md` - Quality guidelines for "cool" slides

### Theme & Template
- **Theme**: `themes/tech.css` - Marp custom theme (repo root). Frontmatter: `theme: tech`. Build with `--theme-set themes/tech.css`.
- **Template**: `assets/template-tech.md` - Starting point; references the theme, no inline CSS.

### Official External Links
- **Marp Official Site**: https://marp.app/
- **Marpit Directives**: https://marpit.marp.app/directives
- **Marpit Image Syntax**: https://marpit.marp.app/image-syntax
- **Marpit Theme CSS**: https://marpit.marp.app/theme-css
- **Marp Core GitHub**: https://github.com/marp-team/marp-core
- **Marp CLI GitHub**: https://github.com/marp-team/marp-cli
