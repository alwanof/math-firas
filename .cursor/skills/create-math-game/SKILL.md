---
name: create-math-game
description: Build a new standalone HTML/CSS/JS math game for Turkish primary Grade 1 or Grade 2, using games/number_city.html as the reference implementation, following the Sunny-City-Cartoon design spirit, with EN+TR i18n and weighted-random reward modal. Use when the user asks to create, generate, build, scaffold, or "add" a math game, picks one of the 40 prompts in prompts.md, mentions a Turkish curriculum code like MAT.1.x.x or MAT.2.x.x, or asks for a new game in the games/ folder.
---

# Create Math Game

Build a new single-file math game for the **math-firas** project. Every game must (a) match the visual spirit of `@games/number_city.html`, (b) work in **English and Turkish**, and (c) be registered in `@index.html` with a meaningful bilingual title.

## When to use

The user asks for a new game by any of:
- Game name from `@prompts.md` (e.g. "Number Garden", "Sky Ladder", "Pattern Lab")
- Prompt number ("make game #7")
- Curriculum code (`MAT.1.1.5`, `MAT.2.1.7`, …)
- Concept ("a game about ordinal numbers", "skip counting by 5s")

## Inputs (read these first, in order)

1. `@prompts.md` — the 40 game briefs. Find the prompt matching the user's request.
2. `@turkish-primary-math-curriculum-grades-1-2.md` — confirm the curriculum code and grade.
3. `@DESIGN_SPIRIT.md` — the visual identity bible.
4. `@games/number_city.html` — the reference implementation. **Open it and use it as a structural template.** Copy its file layout, helpers (`rand`, `pick`, `shuffle`), state machine, focus trap, confetti, language toggle, and reward modal verbatim where the concept allows.
5. `@.cursor/rules/design-spirit.mdc`, `@.cursor/rules/game-conventions.mdc`, `@.cursor/rules/index-registry.mdc` — the binding rules.

## Workflow

```
Task progress:
- [ ] 1. Identify the prompt & curriculum code
- [ ] 2. Choose slug + bilingual titles + tile color
- [ ] 3. Scaffold games/<slug>.html from the number_city template
- [ ] 4. Replace question generators with concept-specific ones
- [ ] 5. Fill STRINGS.en and STRINGS.tr (every visible string)
- [ ] 6. Verify the design checklist (palette, fonts, shadows, animations)
- [ ] 7. Register the game in index.html
- [ ] 8. Smoke-test mentally: TR default, toggle EN, win once, replay
```

### Step 1 — Identify

Pick the prompt from `prompts.md` that matches the user's request. Note:
- The grade (1 or 2)
- The `MAT.x.x.x` code
- The numeric range the concept covers (e.g. 0–20, 0–100, halves/quarters)

### Step 2 — Slug & titles

- **Slug**: kebab-case, descriptive, matches the EN name. Examples: `number-garden`, `sky-ladder`, `clock-castle`.
- **Bilingual titles**: provide both. Use these defaults (translate idiomatically, not literally):

