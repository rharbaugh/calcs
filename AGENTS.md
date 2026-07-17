# Tibia Calcs implementation guide

## Visual language

- Prioritise authentic TibiaWiki visual assets when an image would improve the interface. Copy the original transparent PNG or GIF into the repository (rather than hotlinking), use it for its matching spell or item, and prefer these client-like icons over generic Unicode or emoji.
- Match the Tibia client’s compact, practical interface rather than a modern glossy game site.
- Use Tahoma first, followed by Verdana and Arial. Interface labels and controls are bold and small.
- Keep the palette neutral gray: page background `#3b3b3b`, panels `#484848`, controls `#303030`, and text in soft whites/grays. Avoid blue themes, gradients, and rounded card-heavy styling.
- Use square or nearly square controls. Borders should be subtle, with a light upper edge and darker lower edge where depth is helpful.
- Keep the header shallow and flat. Its brand sits on the far left and current-character context sits on the right; do not add a general calculator navigation menu.
- Use responsive full-width gutters in the header: 0.75rem on narrow screens, 1rem by default, 1.5rem from 36rem, and 2rem from 62rem.
- Preserve generous reading space in page content, but keep individual UI controls compact.
- Main page content uses a responsive fluid container with the same 1rem/1.5rem/2rem gutters as the header; do not constrain profile or calculator panels to a narrow desktop column.
- Character stat tiles should use an auto-fitting multi-row grid with enough minimum width for labels and values to remain on one line.

## Interaction and data

- Use the TibiaData API as the default source for Tibia information whenever its documented endpoints cover the data needed. Do not scrape Tibia.com when TibiaData can provide the same public data.
- Character lookup is a first-use action. Query `https://api.tibiadata.com/v4/character/{encoded-name}` in the browser and use the returned `character.character` object.
- Build official Tibia character URLs with `https://www.tibia.com/community/?name=` and encode spaces as `+`.
- Store the selected public character as `tibia-calcs:character:v1` in `localStorage`; this powers the compact header context across pages.
- Store the full saved-character collection as `tibia-calcs:characters:v1` and the active name as `tibia-calcs:selected-character:v1`. The legacy single-character key may be read only to migrate existing users.
- A user may save, switch, remove, or add characters from the selected-character menu. On the homepage, show the lookup only for new users or when they explicitly choose to look up another character; otherwise show the selected character's compact, wide stats bar.
- Render character lookup as a modal over the current page, never as a persistent page section. Open it only when no active character exists or the user explicitly starts a new lookup.
- Character-specific calculators render directly below the selected character's stats bar and remain hidden until a character is active.
- For speed calculations, use `BaseSpeed = 109 + level`. Haste-like spells modify `(BaseSpeed - 40)` before equipment/mount bonuses are added. Preserve the tile-breakpoint model and make recommendations only when a proposed modifier reaches a new breakpoint.
- Keep boots and boot imbuements as independent, mutually exclusive radio selections. Offer Basic (+10), Intricate (+15), and Powerful (+30) Swiftness; disable the imbuement selection when the chosen boots cannot be imbued. Include the character's eligible high-level vocation boots alongside universal speed boots.
- The selected-character header context includes name, vocation, level, and derived maximum HP/mana. Give the three stat indicators restrained white, red, and blue icons respectively; label derived values as estimates if they are shown outside that compact context.
- Keep panel headings compact and functional; do not use oversized marketing-style titles. Give character stat types visual meaning: HP uses muted red, mana muted blue, and capacity a subdued warm gold.
- Treat third-party data as fallible: show clear loading and not-found states, and do not render fields until a valid character response exists.

## Code conventions

- Keep shared chrome and global CSS in `src/layouts/BaseLayout.astro`.
- Keep each calculator under `src/pages/calculators/<name>/` and isolate non-UI math in a nearby TypeScript module.
- Use semantic HTML, labels for inputs, and keyboard-accessible dropdowns/focus states.
- Run `npm run build` after UI or TypeScript changes.
