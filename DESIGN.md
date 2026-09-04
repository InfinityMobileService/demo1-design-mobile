---
name: MBH Customer App
description: Thai hire-purchase debt app — one white panel, one big number, one gold accent.
colors:
  page: "#F1F2F5"
  surface: "#FFFFFF"
  surface-2: "#F7F8FA"
  surface-3: "#EDEFF3"
  frame: "#DFE1E7"
  line: "#E3E5EA"
  line-soft: "#EFF1F4"
  ink: "#0F1115"
  ink-2: "#55596A"
  ink-3: "#646A79"
  ink-on-gold: "#241903"
  gold-50: "#FDF8EC"
  gold-100: "#F9EFD6"
  gold-200: "#F1DFAF"
  gold-400: "#E2B63F"
  gold-500: "#D2A32C"
  gold-600: "#B0821A"
  gold-ink: "#7A5A0C"
  success: "#0E7C43"
  success-bg: "#E4F5EB"
  warning: "#9A5B06"
  warning-bg: "#FCF0DC"
  danger: "#C42F26"
  danger-bg: "#FCEAE8"
  info: "#1F5FB8"
  info-bg: "#E9F1FC"
typography:
  display:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums lining-nums"
  headline:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  amount-lg:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums lining-nums"
  amount-md:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums lining-nums"
  button:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  tab-label:
    fontFamily: "Prompt, Noto Sans Thai, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "normal"
rounded:
  xs: "8px"
  sm: "10px"
  md: "14px"
  lg: "18px"
  pill: "999px"
  frame: "28px"
spacing:
  xs: "4px"
  sm: "8px"
  grid: "10px"
  md: "12px"
  page: "16px"
  section: "24px"
  screen-end: "28px"
components:
  app-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    height: "56px"
    padding: "0 8px"
  tab-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-3}"
    typography: "{typography.tab-label}"
    height: "60px"
  tab-bar-active:
    textColor: "{colors.gold-ink}"
  button-primary:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.ink-on-gold}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.gold-400}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 20px"
  button-outline-hover:
    backgroundColor: "{colors.surface-2}"
  button-sm:
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "38px"
    padding: "0 14px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  balance-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px 18px 18px"
  list-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "12px 16px"
    height: "62px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    height: "52px"
    padding: "0 14px"
  choice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  badge:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.xs}"
    height: "22px"
    padding: "0 9px"
  badge-danger:
    backgroundColor: "{colors.danger-bg}"
    textColor: "{colors.danger}"
  badge-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success}"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 14px"
  chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  alert:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  notice:
    backgroundColor: "{colors.danger-bg}"
    textColor: "{colors.danger}"
    rounded: "{rounded.md}"
    padding: "13px 14px"
  brand-mark:
    width: "160px"
    height: "104px"
    rounded: "{rounded.lg}"
---

# Design System: MBH Customer App

## Overview

**Creative North Star: "The Daylight Ledger"**

This is a debt app for people who open it worried. Its whole job is to be legible in a hurry, in sunlight, on the one phone the customer is still paying off — so the system is built as a ledger, not as a brand experience. A page is a sheet of light grey with white panels laid on it, and on every ledger page exactly one number is bigger than everything else: the amount due. The identity gate is the exception: no amount, only the photographic lockup and the three contract fields. Everything else in the system exists to keep that number unambiguous and to put a payable action within one thumb-reach of it.

The visual direction is **canon, chosen deliberately**. This is the Thai banking-app category played straight — the shared grammar of SCB EASY, KPLUS, KMA, Krungsri เฟิร์สต์ชอยส์, tplus, TrueMoney and เป๋าตัง — executed to the craft standard of Revolut, Wise and Monzo. It is *not* an own-world, and future work must not smuggle one in. The value here is recognisability: a customer who has used any Thai banking app should not have to learn this one. Every impulse toward a signature device (a gradient hero, a glassy card, a custom illustration language, a novel navigation model) should be spent instead on making the standard components sharper, quieter and faster to read.

The two anti-references are explicit and confirmed: **no card stacked on a shadowed card**, and **no ornament that slows a number down**. Depth is used to say "this is the one thing on the page", never to decorate. The palette is one accent and one accent only — MBH gold — over white and grey, with red, green, amber and blue held in reserve as status vocabulary that never gets borrowed for decoration.

