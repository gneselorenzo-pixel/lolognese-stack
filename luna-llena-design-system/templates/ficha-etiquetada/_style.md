# Carrusel · Ficha etiquetada

## id y nombre

- **id:** `ficha-etiquetada`
- **nombre:** Carrusel · Ficha etiquetada
- **entry:** `templates/ficha-etiquetada/FichaEtiquetada.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** un lugar necesita **varios campos distintos** en la misma slide —
  qué ver, qué comer, un dato práctico— y esos campos se repiten slide a slide con el mismo
  nombre. Es el estilo más denso del sistema: soporta hasta tres filas de dos renglones.
  Sirve para guías de 5–10 lugares donde el lector compara campo contra campo.
- **No lo uses cuando:** el lugar se resuelve en una frase. Con un solo campo las filas
  rotuladas sobran y el trabajo lo hace `ficha-sobre-foto` (jerarquía plana) o `rotulo-dato`
  (una palabra y un dato). Tampoco para itinerarios numerados: eso es `etapa-dia`. Nunca
  para abrir el carrusel.

## Referencia visual de origen

Tres carruseles de Instagram de una cuenta de viajes europea (Puglia día por día, itinerario
de 14 días por España, mini-guía de Baviera). Traducido, no copiado. Se conservó: la tarjeta
de foto con radio grande inset sobre campo liso, la píldora de dato pisando el borde superior
de la tarjeta, el nombre propio monumental cruzando el borde inferior, y la grilla de filas
rotuladas (rótulo a la izquierda, copy a la derecha). Se descartó: el display serif itálico
para los nombres (invariante 1), el blanco como color de texto dominante (invariante 2 — el
durazno de marca es puntuación rara, no puede cargar un estilo), el corte de una palabra
entre dos slides, y la densidad de ~70 palabras por slide.

## Formato

Carrusel 1080×1350 px. Slide de contenido dentro de un set; no es apertura ni pieza suelta.

## Zonas de layout

- **Campo:** oscuro sólido (`--oscuro`), a la vista en los cuatro márgenes.
- **Tarjeta de foto:** `left/right:40px`, `top:40px`, alto **620px**, radio **40px**,
  `overflow:hidden`. No es full-bleed: el margen oscuro alrededor es el estilo.
- **Píldora:** centrada, `top:88px`, pisando la tarjeta. Fill oscuro sólido, texto naranja,
  radio 999, padding `20px 44px`. Opcional (tweak **Chip**).
- **Nombre:** `left/right:58px`, `top:540px`. La tarjeta termina en 660, así que el nombre
  la cruza: el primer tercio cae sobre la foto y el resto sobre el campo. Ese cruce es la
  firma del estilo; si el nombre no toca la foto, es otro estilo.
- **Filas rotuladas:** `left/right:64px`, `top:800px`, grilla `250px 1fr` con `gap:28px`
  entre columnas y `36px` entre filas. Con tres filas de dos renglones el bloque cierra en
  ~1137, dejando ~127px de aire antes del wordmark.
- **Wordmark:** centrado, `bottom:56px`, 26px, opacidad 92%.
- **Alineación:** `left` en todo el slide — el default del sistema, declarado explícito. La
  grilla de dos columnas solo funciona en bandera; centrar cualquier bloque la rompe.
- Sin índice, sin flecha de deslizar.

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| nombre (`--nombre-size`) | 800 | 168px (128px con **Nombre largo**) | `-0.03em`, line-height `1` | blanco |
| rótulo de columna (`--rotulo-col-size`) | 500 | 28px | `0em`, sentence case, line-height `1.3` | naranja |
| copy de fila (`--bajada-size` −2) | 400 | 34px | `-0.01em`, line-height `1.3` | blanco |
| píldora (`--kicker-size` +2) | 600 | 28px | `0.14em`, mayúsculas | naranja sobre oscuro |
| wordmark | 800 | 26px | `-0.01em` | blanco, `.ar` en naranja |

Énfasis inline: `font-weight:700` sobre el nombre propio dentro del copy, como máximo una
vez por fila.

No usa `--hook-size` (94px) ni `--titular-size` (62px): el nombre ocupa ese lugar y a otra
escala.

## Componentes que usa

Compone `LogoMark` (centrado al pie, tamaño reducido).

No usa: `PhotoBackdrop` (su gradiente protege el pie del canvas, y acá la foto es una tarjeta
recortada con su propio scrim interno), `SignatureBlock`, `Kicker` (el rótulo de columna es
un rol nuevo, no un kicker), `Hook`, `CTA`, `ArrowChip`, `IndexBadge`, `PhotoGrid`,
`GraphicBlock`, `StepList`.

## Tokens propios

Agregados al sistema para este estilo (viven en `components/bundle.css`, no acá):

- `--nombre-size: 168px` — el techo anterior era `--hook-size` (94px), pensado para 2–3
  renglones de hook. Acá es una palabra sola que tiene que llegar de margen a margen y
  cruzar el borde de la tarjeta. Es un rol de marca reutilizable, no un número de template.
- `--rotulo-col-size: 28px` — rótulo de columna: Inter Medium 500, **sentence case**,
  `--track-flat`, naranja. `--kicker-size` (26px) no servía: es MAYÚSCULAS con
  `--track-open` (0.14em) y tres kickers apilados compiten entre sí y con el nombre. El
  rótulo de columna tiene que ser silencioso — es una etiqueta de campo, no un antetítulo.

Overrides de scope propio:

- `--photo-saturate: 1` / `--photo-brightness: 1` — la referencia vive del color de la foto
  y acá el texto no depende de ella para leerse. El tweak **Filtro de marca** lo vuelve a
  prender cuando el set mezcla temperaturas muy distintas (precedente: `ficha-sobre-foto`,
  `etapa-dia`).

## Tratamiento de foto

- Filtro efectivo: `saturate(1) brightness(1)` (override del default de marca).
- Protección: scrim interno al pie de la tarjeta (oscuro 0 → 0.55 en los últimos 280px) más
  `text-shadow` en el nombre. La legibilidad de las filas **no** depende de la foto: van
  sobre campo oscuro sólido. El scrim se apaga (tweak **Scrim al pie**) solo si la foto ya
  llega oscura abajo.
- **Qué foto pide:** sujeto en la mitad superior del cuadro y una zona tranquila abajo
  —agua, cielo, ladera en sombra, asfalto— donde el nombre pueda apoyarse. Encuadre
  apaisado o cuadrado: la tarjeta es 1000×620, así que una vertical se recorta fuerte.
- **Chequeo obligatorio:** mirar la slide al 20%. El primer tercio del nombre tiene que
  leerse sobre la foto sin vibrar. Si no, prendé el scrim; si ya está prendido, cambiá la
  foto o pasá el nombre a **Nombre largo** (128px, se apoya más abajo).

## Reglas de copy

- **Nombre:** un topónimo, sin artículo ni bajada. Hasta 11 caracteres a 168px; más largo,
  prendé **Nombre largo** (128px). Nunca en dos renglones y nunca cortado entre slides.
- **Rótulos:** sentence case, 1–2 palabras, **idénticos en todas las slides del set**. La
  repetición exacta es lo que hace que el lector compare. Set sugerido: *No te lo pierdas ·
  Experiencia única · Dato*.
- **Copy de fila:** una frase, máximo dos renglones. Voseo siempre (*subí, quedate, pedí*).
  El voseo cuesta un renglón más que el inglés de la referencia — contalo al escribir.
- **Densidad:** con tres filas de dos renglones el slide ya está lleno. Si necesitás tres
  renglones en una fila, bajá a dos filas (tweak **Filas**).
- **Keyword en naranja:** no va. El naranja ya está en los rótulos y en la píldora. El
  énfasis dentro del copy es por peso (700), no por color.
- **Píldora:** un dato de acceso, mayúsculas, corto: *20 MIN EN TREN*, *BASE DEL VIAJE*,
  *A 2 HS DE SALTA*. Si no hay un dato real, apagala.
- **CTA:** no va acá. Va en un slide aparte con "comentá KEYWORD".
- Sin emoji.

## Do / Don't

- **Do:** mantener los mismos rótulos, en el mismo orden, en todas las slides del set.
- **Do:** elegir fotos con la parte de abajo tranquila. Como en `etapa-dia`, la decisión de
  diseño de este estilo es el casting de foto.
- **Don't:** llenar las tres filas con tres renglones cada una. Ahí se pierde el aire que
  define a Visite y el bloque choca con el wordmark.
- **Don't:** poner el nombre en naranja en todas las slides. El tweak existe para una slide
  de cierre, no para la serie.
- **Don't:** subir la tarjeta a full-bleed. Sin el margen oscuro este estilo es
  `ficha-sobre-foto` mal hecho.
- **Don't:** convertir los rótulos en MAYÚSCULAS "para que se parezcan al kicker". El rol es
  silencioso a propósito.

## Set de slides tipo

1. **Hook** — `carrusel-hook`, abre con el titular y la afordancia de deslizar.
2. **Ficha ×N** — este template, una por lugar (5–10), con los mismos rótulos en todas.
3. **CTA** — cierre con "comentá KEYWORD".
