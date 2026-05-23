# Design Spirit — "Sunny City Cartoon"

> Extracted from `number_city.html`.
> This document is **concept-agnostic**. It captures only the **visual identity, color philosophy, and interaction feel** so the same spirit can be reused for completely different games (letters, science, music, languages, etc.).
>
> **Rule of thumb:** if a new game looks like it could live on the same street as Number City, you nailed the spirit.

---

## 1. Design Identity in One Sentence

> **A friendly, sun-drenched cartoon world drawn with chunky black outlines, saturated primary colors, and "sticker-style" hard shadows — built for small children, joyful, slightly retro, and unmistakably hand-illustrated.**

Three keywords:

1. **Cartoon-sticker** — every element looks like a flat sticker pressed onto the page.
2. **Sunny / warm** — orange-peach sky, golden sun, never cold or corporate.
3. **Chunky & confident** — thick borders, bold weights, no thin lines, no delicate gradients.

---

## 2. Color Philosophy

### 2.1 The core principle

Colors are **saturated, opaque, and child-friendly**. No pastels. No muted enterprise tones. No translucency on primary surfaces. Every color is a *crayon color* — the kind a 7-year-old would pick.

Black (actually a very dark navy `#1f1d2c`) is the **outline color of everything**. It is the glue that holds the whole design together.

### 2.2 The palette (design tokens)

Use this exact palette as `:root` CSS variables in every new game. **Do not invent new hues** — pick from this set.

#### Sky & atmosphere (background)
```css
--sky-top:    #ffd9a8;   /* warm peach */
--sky-mid:    #ffb88c;   /* sunset orange */
--sky-bottom: #87ceeb;   /* classic cartoon sky blue */
--sun:        #ffd23f;   /* golden yellow */
--cloud:      #ffffff;   /* pure white */
```

The **background is always a vertical 3-stop gradient** from peach → orange → sky blue. This is the *signature*. Keep it even if the game is not about a city — it just feels like a sunny day.

#### Ink (the outline color)
```css
--ink:        #1f1d2c;   /* near-black with a hint of indigo */
--ink-soft:   #4a4760;   /* for secondary text */
```

**Rule:** every shape, button, card, and icon gets a **4px solid `--ink` border**. Smaller elements get 3px. Tiny elements get 2px. Never less.

#### The "rainbow six" — for variety
```css
--b1: #ff5252;   /* red    */
--b2: #ffca28;   /* yellow */
--b3: #66bb6a;   /* green  */
--b4: #42a5f5;   /* blue   */
--b5: #ab47bc;   /* purple */
--b6: #ff9800;   /* orange */
```

Use these for any element that comes in a **set of repeating items**: buttons, cards, tiles, characters, badges, skyline buildings, level pins, etc. Cycle through them in order so every screen has a rainbow feel without being chaotic.

#### Semantic / feedback
```css
--good:  #4caf50;   /* correct answer, success */
--bad:   #ef4f4f;   /* wrong answer, error    */
--warm:  #ff7a59;   /* accent / highlight color (the "brand" warm orange) */
```

`--warm` is the **hero accent** — used for big display numerals, dashed borders, and anywhere you want attention without alarm.

#### Domain accent pairs (block-style elements)
When a game needs paired "primary + dark edge" colors for stylized objects (the way Number City has orange tens-rods and blue ones-cubes):
```css
--accent-a:      #ff7a59;   /* fill  */
--accent-a-edge: #b8401e;   /* darker edge of same hue */
--accent-b:      #3f86ff;
--accent-b-edge: #1b4dad;
```
The edge color is always a **darker, more saturated version of the fill** — never gray, never black.

### 2.3 Color rules

