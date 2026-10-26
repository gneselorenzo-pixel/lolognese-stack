# Ficha de estilo — Mosaico de lugar

## id y nombre

- **id:** `mosaico-lugar`
- **nombre:** `Carrusel · Mosaico de lugar`
- **entry:** `templates/mosaico-lugar/MosaicoLugar.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** un lugar se entiende mirándolo, no leyéndolo, y tenés cuatro fotos
  buenas del mismo lugar. Es el único estilo del catálogo que muestra un destino desde
  cuatro ángulos en una sola slide. Ideal para carruseles tipo "8 lugares de la Patagonia"
  donde cada slide es un destino y el texto sobra.
- **No lo uses cuando:** tenés menos de cuatro fotos coherentes entre sí; el nombre del
  lugar pasa de 16 caracteres; o el lugar necesita un dato, una época del año o una
  recomendación para valer la slide. En ese caso usá `rotulo-dato` (una palabra + un dato)
  o `ficha-sobre-foto` (nombre + su historia en dos renglones).

## Referencia visual de origen

Cuatro posts de Instagram de un carrusel de viaje por Guatemala (Acatenango, Antigua,
Volcán de Fuego, Lago Atitlán): mosaico 2×2 a sangre, junta blanca fina, píldora blanca
centrada con pin y el nombre del lugar en mayúsculas, sin ningún otro texto ni marca.
Traducido: la condensada de la referencia pasa a Bricolage Grotesque ExtraBold, el negro a oscuro, y se
suma el wordmark que la referencia no tiene.

## Formato

1080×1350 — carrusel.

## Zonas de layout

- **Mosaico:** ocupa el lienzo entero (`inset:0`), grid 2×2 de fracciones iguales
  (540×675 por cuadrante) con junta blanca de `--mosaico-gap` (6px). Ningún cuadrante
  tiene jerarquía sobre otro. El fondo del grid es blanco: la junta *es* el fondo.
- **Scrim de cabecera:** degradado oscuro de 300px de alto, 0.55 → 0 arriba. Existe sólo
  para que el wordmark se lea sobre cualquier foto; no toca los otros tres cuartos.
- **Wordmark:** top-left, 70px desde arriba, 74px desde la izquierda, blanco, 26px.
  Sin caja.
- **Etiqueta:** píldora centrada en ambos ejes (`top:50% / left:50%`), es decir apoyada
  exactamente sobre el cruce de las cuatro fotos. Padding 20/42, radio `--radius-pill`,
  fondo blanco sólido, sin borde ni sombra. Ancho libre: crece con el nombre, hasta 900px.
- **Alineación:** `center`. Es el único bloque de texto de la slide y está centrado en el
  lienzo, no dentro de una caja; la píldora se dimensiona al contenido. El wordmark es la
  única excepción y va a la izquierda, como en todo el sistema.

## Roles tipográficos que usa

- **Etiqueta de lugar** — `--etiqueta-size` 42px, ExtraBold (800), MAYÚSCULAS,
  `--track-label` 0.04em, line-height 1, oscuro sobre blanco. Rol nuevo, agregado al sistema
  con este estilo.
- **Wordmark** — `LogoMark` variant `white`, 26px.

No usa kicker, ni hook, ni bajada. No hay segundo nivel de texto: si aparece uno, el estilo
dejó de ser este.

## Componentes que usa

- `brand/LogoMark` (variant `white`, size 26).

Deliberadamente **no** usa: `Kicker`, `Hook`, `Bajada`, `SignatureBlock`, `CTA`,
`IndexBadge`. Tampoco `PhotoBackdrop` (no hay foto única) ni `PhotoGrid` — el grid va
escrito en el template porque necesita refs por cuadrante para el filtro y la junta.

## Tokens propios

- `--photo-saturate: 1` / `--photo-brightness: 1` — el filtro de marca queda **apagado**
  por default. El estilo depende de la saturación de las fotos: es lo único que aporta
  color a la pieza, porque la etiqueta es blanco y oscuro. Se puede encender con el tweak
  `filtroMarca` cuando el set de cuatro viene disparejo.
- Agrega al sistema (no los pisa): `--etiqueta-size`, `--track-label`, `--mosaico-gap`.

## Tratamiento de foto

Sin filtro, sin scrim sobre las fotos (salvo los 300px de cabecera para el wordmark), sin
viñeta. Las fotos llegan crudas.

**Consecuencia: la coherencia entre fotos la garantiza la selección, no el sistema.** Las
cuatro tienen que compartir hora del día y temperatura de color. El set que funciona es:
plano amplio del paisaje · una persona dentro de la escena · un detalle o momento
atmosférico · la foto de grupo o de gente.

Encuadre: el centro de cada cuadrante tiene que estar libre en las cuatro, porque la
píldora se apoya justo ahí. Si las cuatro tienen sujeto al medio, movela al pie con
`etiquetaAncla: 'pie'`.

## Reglas de copy

- **Nombre del lugar: máximo 16 caracteres.** Bricolage Grotesque ExtraBold ocupa ~22% más de ancho que
  la condensada de la referencia; arriba de 16 caracteres la píldora se come el ancho del
  lienzo o hay que bajar el cuerpo, y el cuerpo es fijo. "Cataratas", "Perito Moreno",
  "Quebrada", "Bariloche" entran. "Parque Nacional Los Glaciares" no — abreviá o cambiá
  de estilo.
- No lleva kicker, ni bajada, ni dato, ni CTA. Cero copy además del nombre.
- **No hay keyword en naranja**, porque no hay frase. El único naranja de la slide es el
  pin de 34px dentro de la píldora (`pinAcento`, on por default). Es el uso más débil del
  acento en todo el catálogo y está asumido: apagarlo deja la pieza sin nada de marca
  salvo el wordmark.
- El CTA va en su propia slide al final del carrusel, nunca acá.

## Do / Don't

- **Do:** elegí las cuatro fotos como un set, no como cuatro fotos sueltas — misma luz,
  misma paleta. Dejá el centro libre. Usá nombres propios cortos y reconocibles.
- **Do:** repetí el estilo idéntico slide a slide. Lo que hace serie es que sólo cambien
  las fotos y el nombre.
- **Don't:** no agregues un segundo renglón de texto a la píldora, ni una segunda píldora.
  Un rótulo por slide.
- **Don't:** no uses el mismo lugar con fotos de viajes distintos — se nota en el color y
  el mosaico se lee como collage.
- **Don't:** no subas la junta arriba de 12px: deja de ser una junta y se vuelve un marco.
- **Don't:** no lo uses para la slide de apertura. El mosaico no tiene lugar para un hook.

## Set de slides tipo

1. **Hook** — `carrusel-hook` (este estilo no abre carruseles).
2. **Lugar ×N** — `mosaico-lugar`, una slide por destino, 6–8 slides. Mismo layout exacto,
   sólo cambian las cuatro fotos y el nombre.
3. **CTA** — slide de cierre con "comentá VIAJE".
