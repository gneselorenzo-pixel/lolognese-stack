# Carrusel · Etapa por día

## id y nombre

- **id:** `etapa-dia`
- **nombre:** Carrusel · Etapa por día
- **entry:** `templates/etapa-dia/EtapaDia.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** el carrusel es un itinerario y cada slide es un día o un tramo numerado
  ("Día 9", "Días 10 a 11"). El orden de las slides *es* el contenido: hay secuencia y
  progresión, no una lista de lugares intercambiables. Sirve para 6–12 slides.
- **No lo uses cuando:** no hay numeración ni secuencia. Sin el kicker de día el estilo se
  queda en "titular + bajada sobre foto" y ese trabajo ya lo hacen mejor `ficha-sobre-foto`
  (jerarquía plana, ancla elegida por foto) o `rotulo-dato` (taxonomía, repetición exacta).
  Tampoco para abrir un carrusel: el hook va en `carrusel-hook`.

## Referencia visual de origen

Trece referencias de Instagram de una cuenta de viajes que publica itinerarios día por día
(carrusel de 16 días por Galápagos, Perú y Bolivia: Quito, Lima, Cusco, Valle Sagrado,
Machu Picchu, Rainbow Mountain, La Paz, Uyuni). Traducido, no copiado: se conservó el bloque
anclado arriba con regla vertical a la izquierda, los tres escalones kicker/titular/bajada,
la foto a saturación plena y el scrim solo en la cabeza. Se descartó el choque serif/sans
(invariante 1), el monocromo absoluto, el title case inglés, y las slides de mapa dibujado
y tapa con titular dorado, que no son parte de este estilo.

## Formato

Carrusel 1080×1350 px. Slide de contenido dentro de un set secuencial; no es pieza suelta
ni apertura.

## Zonas de layout

- **Foto:** full-bleed, `inset:0`, sin recorte ni banda.
- **Scrim de cabeza:** `inset:0` con `--overlay-head` (oscuro 0.78 arriba → transparente a 32%).
  Cubre exactamente la zona del bloque de texto y nada más.
- **Bloque de texto:** anclado **arriba**, `top:150px`, `left:90px`, `right:120px`. Ancla
  fija — a diferencia de `ficha-sobre-foto`, acá no se elige por foto: la serie numerada
  necesita que el bloque caiga siempre en el mismo lugar para que el carrusel se lea como
  secuencia. El `right` es 120px (30 más que el `left`) para que la bajada corte antes del
  borde y el bloque quede en bandera.
- **Regla vertical:** `border-left` de 5px naranja (`--signature-width` / `--signature`) con
  34px de aire (`--signature-gap`), corriendo todo el alto del bloque. Es la variante `bar`
  de `SignatureBlock`, aplicada acá deliberadamente y no por default.
- **Alineación:** `left` en los tres renglones — el default del sistema, declarado explícito.
  La regla vertical solo existe alineada a la izquierda; centrar el bloque rompe el estilo.
- **Wordmark:** centrado, `bottom:56px`, 26px, opacidad 92%.
- Sin índice, sin flecha de deslizar, sin chips.

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter. Los tres roles de carrusel del sistema, sin tamaños propios.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| kicker de día (`--kicker-size`) | 600 | 26px | `0.14em`, mayúsculas, line-height `1` | naranja (blanco con el tweak monocromo) |
| titular (`--titular-size`) | 800 | 62px (56px en `tramo`) | `-0.02em`, line-height `1.06` | blanco |
| bajada (`--bajada-size`) | 400 | 36px (34px en `tramo`) | `-0.01em`, line-height `1.3` | blanco |
| wordmark | 800 | 26px | `-0.01em` | blanco, `.ar` en naranja |

No usa `--hook-size` (94px): esto es contenido, no apertura, y un hook acá haría competir
todas las slides entre sí.

## Componentes que usa

Compone `LogoMark` (centrado al pie, tamaño reducido). La regla vertical es la variante
`bar` de `SignatureBlock`.

No usa: `PhotoBackdrop` (su gradiente protege el pie, y acá el texto va arriba), `CTA`,
`ArrowChip`, `IndexBadge`, `PhotoGrid`, `GraphicBlock`, `StepList`.

## Tokens propios

Agregado al sistema para este estilo (vive en `components/bundle.css`, no acá):

- `--overlay-head` — el gradiente de protección invertido. Los tres mecanismos que existían
  protegen el pie (`--overlay-gradient` ~60%, `--overlay-foot` ~30%) o no usan scrim
  (`--shadow-text-photo`). Este estilo ancla el texto arriba, donde vive el cielo: con la
  sombra sola, blanco sobre un cielo claro queda muy por debajo de 4.5:1. Es token y no
  número de template por la misma razón que `--overlay-foot`: la legibilidad es invariante
  de marca (invariante 5) y el mecanismo tiene que quedar disponible para el próximo estilo
  que ancle arriba.

Overrides de scope propio:

- `--photo-saturate: 1` / `--photo-brightness: 1` — la referencia vive del color de la foto.
  El tweak **Filtro de marca** lo vuelve a prender cuando un set mezcla fotos de
  temperaturas muy distintas (mismo precedente que `ficha-sobre-foto`).

## Tratamiento de foto

- Filtro efectivo: `saturate(1) brightness(1)` (override del default de marca).
- Protección: `--overlay-head` **más** `--shadow-text-photo`. La sombra queda siempre; el
  scrim se puede apagar (tweak **Scrim de cabeza**) solo cuando la foto ya llega oscura
  arriba — cielo de tormenta, sombra de montaña, interior. Nunca se apagan los dos.
- **Qué foto pide:** sujeto en la mitad inferior del cuadro y aire arriba — cielo, agua,
  ladera en sombra. El scrim se come el tercio superior, así que una foto cuyo sujeto esté
  arriba pierde justo lo que la hace buena. Encuadre vertical, horizonte bajo.
- **Chequeo obligatorio:** mirar la slide al 20%. Los tres renglones tienen que leerse sin
  vibrar sobre la textura. Si no, prendé el scrim, y si ya está prendido, cambiá la foto —
  nunca subas la sombra ni oscurezcas más el scrim.

## Reglas de copy

- **Kicker:** `DÍA N` o `DÍAS N A M`, mayúsculas, sin abreviar. Es lo único numérico del
  slide y lo que hace funcionar la serie. Con más de un día, pasá la escala a `tramo`.
- **Titular:** 2–5 palabras, sentence case, un solo renglón. En castellano no hay title case:
  "Machu Picchu, al fin", no "Machu Picchu Al Fin". Si necesitás dos renglones, el titular
  es demasiado largo para este estilo.
- **Bajada:** una frase, máximo dos renglones. En voseo e imperativo o segunda persona
  ("parate frente a", "vas a cruzar"), nunca en pasado impersonal. El voseo cuesta un
  renglón más que el inglés de la referencia — contalo al escribir.
- **Keyword en naranja:** no va. El naranja ya está en el kicker y en la barra; sumarlo
  inline dentro del titular hace tres acentos en 400px de alto.
- **CTA:** no va acá. Va en un slide aparte con "comentá KEYWORD".
- Sin emoji.

## Do / Don't

- **Do:** mantener el ancla arriba en todas las slides del set. Es lo que separa este estilo
  de `ficha-sobre-foto`; moverla slide por slide lo convierte en el otro estilo, mal hecho.
- **Do:** elegir fotos con horizonte bajo. La decisión de diseño de este estilo es el casting
  de foto, no la posición del texto.
- **Don't:** apagar el scrim de cabeza sobre un cielo claro "porque tapa la foto". Ese es el
  caso que el token existe para cubrir.
- **Don't:** usar el hook a 94px. Si el slide quiere gritar, no es contenido: es la apertura.
- **Don't:** poner el titular en dos renglones ni la bajada en tres. El bloque no pasa de
  cuatro renglones contando el kicker, o entra en la mitad de la foto.
- **Don't:** centrar el bloque. La regla vertical y el centrado son incompatibles
  (`SignatureBlock` descarta la barra con `align="center"` y avisa por consola).

## Set de slides tipo

1. **Hook** — `carrusel-hook`, abre con el titular y la afordancia de deslizar.
2. **Etapa ×N** — este template, una por día o tramo (6–12), en orden cronológico.
3. **CTA** — cierre con "comentá KEYWORD".