- **Never** use pure black `#000`. Always `--ink`.
- **Never** use plain `#fff` for large surfaces alone — pair it with the ink border so it reads as a "card."
- **Never** use shadows colored with `rgba(0,0,0,0.x)` for the primary aesthetic. Shadows are **solid black-ink offsets** (see §4).
- **Avoid gradients** except for: (a) the sky background, (b) the progress bar (red→yellow→green), (c) the reward card frame.
- **Backgrounds of cards are opaque white** (or `rgba(255,255,255,0.96)` if a hint of background should peek through). Glassmorphism is forbidden — except a single `backdrop-filter: blur(4px)` on the dimmer behind the reward modal.

---

## 3. Typography

### 3.1 Font stack
```css
font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", "Trebuchet MS", system-ui, sans-serif;
```

Yes — **Comic Sans**, intentionally. This is a children's game. The friendly, hand-drawn feel is essential to the spirit. Do not "upgrade" it to Inter or Poppins.

### 3.2 Weight & sizing rules

| Element            | Weight | Size                          | Notes                            |
| ------------------ | ------ | ----------------------------- | -------------------------------- |
| Headings / titles  | 900    | `clamp(1.2rem, 3.5vw, 2rem)`  | always have a colored text-shadow |
| Big focal numerals/letters/words | 900 | `clamp(3rem, 10vw, 6rem)` | color `--warm`, ink shadow |
| Body text          | 700    | `clamp(1rem, 2.5vw, 1.4rem)`  | `--ink-soft` for secondary       |
| Buttons            | 900    | `clamp(1.5rem, 4vw, 2.4rem)`  | uppercase letter-spacing OK      |
| Small labels       | 700    | `0.85rem`                     | `--ink-soft`                     |

### 3.3 Text effects (use generously)

- **Hard offset shadow on titles**:
  `text-shadow: 2px 2px 0 var(--sun);`
- **Hard ink shadow on big focal text**:
  `text-shadow: 4px 4px 0 var(--ink);`
- **Subtle inner depth on bright buttons**:
  `text-shadow: 2px 2px 0 rgba(0,0,0,0.28);`

Letter-spacing on headers: `0.02em–0.05em` (slight). Never tight, never wide.

---

## 4. Shadows, Borders & "Stickerness"

This is the **single most identifying visual trait**. Master this and the spirit is preserved.

### 4.1 The "sticker shadow"

Every meaningful element gets a **solid, offset, un-blurred shadow** in `--ink`:

```css
/* small element */    box-shadow: 2px 2px 0 var(--ink);
/* card / surface */   box-shadow: 6px 6px 0 var(--ink);
/* hero modal */       box-shadow: 10px 10px 0 var(--ink);
```

- The shadow is **always to the bottom-right** (`+x +y`).
- The shadow is **always `--ink`**, never gray, never colored, never blurred.
- The shadow magnitude **scales with the importance/size** of the element (small=2, medium=4, large=6, hero=10).

### 4.2 The chunky border

Every meaningful element gets a **solid `--ink` border**:

| Element size      | Border width |
| ----------------- | ------------ |
| Tiny (sub-icons)  | 2px          |
| Small (chips)     | 3px          |
| Standard (button) | 4px          |
| Hero (modal)      | 5px          |

### 4.3 Border-radius rules

- **Rounded but not pill-shaped.**
- Cards: `12px–24px`
- Buttons: `12px` (with optional asymmetry like `12px 12px 4px 4px` to suggest a "rooftop" or "tab")
- Pills (progress bar, language toggle): `14px–20px`
- Circles (sun, badges, dots): `50%`

### 4.4 Dashed accents

Use **dashed borders** sparingly, in `--warm`, to highlight **special "answer slots" or "fill-this-in" zones**:
```css
border: 4px dashed var(--warm);  /* on word/answer cards */
border: 4px dashed var(--ink);   /* on input display areas */
```

---

## 5. Interaction & Motion

### 5.1 The "press" feel (every clickable element)

```css
.btn:hover  { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--ink); }
.btn:active { transform: translate( 2px,  2px); box-shadow: 2px 2px 0 var(--ink); }
```

The button **lifts up on hover** and **gets pressed down on click** — the shadow shrinks/grows to match. This makes every tap feel physical and toy-like.

