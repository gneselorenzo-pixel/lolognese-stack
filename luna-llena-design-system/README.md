# Visite.ar Perú — Design System

Variante de **Visite.ar Original** pensada para publicaciones de Perú en Instagram (carruseles,
historias, posts cuadrados). Cambian **solo la paleta y la tipografía**: estructura, espaciados,
radios, sombras, formatos, componentes y layouts son los del Original. Naranja y blanco, moderno,
simple y de impacto; el naranja es el único color protagonista y el resto son neutros cálidos.

This is a **content design system**, not an app or website. The "products" are the three
Instagram formats. Everything here — tokens, components, templates — serves making those
posts fast, on-brand, and repeatable.

## Sources

- **Base:** Visite.ar Original (mismos tokens de espaciado, radios, formatos, overlays y filtro de
  foto; mismos componentes y templates). No se modificó el Original.
- **Paleta y tipografía:** brief de Visite.ar Perú (naranja #FF7A00, Bricolage Grotesque + Inter).
- **Assets:** `assets/placeholder.jpg` (la misma foto de muestra del Original).
- **Fuentes:** Google Fonts. Cada pieza carga
  `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:ital,wght@0,100..900;1,100..900&display=swap`
  (los previews, templates y kits ya lo traen en el `<head>`).

---

## CONTENT FUNDAMENTALS

Idénticas al Original.

**Language.** Español argentino, **voseo siempre**: *comentá, tenés, deslizá, andá, guardá, mirá*.
Never *comenta / tienes / desliza*.

**Register.** Formal-but-warm. We speak *to* the reader ("vos"), like a well-traveled friend giving
honest advice — not a tour operator, not a brochure. Confident, useful, never hype-y.

**Hooks.** One punchy idea. The keyword is **highlighted in orange**. Examples:
- "Los 8 lugares que **no** podés saltearte en tu primer viaje"
- "Esto lo tenés que ver **una vez** en la vida"
- "Andá en **abril**: hay menos gente"

**CTA (carrusel).** Always the ManyChat trigger pattern: **"comentá [KEYWORD]"**. Approved keywords:
**VIAJE, GUIA, ARGENTINA, INFO** (o la que defina la pieza). The keyword is uppercase and orange.

**Historias.** One idea per slide. Lots of air. Casual and human. A kicker + a single line is plenty.

**Casing.** Kickers, labels and CTA keywords are UPPERCASE with open tracking. Hooks and body are
sentence case. The wordmark is always **visite.ar** (lowercase, `.ar` in orange).

**Emoji.** Not used. Unicode only as functional glyphs (chevron `›`, arrow `↑`).

**Tone test:** if it sounds like an airline ad or uses "¡Descubrí los secretos de…!", rewrite it.
If it sounds like a friend who's actually been there, keep it.

---

## VISUAL FOUNDATIONS

**Color.** Naranja y neutros cálidos. **Naranja `#FF7A00`** (`--primary`) es el único protagonista:
acciones principales, etiquetas (kickers), palabra clave y detalles puntuales. **`#161616`**
(`--text`) es el texto y la superficie oscura; **`#FFFFFF`** (`--bg`) el fondo y el texto sobre
oscuro; **`#F6F5F2`** (`--surface`) tarjetas y bloques; **`#5C5A55`** (`--text-2`) texto secundario;
**`#E7E5E0`** (`--border`) bordes; **`#FFD3A8`** (`--accent`) resaltados, detalles y líneas, y también
el rol puntual de dato externo o ranking (`--accent-punct`). No hay gradientes decorativos; el único
gradiente es el overlay oscuro de protección sobre foto.

**Reglas de color Perú.**
- **Texto sobre naranja: siempre `#161616`** (`--on-primary`). El blanco sobre `#FF7A00` da 2,61:1 y no cumple AA.
- **El naranja no es fondo de bloques grandes de texto.** Solo acciones, etiquetas y detalles.
- **Texto naranja sobre fondo claro: `#E56D00`** (`--primary-on-light`), 3,22:1 sobre `--bg`, válido desde 24 px (kicker 26 px, wordmark, palabra clave en títulos). **No sobre `--surface`** (2,95:1).
- El slide claro (CTA) va sobre `--bg` blanco, no sobre `--surface`.
- `--surface-dark-2` (`#242321`) es un derivado: la paleta Perú no trae un equivalente del panel sobre oscuro.

**Type.** Dos familias, de Google Fonts:
- **Títulos → Bricolage Grotesque** (`--font-display`): hooks, declara, titular, rótulo, nombre, etiqueta, idea de historia, números de StepList y wordmark. ExtraBold (800) con tracking negativo (-0.03em) en hooks.
- **Cuerpo → Inter** (`--font-sans`): kicker, bajada, cuerpo, ficha, frase, CTA, footer e índice. Kickers / labels / CTA: SemiBold (600), UPPERCASE, tracking abierto (0.14em).
- Tamaños, pesos, tracking e interlineado son los del Original. Bricolage llega hasta 800: `--fw-black` (900) no se nota en títulos.

**Signature bar — optional, not default.** `SignatureBlock` is a plain spacing wrapper by default.
It has a `bar` variant — a 5px orange line to the left of the text — for when a layout asks for it.

**Photo treatment.** `filter: saturate(0.82) brightness(0.93)` es el **default de marca, no un
invariante**: vive en `--photo-saturate` / `--photo-brightness` y un estilo puede sobreescribirlo.
Over the photo sits the **protection overlay**: a `#161616` gradient running transparent at top →
near-solid at the bottom (~60%), plus a subtle vignette. For styles that anchor text to the top,
`--overlay-head` is the exact mirror. Imagery vibe: calm, slightly muted, never oversaturated.

**Backgrounds.** Full-bleed photo (with overlay) or solid `#161616`. Blanco for the occasional light
slide (e.g. a carrusel CTA). No textures, no patterns, no decorative gradients.

**Layout.** Fixed canvases: carrusel 1080×1350, historia 1080×1920, cuadrado 1080×1080. Safe-area
padding 80px on carrusel; historias respect Instagram's UI zones (safe-top 230px, safe-bottom 320px).
Text block anchors to the bottom on carrusel/photo slides, centered on solid story slides. The logo
sits top-left, an index/meta top-right.

**Radii.** Pills (999) for chips/avatars, 28 for cards/CTA blocks, 16 for small pieces.

**Cards/blocks.** Flat, solid fill with a 28px radius — no border, no drop shadow in the exported
posts. Shadows are reserved for the post-preview chrome.

**Animation.** Static social images; motion lives only in the preview/kit chrome.

---

## SISTEMA DE ESTILOS

Un solo design system, muchos estilos. Tres capas:

- **Tokens** (`tokens.json` + `components/bundle.css`) = la marca. Casi nunca se toca.
- **Components** (`components/`) = las piezas reutilizables.
- **Templates** (`templates/`, una carpeta por estilo) = **acá crece el sistema.**

Cada estilo vive en `templates/<slug>/` con su entry `.dc.html` y su ficha `_style.md`
(modelo en `templates/_style.template.md`). El índice es `templates/catalogo.md`.

### Invariantes que todo estilo debe respetar

1. **Tipografía cerrada: Bricolage Grotesque para títulos, Inter para cuerpo.** Sin una tercera familia, nunca.
2. **Paleta cerrada, naranja como único protagonista.** Negro cálido, blanco, superficie, texto secundario, borde y durazno puntual son el resto; ningún color fuera de `tokens.json`.
3. **El wordmark `visite.ar` está presente** en cada slide.
4. **Voz:** voseo siempre, sin emoji, y el CTA de carrusel es "comentá KEYWORD".
5. **El texto siempre se lee sobre la foto.** El gradiente de protección y la legibilidad no se negocian.
6. **El texto naranja cumple contraste:** sobre oscuro `--primary`; sobre claro `--primary-on-light` y desde 24 px.

### Regla de decisión para un estilo nuevo

**a) Solo cambia el layout** → template nuevo en `templates/<slug>/` y su ficha. No se tocan tokens ni componentes.

