# Repair and publish all website images

## Scope
- Copy the logo, founder portrait, partner portrait, homepage background, and media clippings into `public/images`.
- Replace CDN pointer imports with stable root-relative public paths.
- Keep responsive full-image framing and add a local fallback for every rendered image.
- Audit all pages and remove failed image requests.
- Verify Home, About, Media, Contact, mobile navigation, and footer at desktop and mobile sizes.
- Publish the repaired site and verify the published URL.

## Technical details
- Download current verified assets before replacing their references.
- Use `/images/...` URLs so images resolve consistently in preview and production.
- Extend the shared image renderer to try the requested image, then a local fallback, without broken-image icons.
- Check browser console and network responses for image failures before publishing, then repeat against the published site.