### 5.2 Focus rings (accessibility)
```css
:focus-visible { outline: 3–4px solid var(--sun); outline-offset: 2–3px; }
```
Always the sun color, always offset. Visible without being ugly.

### 5.3 Signature animations

| Name             | Trigger          | Effect                                              |
| ---------------- | ---------------- | --------------------------------------------------- |
| `correctPulse`   | right answer     | scale 1 → 1.1 → 1 (gentle bounce), turn green       |
| `wrongShake`     | wrong answer     | horizontal shake ±8px, turn red                     |
| `bounceIn`       | feedback text    | scale 0.5 → 1.15 → 1, fade in                       |
| `popIn`          | modals           | scale 0 + rotate -15° → scale 1 + rotate 0°, with spring easing `cubic-bezier(.34,1.56,.64,1)` |
| `confettiFall`   | reward screen    | colored rectangles drop and rotate 720°             |
| `drift`          | clouds           | infinite slow horizontal scroll (50–65s)            |
| `drive`          | cars/critters    | infinite scroll across bottom (8–13s)               |
| `roadlines`      | ground/path      | marching dashes via `background-position`           |

**Easing:** prefer the springy curve `cubic-bezier(.34, 1.56, .64, 1)` for any "appear" / "succeed" animation. Linear is fine only for ambient loops (clouds, road lines, cars).

**Duration:** keep UI reactions under 600ms. Reward modal can take 500ms to pop in. Ambient loops are slow (>5s).

---

## 6. Layout Anatomy of a Screen

Every game in this family follows the same **stage layout**:

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (white bar, ink border, hard shadow)            │
│    [🏙️ Title]    [Lang Toggle]    [▓▓▓░░░ Progress]    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ATMOSPHERE LAYER (z=0, decorative, non-interactive):  │
│     ☁  ☁         ☀                                     │
│              ☁                                          │
│                                                         │
│   ┌────────────────────────────────────────────┐        │
│   │ QUESTION CARD (white, ink border + shadow) │  z=2  │
│   │   Instruction line                         │        │
│   │   ╔════ focal display ════╗                │        │
│   └────────────────────────────────────────────┘        │
│                                                         │
│   ┌──────┐  ┌──────┐  ┌──────┐    (ANSWER ROW)         │
│   │ btn1 │  │ btn2 │  │ btn3 │   colored, chunky       │
│   └──────┘  └──────┘  └──────┘                          │
│                                                         │
│   feedback line (green/red, animated)                   │
│                                                         │
│   ▓▓▓▓ SKYLINE / GROUND DECOR (z=0, opacity 0.6) ▓▓▓▓   │
│ ═══════════════════════════════════════════════════════ │
│   🚗  ROAD/PATH (z=1, animated)  🚙        🚕          │
└─────────────────────────────────────────────────────────┘
```

### Z-index discipline

| Layer                      | z-index |
| -------------------------- | :-----: |
| Decorative background      |   0     |
| Ground / road              |   1     |
| Main game content          |   2     |
| Header                     |   5     |
| Modals (reward, dialogs)   |   100   |

### Constants

- `#app` = full viewport (`100vh / 100dvh`), `overflow: hidden`, flex-column.
- The bottom **ground strip** (road, grass, water, etc.) is `~80px` tall, anchored bottom, animated.
- The **skyline / horizon row** sits above the ground at `bottom: 80px`, height `~180px`, `opacity: 0.6` so it stays decorative.
- All cards are centered, `width: min(720px, 92vw)`.

---

## 7. Component Recipes (Reusable Patterns)

These are the **archetypes**. Reskin them for any game.

### 7.1 The Header
- White (`rgba(255,255,255,0.85)`) bar.
- `border-bottom: 4px solid var(--ink)` + `box-shadow: 0 4px 0 var(--ink)` (a chunky underline).
- Contains: emoji + title (left), language toggle (center/right), progress bar (right).