| EN                       | TR                       |
| ------------------------ | ------------------------ |
| Number Garden            | Sayı Bahçesi             |
| Treasure Count           | Hazine Sayımı            |
| Ten-Frame Picnic         | Onluk Piknik             |
| Line-Up Adventure        | Sıra Macerası            |
| More Or Less Monsters    | Az Çok Canavarları       |
| Sky Ladder               | Gökyüzü Merdiveni        |
| Jumping Frogs            | Zıplayan Kurbağalar      |
| Rocket Countdown         | Roket Geri Sayım         |
| Pattern Parade           | Örüntü Geçidi            |
| Number Train Patterns    | Sayı Treni Örüntüleri    |
| Guess The Jar            | Kavanozu Tahmin Et       |
| Desk Detective           | Sıra Dedektifi           |
| Balance Bakery           | Terazi Fırını            |
| Money Market             | Para Pazarı              |
| Snack Shop Addition      | Atıştırmalık Toplama     |
| Toy Box Subtraction      | Oyuncak Kutusu Çıkarma   |
| Math Mind Magic          | Matematik Sihri          |
| Equal Sign Balance       | Eşittir Terazisi         |
| Map Quest                | Harita Görevi            |
| Shape Safari Data Day    | Şekil Safarisi Veri Günü |
| Number City              | Sayı Şehri               |
| Base-Ten Builder         | Onluk İnşaatçı           |
| Robot Decomposer         | Robot Ayrıştırıcı        |
| Number Line River        | Sayı Doğrusu Nehri       |
| Skip Count Carnival      | Ritmik Sayma Karnavalı   |
| Pattern Lab              | Örüntü Laboratuvarı      |
| Estimation Explorer      | Tahmin Kâşifi            |
| Fraction Pizza Party     | Kesir Pizza Partisi      |
| Coin Combo Shop          | Bozuk Para Dükkânı       |
| Clock Castle             | Saat Kalesi              |
| Calendar Quest           | Takvim Görevi            |
| Measure Mission          | Ölçüm Görevi             |
| Weigh It Workshop        | Tartı Atölyesi           |
| Adventure Word Problems  | Maceralı Problemler      |
| Strategy Stars           | Strateji Yıldızları      |
| Inverse Machine          | Ters İşlem Makinesi      |
| Equal Groups Zoo         | Eşit Gruplar Hayvanatı   |
| Sharing Safari           | Paylaşım Safarisi        |
| Operation Balance        | İşlem Terazisi           |
| Geometry And Data Studio | Geometri ve Veri Stüdyosu |

- **Tile color**: pick `--b1`..`--b6` from the palette. Try to give each new game a different color from its grade-neighbors so the launcher looks like a rainbow.

### Step 3 — Scaffold

Read `@games/number_city.html` and copy its skeleton:
- The full `<style>` block — palette tokens, header, progress bar, ambient layers (sky/sun/clouds/skyline/road), question card, choice button (`.choice-btn` + `.color-1..5`), numpad styles, feedback animations, reward modal, confetti, responsive breakpoint.
- The full `<script>` IIFE skeleton — `STRINGS` table, `lang` state + `localStorage` persistence, `S()` helper, `rand`/`pick`/`shuffle`, the `state` object, DOM refs, `updateProgress`, `renderQuestion`, `submitAnswer`, `nextQuestion`, `chooseReward`/`showReward`, `trapFocus`/`releaseFocus`, `spawnConfetti`, `resetGame`, keyboard handler, init.
- Theme tweaks (e.g. swap "city skyline" for a "garden" or "rocket launch pad" silhouette) are allowed but **must keep the 5 ambient layers** (sky → sun → clouds → horizon → ground) and the sticker aesthetic.

### Step 4 — Question generators

Replace the `gen*` functions and the `GENERATORS` weighted list with ones for the new concept. Keep the same return shape:

```js
{
  instructionKey: 'someKey',           // looked up in STRINGS for current lang
  displayHtml:    '<div>...</div>',    // focal display HTML
  choices:        [a, b, c],           // for mode 'multiple-choice'
  answer:         correctValue,
  mode:           'multiple-choice' | 'numpad' | 'drag' | ...,
  type:           'numeric' | 'word' | 'blocks' | 'shape' | ...,  // how to render choice content
}
```

For modes the reference doesn't cover (drag-and-drop, balance scale, draggable clock hands), invent them but follow the same press/feedback/animation rules.

### Step 5 — Bilingual strings

Every visible string must exist in both `STRINGS.en` and `STRINGS.tr`. **Do not hard-code any user-facing text in HTML or in `gen*` functions.** Always use `S('key')`.

Minimum string keys to provide:
- `title` (e.g. `'🏙️ Number City'` / `'🏙️ Sayı Şehri'` — include the same emoji in both)
- one instruction key per question type
- `praises` (array of ~7 cheerful messages with emoji)
- `wrongMsg(answer)` (function returning a supportive line with the correct answer)
- `rewardTitle`, `rewardMsg`, `playAgain`, `rewardMissing`
- `langToggle` (the *other* language code, `'EN'` in TR, `'TR'` in EN)
- ARIA labels for answer, picture, typed input, delete, submit, digit, progress

