# AuraRush Website Build Prompt

Paste-ready for Lovable, Bolt, v0 or Cursor. Attach the three logo files (Logo.jpg, AuraRush_wide.png, Banner.png) with it, then paste everything from “Brand details” downwards. The page structure follows firston.agency; the colours are taken from the AuraRush logo, and the copy is original.

## Brand details

- Business name: AuraRush, written exactly like this (capital A and R, one word) in all visible text. Never AURARUSH, Aura Rush or Aurarush.
- What it does: UK-based IT services and IT consulting. AuraRush helps businesses grow by building value: websites that funnel customers through forms, and website dashboards for personal trainers (PTs) and salons that run on the same funnel system.
- Location: United Kingdom. Use British English, pounds sterling (£), UK date formats and UK GDPR wording throughout.
- Email: admin@aurarush.org (a mailto link everywhere it appears).
- Booking link: not available yet. Create one setting, BOOKING_URL, in src/data/site.ts and leave it empty. While it is empty, every “Book a call” button goes to /contact#enquiry. Once it holds a URL, those buttons open it in a new tab and the contact page embeds it.
- Brand assets supplied: Logo.jpg (square, stacked logo), AuraRush_wide.png (stacked logo, wide crop) and Banner.png (horizontal logo with aurora light ribbons). The Design system section says how to use each one.
- To fill in later, as placeholders in src/data/site.ts: legal company name and number, registered address, VAT number if any, ICO registration number, social links, real client logos and case studies, and the form endpoint.

## Role and goal

You are a senior front-end engineer and product designer. Build a complete, production-quality, multi-page marketing website for AuraRush, a UK-based IT services and IT consulting business. AuraRush helps businesses grow by building value: websites that funnel customers through forms, and website dashboards that let personal trainers and salons manage the enquiries that funnel produces.

The site should feel premium, calm and technical: a near-black canvas, large light typography, hairline borders, numbered sections, and one restrained spectrum of colour taken from the AuraRush logo. It should read as a trustworthy IT business first and a creative studio second. Nothing should look like a generic template.

## Tech stack and project setup

- Vite, React 18, TypeScript, Tailwind CSS, React Router v6. Set lang to en-GB on the html element.
- Framer Motion for scroll reveals, menu transitions and the headline word reveal. Use pure CSS for the marquees and the hero aurora.
- lucide-react for icons, react-helmet-async for per-page meta tags, react-hook-form with zod for forms, shadcn/ui for accordion, dialog, select and input primitives.
- Folder structure: src/components/layout, src/components/sections, src/components/ui, src/components/mock (sample dashboards and funnel screens), src/pages, src/data, src/hooks, src/assets.
- All copy and settings live in typed data files in src/data (site.ts, services.ts, work.ts, principles.ts, insights.ts). site.ts holds the name, email, BOOKING_URL, legal details and social links, so each can change in one place.
- Hooks to write: useScrollDirection, useInView, useReducedMotion.
- Routes: / ; /services ; /services/:slug (funnel-websites, lead-funnels-and-forms, pt-dashboards, salon-dashboards, it-consulting, it-services) ; /how-we-work ; /work ; /work/:slug ; /about ; /insights ; /insights/:slug ; /contact ; /privacy ; /cookies ; /terms ; and a 404 page.
- Scroll to top on route change. If the URL has a #hash, scroll to that element instead.

## Design system

### Colour tokens (CSS variables, mapped into the Tailwind config)