### 7.2 The Progress Bar
- White track with 3px ink border, `border-radius: 14px`, hard shadow.
- Fill is a **3-stop gradient: red → yellow → green** (`#ff5252 → #ffca28 → #66bb6a`). This is the universal "you're getting closer to winning" gradient.
- Animates with the springy easing.

### 7.3 The Question Card
- White (`rgba(255,255,255,0.96)`), 4px ink border, `border-radius: 24px`, `box-shadow: 6px 6px 0 var(--ink)`.
- Contains an "instruction" line (soft ink, 700 weight) and a "display" area (the focal subject).

### 7.4 The Focal Display
Three flavors — pick whichever fits the concept:

- **Big numeral/letter/symbol**: huge (`clamp(3rem, 10vw, 6rem)`), color `--warm`, hard ink shadow.
- **Word/label card**: cream background `#fff7d6`, **dashed** `--warm` border, rounded.
- **Visual object**: composed of small "blocks" / "tiles" — paired primary-fill + dark-edge color (see §2.2).

### 7.5 The Choice Button (the "building" button)
The signature element. Even when not literally a building, the button has a building-like silhouette:

- Colored fill from the rainbow six, white text, 900 weight.
- 4px ink border, `border-radius: 12px 12px 4px 4px` (slight asymmetry).
- 5px ink offset shadow.
- A small dark `::before` "antenna" on top (~8×12px).
- An `::after` row of glowing yellow "windows" (radial-gradient dots) at the bottom.
- Hover lifts, click presses (§5.1).
- Cycle classes `.color-1` through `.color-5` so a row of buttons looks like a rainbow city block.

> **Reskin notes:** to repurpose the button as a candy, balloon, planet, etc., keep the **silhouette, border, shadow, colors, and press animation** — just swap `::before` / `::after` decorations to suit the theme (e.g. balloon string + highlight, planet ring + craters).

### 7.6 The On-Screen Keypad / Input
- White buttons, 3px ink border, hard 3px shadow.
- Special "action" keys colored `--b6` (orange) for destructive, `--good` (green) for submit.
- 3-column grid, generous gap (0.5rem).

### 7.7 The Reward Modal
- Full-screen dimmer `rgba(31,29,44,0.7)` + `backdrop-filter: blur(4px)`.
- White card, **5px** ink border, `border-radius: 24px`, **10px** ink shadow.
- Pops in with rotation (`popIn` keyframes).
- Always accompanied by **confetti** (60 pieces, rainbow-six colors, 2–4s fall, 720° rotation).

### 7.8 Feedback Line
- Reserved 40px row directly below answers.
- Green (`--good`) for correct, red (`--bad`) for wrong.
- Animates in with `bounceIn`.
- Use emoji liberally: ⭐ 🎉 ✨ 👏 🚀 💪 🌟.

---

## 8. Iconography & Imagery

- **Emoji are first-class citizens.** Use them in titles (🏙️ ✨ 🚗), feedback strings, and reward icons. They match the friendly tone perfectly and are free.
- **Decorative SVG/CSS shapes** (sun, clouds, buildings, cars) are built from **basic primitives + ink borders + hard shadows** — no detailed illustration needed.
- **Reward art**: small JPG/PNG photos or illustrations framed in an ink-bordered "polaroid" with a warm cream-gradient background, dimensions ~220×140.
- **Never** use line-art icons (Material/Feather/Lucide style). They are too thin and corporate for this aesthetic. If you need a glyph, prefer emoji or a chunky filled silhouette with an ink outline.

---

## 9. Ambient World-Building

Every game should have a small **living background** that loops forever:

- **Sky:** the 3-stop gradient (always).
- **Sun:** a circle with a glowing halo (`box-shadow: 0 0 50px rgba(255,210,63,0.7)`) and an ink border.
- **Clouds:** 2–3 of them, drifting at different speeds (50–65s loops, staggered with negative `animation-delay`).
- **Horizon row:** a faded row of themed objects (buildings, trees, mountains, waves) at 60% opacity so they don't compete with content.
- **Ground strip:** dark surface (road, soil, sand) with marching dashes and 2–3 moving objects (cars, animals, fish).

