# Temporary website imagery

The final CHERRVEY logo and icons are unchanged.

The construction-led website uses five licensed stock photographs as temporary illustrations. None is represented as a CHERRVEY project site or as the CHERRVEY team. Project images carry a visible "Illustrative photo · not the project site" caption; descriptive alternative text also identifies stock imagery.

`scripts/temporary-images.json` records source URLs, provider and licence references. `npm run dev` and `npm run build` prepare the JPEGs into `public/images/temporary/`. They are then served from this website's own origin; visitors do not request photos from the stock provider. Preparation retries temporary failures, rejects invalid image data and stops the build rather than publishing missing files. A generated `sources.json` records byte counts and SHA-256 checksums.

To add approved project photographs, replace the corresponding mapping in `src/lib/construction.ts`, use appropriate descriptive alternative text, and update the `Photo` component so only actual photographs lose the illustrative caption. Do not remove captions from stock photographs. Procurement notices are not site photography.

The Contact page is an email-draft composer, not a server-submission form. It prepares a draft addressed to `info@cherrveyconstruction.com`. Users must send it from their email app. The copyable draft provides a fallback; no success state claims delivery. The form does not save inquiries to a database or change mailbox or DNS settings.

The build remains a static export. Vercel builds fresh output from `main`. The legacy committed cPanel `out/` must be regenerated before a separate cPanel deployment; this release does not change the existing hosting configuration.
