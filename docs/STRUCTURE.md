# STRUCTURE

## Folder Structure

```
spark-proposal/
├── docs/                          # Project documentation
├── public/
│   └── images/                    # Static assets (logos, photos)
└── src/
    ├── app/
    │   ├── globals.css            # Global styles + SPARK brand tokens
    │   ├── layout.tsx             # Root layout (fonts, metadata)
    │   └── page.tsx               # Home page (composes sections)
    ├── components/
    │   ├── sections/              # Full-page section components
    │   │   ├── HeroSection.tsx
    │   │   ├── ApproachSection.tsx
    │   │   └── ...
    │   └── ui/                    # shadcn primitives (auto-generated)
    │       ├── button.tsx
    │       ├── card.tsx
    │       └── ...
    ├── content/                   # Content data files (JSON/TS)
    │   └── proposal.ts            # All proposal copy and data
    └── lib/
        └── utils.ts               # shadcn utility (cn helper)
```

## Section Composition Rules

1. Each section lives in `src/components/sections/` as its own file
2. Sections are named `[Name]Section.tsx` (PascalCase)
3. Sections accept typed props; content comes from `src/content/`
4. The home page (`src/app/page.tsx`) imports and composes sections in order
5. No section imports another section — they are flat siblings

## Content Management Approach

- All copy lives in `src/content/proposal.ts` as typed TypeScript objects
- To update text: edit the content file, sections re-render automatically
- Images live in `public/images/` and are referenced via `/images/filename.ext`
- No CMS — this is a static site; content changes require a redeploy
