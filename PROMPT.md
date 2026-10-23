# Luna Llena Travel: rediseño completo del sitio web

Luna Llena Travel es una agencia de viajes con base en Cusco, Perú. Su sitio actual, https://lunallenatravel.com, es un WordPress con Elementor y el theme "Travel" de nicdark, y está roto. Hay que **rehacerlo de cero como sitio estático** en este repo. No se migra nada de WordPress, salvo el contenido.

Trabaja sin pedirme confirmaciones: las decisiones de abajo ya están tomadas. Si algo no está definido, elige lo más sensato, sigue adelante y anótalo en `DECISIONES.md`. Al final, deja todo commiteado en una rama y abre un PR con capturas (mobile 375px y desktop 1440px) del home, una categoría y un paquete.

## Qué está mal hoy (para no repetirlo)

- **Menú laberinto:** el menú carga unos 80 paquetes en 7 grupos y se repite entero en mobile.
- **Botones y links rotos:**
  - "Contactanos" apunta a `https:/lunallenatravel.com/contactanos` (con una sola barra).
  - Varios "CONTACTANOS" y "MÁS INFORMACIÓN" llevan a `#`.
  - Hay tarjetas que llevan a `/destinations/california/` y `/destinations/italy/`.
  - El footer está lleno de links de la demo del theme (travel.nicdark.com, "All Demos", "Airport Shuttle 37 $/h", "Kayak Tour").
- **Contenido falso:** los testimonios de "Nosotros" son de la demo del theme (Heidi de New York, Ben & Judy de Miami, Jasper de San Francisco). **No los uses.**
- **Slugs reciclados:** el slug no coincide con el paquete. Por ejemplo, `camino-inka-extremo-5d-4n` contiene "2D-1N Salineras de Maras Moray + Machupicchu", `mapi-5d-4n-salkantay-to-machupicchu` contiene "Machupicchu y Montaña Huayna Picchu" y `mapi-3d-2n-lares-trek` contiene "Valle Sagrado + Short Inka Trail 2D/1N". Manda el contenido de la página, no el slug.
- **Itinerarios ilegibles:** son un bloque de texto en MAYÚSCULAS, sin fotos ni estructura, con errores ("el tercer día" dentro del día 2, "PERZONALIZADO").
- **Mezcla de idiomas:** etiquetas en inglés ("Durations", "Difficulty", "From", "Details"), H1 repetidos y un selector de 4 idiomas.

## Decisiones tomadas

1. **Stack:** **Astro** estático, con content collections. Cada paquete es **un archivo de datos** (`src/content/paquetes/<slug>.json` o `.md` con frontmatter), validado con un schema Zod. Nada de CMS ni panel: los cambios se hacen editando esos archivos. CSS propio con tokens, sin Tailwind (o con Tailwind, si lo prefieres, pero con tokens de marca). Prácticamente sin JS: solo islas chicas donde haga falta (menú mobile, galería, filtros). Tiene que compilar para **Cloudflare Pages** (`npm run build` → `dist/`). El deploy lo hago yo después, así que no lo intentes.
2. **Idioma:** **solo español neutro con "tú"** ("planeas", "quieres", "cuéntanos"; nada de voseo rioplatense como "elegí" o "querés"). No hay selector de idiomas. Deja los textos de interfaz en un archivo aparte (`src/i18n/es.ts`), así sumar inglés más adelante no implica rehacer nada.
3. **Catálogo:** se migran **los 80 paquetes**, pero se muestran en **5 categorías**, no como lista:
   - **Machu Picchu:** las variantes que solo cambian el tren (Expeditions, Local/peruanos, Vistadome/Observatory, Hiram Bingham) o el acceso (tren o Hidroeléctrica) pasan a ser **opciones dentro de un mismo paquete**, con su diferencia de precio y horario. Unos 15 paquetes deberían quedar en unos 6.
   - **Tours en Cusco:** los full days (Valle Sagrado, Montaña de Colores, Humantay, City Tour, Valle Sur, termas, Queswachaca, clases de cocina, etc.).
   - **Trekking:** Salkantay, Choquequirao, Ollantaytambo (Cachiccata, Moon Stone), Lares, Huchuy Qosqo, Ausangate e Inka Jungle.
   - **Viajes completos:** los multi-día de 4D/3N a 12D/11N (Cusco Tradicional, Intrépido, Ruta del Sol, Perú Profundo, Perú 360°, etc.).
   - **Retiros:** ayahuasca, San Pedro/wachuma, kambo, baños de florecimiento, pago a la Pachamama, Espíritu Vivencial, Exploración Espiritual. Van con un tono sobrio y respetuoso, sin promesas de sanación ni claims médicos, y con una nota de que requieren entrevista previa.
   - El paquete "Perú Mágico + Salar de Uyuni" incluye Bolivia: márcalo como tal en el texto, no lo vendas como Perú.
