# Carrusel · Rótulo y dato

## id y nombre

- **id:** `rotulo-dato`
- **nombre:** Carrusel · Rótulo y dato
- **entry:** `templates/rotulo-dato/RotuloDato.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** el carrusel es una **taxonomía** — una lista de categorías de un mismo
  destino, cada una nombrada con una palabra y sostenida por datos duros. "Ocho cosas que
  Argentina hace mejor que nadie", "seis motivos", "cinco regiones". Funciona en serie
  larga: 6–8 slides idénticas, más portada y CTA con el mismo bloque.
- **No lo uses cuando:** cada slide es un lugar con su historia (ahí va `ficha-sobre-foto`:
  jerarquía plana, copy de 2–3 renglones, ancla variable). Tampoco cuando no tenés un dato
  por slide — sin cifra el renglón queda adjetivado y el estilo se cae, porque el dato *es*
  la mitad del bloque. Y no para abrir un carrusel suelto: la portada de este estilo
  funciona porque anuncia una serie numerada, no como hook independiente.

## Referencia visual de origen

Diez referencias de Instagram de una cuenta de viajes de Perú (carrusel "8 things Peru does
better than anywhere else": comida, ruinas, biodiversidad, aventura, superfoods, paisajes,
historia, calidez, más portada y cierre).

Traducido, no copiado. Se conservó el bloque de dos renglones clavado al pie y centrado, el
rótulo de una palabra, el registro telegráfico de datos separados por punto, la foto a
saturación plena y la lógica de serie idéntica con portada y cierre.

Se descartó: el **pairing serif + sans redondeada** (invariante 1, Inter y nada más) y el
**two-tone blanco sobre blanco** con el símbolo naranja (invariante 2, paleta cerrada). El
contraste que en la referencia lo cargaban familia y color, acá lo carga el salto de cuerpo
y peso: 58/800 contra 36/400.

## Formato

Carrusel 1080×1350 px. Slide de serie; la portada y el CTA usan el mismo template con la
variante `portada`.

## Zonas de layout

- **Foto:** full-bleed, `inset:0`. Es el fondo entero, sin recorte ni banda.
- **Scrim al pie:** `--overlay-foot` sobre la foto, `inset:0`. Cubre ~30% inferior. No es el
  gradiente de protección de marca (~60%): acá el texto está clavado al borde, no apoyado en
  una zona muerta.
- **Bloque de texto:** un contenedor centrado, `bottom:56px`, laterales a `90px` (ancho útil
  900px). Ancla **fija** — a diferencia de `ficha-sobre-foto`, acá no se elige por foto: la
  repetición exacta slide a slide es el formato.
- **Orden del bloque:** rótulo → dato → wordmark, `gap:10px` entre los dos textos y `26px`
  antes del wordmark. Los tres van centrados en el mismo eje.
- **Alineación:** `center` en todos los bloques de texto (`align="center"`, pisa el default
  `left` del sistema).
- **Wordmark:** dentro del bloque, no flotando aparte, 26px, opacidad 92%. Cierra la pila.
- Sin índice, sin flecha de deslizar, sin chips, sin kicker naranja.

## Roles tipográficos que usa

Títulos en Bricolage Grotesque, el resto en Inter. Dos roles, un paso de cuerpo entre ellos.

| rol | peso | tamaño | tracking | color |
|---|---|---|---|---|
| rótulo (`--rotulo-size`) | 800 | 58px | `-0.02em`, line-height `1.06` | naranja (`--naranja`) |
| dato (`--bajada-size`) | 400 | 36px | `-0.01em`, line-height `1.3` | blanco |
| rótulo en portada | 800 | 72px | `-0.02em` | naranja (`--naranja`) |
| dato en portada | 600 | 30px MAYÚSCULAS | `0.14em` | blanco |
| wordmark | 800 | 26px | `-0.01em` | blanco, `.ar` en naranja |

No usa `--hook-size` (no hay hook) ni `--ficha-size` (ese rol iguala cuerpos a propósito).

## Componentes que usa

Compone `LogoMark` (centrado, al pie del bloque, tamaño reducido).

No usa: `PhotoBackdrop` (su gradiente cubre ~60%; acá el scrim es `--overlay-foot`),
`Kicker`, `Hook`, `Bajada`, `CTA`, `ArrowChip`, `IndexBadge`, `SignatureBlock`, `PhotoGrid`,
`GraphicBlock`, `StepList`.

## Tokens propios

Agregados al sistema para este estilo (viven en `tokens.json` y `components/bundle.css`, no acá):

- `--rotulo-size: 58px` — el rótulo de una palabra al pie. `--ficha-size` (46px) existe para
  igualar cuerpo con su copy, esa es su tesis; `--titular-size` (62px) está pensado para 2–3
  renglones con `--leading-snug` y es demasiado para una palabra a 100px del borde;
  `--hook-size` (94px) es un scroll-stopper. 58px da el salto ~1.6× sobre el dato que
  reemplaza al contraste serif/sans de la referencia.
- `--overlay-foot` — scrim corto (~30% inferior) contra el gradiente de protección (~60%).
  Mecanismo de legibilidad, y por eso es token de marca y no un número del template: mismo
  criterio que `--shadow-text-photo`.

Sin token de color nuevo. El rótulo va en `--naranja`, el acento único de la paleta — es el
equivalente de marca al blanco de la referencia. Se evaluó y se descartó `--claro` (casi
blanco frío, el two-tone muere) y `--durazno` (documentado como marcador de
autoridad/ranking; en los 8 rótulos de un set contradice su propio token).

El dato reutiliza `--bajada-size` (36px) tal cual.

Overrides de scope propio:

- `--photo-saturate: 1` / `--photo-brightness: 1` — la referencia vive del color pleno de
  fotos cálidas. El tweak **Filtro de marca** lo vuelve a prender cuando el set se mezcla
  con slides de otros estilos y la costura se ve.

## Tratamiento de foto

- Filtro efectivo: `saturate(1) brightness(1)` (override del default de marca).
- **Scrim `--overlay-foot`**, sin viñeta. El texto no lleva sombra: el scrim ya resuelve.
- **Qué foto pide:** sujeto en la mitad superior o al centro, y el tercio inferior sin
  detalle que compita (piso, pasto, agua, sombra, arena). Vertical o cuadrada con aire
  arriba. Color fuerte y saturado — el estilo se apoya en eso, una foto lavada acá no tiene
  de qué agarrarse.
- **Chequeo obligatorio:** mirar la slide al 20%. El rótulo tiene que leerse de un tirón. Si
  el tercio inferior tiene textura clara (nieve, cielo invertido, espuma), cambiá la foto —
  el ancla no se mueve en este estilo. Nunca subas la opacidad del scrim para compensar: a
  más del 82% al pie la foto se corta con una línea visible.

## Reglas de copy

- **Rótulo:** **una palabra** en naranja, sustantivo, sin artículo y sin verbo. Máximo 12 caracteres a
  58px; "Biodiversidad" (13) ya come casi todo el ancho útil, buscá el sinónimo corto
  ("Fauna"). Sentence case, no mayúsculas.
- **Dato:** **un solo renglón**, dos frases separadas por punto, cada una una cifra o un
  hecho verificable. ~46 caracteres máximo a 36px. En castellano el registro telegráfico de
  la referencia cuesta más letras, así que van **dos** datos, no tres. Ej.: "48 glaciares en
  un parque. Uno todavía crece."
- **Sin énfasis inline en el dato.** Ni peso ni naranja: el naranja ya está gastado en el
  rótulo. Los dos roles son la jerarquía; un tercer nivel dentro del renglón la desarma.
- **Voseo:** el dato es nominal y no siempre lleva verbo; cuando lo lleva, va en vos
  ("lo caminás en dos días"). Nunca pasado impersonal.
- **Portada:** rótulo = el título de la serie con su número ("8 cosas"); dato = la
  continuación en MAYÚSCULAS ("QUE ARGENTINA HACE MEJOR QUE NADIE"). El número va en el
  rótulo, nunca en un badge.
- **CTA:** slide final con la misma variante `portada` — rótulo "Viajá con nosotros" y dato
  "COMENTÁ ARGENTINA Y ARMAMOS TU VIAJE". Keyword en mayúsculas.
- Sin emoji.

## Do / Don't

- **Do:** mantener el ancla fija. La serie vale por la repetición exacta; si cada slide
  respira distinto, esto es `ficha-sobre-foto` mal usado.
- **Do:** un dato duro por frase. El estilo es un índice de razones, no un álbum.
- **Do:** elegir la foto por el tercio inferior, no por el sujeto.
- **Don't:** meter el gradiente de protección de marca. Con ~60% de oscuro el estilo pierde el
  color pleno que es la mitad de su identidad.
- **Don't:** sumar kicker naranja, índice o flecha. El bloque son tres renglones y nada más;
  el naranja vive en el rótulo y en el `.ar`, en ningún otro lado de la slide.
- **Don't:** rótulo de dos palabras. "Alta montaña" a 58px ya no se lee como etiqueta y el
  bloque se vuelve un titular.
- **Don't:** tres datos en el renglón. Parte en dos líneas y el bloque queda de cuatro.

## Set de slides tipo

1. **Portada** — este template, variante `portada`: "8 cosas" / "QUE ARGENTINA HACE MEJOR
   QUE NADIE".
2. **Rótulo ×6–8** — este template, variante `contenido`, una categoría por slide.
3. **CTA** — este template, variante `portada`, con "comentá ARGENTINA".
