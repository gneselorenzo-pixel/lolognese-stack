# Carrusel · Hook

## id y nombre

- **id:** `carrusel-hook`
- **nombre:** Carrusel · Hook
- **entry:** `templates/carrusel-hook/CarruselHook.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** el carrusel abre con una promesa enumerable o una afirmación fuerte, y
  hay una foto de paisaje que puede ir full-bleed detrás del texto.
- **No lo uses cuando:** el slide es de datos, comparación o secuencia (ahí el texto compite
  con la foto), o cuando no hay foto suficientemente limpia en la mitad inferior.

## Referencia visual de origen

`templates/carrusel/hook.html` del codebase original (`visite-design-system/`, pipeline
Playwright con `tokens.json`). Los valores del template actual son los de ese archivo.

## Formato

Carrusel 1080×1350 px. Canvas fijo, `overflow:hidden`, fondo base oscuro `#161616`.

## Zonas de layout

Padding lateral de 80px en todo el slide.

- **Alineación:** `left` en todo el slide (el default del sistema). Kicker, hook y afordancia
  arrancan todos en el borde izquierdo del padding; el índice es lo único empujado a la derecha,
  por posición, no por alineación de texto.

- **Barra superior:** `top:80px`, entre `left:80px` y `right:80px`, en fila con
  `space-between`. Izquierda: wordmark. Derecha: índice (`01 / 08`) en SemiBold 24px,
  uppercase, tracking `0.08em`, blanco al 55%.
- **Capas de fondo (de abajo hacia arriba):** foto `cover center` con filtro → viñeta
  radial → gradiente de protección.
- **Bloque de texto:** anclado abajo, `bottom:90px`, de borde a borde del padding. Orden:
  kicker → hook → afordancia de deslizar.
- **Afordancia:** `margin-top:34px`, fila con `gap:14px` — flecha SVG de 46px (línea
  redondeada naranja, sin círculo) + la palabra "Deslizá".

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| kicker | 600 | 26px | `0.14em`, uppercase | naranja `#FF7A00` |
| hook | 800 | 94px | `-0.03em`, line-height 1.0, `text-wrap:balance` | blanco, keyword en naranja |
| wordmark | 800 | 28px | `-0.01em` | blanco, `.ar` en naranja |
| índice | 600 | 24px | `0.08em`, uppercase | blanco 55% |
| deslizá | 600 | 24px | `0.02em` | blanco 82% |

## Componentes que usa

Compone, en la práctica: `LogoMark` (barra superior), `IndexBadge` (índice), `Kicker`,
`Hook`, y el sistema de `PhotoBackdrop` (foto + viñeta + gradiente).

No usa: `SignatureBlock` (sin barra naranja), `CTA` (el CTA vive en el último slide del set),
`Bajada`, `PhotoGrid`, `GraphicBlock`, `StepList`.

## Tokens propios

Ninguno. Usa los defaults de marca — filtro de foto `saturate(0.82) brightness(0.93)`,
gradiente y viñeta tal cual `components/bundle.css`.

## Tratamiento de foto

- Filtro: `saturate(0.82) brightness(0.93)`.
- Viñeta: `radial-gradient(120% 90% at 50% 30%, transparente 55% → oscuro 0.35 100%)`.
- Gradiente de protección: oscuro de transparente arriba a `0.97` abajo, empieza a los 38%.
- **Qué foto pide:** paisaje horizontal, cielo o aire en la mitad superior, sujeto arriba
  del centro. La mitad inferior queda casi tapada — no pongas ahí nada que importe.

## Reglas de copy

- **Hook:** una idea, hasta ~10 palabras. A 94px, más de tres líneas se desarma.
- **Keyword:** una sola palabra en naranja, dentro del hook (la que carga el giro: *no*,
  *una vez*, *abril*).
- **Kicker:** obligatorio, 2–4 palabras, uppercase.
- **CTA:** no va en este slide. Va en el slide de cierre del set.
- Voseo siempre ("Deslizá", "podés"). Sin emoji.

## Do / Don't

- **Do:** dejar que el hook mande — es el elemento más grande del slide.
- **Do:** mantener el índice `NN / NN` para que se lea como serie.
- **Don't:** subirle el brillo a la foto para "que se vea mejor"; el gradiente depende del filtro.
- **Don't:** meter dos palabras en naranja en el hook.
- **Don't:** mover el bloque de texto al centro — este estilo es anclado abajo.

## Set de slides tipo

1. **Hook** — este template.
2. **Contenido ×N** — mismo canvas y padding, foto + kicker + bajada, índice avanzando.
3. **CTA** — cierre con "comentá KEYWORD" (VIAJE / GUIA / ARGENTINA / INFO).