**b) Necesita un rol tipográfico o un token que no existe, pero dentro de las dos familias y de la
paleta** → primero se extiende `tokens.json`, después se escribe el template.

**c) Necesita otra familia o colores fuera de la paleta** → no es un estilo de Visite.ar Perú. Se traduce al sistema o se descarta.

---

## ICONOGRAPHY

The brand is **near-iconless by design**: no icon font, no icon set. What little iconography exists
is **functional glyphs**: a long rounded line arrow in orange, no circle (`ArrowChip`), and `↑` for
"swipe up". The wordmark is typeset live as **visite.ar** (Bricolage Grotesque ExtraBold, `.ar` in
orange) via `LogoMark`. **No emoji.** If icons are ever needed: minimal, thin, monoline (Lucide-style).

---

## INDEX

**Root**
- `tokens.json` — the tokens: colors, type, spacing, radii, shadow.
- `README.md` — this guide.

**Components** (`components/`)
- `LogoMark` — visite.ar wordmark. `SignatureBlock`, `Kicker`, `Hook`, `Bajada`, `StepList` — content.
- `PhotoBackdrop`, `PhotoGrid` — media. `CTA`, `ArrowChip`, `GraphicBlock`, `IndexBadge` — UI.

**Templates** (`templates/`) — un folder por estilo
- `catalogo.md`, `_style.template.md`
- `carrusel-hook/`, `autoridad-banda/`, `ficha-sobre-foto/`, `rotulo-dato/`, `etapa-dia/`, `ficha-etiquetada/`, `mosaico-lugar/` (entry + ficha).

**UI kits** (`ui_kits/`) — `carrusel/` (1080×1350), `historia/` (1080×1920), `cuadrado/` (1080×1080).

**Guidelines** (`guidelines/`) — `spacing-overlay.card.html`, the overlay specimen.

**Assets** (`assets/`) — placeholder photo.

---

## CAVEATS

- Only one photo (`placeholder.jpg`) ships with the system, so photo slides reuse it. Drop real Peruvian photography into `assets/` and swap `src`.
- El copy de muestra de los templates y previews es el del Original (ejemplos argentinos); reemplazalo por contenido de Perú al usarlos.
- Bricolage Grotesque e Inter se cargan desde Google Fonts: sin conexión caen al stack del sistema.
- Pares que no cumplen AA y deben evitarse: blanco o naranja `#FF7A00` sobre claro, `#E56D00` sobre `--surface`, texto secundario sobre oscuro. Ver las notas de uso de cada token.