4. **Conversión:** no hay reserva ni pago online.
   - **CTA principal en todo el sitio: "Cotiza este viaje".** Lleva a `https://luna-llena-viaje.pages.dev/paquetes?paquete=<slug>&origen=web` (el formulario ya existe en producción y guarda el lead en el CRM; los params desconocidos quedan registrados). En el home y en las páginas genéricas, el CTA va a `https://luna-llena-viaje.pages.dev/` (viaje a medida).
   - **CTA secundario: WhatsApp,** con un mensaje prellenado ("Hola, me interesa <paquete>"). El número vive en **una** constante en `src/config.ts` (`WHATSAPP_NUMERO`), que **queda vacía**. Si está vacía, todos los botones de WhatsApp se ocultan. No inventes un número.
   - **Ningún botón ni link puede quedar en `#` o roto.** Antes del PR, agrega un chequeo (script o test) que recorra `dist/` y falle si hay un `href="#"` o un link interno que no resuelve.

## Marca

- **Logos** en `marca/`:
  - `logo-horizontal-sobre-claro.svg` va en el header (fondo blanco).
  - `logo-horizontal-sobre-oscuro.svg` va en el footer o sobre fotos.
  - `icono-app.svg` / `.png` (cuadrado naranja con luna blanca y la línea de la montaña en tinta) sirve de favicon, apple-touch-icon e imagen OG base.
  - Los SVG horizontales importan la fuente con `@import`: pásalos a `<img>` o inlinéalos sin depender de ese import.
- **Paleta:** el **blanco domina** y el **naranja `#FF7A00`** es el color de marca. La tinta `#161616` va en el texto y en el trazo del logo. Define tokens semánticos en `:root` (`--color-bg`, `--color-text`, `--color-brand`, `--color-brand-ink`, `--color-line`, `--color-muted`) y no uses hex sueltos en los componentes.
  - **Contraste:** el texto blanco sobre `#FF7A00` no llega a AA en tamaño chico. Los botones naranjas llevan texto `#161616`, o se usa un naranja más oscuro solo para el texto.
- **Tipografías:** **Bricolage Grotesque** (títulos, peso 700–800) + **Inter** (texto), las dos de Google Fonts con `display=swap`.
- **Estilo:** limpio, editorial, con mucha foto grande y mucho aire. **Prohibido:** botones píldora redondos y coloridos (al dueño le parecen "baratos"); los botones van rectos o con un radio chico (4–8px). Tampoco emojis como íconos (usa Lucide o SVG propios), ni gradientes de relleno.

## Arquitectura de páginas

- `/`: home.
- `/machu-picchu`, `/tours-cusco`, `/trekking`, `/viajes-completos`, `/retiros`: una página por categoría, con grilla de tarjetas y filtros livianos (duración, dificultad).
- `/paquetes/<slug>`: un paquete. Los slugs se rehacen limpios y descriptivos según el contenido real. Además, genera `_redirects` de Cloudflare desde **cada** URL vieja `/packages/<slug-viejo>/` a la nueva (301), así no se pierde SEO.
- `/nosotros`, `/contacto`, `/preguntas-frecuentes`.
- `/blog` y `/blog/<slug>`: migra los posts que existen (ruta gastronómica del Valle Sagrado, el Tumi, el Inti Raymi, Año Nuevo Andino, el ceviche, y los demás que encuentres en `/category/travel-blog/`).
- 404 propia, con links a las 5 categorías.

**Navegación:** el header es sticky y lleva logo, las 5 categorías, Nosotros y el botón "Cotiza tu viaje". En mobile hay un menú a pantalla completa con las 5 categorías, nada de listas de 80 ítems. El footer tiene categorías, contacto, redes (placeholders vacíos que se ocultan) y aviso legal. Agrega breadcrumbs en las categorías y en los paquetes.

## Home: orden

1. **Hero:** una foto grande real de Perú (Machu Picchu o el Valle Sagrado al amanecer o con luna), un H1 corto y con gancho (uno solo en toda la página), una bajada y el CTA principal. No pongas un buscador complicado.
2. **Autoridad, apenas bajas** (esto es prioridad): una franja inmediatamente después del hero con señales de confianza:
   - "Agencia local con base en Cusco", "Guías locales", "Atención antes, durante y después del viaje".
   - Espacios para la nota de **Tripadvisor**/Google, los años operando, la cantidad de viajeros y el registro oficial (MINCETUR / DIRCETUR).
   - **No inventes números ni reseñas.** Todo lo que sea dato va en `src/config.ts` como constante vacía (`ANIOS_OPERANDO`, `VIAJEROS`, `TRIPADVISOR_NOTA`, `TRIPADVISOR_URL`, `REGISTRO_MINCETUR`), y si está vacía, ese ítem no se muestra. Las frases cualitativas sí pueden ir.
