# Ficha de estilo — plantilla

Copiá este archivo a `templates/<slug>/_style.md` y completá cada sección.
Una ficha por estilo. Si una sección no aplica, escribí "no aplica" — no la borres.

---

## id y nombre

- **id:** `<slug>` (igual al nombre de la carpeta)
- **nombre:** `<Formato · Nombre>` — el mismo label que va en el `@template name`
- **entry:** `templates/<slug>/<Slug>.dc.html`

## Cuándo usarlo / cuándo no

- **Usalo cuando:** …
- **No lo uses cuando:** …

## Referencia visual de origen

De dónde salió el look: archivo, carrusel publicado, captura, brief. Si nació acá, decilo.

## Formato

Canvas en px y para qué feed (carrusel 1080×1350 · historia 1080×1920 · cuadrado 1080×1080).

## Zonas de layout

Las regiones fijas del slide y qué vive en cada una (padding, anclajes, qué va arriba,
al medio, abajo). Números concretos.

- **Alineación (obligatorio):** `left` o `center`, y si algún bloque se aparta, cuál y por qué.
  El default del sistema es `--text-align: left`; un estilo centrado lo pisa pasando
  `align="center"` en sus bloques de texto. Declararla siempre, aunque sea la del default —
  la alineación es una decisión del estilo, no el default del navegador.

## Roles tipográficos que usa

Qué roles del sistema toca (hook / bajada / kicker / label) con peso, tamaño y tracking
reales de este estilo. Si el estilo define un tamaño propio, anotalo acá.

## Componentes que usa

Lista de componentes de `components/` que compone, y cuáles deliberadamente no usa.

## Tokens propios

Solo si el estilo sobreescribe algo (por ejemplo `--photo-saturate`). Valor y motivo.
Si no sobreescribe nada: "ninguno, usa los defaults de marca".

## Tratamiento de foto

Filtro efectivo, gradiente, viñeta, y qué tipo de foto pide (encuadre, aire, dónde puede
caer el sujeto sin pelearse con el texto).

## Reglas de copy

Largo máximo del hook, si lleva kicker, cómo se resuelve el keyword en naranja, qué CTA
usa y dónde.

## Do / Don't

- **Do:** …
- **Don't:** …

## Set de slides tipo

La secuencia que este estilo sabe armar (por ejemplo hook → contenido ×N → CTA), con
una línea por slide.
