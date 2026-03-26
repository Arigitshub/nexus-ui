# Nexus UI (Storefront & Conversion Engine)

The public face of **The Joy Protocol**. This React + Vite application is explicitly engineered for maximum conversion, psychological impact, and high Average Order Value (AOV).

## Architecture

- **Frontend:** React + Tailwind CSS + Framer Motion
- **Hosting:** Vercel Global Edge Network
- **Build Tooling:** Vite
- **Product Delivery:** Embedded PDFs (`joy_protocol.pdf`) and Audiobooks (`The_Joy_Protocol_Audiobook.m4a`) delivered post-purchase.

## Conversion Optimizations ("Psychology WD-40")

- **Order Bump Injected:** Seamless $17 Neuro-Acoustic Audio Variant checkbox integrated directly above the checkout module. If checked, dynamically upgrades the Stripe payload without creating a new product link.
- **Micro-Copy Reassurance:** Friction-reducing micro-copy ("Instant download + email receipt", "No subscription") placed underneath the critical CTA limits cart abandonment.
- **Conversion A/B Continuity:** The UI ensures price escalation timers actively match the listed post-timer pricing (e.g., $99 vs $197) to retain trust.

## Security & Delivery

- **Secure Session Verification:** The `Success.jsx` page never implicitly trusts a URL query parameter. It sends a cryptographic challenge to the `nexus-media-ops-api` (`/api/verify-session?session_id=...`). The digital payload is physically hidden from the DOM until the backend confirms the payment cleared Stripe.
- **Vercel CLI Bypass:** Due to Hobby Tier restrictions on Git authors, the project deploy is forced manually using the `npx vercel --prod --yes` override after pulling the `.vercel` metadata configuration.

## Pixel Tracking 

The core index (`index.html`) is hardcoded with tracking analytics ready for traffic injection.
- **Google Analytics** (`gtag.js`)
- **Meta (Facebook) Pixel** 
- **TikTok Pixel**

To activate them, simply search the `index.html` file for `XXXXXXXXXXXXXXXXX` and replace it with your live marketing tags.

## Start Development Server

```bash
npm install
npm run dev
```

Remember to point `.env.local` to `http://localhost:5005` if developing alongside the backend, or leave it blank to fall back to the live Render endpoint.
