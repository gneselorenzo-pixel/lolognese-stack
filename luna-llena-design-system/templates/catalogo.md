# Catálogo de estilos

Índice de los estilos del sistema. Un estilo = una carpeta en `templates/<slug>/` con su
entry `.dc.html` y su ficha `_style.md`. Antes de componer un carrusel, leé la ficha del
estilo que vas a usar.

Para agregar uno nuevo: aplicá la **regla de decisión** del `readme.md` (caso a / b / c),
copiá `_style.template.md` a `templates/<slug>/_style.md` y completá todos sus campos,
incluido **alineación**. Sumalo acá.

| id | nombre | formato | rol en el carrusel | alineación |
|---|---|---|---|---|
| `carrusel-hook` | Carrusel · Hook | 1080×1350 | apertura: hook + afordancia de deslizar | `left` |
| `autoridad-banda` | Carrusel · Autoridad | 1080×1350 | dato o ranking con respaldo externo | `center` (titular) |
| `ficha-sobre-foto` (frase) | Carrusel · Ficha sobre foto | 1080×1350 | una oración corrida a la izquierda, énfasis en 800 cruzando el corte de línea | `left` |
| `ficha-sobre-foto` | Carrusel · Ficha sobre foto | 1080×1350 | contenido: un lugar o etapa por slide, jerarquía plana | `center` |
| `rotulo-dato` | Carrusel · Rótulo y dato | 1080×1350 | serie taxonómica: categoría + dato, con portada y CTA | `center` |
| `etapa-dia` | Carrusel · Etapa por día | 1080×1350 | itinerario secuencial: un día o tramo numerado por slide | `left` |
| `ficha-etiquetada` | Carrusel · Ficha etiquetada | 1080×1350 | ficha de lugar con varios campos rotulados, foto en tarjeta | `left` |
| `mosaico-lugar` | Carrusel · Mosaico de lugar | 1080×1350 | un lugar en cuatro fotos, sólo el nombre como texto | `center` |

## Cómo elegir entre los estilos de foto

`ficha-sobre-foto`, `rotulo-dato` y `etapa-dia` son los tres "texto blanco sobre foto
full-bleed", pero no son intercambiables:

- **`ficha-sobre-foto`** — jerarquía plana (nombre y copy al mismo cuerpo), 2–3 renglones,
  ancla vertical elegida foto por foto, énfasis inline por peso, sin overlay. Para lugares y
  etapas con su historia.
- **`rotulo-dato`** — dos cuerpos distintos (58/36), un renglón de datos, ancla fija al pie,
  sin énfasis inline, scrim `--overlay-foot`. Para taxonomías: una palabra por categoría,
  repetición exacta, serie de 6–8 más portada y CTA.
- **`etapa-dia`** — tres escalones (kicker 26 / titular 62 / bajada 36), bloque anclado fijo
  **arriba** a la izquierda con barra naranja, scrim `--overlay-head`. Para itinerarios: el
  orden de las slides es el contenido y cada una lleva su número de día.

`mosaico-lugar` es el extremo opuesto de los tres: no hay bloque de texto que ubicar
porque no hay texto. Cuatro fotos del **mismo** lugar en 2×2, sin filtro, y una píldora
blanca con el nombre sobre la junta central. Elegilo cuando el lugar se entiende mirándolo
y tenés cuatro fotos buenas; si necesitás decir un dato, una época o una recomendación,
no es éste. Nombres de hasta 16 caracteres.

`ficha-etiquetada` es el cuarto, pero no es full-bleed: la foto es una **tarjeta inset** sobre
campo oscuro y el nombre del lugar la cruza a 168px. Es el más denso del sistema —hasta tres
filas rotuladas por slide— y el único que compara campo contra campo entre slides. Si el lugar
se resuelve en una frase, usá `ficha-sobre-foto`.
