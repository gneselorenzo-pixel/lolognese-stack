# Carrusel · Ficha sobre foto

## id y nombre

- **id:** `ficha-sobre-foto`
- **nombre:** Carrusel · Ficha sobre foto
- **entry:** `templates/ficha-sobre-foto/FichaSobreFoto.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** la foto es el contenido y el texto solo la nombra y le pone el dato —
  una etapa de un itinerario, un punto de un recorrido, un lugar con su número (km, metros,
  duración). Funciona en serie: 4–8 slides, un lugar por slide.
- **No lo uses cuando:** hay que abrir un carrusel. La jerarquía es plana y no hay hook que
  se lea en el scroll; para abrir, `carrusel-hook`. Tampoco cuando la foto no tiene una zona
  muerta clara: sin gradiente de protección, una imagen con textura clara en el medio no
  sostiene texto blanco.

## Referencia visual de origen

Nueve referencias de Instagram de una cuenta de viajes escandinava (carrusel de Noruega:
Trolltunga, Preikestolen, Kjerag, Lysefjord, glaciar Juklavass, crucero Flåm–Bergen).
Traducido, no copiado: se conservó el bloque plano centrado, el énfasis por peso inline y
la foto full-bleed sin banda. Se descartó el monocromo absoluto (acá el wordmark queda),
la narración en pasado impersonal y la ausencia total de marca en las slides de contenido.

## Formato

Carrusel 1080×1350 px. Slide de contenido dentro de un set; no es pieza suelta ni apertura.

## Zonas de layout

- **Foto:** full-bleed, `inset:0`, sin recorte ni banda. Es el fondo entero.
- **Bloque de texto:** un solo contenedor centrado horizontalmente, `text-align:center`,
  padding de caja `150px` vertical / `90px` lateral (el ancho útil queda en 900px).
  El ancla vertical es **variable y se elige por foto** — `arriba` / `medio` / `abajo` —
  y es la única decisión de layout del estilo. No hay posición por defecto correcta: se
  mira la foto y se elige dónde hay aire. El template arranca en `abajo` porque es la
  única zona de `placeholder.jpg` con contraste real (el verde oscuro del primer plano);
  en `medio` el bloque cae sobre la banda pálida del horizonte y queda en ~1.4:1.
- **Alineación:** depende de la composición (ver abajo). `plana` va `center` en todos los
  bloques (pisa el default `left` del sistema): el bloque plano centrado es la referencia
  original y un renglón a la izquierda ahí lo rompe. `frase` va `left`, pegada al padding
  de 90px, con la derecha libre.
- **Wordmark:** centrado, `bottom:64px`, 26px, opacidad 92%. Es lo único que ancla la marca.
- Sin índice, sin flecha de deslizar, sin chips.

## Composiciones

El estilo tiene dos composiciones de texto sobre la misma foto full-bleed. Se eligen con
el tweak **Composición**; todo lo demás (foto, filtro, sombra, wordmark, anclas) es igual.

### `plana` — nombre + copy, centrada

La original. Nombre del lugar y copy al mismo cuerpo (46px), centrados, cortes de línea
manuales y bloque balanceado. Estática a propósito: la foto manda y el texto es una ficha.

### `frase` — una oración corrida, a la izquierda

Más dinámica. **Una sola oración** de 58px alineada a la izquierda, sin nombre separado,
con 2–5 palabras en 800 en el medio de la frase. El movimiento sale de tres cosas:

1. **El énfasis atraviesa el corte de línea.** El fragmento en 800 arranca al final de un
   renglón y termina en el siguiente. Eso es lo que hace que el bloque se lea con impulso
   en vez de como dos renglones apilados. Si el bold entra justo en un renglón, mové el
   corte — no es un detalle, es el mecanismo.
2. **Ragged derecho libre.** Nada de `text-wrap:balance` acá: los renglones tienen que
   quedar de largos distintos. Un bloque parejo mata el efecto.
3. **Bajada opcional** (38px, mismo peso 400, 30px de gap) cuando la frase necesita
   contexto. Se apaga con el tweak **Bajada**; sin ella la slide es una frase sola.

Copy de `frase`: arranca con un conector — "Porque…", "Acá…", "Vas a…" — y se repite
**idéntico en todas las slides del carrusel**. La anáfora es la mitad del estilo: cada
slide completa la misma oración. Máximo 2 renglones de frase y 3 de bajada.

Cuál usar: `frase` cuando el carrusel responde una pregunta del hook ("¿por qué tenemos
que ir a la Patagonia?" → ocho slides que empiezan con "Porque…"). `plana` cuando cada
slide es una ficha independiente con su topónimo y su dato.

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter. El estilo es el rol plano: nombre y copy **al mismo cuerpo**.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| nombre del lugar (`--ficha-size`) | 700 | 46px | `-0.02em`, line-height `1.22` | blanco |
| copy (`--ficha-size`) | 400 | 46px | `-0.01em`, line-height `1.22` | blanco |
| fragmento enfatizado | 700 | 46px | igual al copy | blanco |
| wordmark | 800 | 26px | `-0.01em` | blanco, `.ar` en naranja |

Composición `frase`:

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| frase (`--frase-size`) | 400 | 58px | `-0.025em`, line-height `1.16` | blanco |
| fragmento enfatizado | 800 | 58px | igual a la frase | blanco |
| bajada (`--frase-bajada-size`) | 400 | 38px | `-0.015em`, line-height `1.3` | blanco |

No usa `--hook-size` ni `--titular-size`: la jerarquía plana es el estilo, no una omisión.

## Componentes que usa

Compone `LogoMark` (centrado abajo, tamaño reducido).

No usa: `PhotoBackdrop` (su gradiente de protección es justamente lo que este estilo saca),
`Kicker`, `Hook`, `Bajada`, `CTA`, `ArrowChip`, `IndexBadge`, `SignatureBlock`, `PhotoGrid`,
`GraphicBlock`, `StepList`.

## Tokens propios

Agregados al sistema para este estilo (viven en `tokens.json` y `components/bundle.css`, no acá):

- `--ficha-size: 46px` y `--leading-ficha: 1.22` — el rol plano que faltaba. `--bajada-size`
  (36px) no sirve porque acá ese texto *es* el titular; `--titular-size` (62px) tampoco,
  porque tres renglones centrados a 62px no entran en la zona muerta de una foto.
- `--frase-size: 58px` / `--frase-bajada-size: 38px` — la composición `frase` necesita un
  cuerpo mayor que la ficha (una sola oración en dos renglones tiene que ocupar el ancho
  útil) y un segundo nivel real debajo, cosa que `plana` no tiene. `--titular-size` (62px)
  desborda a dos renglones con el padding de 90px.
- `--shadow-text-photo: 0 2px 20px rgba(22,22,22,.55)` — el mecanismo de legibilidad que
  reemplaza al gradiente. El invariante 5 no se negocia: si un estilo saca el gradiente,
  la legibilidad tiene que vivir en un valor de marca, no en un número suelto del template.

Overrides de scope propio:

- `--photo-saturate: 1` / `--photo-brightness: 1` — la referencia vive de la foto a
  saturación plena; con el filtro de marca el estilo se queda sin color propio y, al no
  haber banda ni acento, la pieza queda gris. El tweak **Filtro de marca** lo vuelve a
  prender cuando un set mezcla fotos de temperaturas muy distintas.

## Tratamiento de foto

- Filtro efectivo: `saturate(1) brightness(1)` (override del default de marca).
- **Sin gradiente de protección y sin viñeta.** La legibilidad es solo
  `text-shadow: var(--shadow-text-photo)` más la elección de la zona.
- **Qué foto pide:** una zona muerta real de ~420px de alto — cielo, agua, roca en sombra,
  nieve plana — donde entren tres renglones. Sujeto claramente fuera de esa zona. Encuadre
  vertical o cuadrado con aire; una foto con detalle parejo en todo el cuadro no sirve acá.
- **Chequeo obligatorio:** mirar la slide al 20% de tamaño. Si el texto vibra sobre la
  textura, mové el ancla; si ninguna de las tres posiciones funciona, cambiá la foto o usá
  `carrusel-hook`. Nunca subas la sombra para compensar.

## Reglas de copy

- **Nombre:** el topónimo o la etapa, 1–3 palabras. Sin artículo, sin verbo.
- **Copy:** 2–3 renglones, ~34 caracteres por renglón a 46px. Cortes de línea manuales
  (`<br>`), ragged centrado y equilibrado — el bloque tiene que verse como un triángulo o
  un rectángulo, nunca con un renglón huérfano de dos palabras.
- **Énfasis:** un solo fragmento en 700 por slide, 2–5 palabras, el que carga el dato
  (el verbo de la experiencia o el número). **El keyword no va en naranja en este estilo**:
  el énfasis es por peso. Si necesitás naranja, el estilo es otro.
- **Dato concreto:** una cifra por slide (km, metros, horas, días). Sin dato, el copy queda
  descriptivo y el estilo no tiene de qué agarrarse.
- **Voseo:** en imperativo o segunda persona ("caminalo", "vas a llegar"), nunca en el
  pasado impersonal de la referencia. Cuesta un renglón más — contalo al escribir.
- **CTA:** no va acá. Va en un slide aparte con "comentá KEYWORD".
- Sin emoji.

## Do / Don't

- **Do:** elegir el ancla vertical mirando la foto, slide por slide. Es la única decisión
  de diseño del estilo y no se automatiza.
- **Do:** mantener nombre y copy al mismo cuerpo. Si agrandás el nombre, esto se vuelve un
  hook mal hecho.
- **Don't:** meter el gradiente de protección "por seguridad". Con banda o degradado el
  estilo ya es `carrusel-hook`.
- **Don't:** poner el énfasis en naranja ni sumar kicker naranja. La slide es monocroma;
  el naranja solo aparece en el `.ar` del wordmark.
- **Don't:** usarlo sobre fotos de temperaturas dispares en el mismo set a saturación plena
  — prendé el filtro de marca o el carrusel se desarma como serie.
- **Don't:** cuatro renglones. A 46px el bloque se come la foto.
- **Don't:** en `frase`, no centres el bloque ni uses `text-wrap:balance`. Centrada y
  pareja es `plana` con el cuerpo mal elegido.
- **Don't:** en `frase`, no cambies el conector de arranque entre slides del mismo
  carrusel. Si cada slide empieza distinto, no hay serie.

## Set de slides tipo

1. **Hook** — `carrusel-hook`, abre con el titular y la afordancia de deslizar.
2. **Ficha ×N** — este template, una por lugar o etapa (4–8).
3. **CTA** — cierre con "comentá KEYWORD".
