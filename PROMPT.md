# Luna Llena Travel: sitio nuevo con venta online

Luna Llena Travel (razón social Full Moon Travel Agency E.I.R.L.) es una agencia y operador local con base en San Blas, Cusco. Hoy su sitio, https://lunallenatravel.com, es un WordPress roto. Hay que construir **un sitio nuevo, multipágina y que venda**: el viajero reserva un paquete pagando una seña online, y "cotizar" queda como alternativa.

Ya existe una maqueta anterior, un artifact de una sola página. Sirve de **referencia visual** y nada más. Este brief la reemplaza: donde la maqueta y el brief no coincidan, manda el brief.

Trabaja sin pedirme confirmaciones. Las decisiones de abajo ya están tomadas con el dueño. Lo que no esté definido lo eliges tú, eligiendo lo más sensato, y lo anotas en `DECISIONES.md`. Al terminar, deja todo en una rama con un PR que incluya capturas (375px y 1440px) del home, una categoría, un paquete y los 3 pasos de compra, más la evidencia de una compra de prueba de punta a punta.

---

## 1. Stack y despliegue

- **Astro** (salida estática) + **Cloudflare Pages Functions** para todo lo que necesite servidor (`functions/api/*`). Sin frameworks de UI pesados: islas chicas en JS vanilla o Preact, solo donde haga falta.
- Los **paquetes son datos**: un archivo por paquete en `src/content/paquetes/<slug>.json`, validado con un schema Zod. Nada de CMS: se editan esos archivos.
- **Base de datos:** la D1 del CRM que ya existe. Binding `DB` → `crm-plantilla`, con `database_id = "3bc152cd-ac4c-4043-baf7-9c84b68fa945"` en `wrangler.toml`. Es la misma base que usan el CRM y el formulario `luna-llena-viaje`, y **tiene datos reales**:
  - Solo se permiten migraciones aditivas (`CREATE TABLE IF NOT EXISTS`, `ALTER TABLE … ADD COLUMN`), que van en `migrations/`.
  - **No las apliques en remoto.** Las aplico yo.
  - Para las pruebas locales usa `wrangler pages dev` con D1 local.
- El proyecto de Pages se va a llamar `luna-llena-web` (`luna-llena-web.pages.dev`), y el dominio `lunallenatravel.com` se conecta después. **No hagas el deploy**: lo hago yo.
- Las variables de entorno van documentadas en `.dev.vars.example`, nunca con valores reales: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV` (`sandbox` / `live`), `RESEND_API_KEY`, `AVISO_EMAIL`, `SITE_URL`.

## 2. Idioma y tono

- Todo en **español neutro con "tú"**: "planeas", "quieres", "cuéntanos", "reserva". **Nada de voseo** ("elegí", "querés", "reservá") y nada de modismos rioplatenses.
- Un solo idioma, sin selector. Los textos de interfaz van en `src/i18n/es.ts`, así sumar inglés más adelante no implica rehacer nada.
- Al migrar los itinerarios del sitio viejo, pásalos de MAYÚSCULAS a tipo oración y corrige ortografía y errores de día (en el sitio viejo hay un "el tercer día" dentro del día 2), **sin cambiar datos duros**: horarios, qué incluye.

## 3. Marca y sistema visual

- **Tipografías:** **Fraunces** para los títulos (Google Fonts, variable, eje `opsz`, pesos 500–600, `letter-spacing` entre -0.01 y -0.02em, **sin** condensar ni apretar de más) e **Inter** para el texto y la interfaz (400/500/600). Ambas con `display=swap`, y precarga solo de los pesos del hero.
- **Paleta:** el **blanco domina** y el naranja **`#FF7A00`** es el color de marca, con tinta `#161616` para texto y trazos.
  - Agrega tokens derivados con nombre semántico en `:root`: `--color-brand`, `--color-brand-press`, `--color-brand-ink` (un naranja oscuro para texto, AA sobre blanco), `--color-sand` (un crema muy claro para fondos alternos), `--color-line` y `--color-muted`.
  - **Cero hex sueltos** en los componentes.
  - Sobre el naranja, el texto va en tinta `#161616`, nunca blanco chico.
