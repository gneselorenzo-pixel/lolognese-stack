/* Visite.ar — Carrusel (1080×1350) slide set. Composes the DS components. */
const { LogoMark, SignatureBlock, Kicker, Hook, Bajada, PhotoBackdrop, CTA, ArrowChip, IndexBadge } =
  window.VisiteArPeru;

const CARRUSEL_W = 1080;
const CARRUSEL_H = 1350;

/* Shared top bar */
function TopBar({ current, total }) {
  return (
    <div style={{ position: 'absolute', top: 80, left: 80, right: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 3 }}>
      <LogoMark variant="white" size={28} />
      <IndexBadge current={current} total={total} />
    </div>
  );
}

/* Slide 1 — hook over a photo */
function HookSlide({ src, kicker, hook, highlight, current = 1, total = 8 }) {
  return (
    <PhotoBackdrop src={src} style={{ width: CARRUSEL_W, height: CARRUSEL_H }}>
      <TopBar current={current} total={total} />
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 90 }}>
        <SignatureBlock>
          <Kicker style={{ marginBottom: 22 }}>{kicker}</Kicker>
          <Hook highlight={highlight}>{hook}</Hook>
          <div style={{ marginTop: 34, display: 'flex', alignItems: 'center', gap: 14, color: 'var(--on-dark-muted)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--footer-size)', letterSpacing: '0.02em' }}>
            <ArrowChip /><span>Deslizá</span>
          </div>
        </SignatureBlock>
      </div>
    </PhotoBackdrop>
  );
}

/* Slide 2+ — content on solid dark, numbered list item */
function ListSlide({ n, kicker, titular, bajada, current = 2, total = 8 }) {
  return (
    <div style={{ position: 'relative', width: CARRUSEL_W, height: CARRUSEL_H, background: 'var(--surface-dark)', overflow: 'hidden' }}>
      <TopBar current={current} total={total} />
      {/* big ghost number */}
      <div style={{ position: 'absolute', top: 150, right: 64, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-extrabold)', fontSize: 380, letterSpacing: '-0.04em', lineHeight: 1, color: 'rgba(255,122,0,0.10)' }}>
        {String(n).padStart(2, '0')}
      </div>
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 90 }}>
        <SignatureBlock>
          <Kicker style={{ marginBottom: 22 }}>{kicker}</Kicker>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--titular-size)', letterSpacing: 'var(--track-snug)', lineHeight: 'var(--leading-snug)', color: 'var(--white)' }}>{titular}</h2>
          <Bajada size="var(--cuerpo-size)" style={{ marginTop: 22, maxWidth: 760 }}>{bajada}</Bajada>
        </SignatureBlock>
      </div>
    </div>
  );
}

/* Last slide — CTA on claro */
function CTASlide({ titular, keyword = 'VIAJE', current = 8, total = 8 }) {
  return (
    <div style={{ position: 'relative', width: CARRUSEL_W, height: CARRUSEL_H, background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 80, left: 80, right: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <LogoMark variant="dark" size={28} />
        <IndexBadge current={current} total={total} style={{ color: 'var(--on-light-muted)' }} />
      </div>
      <div style={{ position: 'absolute', left: 80, right: 80, bottom: 90 }}>
        <SignatureBlock>
          <Kicker color="var(--primary-on-light)" style={{ marginBottom: 22 }}>¿Te sirvió?</Kicker>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-extrabold)', fontSize: 72, letterSpacing: 'var(--track-tight)', lineHeight: 1.02, color: 'var(--text)' }}>{titular}</h2>
          <div style={{ marginTop: 40, padding: '24px 30px', background: 'var(--surface-dark)', borderRadius: 'var(--radius)', display: 'inline-flex', alignItems: 'center', gap: 18 }}>
            <ArrowChip direction="down" />
            <CTA keyword={keyword} />
          </div>
        </SignatureBlock>
      </div>
    </div>
  );
}

Object.assign(window, { HookSlide, ListSlide, CTASlide, CARRUSEL_W, CARRUSEL_H });
