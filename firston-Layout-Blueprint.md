# firston.agency Layout Blueprint

A layout reference for the home page of firston.agency, written so an AI builder (Lovable, Bolt, v0, Cursor) or a designer can rebuild the structure without seeing the site. Use it together with AuraRush-Website-Build-Prompt.md: this file says **where everything goes**; the prompt says **how AuraRush should look and what it should say**.

**How reliable this is.** The order of sections, the elements inside each one, the labels and the counts all come from the live page’s content (re-read on 7 November 2026). The proportions, grid columns and animations are inferred from that content, because I could read the page’s text and structure but not render it. Anything marked *(inferred)* is a sensible reconstruction, not a measurement.

Wireframes below are drawn for a desktop width of about 1280px. Text in [square brackets] is a placeholder for content, not real copy.

## 1. The page at a glance

One long scrolling page: a fixed header, ten stacked sections, and a footer. Heights below are relative, not exact.

```
┌────────────────────────────────────────────────────────────────┐
│ 00  FIXED HEADER   logo | nav | Book a call                    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│ 01  HERO                              full-bleed photo, 100svh │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 02  PARTNER LOGO MARQUEE                         looping logos │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 03  VALUE TICKER                                  looping text │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 04  SERVICES GRID                             6 numbered cards │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 05  FEATURED PARTNERS                        4 case-study rows │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 06  PHILOSOPHY                           5 numbered principles │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 07  HOW WE WORK                      2 option cards + 6 badges │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 08  LATEST INSIGHTS                               3 text cards │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 09  CLOSING CTA                      headline + button + email │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ 10  FOOTER                               4 columns + legal bar │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

The rhythm alternates section types so no two neighbours look alike: image, strip, strip, grid, image rows, text list, cards, cards, big type, footer. Proof (the logos) comes straight after the hero and before any service is pitched.

## 2. What the page content tells us

| What the content shows | What it means for the layout |
| --- | --- |
| Every headline arrives with its words run together, so each word is its own element | Headlines use a word-by-word reveal. Keep real spaces between words in your DOM. |
| The partner logo list appears twice back to back (10 logos, 20 images) | A looping marquee: one list duplicated so the track can slide exactly 50% and restart |
| Six short statements, repeated three times | A second, text-only looping ticker |
| A “Toggle menu” control plus a separate menu block numbered 01 to 06 | Full-screen mobile overlay with numbered links; Services has a + that expands six sub-links |
| The hero’s secondary link points to an in-page anchor (#partners) | It scrolls down to a partners section on the same page. The page text does not say whether that is the logo strip or the featured partners block. |
| A “Scroll” label ends the hero | A scroll cue sits at the bottom of the hero |
| Each service card is one link holding label, arrow, title, description, outcome and tags | The whole card is clickable; the arrow is part of the card |
| The studio location appears only in the mobile menu; the email appears in the menu, the closing CTA and the footer | Do not repeat the location in the footer; the email appears three times |
| Only one image file is used in the hero; the case-study rows carry four more | The page is type-led. Photography appears only in the hero and the four partner rows. |
| The share-image URL points to a lovable.app preview | A Lovable (React) build: a component-based single page with separate routes behind it |

## 3. Rules that repeat across the page

Sections 04 to 07 and 09 open the same way. The insights section (08) skips the intro paragraph and puts an “All insights” link on the right instead.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ •  EYEBROW LABEL  (small, uppercase, monospace)                              │
│                                                                              │
│ Section headline  (large, 1 to 2 lines, word reveal)                         │
│                                                                              │
│ Intro paragraph, 2 to 3 sentences, about 60 characters wide                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ [ the section’s content block ]                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- **Numbering motif** (confirmed): 01 to 06 in the mobile menu, on the service cards (as “01 / Name”) and on the five principles.
- **Arrows** (confirmed): every link and card ends in an arrow; “Book a call” always has one.
- **Calls to action** (confirmed): the header button, the hero button, the closing CTA and the mobile menu all say the same thing, with a softer secondary link beside the hero one.
- **Container and spacing** *(inferred)*: content width about 1280px, 12-column grid, very generous vertical padding between sections (about 96 to 160px), hairline borders rather than boxes or shadows.
- **Copy length** (confirmed): nothing runs longer than two or three sentences. Cards use one sentence.

## 4. Section wireframes (desktop)

### 00. Header (fixed)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] Services v  Partnership Plans  Partners  About  Insights  Contact  [ Book a call -> ] │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** logo; a Services link with a dropdown chevron; five plain text links (Partnership Plans, Partners, About, Insights, Contact); a “Book a call” button with an arrow; and a menu toggle that appears on small screens.

**Layout** *(inferred)*: about 72px tall, transparent over the hero with light text, then solid with a bottom hairline after scrolling. The Services dropdown lists the six services as numbered rows. The mobile overlay is drawn in section 5.

### 01. Hero

```
┌─ HERO  min-height 100svh ────────────────────────────────────────────────────────────────────┐
│ [ FULL-BLEED PHOTO with a dark gradient, heavier toward the bottom ]                         │
│                                                                                              │
│                                                                                              │
│                                                                                              │
│ •  Eyebrow label                                                                             │
│                                                                                              │
│ Large headline over two or three lines,                                                      │
│ each word sliding up into place                                                              │
│                                                                                              │
│ Paragraph of about three sentences, narrow column (max ~560px)                               │
│                                                                                              │
│ [ Primary CTA -> ]    Secondary text link                                                    │
│                                                                                              │
│                                                                                              │
│ One-line promise, small text                                                          Scroll │
│                                                                                            | │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** one hero photograph; an eyebrow label; the main headline; a three-sentence paragraph; a primary button (“Book a discovery call”) and a secondary text link (“See the partnerships”, scrolling down the same page); a one-line promise; a “Scroll” cue.