- **Botones y chips rectos, con radio de 4–6px.** **Prohibido `border-radius: 999px`** en botones, chips, badges o etiquetas: al dueño, los botones píldora redondos y coloridos le parecen "baratos". Los únicos círculos permitidos son los elementos gráficos del logo (el sol).
- **Íconos:** Lucide o SVG propios, con trazo de 1.5–2px. Nada de emojis.
- **Logos** en `marca/`:
  - `logo-horizontal-sobre-claro.svg` va en el header.
  - `logo-horizontal-sobre-oscuro.svg` va en el footer.
  - `icono-app.svg`/`.png` sirve de favicon, apple-touch-icon y base de la imagen OG.
  - Los SVG horizontales importan Bricolage por `@import`: conviértelos a trazos o inlinéalos sin depender de ese import.
- **De la maqueta anterior, conserva:**
  - El hero con la foto de Machu Picchu **recortada dentro del sol del logo** y la línea de montaña dibujándose.
  - Los sellos de autoridad.
  - La idea del **perfil de altura** del viaje.
- **De la maqueta anterior, descarta:**
  - Bricolage condensada.
  - Las píldoras.
  - Todo en una sola página.
  - Los paquetes en modal.
  - El formulario que solo abre WhatsApp.

## 4. Mapa del sitio

| Ruta | Qué es |
|---|---|
| `/` | Home corto (ver §5) |
| `/viajes-completos` | Paquetes multi-día, de 4D/3N a 12D/11N |
| `/machu-picchu` | Full days y 2D/1N a Machu Picchu |
| `/tours-cusco` | Tours de un día en Cusco y el Valle |
| `/trekking` | Salkantay, Choquequirao, Ollantaytambo, Lares, Huchuy Qosqo, Ausangate, Inka Jungle |
| `/retiros` | Retiros y ceremonias |
| `/paquete/<slug>` | Una página por paquete (ver §6) |
| `/reservar/<slug>` | Compra en 3 pasos (ver §7) |
| `/reserva/<id>` | Confirmación + estado de la reserva |
| `/reserva/<id>/viajeros?t=<token>` | Formulario de pasaportes post-pago |
| `/nosotros` | Autoridad completa (ver §5.2) |
| `/contacto` | Datos + link al cotizador |
| `/blog`, `/blog/<slug>` | Posts migrados del blog viejo |
| `/terminos`, `/politica-de-cancelacion`, `/privacidad` | Legales |
| `/libro-de-reclamaciones` | **Libro de Reclamaciones virtual**, obligatorio en Perú para quien vende online: un formulario que guarda en D1 y avisa por mail |

- **Header sticky:** logo, las 5 categorías, Nosotros y un botón "Reservar" que lleva a `/viajes-completos`.
- **Mobile:** menú a pantalla completa con las 5 categorías. **Nunca listas largas de paquetes en el menú.**
- **Breadcrumbs** en las categorías y en los paquetes.
- **Footer:** categorías, contacto, legales, Libro de Reclamaciones y sellos.
- **Redirects:** genera `public/_redirects` con un 301 desde **cada** URL vieja `/packages/<slug-viejo>/` a su paquete nuevo. Ojo: en el sitio viejo hay slugs reciclados (por ejemplo, `camino-inka-extremo-5d-4n` contiene "Maras Moray + Machupicchu"), así que manda el contenido, no el slug.
- **Transiciones:** View Transitions de Astro (`<ClientRouter />`). La foto de una tarjeta de paquete hace de *shared element* y "crece" hasta convertirse en el hero de la página del paquete. Respeta `prefers-reduced-motion`.

## 5. Home y autoridad

### 5.1 Home (corto, en este orden)

1. **Hero:** la foto dentro del sol del logo, un H1 corto (uno solo por página), la bajada y dos acciones: "Ver viajes" (principal) y "Cotiza a medida" (secundaria).
2. **Franja de autoridad, inmediatamente debajo del hero.** Es una sola fila, ordenada por peso:
   - **Tripadvisor primero y grande:** el badge Travelers' Choice + la nota + la cantidad de reseñas + **una cita corta real** de un viajero, rotando entre 3 con un fundido lento y pausable.
   - **Los sellos oficiales en gris**, que se colorean al pasar el mouse o al enfocarlos: MINCETUR, GERCETUR Cusco, Safe Travels (WTTC) y Protégeme/ESNNA. Debajo, una línea: "Operador local registrado · Oficina en San Blas, Cusco" y el link "Conoce quiénes somos →" a `/nosotros`.
   - Los datos que no tengas confirmados (la nota, la cantidad de reseñas y las citas de Tripadvisor) van en `src/config.ts` como constantes vacías. Si una está vacía, ese ítem no se muestra. **Nunca inventes números ni reseñas.** Puedes intentar sacar los datos reales del perfil público de Tripadvisor de la agencia. Si lo logras, anota la fuente en `DECISIONES.md`.
