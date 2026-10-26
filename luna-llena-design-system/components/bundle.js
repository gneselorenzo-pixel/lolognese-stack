/* @ds-bundle: {"format":4,"namespace":"VisiteArPeru","components":[{"name":"LogoMark"},{"name":"Bajada"},{"name":"Hook"},{"name":"Kicker"},{"name":"SignatureBlock"},{"name":"StepList"},{"name":"PhotoBackdrop"},{"name":"PhotoGrid"},{"name":"ArrowChip"},{"name":"CTA"},{"name":"GraphicBlock"},{"name":"IndexBadge"}]} */

(() => {

const __ds_ns = (window.VisiteArPeru = window.VisiteArPeru || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo visite.ar — wordmark tipografiado en vivo, con `.ar` en orange.
 * Usado en la barra superior de los templates.
 */
function LogoMark({
  variant = 'white',
  size = 28,
  showHandle = false,
  handle = '@visite.ar',
  style = {},
  ...rest
}) {
  const color = variant === 'dark' ? 'var(--text)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: showHandle ? 'space-between' : 'flex-start',
      width: showHandle ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: size,
      letterSpacing: '-0.01em',
      color,
      lineHeight: 1
    }
  }, "visite", /*#__PURE__*/React.createElement("span", {
    style: {
      color: variant === 'dark' ? 'var(--primary-on-light)' : 'var(--primary)'
    }
  }, ".ar")), showHandle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.62,
      letterSpacing: '0.04em',
      color: variant === 'dark' ? 'var(--on-light-muted)' : 'var(--on-dark-faint)'
    }
  }, handle));
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/content/Bajada.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bajada / body copy — Medium, comfortable line-height, muted-white on dark.
 */
function Bajada({
  children,
  align,
  size = 'var(--bajada-size)',
  color = 'var(--on-dark-muted)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: align || 'var(--text-align)',
      fontWeight: 'var(--fw-medium)',
      fontSize: size,
      letterSpacing: 'var(--track-normal)',
      lineHeight: 'var(--leading-normal)',
      color,
      margin: 0,
      textWrap: 'pretty',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Bajada });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Bajada.jsx", error: String((e && e.message) || e) }); }

// components/content/Hook.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hook / headline — Bricolage Grotesque ExtraBold, tight negative tracking, premium.
 * Pass `highlight` to colour a keyword in orange (first match), or wrap
 * the keyword in <em> yourself inside children.
 */
function Hook({
  children,
  highlight,
  align,
  size = 'var(--hook-size)',
  color = 'var(--white)',
  style = {},
  ...rest
}) {
  const base = {
    textAlign: align || 'var(--text-align)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-extrabold)',
    fontSize: size,
    letterSpacing: 'var(--track-tight)',
    lineHeight: 'var(--leading-solid)',
    color,
    textWrap: 'balance',
    ...style
  };

  // If highlight is a string and children is a string, split and colour the match.
  if (highlight && typeof children === 'string') {
    const idx = children.toLowerCase().indexOf(String(highlight).toLowerCase());
    if (idx !== -1) {
      const before = children.slice(0, idx);
      const match = children.slice(idx, idx + highlight.length);
      const after = children.slice(idx + highlight.length);
      return /*#__PURE__*/React.createElement("h2", _extends({
        style: base
      }, rest), before, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--primary)'
        }
      }, match), after);
    }
  }
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Hook });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hook.jsx", error: String((e && e.message) || e) }); }

// components/content/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kicker / label — SemiBold uppercase, open tracking, orange.
 * Sits above a hook or titular.
 */