- Canvas: --background #0F0F0F. It matches the background of the supplied logo files, so the logo sits on the page with no visible box. Also --surface #161617 (cards), --surface-2 #1D1D1F (hover and raised), --foreground #F4F4F2, --muted-foreground #A0A0A6, --border rgba(255,255,255,0.10) and --border-strong rgba(255,255,255,0.20).
- Logo spectrum, sampled from Logo.jpg (check against the artwork): violet #6B4E9E, magenta #A23B8C, crimson #DE2F4B, orange #F08A2A, amber #F5C518, green #5BAA47, mint #7FC8A9, blue #3A82C0. Expose them as --aura-violet, --aura-magenta, --aura-crimson and so on.
- Text-safe tints for small coloured text on the dark canvas, because base violet, magenta and crimson fall below 4.5:1 contrast: violet #A58FD6, magenta #D277BD, crimson #F2677D. Orange, amber, green, mint and blue pass as they are.
- Gradients: --gradient-aura is linear-gradient(90deg, #A23B8C, #DE2F4B, #F08A2A), the warm sweep from the wordmark. --gradient-spectrum is linear-gradient(90deg, #3A82C0, #6B4E9E, #A23B8C, #DE2F4B, #F08A2A, #F5C518, #5BAA47, #7FC8A9), used for hairlines and glows.
- Usage rule: about 90% of every screen stays neutral (black, white, grey). Colour appears only as the hero aurora, 1px gradient hairlines, at most one gradient-filled keyword per headline, numerals and small dots, the focus ring and button glow, and each service’s signature hue. Never use gradients as large flat fills, and never set body text in a brand colour.
- Service hues: 01 magenta, 02 crimson, 03 orange, 04 amber, 05 blue, 06 green. Each service card uses its hue for the numeral, the top hairline on hover and the arrow.
- The whole site is dark. No light sections and no theme toggle.

### Typography

- Headings: Outfit, weight 300 at display sizes and 400 to 500 for H3, letter-spacing -0.02em. Its light geometric forms are the closest free match to the AuraRush wordmark; check this by eye against Logo.jpg. Body: Inter 400. Eyebrows, numerals and tags: JetBrains Mono. Load via Google Fonts with display=swap and fallbacks.
- Never type the brand name in a logo position. Use the supplied logo image.
- H1: clamp(2.75rem, 7.5vw, 6.5rem), line-height 1.0. H2: clamp(2.25rem, 5vw, 4.5rem), line-height 1.05. H3: clamp(1.25rem, 2vw, 1.75rem), line-height 1.2.
- Body: 1.0625rem with line-height 1.65, in --muted-foreground for supporting text and --foreground for key text. Lead paragraphs 1.25rem. Maximum paragraph width 60ch.
- Eyebrow: 0.75rem, uppercase, letter-spacing 0.14em, monospace, muted, with a 6px dot filled with --gradient-spectrum before it.
- Gradient text: for the single highlighted keyword in a headline, apply --gradient-aura with background-clip: text, and set a solid white fallback colour.

### Layout tokens

- Container: max-width 1280px, horizontal padding 20px on mobile, 32px on tablet, 48px on desktop.
- Section vertical padding: clamp(5rem, 10vw, 9rem). 12-column grid on desktop with 24px gutters. Spacing scale based on 4px.
- Radius: 8px for cards and images, fully rounded (pill) for buttons and tags.
- Depth comes from borders, surface shifts and soft coloured glows (box-shadow using a brand hue at 10 to 20% alpha), not from black drop shadows.
- A film-grain overlay at 3% opacity over the hero only (a small tiled noise image or SVG filter).

### Buttons and links

- Primary button: pill, --foreground fill, #0F0F0F text, medium weight, padding 16px 28px, trailing arrow icon. On hover a 1px --gradient-spectrum ring appears, a soft glow (0 0 32px rgba(222,47,75,0.25)) fades in, and the arrow moves 4px right.
- Secondary button: pill, transparent, 1px --border-strong. On hover it fills with --surface-2 and shows the gradient hairline.
- Text link: foreground text with a 1px underline in --gradient-aura that animates left to right on hover, plus a trailing arrow.
- Every arrow icon translates 4px right (up and right on cards) when its parent link or card is hovered.
- Focus ring on everything focusable: 2px solid white with a 4px outer ring of --aura-blue at 60% opacity. Never remove it.

### Motion

- Easing: cubic-bezier(0.22, 1, 0.36, 1). Durations: 200ms for hovers, 400ms for menus, 800ms for reveals.
- Scroll reveal: elements fade in and move up 24px once, when 15% visible, staggered 80ms between siblings.
- Headline word reveal (hero H1 and every H2): split the text into words. Wrap each word in an overflow-hidden span with an inner span that slides from translateY(100%) to 0, staggered 40ms. Keep real spaces between words in the DOM so screen readers read it correctly.
- Aurora: slow, looping, transform-only animation (24 to 40 seconds per cycle) so it stays smooth and cheap.
- If prefers-reduced-motion is set, disable the marquees, reveals, word animations and aurora drift, and show everything immediately in its final state.

### Logo and brand assets

- Logo.jpg (1200 × 1200, flower mark above the wordmark, background #0F0F0F): crop the flower mark for the favicon (32px, 180px apple-touch-icon, 512px). Do not use the square file as the page logo.
- AuraRush_wide.png (stacked logo on a wide dark canvas, 1215 × 405): crop tight to the logo for the footer lockup and for the 404 and loading screens.
- Banner.png (2172 × 724, horizontal logo with aurora ribbons at both sides): crop to 1200 × 630 for the Open Graph and Twitter share image, and use it as the visual reference for the hero aurora. Until a transparent horizontal logo exists, crop the centre lockup from it for the header.
- These files have solid dark backgrounds, and the centre of the flower is filled black rather than transparent. Use them only on the #0F0F0F canvas, and apply mix-blend-mode: lighten so any slightly different black blends into the page.
- Ask the owner for transparent SVG or PNG versions of the horizontal and stacked logos, and swap them in through src/assets when they arrive.
- Never recolour, stretch, rotate or add effects to the logo. Keep it at least 28px high.

## Global layout rules

- Semantic landmarks: header, nav, main, section (each with an aria-labelledby heading), footer. Add a skip-to-content link as the first focusable element.
- Every section opens with an eyebrow label, then an H2, then a short intro paragraph, in that order.
- Use zero-padded numbering (01, 02, 03) as a recurring motif in the mobile menu, services, principles and footer lists.
- Use hairline borders to divide list rows rather than boxes. A hairline may use --gradient-spectrum where it marks a hover or a section break.
- Whole cards are links (one anchor wrapping the card) with a single hover state.
- Write in British English (colour, organisation, optimise) and show money in £.

## Header and navigation

- Fixed to the top, 72px high on desktop and 64px on mobile. Over the hero it is transparent. After scrolling 40px it becomes rgba(15,15,15,0.8) with a 12px backdrop blur and a 1px bottom border. It hides when scrolling down and reappears when scrolling up (use useScrollDirection), but never hides while the mobile menu is open.
- Left: the AuraRush logo (see Logo and brand assets), about 32px high, linking home. Right of it: Services (with a small chevron), How we work, Work, About, Insights, Contact. Far right: a “Book a call →” primary button using BOOKING_URL, falling back to /contact#enquiry while it is empty.
- Services dropdown (desktop): opens on hover and on click or Enter. A panel about 440px wide lists the six services as numbered rows (01 Funnel Websites, 02 Lead Funnels and Forms, 03 PT Dashboards, 04 Salon Dashboards, 05 IT Consulting, 06 IT Services), each with a one-line descriptor and an arrow, and its number in the service’s hue. Add an “Overview →” link at the top. Use aria-expanded, close on Escape and on outside click, and support arrow-key navigation. The panel has a --surface background, a 1px border and a soft glow.
- The active page link gets a 2px underline in --gradient-aura.
- Mobile (below 1024px): a hamburger button labelled “Toggle menu” that morphs into an X and opens a full-screen overlay on #0F0F0F that slides down from the top.
    - Top bar: logo left, close button right.
    - Large numbered list: 01 Services with a + that expands an accordion of the six services (numbered 01 to 06); 02 How we work →; 03 Work →; 04 About →; 05 Insights →; 06 Contact →. Items are about 2rem in Outfit 300 and stagger in.
    - Bottom block: a full-width “Book a call →” primary button, then two small labelled rows: Email (admin@aurarush.org) and Based in (United Kingdom).
    - Lock body scroll while open, trap focus, and close on Escape and on route change.

## Home page sections, in order

### 1. Hero

- Minimum height 100svh on #0F0F0F. The background is an aurora built from layered, heavily blurred gradient shapes (CSS or inline SVG with feGaussianBlur) that echo Banner.png. A left ribbon sweeps in from the left edge (blue, violet, magenta, red). A right ribbon sweeps in from the right edge (red, orange, amber, green, teal). Both curve gently and fade to transparent before they reach the text, so the copy stays on clean black. Use 55 to 75% opacity, mix-blend-mode: screen, a slow drift (translate and scale up to 3%, 30 seconds, alternate), a bottom vignette that fades into #0F0F0F, and a faint film-grain overlay. Do not use Banner.png itself as the hero background, because the logo is baked into its centre. On mobile, show one ribbon only to keep it light.
- Content sits at the bottom left of the container with 64 to 96px bottom padding. Elements, top to bottom:
    - Eyebrow: “UK IT services and consulting”
    - H1 with the word reveal, in white, with “into customers” in gradient text: “We build the websites and systems that turn visitors into customers.”
    - Paragraph, white at 75% opacity, max 560px: “AuraRush helps businesses grow by building value. We create websites that funnel the right customers into your enquiry form, and dashboards that let personal trainers and salons run their business from the same system. Practical IT consulting and support sit behind every build.”
    - Button row: primary “Book a call →” and a text link “See what we build” that scrolls to the featured solutions section.
- Bottom edge row: on the left a one-line statement in small text, “UK-based IT services and IT consulting for growing businesses.” On the right a “Scroll” label with a 1px by 48px line in --gradient-spectrum that animates downward on a loop.

### 2. Industries marquee

- Directly under the hero, with hairline borders top and bottom. Heading (H3): “Built for businesses that live on enquiries”. Muted line beneath: “Personal trainers, salons and local service businesses, plus any business that needs sound IT advice.”
- A single row of eight labels in Outfit 300 at about 1.5rem, white at 70% opacity, rising to 100% on hover: Personal trainers, Hair salons, Beauty salons, Barbershops, Fitness studios, Wellness studios, Local service businesses, Growing SMEs. Each label is preceded by a 6px dot, cycling through the brand hues in order. Gap 64px.
- Implement the loop with CSS only: render the list twice inside one flex track and animate translateX from 0 to -50% over 40 seconds, linear, infinite. Pause on hover and on focus. Fade the left and right edges with a mask-image gradient.
- Do not invent client logos. When real clients agree to be shown, add a second row headed “Trusted by” with their logos in greyscale at 60% opacity (full colour on hover), and keep the industry row above it.

### 3. Value ticker

- A second, text-only marquee between hairline borders (one of them in --gradient-spectrum). It runs in the opposite direction to the industries strip, 60 seconds per loop, with three copies of the list.
- Six short statements in large type (about 1.5rem), separated by a small asterisk that cycles through the brand hues: “Value first, technology second”, “Forms that fill your diary”, “Dashboards that run the day”, “IT consulting without the jargon”, “One system, not scattered tools”, “UK-based and easy to reach”.

### 4. Services grid (“What we do”)

- Eyebrow “What we do”. H2 about two lines with the word reveal: “Websites that win customers. Systems that run the business.” Intro paragraph (max 60ch): AuraRush combines lead-generation websites, funnel forms, dashboards and IT expertise, so the way customers arrive and the way you manage them are designed together.
- Grid of six cards: 3 columns on desktop, 2 on tablet, 1 on mobile, with 1px borders between cells (a shared-border grid rather than separate boxes). Each card is a single link to /services/:slug and contains, top to bottom:
    - Top row: mono label “01 / Funnel Websites” in the service’s hue on the left, an arrow icon on the right.
    - H3 service name.
    - Two-line description.
    - Hairline divider.
    - “Outcome —” in muted mono followed by the outcome in foreground colour.
    - Tag line: four short capabilities separated by slashes, in mono.
- Hover: the background shifts to --surface, a 1px gradient hairline in the service’s hue draws across the top, the numeral and arrow take the hue, the arrow moves up and right, and the H3 gets an underline.
- The six cards, in order:
    - 01 Funnel Websites (magenta). Fast, professional websites designed around one job: turning visitors into enquiries. Outcome: more qualified enquiries. Tags: Design / Build / Page structure / Speed.
    - 02 Lead Funnels and Forms (crimson). Smart forms and multi-step funnels that capture, qualify and route every enquiry to the right place. Outcome: no lost leads. Tags: Forms / Funnels / Routing / Follow-up.
    - 03 PT Dashboards (orange). A website with a dashboard for personal trainers, where leads from your funnel land in one place and are easy to manage. Outcome: less admin, more training. Tags: Dashboard / Enquiries / Clients / Funnel.
    - 04 Salon Dashboards (amber). The same funnel-powered approach for salons and barbershops, giving one view of new enquiries and follow-ups. Outcome: a fuller diary. Tags: Dashboard / Enquiries / Follow-ups / Funnel.
    - 05 IT Consulting (blue). Practical technology advice, from audits and roadmaps to tool choices, explained in plain English. Outcome: confident technology decisions. Tags: Audit / Strategy / Roadmap / Tooling.
    - 06 IT Services (green). Hosting, maintenance, updates and support that keep your website and systems running. Outcome: dependable, secure systems. Tags: Hosting / Support / Security / Updates.
- Keep the dashboard descriptions general until the real feature list is confirmed, and store all six cards in src/data/services.ts.

### 5. Featured solutions

- Eyebrow “Featured solutions”. H2 example: “See how it fits together.” Intro: sample builds showing how a funnel, a dashboard and a technology plan work as one system. State clearly that these are illustrative, not client work.
- Four stacked rows with 96px vertical gap. On desktop each row is a 12-column grid: visual across 7 columns, text across 5. Alternate the visual side on every other row. On mobile, stack the visual above the text.
- The visual is a mock interface built in code (src/components/mock), not a photo, inside a frame with a 1px border, 8px radius and a soft glow in the service’s hue. It scales to 1.03 on hover over 800ms. Every mock carries a small “Sample data” badge. The four mocks:
    - Funnel website: a browser frame showing a landing page and a three-step enquiry form.
    - PT dashboard: a new-enquiries counter, a recent leads table and a simple weekly view.
    - Salon dashboard: a list of new enquiries, follow-up reminders and a day view.
    - IT consulting: a Now, Next, Later roadmap board.
- Text block, top to bottom: sector label in mono caps (Websites, Personal trainers, Salons, IT consulting); a pill chip “Sample build”; H3; one sentence on what it does for the business; service tags as small outlined pills; and a link “Explore the service →” to the matching /services/:slug.
- After the four rows, a centred secondary button “View all work →” linking to /work.
- Never invent client names, testimonials or results. A SHOW_CLIENT_WORK flag in src/data/work.ts switches this section to real client case studies once they exist (photo or screenshot, sector, “Working together since”, name, one-sentence result, tags and a “Read the story →” link).

### 6. Why AuraRush

- Two-column layout on desktop. Left (columns 1 to 5): a sticky eyebrow, the H2 “Our philosophy.” and a two-sentence intro, sticking at top: 120px while the right column scrolls. Right (columns 7 to 12): five numbered principles.
- Each principle is a row with a hairline top border, a mono numeral (01 to 05) in muted colour on the left, an H3 and a short paragraph. Rows reveal on scroll, and the numeral of the row in view turns to the next hue in the spectrum.
- The five principles to write up, each with a two-sentence paragraph: 01 Value before vanity (we build what moves enquiries and revenue). 02 One system, not scattered tools (website, forms and dashboard work from the same funnel). 03 Plain-English IT (consulting without the jargon). 04 Built for your trade (personal trainers and salons get purpose-built tools, not generic ones). 05 Accountable and easy to reach (UK-based, direct contact, support after launch).
- On mobile the left block stops being sticky and sits above the list.

### 7. How we work

- Eyebrow “How we work”. H2 example: “Start with a build. Stay for the support.” Paragraph: some businesses need one well-built website, funnel or dashboard; others want a team that keeps improving it. Either way, you deal directly with the people doing the work. Text link “See how we work →”.
- Two large option cards side by side (stacked on mobile):
    - Card A, “Focused builds”: tag “For a defined need”, outlined card on the canvas, a short description (a one-off website, funnel, dashboard or consulting engagement with a clear scope), and an arrow in the bottom right.
    - Card B, “Build and ongoing support”: tag “The AuraRush way”, filled with --surface-2 and a 1px --gradient-spectrum border, taller by 24px on desktop so it reads as the primary option, with a short description (a build followed by hosting, maintenance, improvements and IT support). Add a soft glow in crimson at 15% opacity.
    - Both link to /how-we-work. Hover lifts the card 4px and moves the arrow.
- Below the cards, a row of six benefit badges (3 by 2 on desktop, 2 by 3 on tablet, 1 column on mobile) separated by hairlines. Each has a bold one-word title and a one-line explanation. Titles: Proactive, Joined-up, Commercial, Predictable, Supported, Accountable. Example line: “Predictable: clear scope and clear costs before any work starts.”

### 8. Latest insights

- Header row: eyebrow and H2 “Thinking, briefly.” on the left, an “All insights →” link on the right (stacked on mobile).
- Three text-only cards in a row, each a link with a hairline top border: category label (mono caps), date in UK format (for example 12 November 2026), H3 title, read time (“5 min read”) and an arrow. Hover underlines the title in --gradient-aura and moves the arrow.
- Placeholder articles to write or replace: “What makes a website enquiry form convert” (Funnels), “Why personal trainers need more than a booking link” (Dashboards), “IT consulting for small businesses: where to start” (IT consulting). If src/data/insights.ts is empty, hide this section and the Insights links until there is content.

### 9. Closing call to action

- Full-width section on --background with a smaller version of the hero aurora along the bottom edge. Eyebrow “Start a conversation”. Very large H2 (up to 7rem) with the word reveal, with “value” in gradient text: “Let’s build value into your business.”
- Paragraph (max 56ch): “Tell us where your business is going and where enquiries are getting lost. We’ll show you what a better funnel, dashboard or technology plan could look like.”
- Row with a primary “Book a call →” button (BOOKING_URL, falling back to /contact#enquiry) and the email address admin@aurarush.org as an underlined mailto link.
- Optional: the flower mark, cropped from Logo.jpg with mix-blend-mode: lighten, very large and rotating once every 120 seconds at 6% opacity behind the text. Skip it under reduced motion.

### 10. Footer

- Background #0A0A0A, with a 1px --gradient-spectrum line across the top edge.
- Four-column grid on desktop: (1) the stacked logo cropped from AuraRush_wide.png (about 180px wide, mix-blend-mode: lighten) with a two-sentence description of AuraRush, spanning two columns; (2) “Services” with Overview and the six services; (3) “Company” with About, How we work, Work, Insights and Contact; (4) “Start a conversation” with admin@aurarush.org as a mailto link and the line “Based in the United Kingdom”.
- Bottom bar with a hairline above: “© 2026 AuraRush. All rights reserved.” on the left, with Privacy Policy, Cookie Policy and Terms links on the right. Beneath it, in small muted text: “AuraRush is a trading name of [LEGAL_ENTITY], registered in England and Wales, company number [COMPANY_NUMBER]. Registered office: [ADDRESS].” Include a VAT number and ICO registration number if they exist. Read these from src/data/site.ts and hide any line whose value is empty.
- Mobile: columns collapse to a single column, with link lists in two columns where it fits. Add a small back-to-top link.

## Inner pages

All inner pages reuse the header, footer, closing CTA and the same eyebrow, H2, intro pattern. Each begins with a shorter, text-only hero (about 60svh) on the canvas, with a breadcrumb and one faint aurora ribbon in a corner.

- Services overview (/services): intro, then the six services as large alternating rows (numeral in its hue, name, description, outcome, tags, link), then a “How an engagement works” strip of four numbered steps (Discover, Plan, Build, Grow).
- Service detail (/services/:slug): hero with the service name and outcome, accented in its hue; “What’s included” as a two-column checklist; a four-step process; the matching sample interface from src/components/mock with its “Sample data” badge; an FAQ accordion of five questions; closing CTA. Show a “From £[PRICE]” line only when a price is set in services.ts.
- How we work (/how-we-work): focused builds versus build and ongoing support; three engagement options as cards (name, who it is for, what is included as a checklist, a price or “Get a quote” label, and a “Book a call” button), with the ongoing-support option highlighted; a comparison table that scrolls horizontally on mobile; an FAQ accordion.
- Work (/work): a grid of the four sample builds now. When SHOW_CLIENT_WORK is true it becomes a client case-study grid with sector filter chips. The detail template (/work/:slug) has a hero, “The challenge”, “What we did”, “The result”, three headline result numbers, services used, an optional client quote, and next and previous links.
- About (/about): the AuraRush story and the idea of building value, a values list reusing the principle rows, a team grid (photo, name, role) with placeholders, a clear statement that AuraRush is UK-based, and a “Work with us” CTA.
- Insights index (/insights): a list of articles with category filter chips. Article page (/insights/:slug): title, category, date, read time, a readable column at 68ch with H2, H3 and pull-quote styles, and a related articles row.
- Contact (/contact): left column with the intro, admin@aurarush.org, “Based in the United Kingdom” and a “Book a call” button (an embedded booking widget loads here once BOOKING_URL is set). Right column with the enquiry form, anchored as #enquiry.
- Legal pages (/privacy, /cookies, /terms): simple readable-column pages with clearly marked placeholder text, headed “Draft: to be reviewed by a qualified professional before launch”. Link them from the footer and the cookie banner.

## Forms and integrations

- Contact form fields: full name, email, phone (optional), business name, “I run a…” (Personal training business, Salon or barbershop, Other small business, I need IT consulting), website (optional), “What do you need?” (Funnel website, Lead funnel and forms, Dashboard, IT consulting, IT services, Not sure yet), and a message. Add a required, unticked consent checkbox: “I agree to AuraRush contacting me about my enquiry. See our Privacy Policy.” Include a hidden honeypot field.
- Validate with zod and show inline error messages under each field. Disable the button and show a spinner while submitting. On success replace the form with a confirmation message and a “Book a call” link. On failure show an error and the fallback address admin@aurarush.org.
- Submit to [FORM_ENDPOINT] (Formspree, Resend or a Supabase edge function), kept in an environment variable. Prefer a provider that can store data in the UK or EU.
- Booking: every “Book a call” button reads BOOKING_URL from src/data/site.ts. If it is empty the button goes to /contact#enquiry. If it is set the button opens it in a new tab with rel noopener.
- Cookie consent (UK GDPR and PECR): a small banner with Accept all, Reject all and Manage choices, shown on first visit. Load no analytics or third-party embeds (booking widget, maps, video) until the visitor consents. Store the choice in localStorage and link the Cookie Policy. Use cookie-free, privacy-friendly analytics only if the owner wants it.

## Responsive behaviour

- Breakpoints: 360, 640, 768, 1024, 1280 and 1536px. Design mobile first.
- Below 1024px: the nav becomes the full-screen menu, two-column layouts stack, sticky columns release, and the services grid drops to 2 then 1 column.
- Headlines use clamp() so they never overflow. Make sure long words wrap cleanly at 360px.
- No horizontal page scroll at any width. Tables and wide content scroll inside their own container.
- Touch targets are at least 44px. Hover effects sit inside a hover: hover media query so they don’t stick on touch devices. On mobile, simplify the aurora (one ribbon, less blur) to protect battery and frame rate.

## Accessibility

- Meet WCAG 2.2 AA contrast on the dark canvas. Use the text-safe tints for any small coloured text, and keep body copy in --foreground or --muted-foreground. Check white text over the brightest part of the aurora.
- All images have meaningful alt text. The logo’s alt text is “AuraRush”. Decorative images, the aurora and the mock-interface backgrounds use empty alt or aria-hidden.
- The dropdown, mobile menu, accordions and filter chips are keyboard operable with correct ARIA attributes. Focus rings stay visible on the dark background.
- The marquees are decorative: give the duplicated copy aria-hidden and pause them on hover and focus.
- Respect prefers-reduced-motion everywhere, including the aurora and the rotating flower mark.

## Performance and SEO

- Preload the two font files. Build the aurora from CSS or SVG, not video, and keep the mock interfaces as lightweight React components. Use responsive images (srcset and sizes), explicit width and height on every image, lazy loading below the fold, and WebP or AVIF where possible.
- Aim for Lighthouse scores above 90 on performance, accessibility, best practices and SEO.
- Per-page title and meta description via react-helmet-async, with Open Graph and Twitter card tags on every page. The default share image is Banner.png cropped to 1200 × 630. Set theme-color to #0F0F0F and make the favicon from the flower mark.
- Add JSON-LD: ProfessionalService on the home page (name AuraRush, email admin@aurarush.org, areaServed GB, address country GB, services listed) and Article on insight pages. Generate sitemap.xml and robots.txt. Use clean, lowercase, hyphenated URLs, a canonical tag on every page, and hreflang en-GB.

## Content and placeholder rules

- Write original copy for AuraRush in British English. Do not copy text from any other agency’s site.
- Keep sentences short. Headlines state a belief or an outcome. Body copy never runs past three sentences in a block. Describe the services in plain English and avoid jargon.
- Do not invent client names, logos, testimonials, statistics or prices. Anything unconfirmed is a clearly marked placeholder or a sample, held in src/data so it can be replaced easily.
- Keep the dashboard descriptions general until the owner confirms the exact features.
- Use typographic apostrophes and quotation marks in all visible text.

## Acceptance checklist

- All ten home sections appear in the order described, each with the layout, content and hover states given, and the six services use their hues.
- The page uses the logo’s colours as described: neutral canvas, spectrum only in the aurora, hairlines, one gradient keyword per headline, numerals and the focus ring.
- The header changes state on scroll, hides and reveals on scroll direction, and the Services dropdown and mobile menu work with the keyboard.
- The hero aurora, both marquees and the word reveal run smoothly, pause or stop under reduced motion, and the headline text still reads correctly to a screen reader.
- With BOOKING_URL empty, every “Book a call” button goes to /contact#enquiry. Setting a URL in site.ts changes them all.
- Every route in the route list renders with its own meta tags and no console errors.
- The contact form validates, requires consent, submits and shows success and error states. The cookie banner blocks non-essential scripts until consent.
- No horizontal scroll at 360px, and the layout holds up at 1536px and wider.
- All copy and settings come from the src/data files, and admin@aurarush.org appears as a mailto link.
