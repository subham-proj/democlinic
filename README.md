# PhysioPoint Clinic

A production-quality demo clinic booking portal for physiotherapy clinics. Built to showcase a productized service to clinic owners — looks and works like a real product.

**Live demo:** deploy to Vercel with `vercel --prod` (zero config needed).

---

## Overview

PhysioPoint Clinic is a fully functional Next.js 14 web app with 5 pages, a Cal.com booking integration, a patient intake form, and a mobile-first responsive design. All content is hardcoded — no database required. Swap the brand constants in `lib/constants.ts` to white-label it for any clinic.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services grid, how it works, reviews, about, CTA |
| `/book` | Booking — Cal.com inline calendar embed |
| `/intake` | Patient intake form — 12 fields, client-side success state |
| `/services` | Service detail — 6 services with conditions + FAQ accordion |
| `/contact` | Contact — Google Maps embed, hours, contact form |

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (no component libraries — custom only)
- **Cal.com** embed for appointment booking
- **Vercel** for deployment

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customising for a Client

All brand content lives in one file:

```
lib/constants.ts
```

Update these exports to rebrand for any clinic:

```ts
CLINIC_NAME      // displayed in header, footer, metadata
TAGLINE          // hero subheadline and footer
LOCATION         // address shown in footer and contact page
PHONE            // phone number (also used for tel: links)
EMAIL            // contact email
WHATSAPP_URL     // wa.me link with pre-filled message
CAL_USERNAME     // Cal.com "username/event-slug" — e.g. "dr-sharma/30min"
SERVICES         // array of 6 service objects (title, description, conditions)
REVIEWS          // array of patient review objects
FAQS             // array of FAQ question/answer pairs
```

---

## Cal.com Setup

1. Create a free account at [cal.com](https://cal.com)
2. Create an event type (e.g. "30 min Consultation")
3. Note your username and event slug from the URL: `cal.com/username/event-slug`
4. Set `CAL_USERNAME = "username/event-slug"` in `lib/constants.ts`

---

## Deployment

Push to GitHub and import into [Vercel](https://vercel.com). It auto-detects Next.js — no environment variables needed.

```bash
vercel --prod
```

---

## Project Structure

```
app/
  layout.tsx          # Root layout: demo banner, Header, Footer, WhatsApp button
  page.tsx            # Home page
  book/
    layout.tsx        # Metadata for book page
    page.tsx          # Cal.com embed (Client Component)
  intake/
    layout.tsx        # Metadata for intake page
    page.tsx          # Patient intake form
  services/
    page.tsx          # Service detail + FAQ accordion
  contact/
    page.tsx          # Map, hours, contact form
components/
  Header.tsx          # Sticky header with mobile hamburger
  Footer.tsx          # Dark footer, 3 columns
  WhatsAppButton.tsx  # Fixed floating button with pulse animation
  ServiceCard.tsx     # Reusable service card
  ReviewCard.tsx      # Google-style review card
  FaqAccordion.tsx    # Expand/collapse FAQ
  ContactForm.tsx     # Contact form with success state
lib/
  constants.ts        # All brand data — edit this to customise
```