function Kicker({
  children,
  align,
  size = 'var(--kicker-size)',
  color = 'var(--primary)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: align || 'var(--text-align)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size,
      letterSpacing: 'var(--track-open)',
      lineHeight: 'var(--leading-solid)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/content/SignatureBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Groups a text block (kicker + hook/titular + bajada/cta) so spacing and
 * font-family stay consistent. Plain by default — no line. Pass `bar` to
 * opt into the orange signature bar (5px, left of the text) as a variant;
 * it is NOT the default treatment and should not be added to every slide.
 *
 * `align` is the block's text alignment ('left' | 'center'). Omit it to
 * inherit the system default (`--text-align`). The `bar` variant only makes
 * sense left-aligned: with align='center' the bar is dropped and a warning
 * is logged.
 */
function SignatureBlock({
  bar = false,
  align,
  children,
  style = {},
  ...rest
}) {
  const centered = align === 'center';
  const showBar = bar && !centered;
  if (bar && centered) {
    console.warn("SignatureBlock: la variante `bar` sólo funciona alineada a la izquierda. " + "Con align='center' se ignora la barra. Usá align='left' o sacá `bar`.");
  }
  const display = style.display;
  const isStack = display === 'flex' || display === 'inline-flex' || display === 'grid' || display === 'inline-grid';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      ...(align ? {
        textAlign: align
      } : {
        textAlign: 'var(--text-align)'
      }),
      ...(align && isStack ? {
        alignItems: centered ? 'center' : 'flex-start'
      } : {}),
      ...(showBar ? {
        borderLeft: 'var(--signature-width) solid var(--signature)',
        paddingLeft: 'var(--signature-gap)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SignatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SignatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered step / milestone list — a faded ghost number, a title, and an
 * optional short description, one per item. For itineraries or ordered points.
 */
function StepList({
  steps = [],
  gap = 'var(--space-6)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...style
    }
  }, rest), steps.map((step, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: '48px',
      lineHeight: 'var(--leading-solid)',
      color: 'var(--primary)',
      opacity: 0.35,
      minWidth: '64px'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--cuerpo-size)',
      color: 'var(--white)',
      lineHeight: 'var(--leading-snug)'
    }
  }, step.title), step.description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-regular)',
      fontSize: '24px',
      color: 'var(--on-dark-muted)',
      lineHeight: 'var(--leading-body)',
      marginTop: 'var(--space-2)'
    }
  }, step.description)))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoBackdrop.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-bleed photo backdrop with the brand's overlay system:
 * desaturated/dimmed photo + vignette + dark protection gradient.
 * Place text content as children — it renders above the overlays.
 */
function PhotoBackdrop({
  src,
  children,
  overlay = true,
  vignette = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--surface-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: src ? `url('${src}')` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'var(--photo-filter)'
    }
  }), vignette && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-vignette)'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { PhotoBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grid of N photos (2x2 by default) sharing one canvas — for slides that show
 * several destinations/moments at once instead of a single full-bleed backdrop.
 * Doesn't wrap children like PhotoBackdrop — position text on top separately.
 */
function PhotoGrid({
  photos = [],
  columns = 2,
  rows = 2,
  gap = 0,
  filter = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap,
      background: 'var(--surface-dark)',
      ...style
    }
  }, rest), photos.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      backgroundImage: src ? `url('${src}')` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: filter ? 'var(--photo-filter)' : 'none'
    }
  })));
}
Object.assign(__ds_scope, { PhotoGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoGrid.jsx", error: String((e && e.message) || e) }); }

// components/ui/ArrowChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Línea-flecha larga con puntas redondeadas — la señal de "deslizá".
 * Sin círculo ni chip: trazo orange, stroke-linecap redondo.
 * direction: right (default), left, down, up.
 */
function ArrowChip({
  size = 46,
  direction = 'right',
  style = {},
  ...rest
}) {
  const rot = {
    right: 0,
    left: 180,
    down: 90,
    up: -90
  }[direction] ?? 0;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    style: {
      transform: rot ? `rotate(${rot}deg)` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M5 24 H41 M30 13 L43 24 L30 35",
    stroke: "var(--primary)",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
}
Object.assign(__ds_scope, { ArrowChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/ArrowChip.jsx", error: String((e && e.message) || e) }); }

// components/ui/CTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Carrusel CTA — "comentá KEYWORD" pattern that triggers ManyChat.
 * The keyword renders in orange, uppercase.
 */
function CTA({
  keyword = 'VIAJE',
  label = 'Comentá',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.4ch',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--cta-size)',
      letterSpacing: 'var(--track-normal)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--on-dark-strong)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: '0.04em'
    }
  }, keyword));
}
Object.assign(__ds_scope, { CTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/CTA.jsx", error: String((e && e.message) || e) }); }

// components/ui/GraphicBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flat graphic block — solid/tinted background with an optional low-opacity
 * shape (circle, ring, or bar), no photo required. For slides that lead with
 * shape/color instead of a photo backdrop.
 */
function GraphicBlock({
  background = 'var(--surface-dark)',
  shape = 'none',
  shapeColor = 'var(--primary)',
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background,
      ...style
    }
  }, rest), shape === 'circle' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: '70%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: shapeColor,
      opacity: 0.14,
      top: '-20%',
      right: '-20%'
    }
  }), shape === 'ring' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: '60%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: `24px solid ${shapeColor}`,
      opacity: 0.25,
      bottom: '-15%',
      left: '-15%'
    }
  }), shape === 'bar' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      top: '62%',
      background: shapeColor,
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { GraphicBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/GraphicBlock.jsx", error: String((e && e.message) || e) }); }

// components/ui/IndexBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small index / slide-counter label for the top-right corner (e.g. "01 / 08").
 * Faint uppercase text in the brand voice.
 */
function IndexBadge({
  children,
  current,
  total,
  style = {},
  ...rest
}) {
  const text = children != null ? children : current != null && total != null ? `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}` : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--footer-size)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--on-dark-faint)',
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { IndexBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/IndexBadge.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/carrusel/CarruselSlides.jsx
try { (() => {
/* Visite.ar — Carrusel (1080×1350) slide set. Composes the DS components. */
const {
  LogoMark,
  SignatureBlock,
  Kicker,
  Hook,
  Bajada,
  PhotoBackdrop,
  CTA,
  ArrowChip,
  IndexBadge
} = window.VisiteArPeru;
const CARRUSEL_W = 1080;
const CARRUSEL_H = 1350;

/* Shared top bar */
function TopBar({
  current,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 80,
      left: 80,
      right: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    variant: "white",
    size: 28
  }), /*#__PURE__*/React.createElement(IndexBadge, {
    current: current,
    total: total
  }));
}

/* Slide 1 — hook over a photo */
function HookSlide({
  src,
  kicker,
  hook,
  highlight,
  current = 1,
  total = 8
}) {
  return /*#__PURE__*/React.createElement(PhotoBackdrop, {
    src: src,
    style: {
      width: CARRUSEL_W,
      height: CARRUSEL_H
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    current: current,
    total: total
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      right: 80,
      bottom: 90
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 22
    }
  }, kicker), /*#__PURE__*/React.createElement(Hook, {
    highlight: highlight
  }, hook), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--on-dark-muted)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--footer-size)',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement(ArrowChip, null), /*#__PURE__*/React.createElement("span", null, "Desliz\xE1")))));
}

