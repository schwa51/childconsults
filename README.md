# Child & Adolescent Psychiatry Consult Teaching Site

Public educational website for a child and adolescent psychiatry consult service. The site is designed for medical students, residents, fellows, and faculty who need quick, topic-based review during clinical work.

## Goals

- Organize primarily by topic
- Keep topic pages as the main learner-facing destinations
- Support fast 10 to 20 minute review sessions
- Keep the site public, minimal, mobile-friendly, and easy for one maintainer to update
- Reuse resources across multiple topics without duplicating content

## Current Stack

- [Eleventy](https://www.11ty.dev/)
- GitHub for version control and hosting integration
- Netlify-ready static output

## Site Structure

Top navigation:

- Home
- Start Here
- Safety & Risk
- Acute Presentations
- Core Diagnostic Topics
- Neurodevelopmental & Learning
- Clinical Pearls
- Quizzes
- All Resources

Main content types:

- Topic pages
- Clinical Pearl pages
- Quiz pages
- Resource entries

Important architectural choices:

- Topic pages are the primary destinations
- Archived teaching belongs inside the relevant topic page, not in a standalone archive section
- Clinical Pearls are a top-level cross-cutting section
- Resources can be linked to multiple topics or pearls through metadata
- The site is modeled for the current version only; there is no version archive

## Repository Layout

```text
.
├── .eleventy.js
├── package.json
├── src
│   ├── _data
│   ├── _includes
│   │   ├── layouts
│   │   └── partials
│   ├── assets
│   │   ├── css
│   │   └── js
│   └── content
│       ├── acute-presentations
│       ├── clinical-pearls
│       ├── core-diagnostic-topics
│       ├── neurodevelopment-learning
│       ├── quizzes
│       ├── resources
│       ├── safety-risk
│       ├── all-resources.md
│       ├── index.md
│       ├── search-index.11ty.js
│       └── start-here.md
└── AGENTS.md
```

## Eleventy Model

The site uses collections and front matter to keep content structured and reusable.

Collections:

- `sections`
- `topics`
- `pearls`
- `quizzes`
- `resources`
- section-specific topic collections for major topic groups

Layouts:

- `base.njk`
- `page.njk`
- `section.njk`
- `topic.njk`
- `pearl.njk`
- `quiz.njk`
- `resource.njk`
- `resources.njk`

## Content Model

### Topic pages

Topic pages live in the section folders under `src/content/` and use front matter such as:

```yaml
title:
slug:
summary:
sectionKey:
reviewTime:
relatedPearls: []
quickSummary: []
practiceQuestions: []
updated:
```

### Clinical Pearls

Clinical Pearls live in `src/content/clinical-pearls/` and use front matter such as:

```yaml
title:
slug:
pearlType:
summary:
relatedTopics: []
bottomLine: []
updated:
```

### Resources

Resources live in `src/content/resources/` and are meant to be reusable metadata entries:

```yaml
title:
summary:
resourceType:
topicRefs: []
pearlRefs: []
audience: []
```

This lets one resource appear in more than one topic or pearl without duplication.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

Build the static site:

```bash
npm run build
```

Output is written to `_site/`.

## How To Add Content

### Add a new topic

1. Create a new markdown file in the correct section folder under `src/content/`
2. Add topic front matter including `title`, `slug`, `summary`, and `updated`
3. Add any `relatedPearls`, `quickSummary`, or `practiceQuestions`

### Add a new Clinical Pearl

1. Create a markdown file in `src/content/clinical-pearls/`
2. Add front matter for `title`, `slug`, `pearlType`, `summary`, and `relatedTopics`

### Add a new resource

1. Create a markdown file in `src/content/resources/`
2. Set `resourceType`
3. Add `topicRefs` and optional `pearlRefs`
4. Add `audience` metadata if useful

## Search

The repo already includes a generated search index scaffold at:

- `src/content/search-index.11ty.js`

This is intended for a future client-side search implementation.

## Deployment

The project is structured for a simple static deployment workflow such as Netlify:

- build command: `npm run build`
- publish directory: `_site`

## Notes For Maintenance

- Prefer canonical topic pages plus cross-links instead of duplicating material
- Keep topic pages focused on quick consult use
- Use native web summaries for the highest-yield content when possible
- Keep styling simple and readable on mobile
- Preserve clean URLs and predictable file names