**Layout** *(inferred)*: all text left-aligned at the bottom of the screen over the photo, in white. The promise line sits bottom left and the scroll cue bottom right.

### 02. Partner logo marquee

```
┌─ LOGO STRIP ─────────────────────────────────────────────────────────────────────────────────┐
│ [Short heading: who you work with]                                                           │
│ [One muted sentence underneath]                                                              │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ <<  [logo] [logo] [logo] [logo] [logo] [logo] [logo] [logo] [logo] [logo]  >>  scrolls left  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** a heading and one muted sentence, then ten partner logos, listed twice so the loop is seamless.

**Layout** *(inferred)*: left-aligned heading above a single row of logos at about 32 to 40px tall, greyscale at reduced opacity, with faded edges. The track slides continuously and probably pauses on hover.

### 03. Value ticker

```
┌─ TICKER ─────────────────────────────────────────────────────────────────────────────────────┐
│ [Statement] * [Statement] * [Statement] * [Statement] * [Statement] * [Statement] * >>       │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** six short positioning statements, repeated three times. No heading and no link.

**Layout** *(inferred)*: a thin full-width band between hairline borders, large text, moving in the opposite direction to the logo strip so the two feel different.

### 04. Services grid

```
•  EYEBROW

Headline, two lines

Intro paragraph, 2 to 3 sentences

┌─────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│ 01 / Service name   ->      │ 02 / Service name   ->      │ 03 / Service name   ->      │
│ Service title               │ Service title               │ Service title               │
│ Description, one            │ Description, one            │ Description, one            │
│ sentence, about two lines   │ sentence, about two lines   │ sentence, about two lines   │
│                             │                             │                             │
│ ----------------------      │ ----------------------      │ ----------------------      │
│ Outcome - one phrase        │ Outcome - one phrase        │ Outcome - one phrase        │
│ Tag/Tag/Tag/Tag             │ Tag/Tag/Tag/Tag             │ Tag/Tag/Tag/Tag             │
├─────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ 04 / Service name   ->      │ 05 / Service name   ->      │ 06 / Service name   ->      │
│ Service title               │ Service title               │ Service title               │
│ Description, one            │ Description, one            │ Description, one            │
│ sentence, about two lines   │ sentence, about two lines   │ sentence, about two lines   │
│                             │                             │                             │
│ ----------------------      │ ----------------------      │ ----------------------      │
│ Outcome - one phrase        │ Outcome - one phrase        │ Outcome - one phrase        │
│ Tag/Tag/Tag/Tag             │ Tag/Tag/Tag/Tag             │ Tag/Tag/Tag/Tag             │
└─────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

**On the page:** eyebrow, headline, one intro paragraph, then six cards. Each card holds: a “NN / Name” label with an arrow, the service title, a one-sentence description, an “Outcome —” line, and four capability tags separated by slashes. Every card links to its own service page.

**Layout** *(inferred)*: three columns on desktop, two on tablet, one on mobile. A shared-border grid (cells divided by hairlines) suits the numbered, catalogue-like feel. On hover the card shifts background and the arrow moves up and right.

### 05. Featured partners (case-study rows)

```
•  EYEBROW

