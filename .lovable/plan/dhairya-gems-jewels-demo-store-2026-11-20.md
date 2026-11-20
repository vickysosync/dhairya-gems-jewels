# Dhairya Gems & Jewels Demo Store

## Goal
Build a polished luxury jewellery storefront and a frontend-only demo admin experience for Dhairya Gems and Jewels Private Limited. Keep all commerce, forms, and admin data in mock data and browser local storage; do not add backend services or payment processing.

## Work plan
1. Establish the ivory, charcoal, and champagne-gold design system, typography, and reusable storefront shell with five primary navigation items, dropdowns, mobile navigation, search, wishlist/cart counts, and footer.
2. Add reusable product and collection data plus local-storage-backed cart, wishlist, orders, enquiries, newsletter, and admin demo state. Seed mock data once without replacing saved edits.
3. Build the home, shop, collections and collection detail, new arrivals, product detail, search, cart, wishlist, checkout/order confirmation, about, craftsmanship, gallery, and contact pages with unique content and page metadata.
4. Build the demo admin login and protected admin area with dashboard and the requested management modules, visible Add/View/Edit/Delete actions, confirmation before deletes, and persistent edits reflected in the storefront.
5. Add Vercel SPA routing configuration and focused tests; verify routing, core shopping flows, demo login, mobile layout, images, and the latest preview build diagnostics.

## Technical notes
- Preserve the existing React/TanStack Start + Vite + Tailwind project rather than replacing its router; the app is already built on this supported stack.
- No database, server functions, authentication provider, payment gateway, chart package, or new UI/icon library. Use React state, localStorage, CSS, and inline SVG icons.
- Use the supplied company details and exact footer credit. Keep unverified claims, social links, certifications, and business history out of the copy.
- Keep photo assets distinct and relevant, and include image fallbacks. Any specifications and testimonials remain clearly illustrative demo content.
