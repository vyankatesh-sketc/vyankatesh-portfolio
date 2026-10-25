========================================================================
HERO CHARACTER REPLACEMENT GUIDE
========================================================================

The Hero section renders an image located at:
  public/character/hero.png

------------------------------------------------------------------------
IMAGE SPECIFICATIONS:
------------------------------------------------------------------------
1. File format: PNG or WebP with a transparent background.
2. Dimensions: Approximately 1200px tall (e.g., 900px × 1200px to 1200px × 1600px).
3. Subject: Your preferred avatar, anime/manga illustrated persona, or portrait.
4. Color harmony: Works best when complementing the portfolio palette:
   - Burgundy (#7A1020)
   - Maroon   (#4A0A14)
   - Cream    (#F4E9DC)
   - Blush    (#E8C9C4)
   - Sage     (#C9D3C2)
   - Ink      (#14090B)

------------------------------------------------------------------------
HOW IT WORKS:
------------------------------------------------------------------------
- When `public/character/hero.png` exists, the `HeroCharacter` component
  will automatically display it using Next.js `next/image` with `priority`
  and high-quality rendering.
- If the file is missing, `HeroCharacter` automatically renders a clean,
  original SVG hooded chibi silhouette so the layout never breaks.
- To replace: save your transparent portrait as `hero.png` in this directory
  (`public/character/hero.png`).