Headline, two short sentences

Intro paragraph, 2 to 3 sentences

--- row 1 ---
┌──────────────────────────────────────────────────┐
│                                                  │   SECTOR LABEL (mono caps)
│                                                  │   ( Partners since 20XX )
│ [ IMAGE  about 4:3 ]                             │   H3  Partner name
│                                                  │   One-sentence result,
│                                                  │   two to three lines long.
└──────────────────────────────────────────────────┘   [tag] [tag] [tag] [tag]
                                                       Read the partnership ->

--- row 2 (image side alternates) ---
                           ┌──────────────────────────────────────────────────┐
SECTOR LABEL (mono caps)   │                                                  │
( Partners since 20XX )    │                                                  │
H3  Partner name           │ [ IMAGE  about 4:3 ]                             │
One-sentence result,       │                                                  │
two to three lines long.   │                                                  │
[tag] [tag] [tag] [tag]    └──────────────────────────────────────────────────┘
Read the partnership ->

--- rows 3 and 4 repeat the pattern ---

                         [ View all partners -> ]
```

**On the page:** eyebrow, headline, intro, then four partner rows, then a “View all partners” link. Each row has: an image, a sector label (one of them carries two labels joined by a dot), a “Partners since [year]” chip, the partner name, a one-sentence outcome, four or five service tags, and a “Read the partnership” link to the partner’s own page. The hero’s secondary link lands on a partners section, probably this one or the logo strip above it.

**Layout** *(inferred)*: a 12-column grid with the image across about 7 columns and the text across 5, alternating sides row by row, stacking image-first on mobile. Images zoom slightly on hover.

### 06. Philosophy (five principles)

```
•  EYEBROW                            ──────────────────────────────────────────────
                                      01   H3 principle title
Headline,                                  One to two sentences that
one short line                             wrap inside this column
                                      ──────────────────────────────────────────────
Intro paragraph,                      02   H3 principle title
two sentences                              One to two sentences that
                                           wrap inside this column
(sticks while the                     ──────────────────────────────────────────────
 list scrolls)                        03   H3 principle title
                                           ...
                                      ──────────────────────────────────────────────
                                      04   ...
                                      ──────────────────────────────────────────────
                                      05   ...
                                      ──────────────────────────────────────────────
```

**On the page:** eyebrow, headline, one intro paragraph, and five numbered principles (01 to 05), each with a short title and one or two sentences.

**Layout** *(inferred)*: two columns on desktop. The heading block sits in the left 5 columns and stays in view while the numbered list scrolls on the right. On mobile it becomes a single column with the heading first.

### 07. How we work (two options + six benefits)

```
•  EYEBROW

Headline, one line

Paragraph, three sentences

Text link ->

┌──────────────────────────────────────────┐    ┌──────────────────────────────────────────┐
│ For a defined need  (tag)                │    │ Brand tag line  (emphasised)             │
│                                          │    │                                          │
│ H3  Option one                           │    │ H3  Option two (the main offer)          │
│ Short paragraph, two or three            │    │ Short paragraph, two or three            │
│ lines describing the offer.              │    │ lines describing the offer.              │
│                                          │    │                                          │
│                                        ->│    │                                        ->│
└──────────────────────────────────────────┘    └──────────────────────────────────────────┘

┌─────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│ Title 1                     │ Title 2                     │ Title 3                     │
│ One-line benefit            │ One-line benefit            │ One-line benefit            │
├─────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ Title 4                     │ Title 5                     │ Title 6                     │
│ One-line benefit            │ One-line benefit            │ One-line benefit            │
└─────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