3. **Las 5 categorías** como "puertas" grandes con foto: una grande y cuatro medianas.
4. **3 viajes destacados:** Cusco Tradicional 4D/3N, Salkantay 4D/3N y Perú 360° 10D/9N, con la duración, "desde USD X" y el perfil de altura en miniatura.
5. **Por qué Luna Llena:** 3–4 diferenciales concretos sacados del contenido real (operador local en San Blas, asesor y transfer 24 h, recojo en el hotel, hotel céntrico).
6. **Cómo reservar:** eliges y pagas el 30% → confirmamos en menos de 24 h → completas los pasaportes → viajas.
7. **CTA final.**

Nada de FAQ ni catálogo completo en el home.

### 5.2 `/nosotros`

Acá va todo lo que en el home sería trámite:
- La razón social y el **RUC 20603319428**.
- Las oficinas: Calle Chihuampata 543, San Blas, Cusco, y 2 Square de Monte Cristo, 78160 Marly-le-Roi, Francia.
- Qué significa cada sello, el equipo (con espacio para fotos) y el enlace a Tripadvisor.

**Verifica cada dato contra el sitio actual** antes de publicarlo.

## 6. Página de paquete: itinerario con scroll narrativo

Es la pieza más importante del sitio.

- **Cabecera:** la foto grande, el título, la ubicación y una ficha con duración, dificultad, edad mínima, altura máxima y "desde USD X por persona".
- **Ficha de compra:**
  - En desktop queda **sticky en la columna derecha**, con el botón **"Reservar con 30%"** (principal) y debajo "Prefiero cotizar" (secundario, en texto o con contorno).
  - En mobile se convierte en una barra fija abajo con el precio y "Reservar", respetando el safe-area.
- **Perfil de altura como índice de días:** la línea de montaña del logo dibuja la altura de cada día, con un punto por día. El punto del día visible se resalta en naranja, y tocar un punto lleva a ese día con scroll suave. En desktop va arriba del itinerario; en mobile queda fijo debajo del header mientras dura el itinerario y funciona también como barra de progreso.
- **Itinerario en desktop, scroll narrativo:**
  - La **foto queda fija a la izquierda**, ocupando media pantalla, y los **días van a la derecha**.
  - Cuando un día entra en vista (IntersectionObserver), la foto pasa a la de ese día con un **fundido de unos 300 ms**, solo con opacity, sin mover el layout.
  - Cada día lleva el número, el título, el lugar, la altura, 2–3 líneas de resumen, los **horarios clave** en una lista prolija (con números tabulares) y un "Ver detalle" (`<details>`) con la nota larga.
- **Itinerario en mobile:** todo vertical, con la foto de cada día arriba de su bloque y lazy-load con `aspect-ratio` reservado.
- **Opciones del paquete:** en Machu Picchu, las variantes que solo cambian el tren (Expeditions, Vistadome/Observatory, Hiram Bingham, tren local) o el acceso (tren u Hidroeléctrica) son **opciones de un mismo paquete**, no páginas separadas. Cada opción tiene su diferencia de precio y de horarios.
- **Debajo del itinerario:**
  - Incluye / no incluye, en dos columnas.
  - Qué llevar, cuando exista.
  - Notas importantes: la altura y las restricciones. **Camino Inka cerrado en febrero; los permisos se agotan con meses de anticipación.**
  - 3 paquetes relacionados.
- **SEO:** JSON-LD `TouristTrip` + `Offer` en USD, metadatos OG por paquete y `sitemap.xml`.

## 7. Compra online: reserva con seña del 30%

### 7.1 Reglas de negocio

- Se cobra **online una seña del 30%** del total. El saldo se paga después: por link de pago o al llegar a Cusco, y queda anotado en la reserva.
- **Moneda: USD en todo el sitio.** Cada paquete tiene su `precio_usd` (por persona, adulto), su `precio_usd_menor` (opcional) y su `edad_menor_max`, cargados a mano. No se convierte nada automáticamente.
- **Mientras la agencia no pase la lista de precios en USD**, carga `precio_usd: null` en todos los paquetes. Si es `null`, la página muestra solo "Cotiza este viaje" y oculta "Reservar". Así el sitio funciona desde el día uno. Si quieres, deja precios de ejemplo marcados con `"precio_ejemplo": true` solo en los 3 destacados, para probar el flujo, y avísalo en `DECISIONES.md`.
- **La reserva no se confirma sola.** Tras el pago queda en estado "Seña pagada, confirmando disponibilidad", y la agencia confirma en menos de 24 h. **Si no hay cupo, se devuelve la seña completa.** Esto se dice antes de pagar, no en letra chica.
- **Fecha mínima:** hoy + 3 días para los tours y hoy + 7 días para los paquetes y treks, configurable por paquete (`anticipacion_min_dias`). Hay que poder bloquear fechas por paquete (`fechas_bloqueadas`, por ejemplo Camino Inka en febrero).
- **El total y la seña se calculan SIEMPRE en el servidor** a partir del archivo del paquete. Nunca se acepta un monto que venga del cliente.

