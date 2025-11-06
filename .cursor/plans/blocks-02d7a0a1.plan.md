<!-- 02d7a0a1-6757-4f00-a3c2-1b7b86b379b1 0096a495-5b46-43cc-ab20-0d50c6ac7e1b -->
# Block-based Canvas (MVP)

## Goal

Turn any page into a blank, block-based canvas. Authors add, edit, reorder, and remove “content blocks”. MVP includes a minimal WYSIWYG Text block (bold, link, headings) and basic non-text blocks scaffold. Persist as `blocks` array in existing JSON under `server/content/data`.

## Data model

- Stored at `server/content/data/<type>/<slug>.json`
- Shape:
```json
{
  "blocks": [
    { "id": "b1", "type": "text", "data": { "html": "<strong>Welcome</strong>", "variant": "h1" } },
    { "id": "b2", "type": "text", "data": { "html": "Paragraph with <a href=\"https://...\">link</a>", "variant": "p" } },
    { "id": "b3", "type": "image", "data": { "src": "/media/hero-banner.png", "alt": "" } }
  ]
}
```

- Text variants: `p | h1 | h2 | h3` (controls wrapper tag)
- Each block: `{ id: string; type: 'text'|'image'|'video'|'button'; data: Record<string, unknown> }`

## Editing model

- Gated by `useIsEditMode()` (e.g., `?edit=1`).
- Toolbar for Text blocks only (MVP): Bold, Link, Unlink, Variant selector (P/H1/H2/H3).
- Add block menu: Text, Heading (alias of Text with `variant`), Image, Video, Button (scaffolds).
- Reorder via Up/Down controls; Delete per block; Insert below via "+".
- Auto-save (debounced 500ms) on blur, reorder, add/remove; also explicit Save button.

## Backend

- Reuse existing `/api/content?type=<type>&slug=<slug>` GET/PUT routes already writing to `server/content/data`.
- Payload for PUT/GET: `{ blocks: Block[] }`.

## Frontend

- Hook: `src/hooks/useBlocksStore.ts`
  - `useBlocksStore({ type, slug })` → `{ blocks, setBlocks, addBlock, updateBlock, moveBlock, deleteBlock, save, isSaving, isDirty }`.
  - Loads `{ blocks }` via GET; persists via PUT; debounced save helper.

- Canvas: `src/components/Blocks/BlocksCanvas.tsx`
  - Renders blocks list; shows Add menu at top and between blocks; mobile-first layout; accessible buttons (>=44px tap targets).
  - Uses registry to render each block by type.

- Registry: `src/components/Blocks/registry.ts`
  - Map `type → { Renderer, Editor }` for each block.

- Block components (MVP):
  - `src/components/Blocks/blocks/TextBlock.tsx`
    - Editor: contenteditable div for `data.html`; wrapper tag driven by `variant`.
    - Toolbar: `src/components/Blocks/Toolbar.tsx` with Bold/Link/Unlink and Variant dropdown.
    - Use `document.execCommand('bold'|'createLink'|'unlink')` for simplicity.
  - `src/components/Blocks/blocks/ImageBlock.tsx` (scaffold): `img` with URL input in edit mode.
  - `src/components/Blocks/blocks/VideoBlock.tsx` (scaffold): iframe/embed URL.
  - `src/components/Blocks/blocks/ButtonBlock.tsx` (scaffold): label + href.

- Page integration example: `src/views/news/EditableContentTest.tsx`
  - Replace body with `<BlocksCanvas type="news" slug="editable-content-test" />`.

## Accessibility & mobile-first

- Use semantic tags for Text variants; `aria-label` on editable regions.
- Toolbar buttons with `aria-pressed` for bold.
- Touch-friendly: Tailwind sizes for 44x44 targets; sticky, responsive toolbar.
- Lists use `list-outside` class.

## Styling

- Follow `ProductSplitScreen.tsx` conventions; Tailwind utility classes; avoid heavy layout shifts.

## Minimal types (essential)

```ts
// src/types.ts (add)
export type BlockType = 'text' | 'image'` | 'video' | 'button';
export interface BaseBlock<T extends BlockType = BlockType, D = any> {
  id: string;
  type: T;
  data: D;
}
export interface TextBlockData { html: string; variant: 'p'|'h1'|'h2'|'h3'; }
export type TextBlock = BaseBlock<'text', TextBlockData>;
export type Block = TextBlock | BaseBlock<'image', { src: string; alt?: string }>
  | BaseBlock<'video', { src: string; title?: string }>
  | BaseBlock<'button', { label: string; href: string }>;
```

## Save semantics

- Debounce 500ms after edit/reorder; guard concurrent saves; surface `isSaving` state.
- Preserve unknown fields on read/write to allow future expansion.

## Out of scope (future)

- Drag-and-drop reordering; image upload; slash-commands; multi-column layouts; collaborative editing.

## Risks/Mitigations

- execCommand is deprecated but widely supported: acceptable for MVP; can replace later with Range-based ops.
- HTML injection: only authoring context; render trusted content; sanitize if needed later.

## Testing

- Author flow on mobile and desktop; verify persistence at `server/content/data/news/<slug>.json`.
- Verify gates: blocks editable only when `useIsEditMode()` true.

### To-dos

- [ ] Add Block types to src/types.ts
- [ ] Create useBlocksStore hook with GET/PUT and debounced save
- [ ] Add registry to map block type to components
- [ ] Implement TextBlock with contenteditable and toolbar (bold, link, headings)
- [ ] Scaffold Image, Video, Button blocks with simple editors
- [ ] Create BlocksCanvas to render, add, move, delete blocks
- [ ] Replace EditableContentTest page body with BlocksCanvas
- [ ] Apply mobile-first Tailwind, a11y, and touch target sizes
- [ ] Manual verify save/reload and edit gating