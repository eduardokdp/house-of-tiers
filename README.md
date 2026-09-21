# House of Tiers — Custom Cake Website

A single-page site for Harleen's custom cake business in White Rock, B.C.
Built with React + Vite + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Notes

- The gallery in `src/components/Gallery.jsx` uses styled placeholder frames
  instead of real photos. Swap each placeholder `<div>` for an `<img src="..." />`
  once you have final cake photography — the frame, caption, and masonry
  layout are already sized for it.
- Update the Instagram link in `src/components/Footer.jsx` to the real handle.
- The inquiry form in `src/components/InquiryForm.jsx` simulates a submission.
  Wire the `handleSubmit` function up to an email service or backend
  (e.g. Formspree, EmailJS, or a custom API route) to make it fully functional.

## Design tokens

- **Colors**: cream `#FAF3E7` / `#F1E3C9`, espresso brown `#3B2A1E` /
  `#6B4A35`, blush pink `#F0D3C9`, butter yellow `#EFD9A0`.
- **Type**: "Mrs Saint Delafield" (script, logo & headline), "Cormorant
  Garamond" (display serif, section headings), "Jost" (body sans-serif).
- **Signature motif**: a scalloped "piped shell" SVG border (`PipedDivider.jsx`)
  used between sections, echoing the Lambeth buttercream piping in Harleen's
  cakes.