**Key Characteristics:**
- Light-grey ground (`#F1F2F5`), white panels, hairline `#E3E5EA` borders, shadows so faint they read as separation rather than lift
- Exactly one gold accent (`#D2A32C`) carrying exactly three jobs, and never status
- One oversized tabular number (34px) per ledger page, wrapped in a single lifted white panel; the identity gate has no amount
- Every ink level clears 4.5:1 on *both* the white surface and the grey page
- 52px controls, 14–18px radii, 16px page gutter, 420px shell
- Thai-only UI, Lucide icons only, one stylesheet, one shell script, no runtime network calls for icons
- One authored motion moment in the entire product, disabled under `prefers-reduced-motion`
- Identity gate (`index.html`) is a bare screen: 160px photographic brand mark, three contract fields on the grey page, gold button in the screen flow

## Colors

A near-neutral white-and-grey ledger with a single warm metallic accent; every non-neutral hue in the system is a status word wearing a colour, not a decoration.

### Primary
- **MBH Gold** (`#D2A32C`, `--gold-500`): the brand accent and the only fill colour for a primary action. It is the background of `.btn-primary`, the paid marks in the 12-instalment tick strip, the progress bar fill, the selected state of a choice row and switch, and the focus ring's inner glow partner. It never signals success, failure or urgency.
- **Deep Gold Ink** (`#7A5A0C`, `--gold-ink`): gold as *text*. Used for inline links (`ดูทั้งหมด`, `รายการที่ต้องชำระ`), the active bottom-tab label and icon, and gold-tinted list icons. This exists because `#D2A32C` cannot carry text on white; `--gold-ink` measures 6.37:1 on white and 5.69:1 on the grey page.
- **Gold Hover** (`#E2B63F`, `--gold-400`) and **Gold Pressed / Focus** (`#B0821A`, `--gold-600`): the lighter tone is the primary button's hover fill; the darker is the `:focus-visible` outline and the text caret colour.
- **Gold Tints** (`#FDF8EC` `--gold-50`, `#F9EFD6` `--gold-100`, `#F1DFAF` `--gold-200`): backgrounds only. `--gold-50` tints the neutral list icon and the upload box's hover state, `--gold-100` fills the avatar and the input focus glow, `--gold-200` fills a *due-soon* tick and `::selection`.
- **Ink on Gold** (`#241903`, `--ink-on-gold`): the near-black brown that sits on gold fills. Not pure black — it measures 7.42:1 on `--gold-500` and keeps the button from looking like a warning.

### Neutral
- **Ink** (`#0F1115`, `--ink`): all primary text, amounts, headings, and the active chip fill. Blue-black rather than pure black.
- **Ink 2** (`#55596A`, `--ink-2`): section labels, secondary body text, ghost-button and chip text (6.95:1 on white / 6.20:1 on grey).
- **Ink 3** (`#646A79`, `--ink-3`): supporting metadata, list descriptions, field hints, inactive tab labels (5.41:1 on white / 4.84:1 on grey). This is the floor — nothing lighter carries text.
- **Page** (`#F1F2F5`, `--page`): the ground the whole app sits on.
- **Surface** (`#FFFFFF`, `--surface`): every panel, card, list, app bar and tab bar.
- **Surface 2 / 3** (`#F7F8FA` / `#EDEFF3`): the two recessed tones — hover on a list row and inside an outline button (`--surface-2`), and pressed states, the segmented-control track, the neutral badge and the device thumbnail (`--surface-3`).
- **Line / Line Soft** (`#E3E5EA` / `#EFF1F4`): the 1px vocabulary. `--line` draws real boundaries (app bar, tab bar, input, card divider); `--line-soft` draws the inset hairline *between* rows in a list, where a full-strength rule would look like a table.
- **Frame** (`#DFE1E7`): the backdrop behind the phone shell on wide viewports, one step darker than the page so the 420px column reads as a device.