**On the page:** eyebrow, headline, a paragraph, an “Explore partnership plans” link, two option cards (a small tag, a title, a paragraph and an arrow each), and six benefit badges, each a one-word title with a one-line explanation.

**Layout** *(inferred)*: two equal-width cards side by side, with the second (“the ongoing partnership”) visually emphasised, for example filled and slightly taller, because it is the offer being sold. The badges form a hairline-divided row or a 3 by 2 grid below.

### 08. Latest insights

```
•  EYEBROW

Headline, one line                                                       All insights ->

┌────────────────────────────┐ ┌────────────────────────────┐ ┌────────────────────────────┐
│ CATEGORY       Month YYYY  │ │ CATEGORY       Month YYYY  │ │ CATEGORY       Month YYYY  │
│ Article title that wraps   │ │ Article title that wraps   │ │ Article title that wraps   │
│ onto two lines             │ │ onto two lines             │ │ onto two lines             │
│                            │ │                            │ │                            │
│ N min read              -> │ │ N min read              -> │ │ N min read              -> │
└────────────────────────────┘ └────────────────────────────┘ └────────────────────────────┘
```

**On the page:** eyebrow, headline and an “All insights” link, then three text-only cards. Each has a category, a month and year, a title, a read time and an arrow. There are no thumbnails.

**Layout** *(inferred)*: three equal columns on desktop, one on mobile, the whole card clickable. The hover state underlines the title and moves the arrow.

### 09. Closing call to action

```
┌─ CTA ────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                              │
│ •  EYEBROW                                                                                   │
│                                                                                              │
│ Very large headline over                                                                     │
│ two or three lines                                                                           │
│                                                                                              │
│ Paragraph, three sentences                                                                   │
│                                                                                              │
│ [ Book a discovery call -> ]     email@domain                                                │
│                                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** eyebrow, a very large headline, a three-sentence paragraph, the primary button and the email address as a mailto link.

**Layout** *(inferred)*: the biggest type on the page, with generous padding, probably on a contrasting (dark) background so it reads as the end of the pitch.

### 10. Footer

```
┌──────────────────────┬──────────────────────┬──────────────────────┬──────────────────────┐
│ [LOGO]               │ Services             │ Company              │ Start a              │
│                      │ Overview             │ About                │ conversation         │
│ One-sentence         │ Service 1            │ Partnership Plans    │                      │
│ description of       │ Service 2            │ Partners             │ email@domain         │
│ the business         │ Service 3            │ Insights             │                      │
│                      │ Service 4            │ Contact              │                      │
│                      │ Service 5            │                      │                      │
│                      │ Service 6            │                      │                      │
└──────────────────────┴──────────────────────┴──────────────────────┴──────────────────────┘
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│ © 2026 Name. All rights reserved.                                      One-line sign-off  │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

**On the page:** the logo with a one-sentence description; a Services list (overview plus the six services); a Company list (five links); a “Start a conversation” block with the email; then a copyright line and a short sign-off.

**Layout** *(inferred)*: four columns on desktop (the brand block may be wider than the link columns), collapsing to one column on mobile. A hairline separates the legal bar.

## 5. Mobile wireframes

```
┌─ HOME, TOP ────────────────┐   ┌─ MENU OPEN ────────────────┐   ┌─ STACKED SECTIONS ─────────┐
│ [LOGO]            [=]      │   │ [LOGO]            [X]      │   │ •  EYEBROW                 │
├────────────────────────────┤   ├────────────────────────────┤   │ Headline                   │
│ [ FULL-BLEED PHOTO ]       │   │ Menu                       │   │                            │
│                            │   │                            │   │ Intro paragraph            │
│ •  Eyebrow                 │   │ 01 Services          +     │   ├────────────────────────────┤
│ Headline, four to          │   │    01 Service              │   │ 01 / Service       ->      │
│ five short lines           │   │    02 Service              │   │ Title                      │
│                            │   │    03 Service              │   │ Description                │
│ Paragraph                  │   │    04 Service              │   │ Outcome - phrase           │
│                            │   │    05 Service              │   │ Tag/Tag/Tag/Tag            │
│ [ Primary CTA -> ]         │   │    06 Service              │   ├────────────────────────────┤
│ Secondary link             │   │ 02 Partnership Plans ->    │   │ 02 / Service       ->      │
│                            │   │ 03 Partners ->             │   │ (one column, cards         │
│ One-line promise           │   │ 04 About ->                │   │  stacked, hairlines        │
│             Scroll         │   │ 05 Insights ->             │   │  between)                  │
│                            │   │ 06 Contact ->              │   ├────────────────────────────┤
└────────────────────────────┘   ├────────────────────────────┤   │ [ IMAGE ]                  │
                                 │ [ Book a call -> ]         │   │ SECTOR   Since 20XX        │
                                 │ Email   email@domain       │   │ H3 Partner name            │
                                 │ Studio  City, UK           │   │ Result sentence            │
                                 └────────────────────────────┘   │ [tags]                     │
                                                                  │ Read ->                    │
                                                                  └────────────────────────────┘
```