### 7.2 Flujo en 3 pasos (`/reservar/<slug>`)

En una misma página, con un indicador de pasos y la posibilidad de volver atrás sin perder lo cargado. El borrador se guarda en `sessionStorage`.

1. **Tu viaje:**
   - Un calendario con la fecha de inicio, que respeta la anticipación mínima y las fechas bloqueadas.
   - Adultos y menores, con steppers de 44px mínimo.
   - La opción del paquete (tren, hotel), si existe.
   - Un **resumen sticky** con el total, la seña del 30% y el saldo, que se actualiza en vivo.
2. **Tus datos (solo de quien reserva):**
   - Nombre, email, WhatsApp (con prefijo de país) y país.
   - Un campo opcional "¿algo que debamos saber?" (alergias, celebraciones, movilidad).
   - Una casilla obligatoria para aceptar los términos y la política de cancelación, con links.
   - Labels visibles, validación al salir del campo y errores debajo de cada campo.
3. **Pago:** dos botones, **"Pagar seña con tarjeta"** (Stripe Checkout) y **"Pagar con PayPal"**. Antes de los botones se repite el resumen y la regla de "confirmamos en menos de 24 h o te devolvemos la seña".

### 7.3 Backend (`functions/api/`)

- **`POST /api/reservas`:**
  1. Valida los datos.
  2. Recalcula los montos.
  3. Crea la fila en `reservas` con `estado='pendiente_pago'`.
  4. Crea la **Stripe Checkout Session**: `mode=payment`, `currency=usd`, un line item "Seña 30% — <paquete> — <fecha>", `customer_email`, `metadata.reserva_id`, `success_url=/reserva/<id>?ok=1` y `cancel_url=/reservar/<slug>?cancelado=1`. Si se eligió PayPal, crea la orden de PayPal (Orders v2, intent CAPTURE).
  5. Devuelve la URL de pago o el id de la orden.
- **`POST /api/stripe/webhook`:**
  - **Verifica la firma** con `STRIPE_WEBHOOK_SECRET`; en Workers, con `constructEventAsync` y `SubtleCrypto`.
  - Con `checkout.session.completed` marca `estado='sena_pagada'` y guarda el `payment_intent`.
  - Es **idempotente**: si llega dos veces, no duplica nada.
- **`POST /api/paypal/capture` + `POST /api/paypal/webhook`:** el equivalente de PayPal, con verificación del webhook.
- **Al quedar pagada:**
  1. Crea o actualiza el **lead en `leads`**, con `fuente='Web: reserva'`, el paquete y el monto, para que aparezca en el CRM.
  2. Genera un **token de viajeros** con vencimiento = **fecha de viaje − 15 días**.
  3. Manda **dos mails por Resend**:
     - **Al viajero:** la confirmación de que recibimos la seña, que confirmamos en menos de 24 h, el resumen y el link para completar los pasaportes.
     - **A `AVISO_EMAIL`:** los datos de la reserva y un botón `wa.me` al WhatsApp del viajero.
- **`/reserva/<id>`:** muestra el estado (pendiente de pago / seña pagada / confirmada / cancelada), el resumen y, si está pagada, el botón "Completar datos de viajeros".
- **`/reserva/<id>/viajeros?t=<token>`:** un bloque por viajero, con la cantidad que salió de la reserva: nombre completo como figura en el pasaporte, nacionalidad, tipo y número de documento, fecha de nacimiento y sexo (que piden las entradas de Machu Picchu). Guarda en `reserva_viajeros`. Si el token venció, muestra cómo contactar a la agencia.
- **Migración nueva en `migrations/`:**
  - `reservas`: id, slug_paquete, opcion, fecha_inicio, adultos, menores, total_usd, sena_usd, saldo_usd, nombre, email, whatsapp, pais, notas, estado, proveedor_pago, pago_ref, token_viajeros, token_vence, creado_en, actualizado_en.
  - `reserva_viajeros`.
  - `libro_reclamaciones`.
  - Antes de escribir en `leads`, mira su esquema real en la migración más reciente de la plantilla del CRM, o pregúntamelo en `DECISIONES.md` si no lo encuentras. **Nada destructivo.**