Default language is `tr`. Save preference to `localStorage` under `mf_lang`.

### Step 6 — Design checklist

Run through `@.cursor/rules/design-spirit.mdc`'s checklist. Do not skip.

### Step 7 — Register in index.html

Open `@index.html`, find the correct grade `<section>`, and add a new `<article class="game-card color-bN">` with:
- Bilingual `<h3>` (EN/TR titles, swapped by toggle)
- `<span class="grade">Grade N</span>` and `<span class="code">MAT.x.x.x</span>` chips
- Bilingual `<p class="summary">` (EN/TR)
- `<a class="play-btn" href="games/<slug>.html">` with bilingual "Play" / "Oyna"

Insert in sorted order by curriculum code within the section. See `templates/index-card.html` in this skill folder for the exact markup.

### Step 8 — Verify

Mentally walk through:
1. Open the game → background is the peach-orange sky gradient.
2. UI loads in Turkish by default. Toggle to English → all text changes, current question re-renders.
3. Answer correctly → green pulse + ⭐ praise + progress bar advances with springy ease.
4. Answer wrong → red shake + supportive message naming the correct answer.
5. Reach the target → confetti + reward modal pops in with rotation + reward image (or emoji fallback).
6. Click Play Again → progress resets, new question.
7. Open `index.html` → new card appears in the correct grade, correct tile color, link works.

## Anti-patterns

- ❌ Multiple HTML files per game, external CSS/JS, CDN fonts, framework imports.
- ❌ Hard-coded English-only or Turkish-only strings.
- ❌ A "score / X questions complete" UX. The loop is **infinite until the bar fills**.
- ❌ Blurred or gray box-shadows. Always solid `--ink` offset.
- ❌ New colors outside the palette tokens.
- ❌ Forgetting to add the game to `index.html`.

## Lessons learned (must-read before coding)

These are real bugs that have shipped in the project. Read the full list in [`@.cursor/rules/game-conventions.mdc`](../../rules/game-conventions.mdc) — Lessons Learned section. The biggest ones:

1. **Reward image paths must be `../images/<file>.jpg`** (relative to `games/<slug>.html`). Bare `images/...` silently resolves to `games/images/...` and every reward falls back to the emoji placeholder.
2. **Preload then attach** the reward `<img>` — set `img.src` last and only `appendChild(img)` inside `img.onload`. The naive append-before-load pattern flashes a broken-image glyph next to the fallback when the file is missing.
3. **Every visible string lives in `STRINGS`** — ARIA labels, count words (`onluk`/`birlik`, `tens`/`ones`), zone titles, toast messages. Audit by searching the script section for the Turkish/English phrase: each should appear exactly once, inside the STRINGS table.
4. **Turkish unit words are `onluk` / `birlik`** (singular noun forms), not `onlar` / `birler` (plurals/pronouns). Header chips may pluralize visually (`ONLUKLAR`/`BİRLİKLER`) but inline equations use the singular form.
5. **Don't double-id one element** (`<button id="checkBtn" id="checkLabel">`) — the second attribute is silently ignored and any `getElementById` on it returns `null`, crashing later code.
6. **Don't overload `state.*` field names** mid-refactor (e.g. flipping `state.locked` from `boolean` to `{tens, ones}`). Add a new field name like `state.prefill` instead.

When in doubt, run a quick check after writing the game:

```bash
# Every TR phrase should appear exactly once = inside STRINGS only
node -e "const c=require('fs').readFileSync('games/<slug>.html','utf8');
const s=c.split('<script>')[1]||'';
['Kontrol Et','Temizle','İpucu','Kazandın','Tekrar Oyna','onluk','birlik']
  .forEach(p=>console.log(p+':', (s.match(new RegExp(p,'g'))||[]).length));"
```

## Additional resources

- Card markup template: [templates/index-card.html](templates/index-card.html)
- Title translation table: see Step 2 above (also exported in [reference.md](reference.md))
- Reference implementation: `@games/number_city.html`
- Visual identity bible: `@DESIGN_SPIRIT.md`