- The header collapses to the logo and a menu button. The “Book a call” button moves inside the overlay.
- The overlay is full screen with a “Menu” label, numbered links 01 to 06 (Services expands with a +), the button, then email and studio location at the bottom.
- Every two-column layout stacks (image above text, heading above list). The services grid becomes one column. The marquees keep running.

## 6. Components to build

| Component | Used in | Notes |
| --- | --- | --- |
| Header with Services dropdown | Every page | Transparent over hero, solid after scroll, hides on scroll down |
| MobileMenu overlay | Header | Numbered links, expandable Services, email and location |
| SectionHeader (eyebrow, H2, intro) | Sections 04 to 09 | Word-by-word reveal on the H2 |
| WordReveal | Hero H1, every H2 | Real spaces kept in the DOM |
| PrimaryButton and ArrowLink | Everywhere | Arrow nudges 4px on hover |
| Marquee (logos) and Ticker (text) | Sections 02 and 03 | Pure CSS, duplicated track, opposite directions |
| ServiceCard and ServiceGrid | Section 04 | Whole card is a link |
| PartnerRow (alternating) | Section 05 | Image, sector, since chip, name, result, tags, link |
| PrincipleRow | Section 06 | Numeral, H3, paragraph, hairline |
| OptionCard and BenefitBadge | Section 07 | Second option emphasised |
| InsightCard | Section 08 | Text only |
| ClosingCTA | Section 09 | Biggest type on the page |
| Footer | Every page | Four columns and a legal bar |

## 7. How each section maps to AuraRush

| Section | firston.agency | AuraRush version |
| --- | --- | --- |
| Header and menu | Services, Partnership Plans, Partners, About, Insights, Contact, studio location in the menu | Services, How we work, Work, About, Insights, Contact; “Based in the United Kingdom” in the menu |
| 01 Hero | Full-bleed photo | Black canvas with the glowing logo-colour aurora in CSS (no photo) |
| 02 Logo strip | Ten client logos | Industries strip (personal trainers, salons and so on) until real client logos are allowed |
| 03 Ticker | Six positioning statements | Six AuraRush statements (value, forms, dashboards, plain-English IT) |
| 04 Services | Six disciplines | Funnel Websites, Lead Funnels and Forms, PT Dashboards, Salon Dashboards, IT Consulting, IT Services |
| 05 Featured partners | Four real client case studies | Four sample builds shown as mock interfaces, labelled “Sample data” |
| 06 Philosophy | Five principles | Five AuraRush principles |
| 07 How we work | Focused projects versus ongoing partnership | Focused builds versus build and ongoing support |
| 08 Insights | Three articles | Three placeholder articles, hidden until real ones exist |
| 09 Closing CTA | Book a call and email | Book a call (link added later) and admin@aurarush.org |
| 10 Footer | Four columns and sign-off | Same four columns plus a UK company-details and privacy row |

## 8. Suggested build order

1. Colour and type tokens, spacing, container and the section opener (eyebrow, headline, intro).
2. Header, mobile menu and footer, so every page has its frame.
3. Hero, including the headline word reveal and the scroll cue.
4. The two marquees.
5. Services grid, then the partner rows (or the sample-build rows).
6. Philosophy, how we work, insights and the closing CTA.
7. Inner pages from the same components, then responsive and accessibility checks.
