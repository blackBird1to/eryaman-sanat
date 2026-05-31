# Prompt for Antigravity: Add Exhibitions Page to Eryaman Sanat

---

## CONTEXT

This is a React + Vite website. The project structure is:

```
src/
  context/LanguageContext.jsx   ← global EN/TR toggle (useLang hook)
  components/Navbar.jsx         ← navLinks array + lang-aware rendering
  pages/                        ← one .jsx + one .css per page
  App.jsx                       ← BrowserRouter routes
  index.css                     ← global CSS variables
```

All text is bilingual. The pattern used in every page is:

```jsx
const t = {
  en: { /* English strings */ },
  tr: { /* Turkish strings */ }
}

export default function PageName() {
  const { lang } = useLang()
  const tx = t[lang]
  return ( /* JSX using tx.someKey */ )
}
```

**Do not change this pattern.** The `useLang()` hook from `../context/LanguageContext` must be used exactly as every other page uses it.

---

## TASK: Create an "Exhibitions" page

### 1. New files to create

**`src/pages/Exhibitions.jsx`** — full bilingual component following the exact same pattern as `Courses.jsx` and `About.jsx`.

**`src/pages/Exhibitions.css`** — scoped styles following the same conventions as `About.css` and `Courses.css` (use CSS variables like `var(--accent)`, `var(--bg-card)`, `var(--border-subtle)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--font-display)`, etc. — never hardcode colors).

---

### 2. Files to modify

**`src/App.jsx`** — add the import and route:
```jsx
import Exhibitions from './pages/Exhibitions';
// inside <Routes>:
<Route path="/exhibitions" element={<Exhibitions />} />
```

**`src/components/Navbar.jsx`** — add to the `navLinks` array (insert between Courses and Contact):
```js
{ to: '/exhibitions', label: 'Exhibitions', tr: 'Sergiler' },
```

---

### 3. Page structure for Exhibitions.jsx

Model it after `Courses.jsx`. Use this content structure:

```js
const t = {
  en: {
    label: 'Exhibitions',
    title: 'Our Exhibitions',
    desc: 'A showcase of student and instructor artwork from Eryaman Sanat.',
    viewAll: 'All Photos',
  },
  tr: {
    label: 'Sergiler',
    title: 'Sergilerimiz',
    desc: 'Eryaman Sanat öğrenci ve eğitmenlerinin eserlerinden bir seçki.',
    viewAll: 'Tüm Fotoğraflar',
  }
}
```

The page should have:
- A **page-hero** section (same `.page-hero` class as other pages: `padding: 10rem 0 4rem`, `border-bottom: 1px solid var(--border-subtle)`) with `section-subtitle`, `section-title`, a short `page-hero__desc`, and `section-divider` — all with fade-up animation classes (`fade-up`, `fade-up-2`, `fade-up-3`, `fade-up-4`)
- The exhibitions are **grouped by event** (see data structure below). Each event group renders as a named section with:
  - A group heading (event name, bilingual)
  - A date/location line in muted text
  - A **masonry-style or portrait-optimized grid** of photos (see CSS section)
- A **lightbox** on image click (see below)

---

### 4. Exhibitions data structure

**IMPORTANT — image orientation:** All photos are **portrait** (taller than wide, roughly 3:4 ratio). The grid and card aspect ratio must reflect this. Do NOT use `aspect-ratio: 4/3` (landscape). Use `aspect-ratio: 3/4` instead.

The photos are grouped by exhibition event. Each event is one folder of images. Define the data as an array of event groups:

```js
// Import all images at the top of the file, grouped by event:
import metromall1 from '../assets/exhibitions/metromall-mart/1.jpg'
import metromall2 from '../assets/exhibitions/metromall-mart/2.jpg'
// ... (up to however many photos are in that folder)

// Then other event folders follow the same pattern:
// import event2photo1 from '../assets/exhibitions/event-name/1.jpg'
// etc.

const exhibitionGroups = {
  en: [
    {
      id: 'metromall-mart',
      title: 'Metromall Exhibition – March 28–29',
      date: 'March 28–29, 2026',
      location: 'Metromall, Ankara',
      photos: [
        { src: metromall1, alt: 'Metromall Exhibition photo 1' },
        { src: metromall2, alt: 'Metromall Exhibition photo 2' },
        // ... all photos in this event
      ]
    },
    // Additional event groups go here — one object per folder
  ],
  tr: [
    {
      id: 'metromall-mart',
      title: 'Metromall Sergisi – 28–29 Mart',
      date: '28–29 Mart 2026',
      location: 'Metromall, Ankara',
      photos: [
        { src: metromall1, alt: 'Metromall Sergisi fotoğraf 1' },
        { src: metromall2, alt: 'Metromall Sergisi fotoğraf 2' },
        // ...
      ]
    },
    // Additional event groups go here
  ]
}
```

**Note:** The `src` values in `en` and `tr` arrays point to the same imported image variables — only the `alt` text and labels differ per language.

For the initial build, scaffold **one event group** (Metromall March) with **10 placeholder photo slots** (metromall1 through metromall10). I will add the actual image files and wire up the remaining 5 event groups myself following the same pattern.

---

### 5. Lightbox (click to enlarge)

Add a simple **inline lightbox** — no external library needed, implement it with React state.

