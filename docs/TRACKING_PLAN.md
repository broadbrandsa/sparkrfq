# TRACKING PLAN

## Analytics Options

### Option A — Google Analytics 4 (GA4)
- Add GA4 script to `src/app/layout.tsx`
- Measurement ID: `G-XXXXXXXXXX` (replace with actual ID)
- Implementation: via `@next/third-parties/google` or direct script tag

### Option B — Vercel Analytics
- Enable in Vercel dashboard → Analytics tab
- Install: `pnpm add @vercel/analytics`
- Add `<Analytics />` component to root layout
- Zero-config, privacy-friendly, built for Next.js

### Recommended: Both (Vercel for performance, GA4 for events)

---

## Event Tracking Placeholders

| Event Name | Trigger | Category |
|------------|---------|----------|
| `proposal_viewed` | Page load | Engagement |
| `section_scrolled` | User scrolls to section | Engagement |
| `cta_clicked` | Any primary CTA button | Conversion |
| `contact_link_clicked` | Email/phone link click | Conversion |
| `form_started` | User begins filling form | Lead |
| `form_submitted` | Form submission success | Lead |
| `accordion_opened` | FAQ item expanded | Engagement |

## Form Submission Tracking

- On successful form submit: fire `form_submitted` event with `{ form_id, page }` params
- On form error: fire `form_error` event
- Connect to CRM or email notification in production (placeholder endpoint: `/api/contact`)

## Conversion Goals

| Goal | Target |
|------|--------|
| Primary | Form submission / contact initiated |
| Secondary | Time on page > 3 minutes |
| Tertiary | Scrolled to pricing section |

## Implementation Status

- [ ] GA4 configured
- [ ] Vercel Analytics enabled
- [ ] Event tracking wired
- [ ] Form endpoint connected
- [ ] Conversion goals verified in GA4