/* Slide 2+ — content on solid dark, numbered list item */
function ListSlide({
  n,
  kicker,
  titular,
  bajada,
  current = 2,
  total = 8
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: CARRUSEL_W,
      height: CARRUSEL_H,
      background: 'var(--surface-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    current: current,
    total: total
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 150,
      right: 64,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 380,
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: 'rgba(255,122,0,0.10)'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      right: 80,
      bottom: 90
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 22
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--titular-size)',
      letterSpacing: 'var(--track-snug)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--white)'
    }
  }, titular), /*#__PURE__*/React.createElement(Bajada, {
    size: "var(--cuerpo-size)",
    style: {
      marginTop: 22,
      maxWidth: 760
    }
  }, bajada))));
}

/* Last slide — CTA on claro */
function CTASlide({
  titular,
  keyword = 'VIAJE',
  current = 8,
  total = 8
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: CARRUSEL_W,
      height: CARRUSEL_H,
      background: 'var(--bg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 80,
      left: 80,
      right: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    variant: "dark",
    size: 28
  }), /*#__PURE__*/React.createElement(IndexBadge, {
    current: current,
    total: total,
    style: {
      color: 'var(--on-light-muted)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      right: 80,
      bottom: 90
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Kicker, {
    color: 'var(--primary-on-light)',
    style: {
      marginBottom: 22
    }
  }, "\xBFTe sirvi\xF3?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 72,
      letterSpacing: 'var(--track-tight)',
      lineHeight: 1.02,
      color: 'var(--text)'
    }
  }, titular), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: '24px 30px',
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ArrowChip, {
    direction: "down"
  }), /*#__PURE__*/React.createElement(CTA, {
    keyword: keyword
  })))));
}
Object.assign(window, {
  HookSlide,
  ListSlide,
  CTASlide,
  CARRUSEL_W,
  CARRUSEL_H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carrusel/CarruselSlides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cuadrado/CuadradoSlides.jsx
try { (() => {
/* Visite.ar — Cuadrado (1080×1080). Post único: dato, cita o foto. */
const {
  LogoMark,
  SignatureBlock,
  Kicker,
  Hook,
  Bajada,
  PhotoBackdrop
} = window.VisiteArPeru;
const SQ = 1080;

/* Dato / cita sobre dark */
function SquareDato({
  kicker,
  idea,
  highlight,
  bajada
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: SQ,
      height: SQ,
      background: 'var(--surface-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 72,
      left: 72,
      right: 72,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    variant: "white",
    size: 26,
    showHandle: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      right: 72,
      top: '50%',
      transform: 'translateY(-46%)'
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 22
    }
  }, kicker), /*#__PURE__*/React.createElement(Hook, {
    size: "70px",
    highlight: highlight
  }, idea), bajada && /*#__PURE__*/React.createElement(Bajada, {
    size: "30px",
    style: {
      marginTop: 24,
      maxWidth: 820
    }
  }, bajada))));
}