3. Las **5 categorías** como tarjetas grandes con foto.
4. **Paquetes destacados:** 6 entre los más representativos (Machu Picchu full day, Valle Sagrado VIP, Montaña de Colores, Salkantay 4D, Cusco Tradicional 4D, Perú 360°), con duración y "desde S/ X".
5. **Por qué Luna Llena:** 3 o 4 diferenciales concretos sacados del contenido real (recojo en el hotel, asesor 24 h, grupos chicos o privados, etc.).
6. **Cómo funciona:** cuéntanos tu viaje → te armamos la propuesta → viajas acompañado.
7. **Testimonios:** el componente queda listo pero vacío (`src/content/testimonios/`). Si no hay testimonios cargados, la sección no se renderiza.
8. **Blog:** los 3 últimos posts.
9. **FAQ** corta y **CTA final**.

## Página de paquete: el itinerario

Es lo más importante después del home. Hoy es un muro de texto.

- **Cabecera:** una foto grande y una ficha corta con duración, dificultad, edad mínima, "desde S/ X" y el CTA. En desktop, la ficha queda sticky en la columna derecha. En mobile se convierte en una barra fija abajo con precio + "Cotiza".
- **Resumen:** 2–3 líneas en lenguaje humano, no en MAYÚSCULAS.
- **Itinerario día por día:**
  - Una **línea de tiempo vertical**: cada día es un bloque con número, título, **foto del lugar** y los horarios clave (03:45 recojo, 05:05 tren, etc.) como una lista prolija. La "NOTA" larga va detrás de un "Ver detalle" desplegable (`<details>`).
  - Un **índice de días sticky** (chips "Día 1 · Día 2 …") que resalta el día visible con IntersectionObserver y hace scroll suave al tocarlo.
  - Usa `scroll-margin-top` para que el header no tape el título.
  - Respeta `prefers-reduced-motion`.
  - Las fotos se cargan con lazy-load y llevan `aspect-ratio` reservado (sin saltos de layout).
- **Opciones** (en los de Machu Picchu): un selector simple de tipo de tren o de acceso, que cambia el precio y los horarios mostrados.
- **Incluye / No incluye:** en dos columnas, con íconos de check y cruz.
- **Galería:** horizontal con scroll-snap, swipe en mobile y flechas en desktop.
- **Qué llevar** y **notas importantes**, cuando existan.
- **Paquetes relacionados:** 3 de la misma categoría.
- Agrega **JSON-LD** (`TouristTrip` / `Product` con `offers` en PEN) y metadatos OG por paquete.

## Contenido: cómo migrarlo

1. Haz scraping de **todas** las páginas `https://lunallenatravel.com/packages/*` (la lista sale del menú del home) y de los posts del blog. Extrae el título, la duración, la dificultad, la edad mínima, el precio "From S/." (está en las tarjetas de listados), el destino, el resumen del "incluye", los días con sus horarios y notas, las fotos y el "no incluye", si existe.
2. **Reescribe** el texto: pásalo de MAYÚSCULAS a oración, corrige ortografía y errores de día ("el tercer día" dentro del día 2) y llévalo a "tú" neutro. No cambies los datos duros (horarios, precios, qué incluye). Si un dato es dudoso o contradictorio, márcalo con `"revisar": "motivo"` en el archivo y lístalo en `DECISIONES.md`.
3. Guarda el JSON crudo del scraping en `referencia/scraping/` para poder auditarlo.

## Fotos

- **Primero, las fotos de la propia agencia** (`/wp-content/uploads/...` del sitio actual), si tienen buena calidad.
- Para lo que falte, solo fotos libres de **Unsplash o Pexels** que sean **de Perú real y del lugar correcto** (nada de Bolivia, Chile ni Nepal haciéndose pasar por el Ausangate). Lleva un registro en `public/fotos/CREDITOS.md` con la URL de origen y el autor.
- Todo va descargado al repo, sin hotlinks, pasado por `astro:assets` o convertido a **WebP/AVIF** en varios tamaños (`srcset`). El hero no debería pasar de ~250 kB en mobile.
- Cada día del itinerario lleva la foto de su lugar. Si dos días repiten lugar, usa una foto distinta.

## Calidad mínima antes del PR

- Lighthouse mobile en el home y en un paquete: Performance ≥ 90, Accesibilidad ≥ 95, SEO ≥ 95.
- Sin scroll horizontal a 375px. Todos los targets táctiles ≥ 44px. Focus visible. Un solo H1 por página y jerarquía de títulos correcta.
- El chequeo de links pasa: cero `href="#"` y cero links internos rotos.
- `npm run build` limpio. Tiene que estar el `README.md` con cómo agregar o editar un paquete (qué archivo tocar y qué campos tiene).
- `sitemap.xml`, `robots.txt` y `_redirects` generados.

## Referencia (no copiar)

En `referencia/borrador-2026-10-22.html` hay un borrador estático anterior de una sola página. Puedes mirarlo para ideas de secciones, pero **no lo uses de base**: usa voseo (está mal para esta marca), su naranja (`#ed6a24`) no es el de marca y es una sola página, no un sitio.
