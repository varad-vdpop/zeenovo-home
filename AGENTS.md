<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Card content and Figma assets

Build card badges, headings, descriptions, and backgrounds with native HTML and CSS. Export only the separate illustration, photo, or icon layers from Figma; never use a complete card export that embeds its marketing text or outer background. Let mobile card heights follow their content.

## Figma asset extraction

- Inspect the exact Figma node before implementing any image, illustration, or UI artwork.
- Export foreground UI as a node-only SVG. Never export its parent frame, page, section, or canvas with it.
- Keep decorative backgrounds, gradients, patterns, and line artwork as separate layers from foreground UI.
- For source images that have no background in Figma, use the original transparent PNG rather than a frame render or screenshot.
- Do not crop a composite screenshot to imitate separate design layers.
- Before using an SVG, confirm its root does not contain unrelated page-sized background rectangles. Before using a transparent PNG, confirm it has an alpha channel and transparent edges.
- Compare the implemented asset against the Figma node at desktop and mobile breakpoints before considering the section complete.