Behavior:
- Clicking any photo opens an overlay showing that photo full-size
- The overlay has a dark semi-transparent backdrop (`rgba(0,0,0,0.88)`)
- A close button (×) in the top-right corner
- Left/right arrow buttons to navigate between photos **within the same event group**
- Pressing Escape closes the lightbox
- Body scroll is locked while lightbox is open (`document.body.style.overflow = 'hidden'` on open, restore on close)

Implementation pattern:
```jsx
const [lightbox, setLightbox] = useState(null)
// lightbox = { groupId: string, index: number } | null
```

The lightbox image should use `max-height: 90vh` and `max-width: 90vw` with `object-fit: contain` so portrait photos display correctly without cropping.

---

### 6. CSS requirements for Exhibitions.css

**Grid layout — portrait-optimized:**
- Desktop (>900px): `grid-template-columns: repeat(3, 1fr)` — 3 columns
- Tablet (≤900px): `grid-template-columns: repeat(2, 1fr)` — 2 columns
- Mobile (≤600px): `grid-template-columns: 1fr` — 1 column
- Card image aspect ratio: **`aspect-ratio: 3/4`** (portrait — this is critical, all photos are taller than wide)
- `object-fit: cover` on all images
- `gap: 1rem` between grid items

**Card style:**
- No heavy box-shadow — keep it clean like the rest of the site
- Hover: `transform: scale(1.02)` + `cursor: pointer` with `transition: transform 0.2s ease`
- Caption below image: event context is handled at group level, so individual card captions are optional (just alt text shown on hover via `title` attribute is fine)

**Event group section:**
- Group heading: `font-family: var(--font-display)`, `font-size: 1.4rem`, `font-weight: 300`, `color: var(--accent)`
- Date/location line: `font-size: 0.8rem`, `color: var(--text-muted)`, `letter-spacing: 0.1em`, `text-transform: uppercase`
- Thin `border-bottom: 1px solid var(--border-subtle)` separator below heading block, `margin-bottom: 2rem`
- Space between event groups: `margin-bottom: 5rem`

**Lightbox styles (can be in same CSS file under `.lightbox-*` classes):**
- `.lightbox-overlay`: `position: fixed`, `inset: 0`, `z-index: 1000`, `background: rgba(0,0,0,0.88)`, `display: flex`, `align-items: center`, `justify-content: center`
- `.lightbox-img`: `max-height: 90vh`, `max-width: 90vw`, `object-fit: contain`
- `.lightbox-close`: top-right corner, `position: absolute`, `top: 1.5rem`, `right: 1.5rem`, white ×, `font-size: 2rem`, `cursor: pointer`, no background
- `.lightbox-arrow`: left/right nav buttons, white, large, semi-transparent background on hover

**All colors via CSS variables — no hardcoded values.**

---

## HOW TO ADD PHOTOS (instructions for the developer — not code)

### Image preparation (do this before touching the code)

The raw photos are large PNGs (~5–20 MB each, 3375×4219px portrait). They **must be converted and resized** before adding to the project or the site will be very slow.

**Recommended conversion steps:**
1. **Convert PNG → JPEG** (PNG is unnecessarily large for photos)
2. **Resize** to max **1200px on the long side** (height, since they're portrait)
3. **Export quality**: 80–85% JPEG — visually identical at a fraction of the file size

**Tools to do this in bulk:**
- **Mac**: Open all in Preview → Export → JPEG 80% (or use Squoosh for single files)
- **Windows**: IrfanView (free) → Batch conversion
- **Any OS**: [squoosh.app](https://squoosh.app) (browser-based, free, no install) — drag and drop, choose MozJPEG, resize to 1200px height
- **Command line** (if available): `magick mogrify -resize x1200 -quality 82 -format jpg *.png`

After conversion a 20MB PNG becomes roughly **200–400KB JPEG** — a 50× reduction.

### Folder structure

Create this folder structure inside the project:

```
src/assets/exhibitions/
  metromall-mart/
    1.jpg
    2.jpg
    ... (10 files)
  [event-2-name]/
    1.jpg
    ...
  [event-3-name]/
  [event-4-name]/
  [event-5-name]/
  [event-6-name]/
```

Use the **same folder name** as the `id` field in the `exhibitionGroups` data array so it's easy to match.

### Wiring up additional event groups

For each of the remaining 5 event folders, repeat this pattern in `Exhibitions.jsx`:

1. Add import lines at the top:
   ```jsx
   import event2photo1 from '../assets/exhibitions/event-2-name/1.jpg'
   import event2photo2 from '../assets/exhibitions/event-2-name/2.jpg'
   // ... one line per photo
   ```

2. Add a new object to **both** `exhibitionGroups.en` and `exhibitionGroups.tr` arrays following the exact same shape as the Metromall group.

3. The lightbox and grid will automatically work for the new group — no other code changes needed.

---

## SUMMARY OF CHANGES

| File | Action |
|---|---|
| `src/pages/Exhibitions.jsx` | **Create** |
| `src/pages/Exhibitions.css` | **Create** |
| `src/App.jsx` | **Edit** — add import + Route |
| `src/components/Navbar.jsx` | **Edit** — add to navLinks array between Courses and Contact |

Do not modify any other files.
