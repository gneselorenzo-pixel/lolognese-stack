# Carrusel · Autoridad

## id y nombre

- **id:** `autoridad-banda`
- **nombre:** Carrusel · Autoridad
- **entry:** `templates/autoridad-banda/AutoridadBanda.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** la pieza afirma algo con respaldo externo — un ranking, un premio, un
  dato de un informe, una posición ("el destino más elegido", "N.º 1 en X"). La autoridad la
  da el dato, no nosotros.
- **No lo uses cuando:** el contenido es consejo, recomendación propia o invitación. En
  mayúsculas y tercera persona el voseo desaparece, así que este estilo no puede decir
  "tenés que ir" ni llevar "comentá KEYWORD". Tampoco lo uses para abrir un carrusel: es una
  pieza suelta, sin índice ni afordancia de deslizar.

## Referencia visual de origen

Cinco referencias de Instagram de cuentas de viaje anglosajonas (Tripscout DMO Awards,
Dreamy Beaches, Explore Adventures). Traducido, no copiado: se conservaron el corte duro
foto/banda, el titular declarativo en mayúsculas centrado y el inset circular con anillo.
Se descartaron la tipografía comprimida, el durazno como acento general y la bandera
recortada compositada.

## Formato

Carrusel 1080×1350 px. Pieza única (también funciona como post de cierre de un set).
Canvas fijo, `overflow:hidden`, fondo base oscuro `#161616`.

## Zonas de layout

Este estilo **no usa** el padding de 80px de forma uniforme: la banda tiene su propio
padding lateral de 64px para que el titular gane ancho.

- **Foto:** de `top:0` a `918px` (68% del canvas). Corte **duro** contra la banda, no
  degradado. Sobre la foto: viñeta + un gradiente de amarre suave que corta en `0.3` de
  alpha, para que el borde de la foto siga leyéndose contra la banda. No es el gradiente de
  protección de marca y no hace trabajo de legibilidad.
- **Inset circular:** `top:58px; right:58px`, 420×420, radio pill, anillo naranja de 10px.
  Pisa el borde derecho del canvas.
- **Marcador de autoridad:** `top:96px; left:80px`. Chip pill oscuro 82% con contorno
  interior de 2px en durazno: número en 800/30px durazno + label uppercase 600/22px.
- **Banda:** `bottom:0`, alto 432px (32%), oscuro sólido `#161616`.
- **Wordmark:** centrado, apoyado sobre el borde superior de la banda, 26px de aire.
- **Titular:** centrado vertical y horizontalmente dentro de la banda, entre 64px y 64px.
- **Alineación:** `center` en el titular de la banda (`align="center"`, pisa el default del
  sistema). El marcador de autoridad va `left`: es un chip anclado arriba a la izquierda y
  centrarlo lo desarma.

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| titular declarativo (`--declara-size`) | 800 | 66px | `-0.02em`, uppercase, line-height `0.94`, `text-wrap:balance` | blanco, keyword en naranja |
| marcador (número) | 800 | 30px | `-0.01em` | durazno `#FFD3A8` |
| marcador (label) | 600 | 22px | `0.14em`, uppercase | blanco 92% |
| wordmark | 800 | 32px | `-0.01em` | blanco, `.ar` en naranja |

No usa `--hook-size`: a 94px en mayúsculas el titular pasa de 4 renglones y se desarma.

## Componentes que usa

Compone `LogoMark` (centrado sobre la banda) y el sistema de foto de `PhotoBackdrop`
adaptado al recorte de 918px.

No usa: `Kicker` (el estilo tiene un solo nivel de texto), `Bajada`, `CTA`, `ArrowChip`,
`IndexBadge`, `SignatureBlock`, `PhotoGrid`, `GraphicBlock`, `StepList`.

## Tokens propios

Agregados al sistema para este estilo (viven en `tokens.json` y `components/bundle.css`, no acá):

- `--durazno: #FFD3A8` + `--accent-punct` — el brief ya nombraba el durazno como quinto
  color pero `colors.css` no lo declaraba. El alias fija que es un acento **puntual**
  (badges de ranking/premio), no un segundo acento general: el naranja sigue siendo el acento.
- `--declara-size: 66px` y `--leading-block: 0.94` — el rol que faltaba: titular en
  mayúsculas, centrado, multi-renglón.

Overrides de scope propio:

- `--photo-saturate: 1` y `--photo-brightness: 1` — la referencia vive de la foto punchy;
  con el filtro de marca el corte duro se apaga y la banda queda pegada a la foto.

## Tratamiento de foto

- Filtro efectivo: `saturate(1) brightness(1)` (override del default de marca).
- Viñeta: `radial-gradient(120% 90% at 50% 32%, transparente 52% → oscuro 0.32 100%)`.
- Gradiente de amarre: oscuro de transparente a `0.3`, arranca al 56% del **alto de la foto**
  (no del canvas). Tope de alpha `0.3`: más que eso apaga el corte duro y la foto se funde
  con la banda. No hace trabajo de legibilidad: el texto vive en la banda sólida.
- **Qué foto pide:** paisaje horizontal, sujeto en el tercio central, aire arriba-derecha
  para que el inset circular no tape nada. Los últimos 150px de la foto quedan levemente
  oscurecidos por el amarre — no pongas ahí el sujeto.
- **Inset:** encuadre cerrado del mismo destino, otro punto de vista. Nunca la misma toma.

## Reglas de copy

- **Titular:** una oración declarativa en tercera persona, 8–14 palabras, uppercase. A 66px
  entran ~22 caracteres por renglón; más de 4 renglones no cabe en la banda.
- **Keyword:** una frase corta en naranja (2–4 palabras), la que carga el dato. En este
  estilo el keyword puede ser una frase, no una palabra sola, porque el titular es más largo.
- **Marcador:** obligatorio y corto — número + label de 2–3 palabras. Es lo que justifica
  el estilo; sin dato externo, usá otro.
- **Kicker:** no lleva.
- **CTA:** no va acá. Si el set necesita CTA, va en un slide aparte.
- Sin emoji. El voseo no aparece en el titular por ser tercera persona; sí en el copy del post.

## Do / Don't

- **Do:** mantener el corte duro. Si lo suavizás a degradado, esto se vuelve `carrusel-hook`.
- **Do:** un solo elemento en durazno por pieza — el marcador y nada más.
- **Don't:** poner el keyword en durazno. El keyword es naranja siempre; el durazno es
  sólo autoridad.
- **Don't:** usar este estilo sin un dato externo real. Es su única razón de ser.
- **Don't:** sumarle kicker, bajada o flecha de deslizar. La densidad baja es el estilo.
- **Don't:** agregar banderas recortadas ni collages: colores fuera de la paleta.

## Set de slides tipo

Pieza suelta de un slide. Si entra en un set:

1. **Autoridad** — este template, abre con el dato.
2. **Contenido ×N** — `carrusel-hook` para el resto del set (kicker + bajada, índice).
3. **CTA** — cierre con "comentá KEYWORD".