> **Reskin:** swap the theme but keep the **5 layers** (sky → sun → clouds → horizon → ground). The recipe is what creates the family resemblance.

---

## 10. Localization & Accessibility

The spirit also includes how the game *behaves*:

- **Bilingual toggle** in the header (e.g. TR/EN). All strings live in a `STRINGS` object keyed by language; never hard-code text in markup.
- **Generous touch targets** (≥ 90px tall buttons).
- **ARIA labels** on every interactive element.
- **Focus trap** in modals.
- **`user-select: none`** and `-webkit-tap-highlight-color: transparent` on `<body>` to feel native on mobile.
- **`viewport` meta with `user-scalable=no`** since the layout is already responsive.
- **Reduced reliance on color alone** — correct/wrong always have a shape change (pulse vs shake) and a text message, not just a color.

---

## 11. Responsive Behavior

- Use `clamp()` for almost all font sizes — the design must scale smoothly from 320px phones to desktop.
- Single breakpoint at `max-width: 500px` to shrink paddings, shadows, and decorative elements.
- Background decor (sun, skyline) gets smaller on phones so it never dominates content.
- The bottom road keeps its height; main padding-bottom accounts for it.

---

## 12. The "Spirit Checklist"

Before shipping any new game in this family, verify:

- [ ] Background is the **3-stop peach→orange→sky gradient**.
- [ ] **Sun + clouds + horizon + animated ground strip** are present.
- [ ] Every interactive element has an **ink border + hard offset ink shadow**.
- [ ] Hover lifts, click presses (the "sticker squish").
- [ ] Colors come **only** from the documented palette tokens.
- [ ] Buttons in a row **cycle through 5 rainbow colors**.
- [ ] Header has white card with ink underline + 4px shadow.
- [ ] Progress bar uses the **red→yellow→green** gradient.
- [ ] **Comic Sans** (or fallbacks) is the font.
- [ ] Correct = `correctPulse` + green + ⭐ emoji praise.
- [ ] Wrong = `wrongShake` + red + supportive 🙂 message.
- [ ] Win = confetti + `popIn` reward card with chunky 10px shadow.
- [ ] Bilingual via `STRINGS[lang]` table.
- [ ] No thin lines, no soft drop-shadows, no glassmorphism, no Inter/Poppins, no muted enterprise palette.

If all boxes are checked, the game **belongs to the family**, no matter what it teaches.

---

## 13. CSS Starter Snippet

Copy this into any new game to inherit the spirit instantly:

```css
:root {
  /* sky & atmosphere */
  --sky-top: #ffd9a8; --sky-mid: #ffb88c; --sky-bottom: #87ceeb;
  --sun: #ffd23f; --cloud: #ffffff;
  /* ink */
  --ink: #1f1d2c; --ink-soft: #4a4760;
  /* semantic */
  --good: #4caf50; --bad: #ef4f4f; --warm: #ff7a59;
  /* rainbow six */
  --b1:#ff5252; --b2:#ffca28; --b3:#66bb6a;
  --b4:#42a5f5; --b5:#ab47bc; --b6:#ff9800;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
  font-family: "Comic Sans MS","Chalkboard SE","Comic Neue","Trebuchet MS",system-ui,sans-serif;
  color: var(--ink);
  background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 35%, var(--sky-bottom) 100%);
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* The universal "sticker" recipe */
.sticker {
  background: #fff;
  border: 4px solid var(--ink);
  border-radius: 16px;
  box-shadow: 6px 6px 0 var(--ink);
}
.press {
  transition: transform .12s ease, box-shadow .12s ease;
  cursor: pointer;
}
.press:hover  { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--ink); }
.press:active { transform: translate( 2px, 2px); box-shadow: 2px 2px 0 var(--ink); }
.press:focus-visible { outline: 3px solid var(--sun); outline-offset: 2px; }
```

That's the whole spirit — concept-free, ready to dress up as anything.
