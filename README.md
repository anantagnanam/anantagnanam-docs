# Ananta Gnanam — Solar System Learning Demo

> **Knowledge is Infinite.** 🌌

A public, open-source **demo learning website** — "Journey Through the Solar System" — that shows how **MDX + Docusaurus + GitHub Pages** can publish beautiful, interactive lessons from plain text.

| | |
|---|---|
| 🌐 **Live demo** | https://docs.anantagnanam.com |
| 🏠 **Main website** | https://anantagnanam.com |
| ✍️ **Blog** | https://blog.anantagnanam.com |
| 📦 **Repository** | https://github.com/anantagnanam/anantagnanam-docs |

---

## What This Demo Shows

This site is a story-driven learning experience. Three companions — **Leela** (the curious learner), **Manjari** (the wise bird who gives hints), and **Astra** (the magical knowledge book) — travel through the Solar System:

> Leela asks → Manjari guides → Astra reveals → you explore → you test yourself

Every lesson follows that rhythm, and each page demonstrates one of the ideas behind the demo:

- **MDX** — lessons are Markdown files that can embed live React components (quizzes, fact cards, dialogues)
- **Reusable components** — one quiz component powers every check on the site; one fact card serves every planet
- **Static publishing** — Docusaurus builds everything into plain HTML/CSS/JS, served free by GitHub Pages
- **Version control** — the entire site is text in git: reviewable, rollback-able, collaborative

The demo pages on the site itself explain this in detail:
- [How This Demo Works](https://docs.anantagnanam.com/demo/how-mdx-works)
- [How a Lesson Is Written](https://docs.anantagnanam.com/demo/content-authoring)
- [Why GitHub Pages](https://docs.anantagnanam.com/demo/github-pages)

---

## ⚠️ Public Repository — Read This First

This repository is **PUBLIC**. It intentionally contains:

- ✅ Public demo content and lessons
- ✅ Open-source code and components
- ✅ A demonstration publishing architecture

It must **never** contain:

- ❌ Secrets, tokens, passwords, or API keys
- ❌ Credentials of any kind
- ❌ Private or confidential content
- ❌ Internal production configuration or architecture
- ❌ Database schemas or infrastructure details of any private system

If you think you have committed something sensitive, treat it as compromised and rotate/remove it immediately. This demo describes a public toolchain — not any private system.

---

## Technology Stack

| Tool | Role |
|---|---|
| [Docusaurus](https://docusaurus.io) | Static site generator (v3, TypeScript template) |
| [MDX](https://mdxjs.com) | Markdown + JSX for lesson content |
| [React](https://react.dev) | Interactive learning components |
| [GitHub Actions](https://github.com/features/actions) | Automatic build & deploy |
| [GitHub Pages](https://pages.github.com) | Free static hosting |

---

## Getting Started

Requirements: **Node.js 20+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run start

# 3. Build the static site into ./build
npm run build

# 4. Preview the built site locally
npm run serve

# 5. Type-check the TypeScript sources
npm run typecheck
```

---

## Project Structure

```
docs/                      # All site content (Markdown + MDX)
├── solar-system/          # The 12-lesson journey
├── activities/            # Quiz, did-you-know, planet comparison
├── demo/                  # Pages explaining how the demo works
└── about.mdx              # About page
src/
├── components/learning/   # Reusable learning components (quiz, fact cards, …)
├── css/custom.css         # Full design system (light + dark themes)
└── pages/                 # Custom homepage
static/
├── img/                   # Original SVG illustrations
├── CNAME                  # docs.anantagnanam.com
└── .nojekyll
docusaurus.config.ts       # Site configuration
sidebars.ts                # Sidebar structure
.github/workflows/deploy.yml  # Build + publish to GitHub Pages
```

---

## How to Add a New Lesson

1. Create a file, e.g. `docs/solar-system/my-topic.mdx`
2. Add frontmatter: `title` and `description`
3. Write the story — open with a `<StorySection>` scene
4. Add the dialogue rhythm: `<Leela>` asks → `<Manjari>` hints → `<Astra>` explains
5. Embed components: `<DidYouKnow>`, `<FactGrid>`, `<PlanetFactCard>`, `<MultipleChoiceQuiz>`, `<KeyTakeaway>`
6. Add the lesson to `sidebars.ts` under the right category
7. Link it: update `<RelatedTopics>` and `<NextLesson>` on neighboring pages

Example of a lesson snippet:

```mdx
<Leela>
Why is the sky blue?
</Leela>

<Manjari>
What color is the light from the Sun? And what happens when it passes through air?
</Manjari>

<DidYouKnow>
Blue light scatters more than other colors — that is why the daytime sky looks blue!
</DidYouKnow>

<MultipleChoiceQuiz
  question="Why does the sky look blue?"
  options={['The ocean reflects into it', 'Blue light scatters most in the air', 'The Sun is blue', 'Clouds paint it']}
  correctIndex={1}
  explanation="Air molecules scatter blue light more strongly than other colors, so the sky appears blue."
/>
```

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Uploads `./build` as a Pages artifact
4. Publishes to GitHub Pages at **https://docs.anantagnanam.com**

The workflow can also be triggered manually from the Actions tab.

---

## License

Public demo content and code for Ananta Gnanam. All illustrations are original.