/* Foto a sangre con hook */
function SquareFoto({
  src,
  kicker,
  idea,
  highlight
}) {
  return /*#__PURE__*/React.createElement(PhotoBackdrop, {
    src: src,
    style: {
      width: SQ,
      height: SQ
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 72,
      left: 72,
      right: 72
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    variant: "white",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      right: 72,
      bottom: 72
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 18
    }
  }, kicker), /*#__PURE__*/React.createElement(Hook, {
    size: "66px",
    highlight: highlight
  }, idea))));
}
Object.assign(window, {
  SquareDato,
  SquareFoto,
  SQ
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cuadrado/CuadradoSlides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/historia/HistoriaSlides.jsx
try { (() => {
/* Visite.ar — Historia (1080×1920). One idea per slide, lots of air, casual. */
const {
  LogoMark,
  SignatureBlock,
  Kicker,
  Hook,
  Bajada,
  PhotoBackdrop,
  CTA,
  ArrowChip
} = window.VisiteArPeru;
const HISTORIA_W = 1080;
const HISTORIA_H = 1920;
const SAFE_TOP = 230;
const SAFE_BOTTOM = 320;

/* Progress bar like Instagram stories */
function Progress({
  count,
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 70,
      left: 60,
      right: 60,
      display: 'flex',
      gap: 8,
      zIndex: 4
    }
  }, Array.from({
    length: count
  }).map((_, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 999,
      background: k <= active ? 'var(--white)' : 'rgba(255,255,255,0.3)'
    }
  })));
}
function StoryHeader({
  variant = 'white'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 110,
      left: 60,
      right: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    variant: variant,
    size: 26
  }));
}

/* Photo story slide — one idea, anchored in the safe area */
function HistoriaFoto({
  src,
  kicker,
  idea,
  highlight,
  count = 3,
  active = 0
}) {
  return /*#__PURE__*/React.createElement(PhotoBackdrop, {
    src: src,
    style: {
      width: HISTORIA_W,
      height: HISTORIA_H
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    count: count,
    active: active
  }), /*#__PURE__*/React.createElement(StoryHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      bottom: SAFE_BOTTOM
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, kicker && /*#__PURE__*/React.createElement(Kicker, {
    size: "var(--h-kicker-size)",
    style: {
      marginBottom: 24
    }
  }, kicker), /*#__PURE__*/React.createElement(Hook, {
    size: "var(--h-idea-size)",
    highlight: highlight
  }, idea))));
}

/* Solid dark story slide — big single idea */
function HistoriaTexto({
  kicker,
  idea,
  highlight,
  bajada,
  count = 3,
  active = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: HISTORIA_W,
      height: HISTORIA_H,
      background: 'var(--surface-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    count: count,
    active: active
  }), /*#__PURE__*/React.createElement(StoryHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, kicker && /*#__PURE__*/React.createElement(Kicker, {
    size: "var(--h-kicker-size)",
    style: {
      marginBottom: 28
    }
  }, kicker), /*#__PURE__*/React.createElement(Hook, {
    size: "var(--h-idea-size)",
    highlight: highlight
  }, idea), bajada && /*#__PURE__*/React.createElement(Bajada, {
    size: "var(--h-bajada-size)",
    style: {
      marginTop: 32,
      maxWidth: 820
    }
  }, bajada))));
}

/* CTA story slide */
function HistoriaCTA({
  idea,
  keyword = 'INFO',
  count = 3,
  active = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: HISTORIA_W,
      height: HISTORIA_H,
      background: 'var(--surface-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    count: count,
    active: active
  }), /*#__PURE__*/React.createElement(StoryHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(SignatureBlock, null, /*#__PURE__*/React.createElement(Hook, {
    size: "var(--h-idea-size)",
    highlight: keyword
  }, idea), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ArrowChip, {
    direction: "up",
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 32,
      color: 'var(--on-dark-strong)'
    }
  }, "Desliz\xE1 para arriba")))));
}
Object.assign(window, {
  HistoriaFoto,
  HistoriaTexto,
  HistoriaCTA,
  HISTORIA_W,
  HISTORIA_H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/historia/HistoriaSlides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Bajada = __ds_scope.Bajada;

__ds_ns.Hook = __ds_scope.Hook;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.SignatureBlock = __ds_scope.SignatureBlock;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.PhotoBackdrop = __ds_scope.PhotoBackdrop;

__ds_ns.PhotoGrid = __ds_scope.PhotoGrid;

__ds_ns.ArrowChip = __ds_scope.ArrowChip;

__ds_ns.CTA = __ds_scope.CTA;

__ds_ns.GraphicBlock = __ds_scope.GraphicBlock;

__ds_ns.IndexBadge = __ds_scope.IndexBadge;

})();