- **Seguridad:**
  - El sitio nunca ve datos de tarjetas.
  - Rate limit básico en `POST /api/reservas`.
  - Honeypot contra bots.
  - Los tokens de viajeros son aleatorios de 32 bytes.
  - En `/reserva/<id>` se usa un id no adivinable (UUID).

### 7.4 Cotizar y WhatsApp (secundarios)

- **"Prefiero cotizar" / "Cotiza a medida"** llevan a `https://luna-llena-viaje.pages.dev/paquetes?paquete=<slug>&origen=web`, que ya está en producción y escribe en el mismo CRM. En las páginas genéricas, a `https://luna-llena-viaje.pages.dev/?origen=web`.
- **Botón flotante de WhatsApp** al **+51 930 299 443**, con un mensaje prellenado según la página ("Hola, me interesa <paquete>"). Debe ser **rectangular con radio chico**, no una píldora, y no puede tapar la barra de compra en mobile: se apila arriba de ella.

### 7.5 Pruebas obligatorias antes del PR

- **Una compra completa en modo test de Stripe** (tarjeta `4242 4242 4242 4242`), con el webhook simulado con `stripe trigger` o con una llamada firmada en local. Tiene que verse la reserva pasar a `sena_pagada`, el lead en `leads`, los dos mails (o su payload, si no hay key) y el formulario de viajeros guardando datos.
- **Lo mismo en el sandbox de PayPal.** Si no hay credenciales, deja el flujo escrito y probado con mocks, y documenta en el README qué falta.
- **Casos borde:** el pago cancelado vuelve al paso 3 con los datos intactos, un webhook duplicado no duplica nada, una fecha bloqueada se rechaza en el servidor y un monto manipulado en el cliente se ignora.

## 8. Contenido y fotos

- **Scraping** de todas las páginas `https://lunallenatravel.com/packages/*` (la lista sale del menú del home: unos 80 paquetes) y de los posts de `/category/travel-blog/`. El JSON crudo se guarda en `referencia/scraping/` para poder auditarlo. Los precios viejos en soles ("From S/. …") van en `precio_pen_referencia`, solo como referencia interna, sin mostrarse.
- Si un dato es dudoso o contradictorio, márcalo en el archivo con `"revisar": "motivo"` y lístalo en `DECISIONES.md`.
- **Retiros (ayahuasca, San Pedro, kambo y los demás):** tono sobrio y respetuoso, sin promesas de sanación ni claims médicos, con una nota de "requiere entrevista previa". **Estos se cotizan, no se compran:** sin botón "Reservar".
- El paquete "Perú Mágico + Salar de Uyuni" incluye Bolivia: dilo en el texto.
- **Testimonios:** los del sitio viejo son de la demo del theme (Heidi de New York, Ben & Judy de Miami, Jasper de San Francisco). **No los uses.**
- **Fotos:**
  - Primero, las de la propia agencia que tengan buena calidad (`/wp-content/uploads/...`).
  - Después, fotos libres de Unsplash o Pexels **de Perú real y del lugar correcto**, con registro en `public/fotos/CREDITOS.md`.
  - Todo descargado al repo y procesado con `astro:assets`, en AVIF/WebP con `srcset`. El hero no puede pasar de unos 250 kB en mobile.
  - **Cada día del itinerario lleva la foto de su lugar.**

## 9. Calidad mínima

- **Lighthouse mobile** en el home, un paquete y `/reservar`: Performance ≥ 90, Accesibilidad ≥ 95, SEO ≥ 95.
- **Responsive y accesibilidad:**
  - Sin scroll horizontal a 375px.
  - Targets táctiles ≥ 44px.
  - Focus visible.
  - Un H1 por página y jerarquía de títulos correcta.
  - Contraste AA.
  - `prefers-reduced-motion` respetado.
- **Chequeo automático de links** sobre `dist/` (script en `npm run check:links`): falla con cualquier `href="#"` o link interno roto.
- `npm run build` limpio.
- **`README.md`** con:
  - Cómo editar un paquete y cómo cargar los precios en USD.
  - Cómo pasar Stripe y PayPal a modo real.
  - Qué variables cargar en Cloudflare.
  - Cómo aplicar la migración.

---

**Antes de tocar nada, lee `referencia/borrador-2026-10-22.html`, que es un borrador viejo de una sola página.** Úsalo solo como fuente de ideas: tiene voseo y otra paleta, y no se usa de base.