### Status
Four fixed pairs, foreground plus a tinted background, used for badges, alerts, list icons and inline text. They are vocabulary, not palette.
- **Overdue Red** (`#C42F26` on `#FCEAE8`): ค้างชำระ / เกินกำหนด, the notification dot, required-field asterisks, and the overdue tick.
- **Settled Green** (`#0E7C43` on `#E4F5EB`): สำเร็จ / ชำระแล้ว and completed timeline nodes.
- **Pending Amber** (`#9A5B06` on `#FCF0DC`): รอตรวจสอบ / กำลังดำเนินการ — the "in progress, not alarming" register.
- **Informational Blue** (`#1F5FB8` on `#E9F1FC`): neutral system notes, e.g. a submitted slip awaiting review.

### Named Rules

**The Three Jobs Rule.** Gold has exactly three jobs: brand accent, primary action, and inline link. Nothing else. If a new element wants gold for a fourth reason, it is asking to be a status, and status is red/green/amber/blue with a word attached.

**The Both-Grounds Rule.** Every ink level must clear 4.5:1 against *both* `--surface` (#FFFFFF) and `--page` (#F1F2F5). Text moves between panel and ground constantly in this layout, so a token that only passes on white is not a token. `--ink-3` is the lightest legal text colour in the system.

**The Colour Never Travels Alone Rule.** No status is communicated by colour alone. A red amount is accompanied by the word เกินกำหนด, a green figure by สำเร็จ, an amber row by รอตรวจสอบ. The tick strip — pure colour by construction — carries a `role="img"` and a full Thai `aria-label` describing every instalment's state.

## Typography

**Display / Body / Everything Font:** Prompt (400, 500, 600, 700), with `Noto Sans Thai` and the platform UI stack as fallback.

**Character:** One family, no pairing. Prompt is a Thai-Latin geometric sans with loopless Thai forms and matching Latin figures — it is the category's default voice, which is exactly why it is here. Weight and size carry all the hierarchy; there is no second face, no italic, and no uppercase tracking device anywhere in the system. Numbers are locked to `tabular-nums lining-nums` on `body`, so every ฿ figure in a right-aligned column lines up on the digit regardless of value.

### Hierarchy
- **Display / Amount XL** (700, 34px, 1.15, `-0.01em`): the single largest thing on a page — the amount due, inside the balance panel. One per page, no exceptions.
- **Headline** (700, 21px, 1.3, `-0.02em`): page-level statements inside a screen body (`.h1`) — a success confirmation, or the identity-gate title when there is no app bar.
- **Title** (600, 17px, 1.35, `-0.01em`): panel and section headings (`.h2`); also the size of `.amount-md`, the secondary figure in a two-up comparison.
- **Sub-title** (600, 15px, 1.4): in-card headings (`.h3`), the device name, the choice-row title.
- **Body** (400, 15px, 1.5): default. App bar title is the same size at 600.
- **Label** (600, 13px, `+0.01em`, `--ink-2`): the `.section-title` band above every group — a baseline-aligned row with an optional gold link on the right.
- **Caption** (400, 13px / 12.5px, `--ink-3`): `.sub` for supporting lines, `.desc` for list metadata, hints and errors.
- **Tab label** (500, 11px; 600 when active): bottom navigation only.
- **Amounts** (700 at 22px `.amount-lg` and in `.kv.total`; 600 at 17px `.amount-md` and 15px `.amount-sm`): the money ramp, always tabular, always right-aligned in a `.trail` column.

### Named Rules

**The One Big Number Rule.** Exactly one `.amount-xl` per ledger page, and it lives inside the page's single `.balance` panel. The eleven customer pages after the identity gate obey this. The identity gate (`index.html`) carries no amount. A second oversized figure does not create emphasis, it destroys it — step down to `.amount-lg` or a `.kv.total` row instead.

**The Baht Sidebearing Rule.** At 700 weight, Prompt's ฿ has a right sidebearing narrow enough to collide with the leading digit. Wrap the sign — `<span class="baht">฿</span>3,400` — inside `.amount-xl` and `.amount-lg`. The `.06em` correction lives on the glyph, never on the line's letter-spacing, so the digits keep their tabular rhythm.

**The Thai Wrap Rule.** The UI is Thai-only and Thai does not put spaces between words, so the browser will break a line almost anywhere inside a phrase. Never rely on a phrase staying on one line at 430px. Give every trailing number its own `.trail` column so a wrap can never separate an amount from its label, and reserve `white-space: nowrap` for atomic tokens only — the app-bar title (which also gets `text-overflow: ellipsis`) and badge text.

## Layout

A single 420px column (`.app`), centred, `min-height: 100dvh`, filled with `--page` and clipped. Vertically it is three fixed parts: a 56px sticky app bar at the top, a scrolling `.screen`, and — on the four tabbed pages — a 60px sticky bottom tab bar. Both bars are white with a 1px `--line` edge, and the tab bar carries `env(safe-area-inset-bottom)`. A `bare: true` page skips the app bar: the identity gate (`index.html`) and pay-success. The identity gate also has no tab bar and no sticky `.action-bar` — the gold submit sits in the screen flow under the fields.

The screen's gutter is 16px (`--pad`), with 16px of top padding and 28px at the bottom; when a tab bar is present the bottom padding grows by the bar's height. Two patterns break the gutter deliberately by negating it: the horizontally-scrolling `.chip-row` and the sticky `.action-bar`, both of which run edge-to-edge while their content stays on the 16px rhythm.

Vertical rhythm: 12px between sibling cards, 10px inside a two-up grid, 24px above a `.section-title` and 10px below it. Rows carry their own internal padding (`.list-item` 12/16, `.due-row` 14/16, `.kv` 10 vertical) and separate with an inset 1px `--line-soft` hairline rather than a margin, so a list reads as one object.

There is exactly one breakpoint, and it is not a layout change: at `min-width: 480px` the body gains 20px of vertical padding and the shell becomes a rounded 28px device frame lifted off `#DFE1E7` by `--sh-3`. The column never widens, never becomes two columns, and never re-flows for desktop. Desktop is a preview of a phone. Safe-area insets sit on the app bar and screen padding.

Density is thumb-first: 52px primary controls, 40px icon buttons, a 62px minimum list-row height, 44–52px inputs, 36px chips.

**The One Column Rule.** The layout is one column. The only sanctioned horizontal splits are the 2-up `.grid-2` / `.stats` (equal halves, 10px gap) and a leading-icon / body / trailing-value row. Nothing else divides the width.

**The Bare Gate Rule.** The identity gate is a bare screen. No app bar, no card around the form, no `.action-bar`. Fields sit on `--page`. The photographic brand mark and the in-flow gold button are the only chrome.

## Elevation & Depth

Depth is separation, not lift. The system is functionally flat: white panels on a grey ground with hairline borders do almost all the work, and the three shadow tokens are so low-contrast that they read as an edge rather than a light source. Nothing in this system floats.

### Shadow Vocabulary
- **Resting Edge** (`--sh-1`, `0 1px 2px rgba(15,17,21,.06)`): the default for a surface that sits on the page — cards, lists, stat tiles, the active segmented tab, the primary button, the switch knob.
- **The Panel Lift** (`--sh-2`, `0 2px 4px rgba(15,17,21,.05), 0 8px 20px rgba(15,17,21,.06)`): reserved for the `.balance` panel. It is the one surface per page allowed to sit above the others, and that is how a reader finds the amount due without reading.
- **The Device Frame** (`--sh-3`, `0 4px 8px rgba(15,17,21,.06), 0 18px 44px rgba(15,17,21,.12)`): used once, on the ≥480px phone shell. Never on in-app content.

### Named Rules

**The No Card-on-Card Rule.** A shadowed surface never contains another shadowed surface. Nesting is expressed by recession instead: a `--surface-3` track, a `--line` divider, a `--surface-2` inner row, or `.card-flush` (padding removed, `overflow: hidden`) so a list can occupy a card without becoming a second card.

**The One Lift Per Page Rule.** `--sh-2` appears once per page, on the balance panel. If a new surface wants to be more important than the cards around it, it wants to *be* the balance panel — there is only one.

## Shapes

Rounded rectangles throughout, with radius scaled to surface size so nothing looks pill-shaped by accident: 8px (`--r-xs`) for badges and focus rings, 10px (`--r-sm`) for small controls and inner segmented tabs, 14px (`--r-md`) for the working set — buttons, inputs, icon buttons, choice rows, alerts, the QR frame, list icons, 18px (`--r-lg`) for containers — cards, lists, the balance panel, chat bubbles, and 999px (`--r-pill`) only for genuinely circular things: chips, avatars, the switch, the radio dot, timeline nodes, progress bars, the notification dot.

Borders are 1px and hairline-coloured; the only heavier stroke is the 1.5px dashed edge of the upload box, which is dashed precisely because it is a drop target and not a surface. Circles are true circles (equal width and height) and are used for identity and state, never for actions.

**The Radius-by-Size Rule.** The bigger the surface, the bigger the corner: 8 → 10 → 14 → 18. A 52px control is 14px; an 18px-radius object is a container. A control and its container never share a radius.

**The Chat Tail Rule.** The only asymmetric corner in the system is the chat bubble, which drops its near-bottom corner to 6px to point at its speaker. Do not invent other asymmetries.

## Components

### Buttons
- **Shape:** 14px corners (`--r-md`), 52px tall, 15px/600 label, `gap: 8px` to a leading Lucide icon, 1px transparent border so variants can borrow the box without shifting.
- **Primary:** gold fill (`--gold-500`) with `--ink-on-gold` text and a resting edge shadow; hover lightens to `--gold-400`. One per view — it is the payment action.
- **Outline:** white fill, `--line` border, ink text; hover recedes to `--surface-2`. This is the secondary payment path (แจ้งสลิป) and pairs with primary at `flex: 1` each.
- **Ghost / Dark / Danger:** transparent-with-ink-2, near-black-with-white, and red-with-white respectively. Defined; the dark and danger variants are unused in the current eleven pages.
- **Sizes:** `.btn-sm` is 38px at 13px with a 10px radius; `.btn-lg` is 56px at 16px. `.btn-block` fills the width.
- **States:** `:active` scales to `.985` over 120ms — the only press feedback in the system, applied uniformly. Disabled drops to 40% opacity and kills pointer events.
- **Action bar:** the sticky bottom pattern — a white 12px-padded strip with a top hairline, negatively margined to the screen edges, holding one or two `flex: 1` buttons plus an optional 52px square icon button, with safe-area padding. The identity gate does not use it: its primary is a `.btn-block` in the screen flow.

### Badges
- 22px tall, 8px radius, 12px/600, icon-optional, `nowrap`. Neutral by default (`--surface-3` / `--ink-2`); the four status variants each pair a status foreground with its tinted background. Always sits beside the thing it describes, never alone.

### Chips & Segmented Tabs
- **Chips:** 36px pill, white with a `--line` border, `--ink-2` label; the active chip inverts to solid `--ink` with white text — deliberately *not* gold, because a filter is not an action. They live in an edge-to-edge horizontally scrolling row with the scrollbar hidden.
- **Segmented tabs:** a `--surface-3` track with 4px inset padding holding 38px 10px-radius segments; the active segment is a white chip with a resting-edge shadow and ink text. An optional count sits beside the label, and turns `--gold-ink` when its segment is active.

### Cards / Containers
- **Corner Style:** 18px (`--r-lg`).
- **Background:** `--surface` on the `--page` ground.
- **Shadow Strategy:** `--sh-1` only (see Elevation).
- **Border:** none — the shadow and the ground contrast are the boundary.
- **Internal Padding:** 16px; 12px between stacked cards. `.card-flush` zeroes the padding and clips overflow so a full-bleed list or row group can sit inside.
- **`.card-head`** is the standard first child: a title at 15px/600 with a trailing control on a space-between row.

### Balance Panel (signature)
The system's one distinctive component and the reason the app works. A white 18px panel with `--sh-2`, padded 20/18/18, containing in fixed order: a 13px label row with a status badge on the right, the 34px amount, a 13px `--ink-2` meta line naming the instalment and due date, the tick strip, a two-up summary line, a divider, itemised `.kv` rows breaking the amount down (ค่างวด / ค่าติดตามทวงถาม), and the payment button pair. Every ledger page carries exactly one, adapted to that page's subject. The identity gate has none.

### Brand Mark (signature)
The photographic lockup for the identity gate. `.brand-mark` is `assets/logo.jpg` at 160×104, `width: 160px`, `height: auto`, centered, 18px corners (`--r-lg`). It is a photograph, not a drawn mark and not a gold fill. Used once, on `index.html`, above the `.h1`. Elsewhere the same file sits inside a 48px `.device-thumb`, which is a row icon, not this lockup.

### Instalment Ticks (signature)
A 26px-tall flex row of equal 3px-radius bars — one bar per instalment, twelve total, `gap: 3px`. `--line` is unpaid, `--gold-500` is paid, `--danger` is overdue, `--gold-200` is due next. It is a progress bar that refuses to average: the customer can count exactly how many instalments are done and see the overdue one sitting in the middle of the run. It must always carry `role="img"` and a Thai `aria-label` spelling out every state, because it is pure colour.

### Lists & Rows
- **`.list`:** an 18px white container with `--sh-1` and clipped corners; rows separate with an inset 1px `--line-soft` top shadow, never a margin.
- **`.list-item`:** 62px minimum, 12/16 padding, a 40px 14px-radius `.list-ico` tile on the left, a flexible body (15px/500 title over a 12.5px `--ink-3` description), and a right-aligned `.trail` for the amount and its status word. Hover recedes to `--surface-2`, press to `--surface-3`.
- **`.list-ico` tints:** gold by default, with `.g` `.r` `.b` `.y` `.n` mapping to the success / danger / info / warning / neutral background-and-foreground pairs.
- **`.due-row`:** the instalment variant — top-aligned rather than centred, 14/16 padding, trailing column pushed by `margin-left: auto` so amounts hold a true right column across rows.
- **`.kv`:** the money breakdown row — baseline-aligned key (`--ink-3`) and right-aligned value (500), 10px vertical, hairline-separated. `.kv.total` promotes the row: a full `--line` rule above it, a 15px/600 key, and a 20px/700 value.

### Inputs / Fields
- **Style:** white, 1px `--line`, 14px radius, 52px tall, 15px text; the textarea is the same box at `min-height: 104px`. Labels sit above at 13px/500 `--ink-2`; hints and errors sit below at 12.5px.
- **Identity gate:** three required contract fields on `--page` — ชื่อ-นามสกุล, เบอร์โทร, เลขบัตรประชาชน — empty, placeholders only, no per-field hint, no password, no OTP. The one helper is a `.sub` under the title (`กรอกข้อมูลตามสัญญาที่สาขา ไม่ต้องตั้งรหัสผ่าน`), not a field hint.
- **Focus:** border becomes `--gold-500` with a 3px `--gold-100` glow — the only place gold appears on an inactive control, and the reason `--gold-100` exists.
- **Error:** `--danger` border plus a `--danger` message line; the required marker is a red asterisk beside the label.
- **Select:** appearance stripped, with the chevron supplied as an inline data-URI SVG so no runtime request is needed.
- **Search:** a 44px pill with a 42px left inset for a muted icon.
- **Choice row:** the payment-method pattern — a full-width 14px-radius white row with a 22px radio dot on the right; selected state sets a `--gold-500` border plus a 1px gold ring, and fills the dot with a gold-on-white inset.
- **Switch:** 46×28 pill, grey off, `--gold-500` on, with a white knob carrying `--sh-1` and an 18px 180ms travel.
- **Upload box:** a centred 1.5px dashed drop target that warms to a gold border on `--gold-50` when hovered.

### Navigation
- **App bar:** sticky, 56px, white with a bottom hairline, `z-index: 30`. Layout is optional back chevron, then a flexible 16px/600 title with ellipsis overflow, then optional right-hand icon buttons. Icon buttons are 40px squares with 14px radii that fill `--surface-3` on hover; a `.has-dot` button carries an 8px `--danger` dot ringed in white.
- **No bottom tab bar.** The customer app is one Connect-style screen. In-page tabs switch รายการรอเรียกเก็บ / รายการเสร็จสมบูรณ์. Schedule, history, and profile are not destinations in a tab bar.
- **The app bar is injected**, never hand-written: a page declares `window.PAGE = { title, back, right, bare }` and `assets/layout.js` renders the shell and creates the icons. `back` present means a back chevron; `bare: true` means no app bar at all. Login is `index.html` with `window.PAGE = { bare: true }` — contract identity, then `home.html`.

### Feedback
- **`.notice`:** the top-of-page status bar — a full-width 14px-radius tinted row, icon plus one line of 13.5px/500 text plus a trailing chevron, tappable through to detail. Red (`--danger-bg`) for overdue; `.notice.pending` steps down to the amber pair, because "being reviewed" is not an alarm.
- **`.alert`:** the in-flow note — 12/14 padding, 13.5px, icon top-aligned, neutral by default with four status variants. Inline links inside an alert are 600 weight and underlined at a 3px offset.
- **`.empty`:** a centred 48px-padded column with a 32px 1.5-stroke icon and a 13.5px `--ink-3` message.
- **`.timeline`:** the slip-review tracker — a 2px `--line` rail with 16px ringed nodes; done nodes fill green on a green ring, the active node fills gold on a `--gold-200` ring, future nodes stay white on grey.

### Icons
Lucide 0.544.0 only, vendored at `assets/lucide.min.js` and loaded by relative path — no icon CDN at runtime, and the pages open from `file://`. No emoji, ever. Sizes are assigned by context in the stylesheet rather than per use: 18px default, 14px inside small buttons/badges/chips, 21px in an icon button, 22px in the tab bar, 32px in an empty state, all at 1.8 stroke with a baseline correction so an icon sits correctly inside a text line. Icons are always paired with words; no icon is the sole carrier of a meaning.

## Do's and Don'ts

### Do:
- **Do** keep the home screen to the Connect skeleton: identity card, paid/limit, in-page tabs, one due row, log out. Do not reintroduce a bottom tab bar or a settings menu list.
- **Do** wrap the currency sign as `<span class="baht">฿</span>` inside `.amount-xl` and `.amount-lg`.
- **Do** pair every status colour with a Thai word — เกินกำหนด, สำเร็จ, รอตรวจสอบ — and give any colour-only graphic a `role="img"` with a full Thai `aria-label`.
- **Do** keep gold to its three jobs: brand accent, primary action, inline link.
- **Do** check any new text colour against both `#FFFFFF` and `#F1F2F5` at 4.5:1 before adding it.
- **Do** declare the shell through `window.PAGE` and let `assets/layout.js` render the app bar; set `bare: true` on the identity gate and pay-success.
- **Do** use `.brand-mark` for the 160px photographic lockup on the identity gate; do not redraw the logo or fill it with gold.
- **Do** put every style in `assets/theme.css`; there is no second stylesheet and no `<style>` block on any page.
- **Do** right-align amounts in a `.trail` or `.kv .v` column so tabular figures line up down the page.
- **Do** separate rows inside a list with the inset `--line-soft` hairline instead of a margin.
- **Do** carry the direction contract verbatim as an HTML comment inside `<body>` on every page.

### Don't:
- **Don't** nest a shadowed surface inside a shadowed surface; use `.card-flush`, a divider, or a recessed `--surface-2/3` tone instead.
- **Don't** use gold to mean success, urgency, or anything else on the status axis.
- **Don't** introduce a second accent hue, a gradient, a glass or blur effect, or a decorative illustration — the direction is canon and those read as a competing world.
- **Don't** add a second oversized number to a page to make something else feel important.
- **Don't** put text on any colour lighter than `--ink-3` (`#646A79`).
- **Don't** apply `white-space: nowrap` to a Thai phrase; Thai breaks mid-phrase and the layout must survive it at 430px.
- **Don't** add a second animation. There is one authored motion moment in the product — `rise`, 500ms, on the balance panel's amount — and everything else is state feedback at 120–180ms on `cubic-bezier(.2,.8,.25,1)`. All of it is switched off under `prefers-reduced-motion`.
- **Don't** rely on hover to reveal anything; the target is a thumb on a phone.
- **Don't** add a password or OTP field to the identity gate; entry is name, phone, and national ID as written on the branch contract.
- **Don't** wrap identity-gate fields in a card or park the submit in an `.action-bar` — they sit on `--page`, button in flow.
- **Don't** add a runtime network dependency — icons are vendored and pinned, and the select chevron is an inline data URI.
- **Don't** widen the column or reflow for desktop; above 480px the design becomes a framed phone, not a wide layout.
- **Don't** use emoji or a non-Lucide icon, and don't let an icon carry a meaning by itself.
