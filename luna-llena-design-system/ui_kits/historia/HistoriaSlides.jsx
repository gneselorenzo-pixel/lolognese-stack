/* Visite.ar — Historia (1080×1920). One idea per slide, lots of air, casual. */
const { LogoMark, SignatureBlock, Kicker, Hook, Bajada, PhotoBackdrop, CTA, ArrowChip } =
  window.VisiteArPeru;

const HISTORIA_W = 1080;
const HISTORIA_H = 1920;
const SAFE_TOP = 230;
const SAFE_BOTTOM = 320;

/* Progress bar like Instagram stories */
function Progress({ count, active }) {
  return (
    <div style={{ position: 'absolute', top: 70, left: 60, right: 60, display: 'flex', gap: 8, zIndex: 4 }}>
      {Array.from({ length: count }).map((_, k) => (
        <div key={k} style={{ flex: 1, height: 5, borderRadius: 999, background: k <= active ? 'var(--white)' : 'rgba(255,255,255,0.3)' }} />
      ))}
    </div>
  );
}

function StoryHeader({ variant = 'white' }) {
  return (
    <div style={{ position: 'absolute', top: 110, left: 60, right: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 4 }}>
      <LogoMark variant={variant} size={26} />
    </div>
  );
}

/* Photo story slide — one idea, anchored in the safe area */
function HistoriaFoto({ src, kicker, idea, highlight, count = 3, active = 0 }) {
  return (
    <PhotoBackdrop src={src} style={{ width: HISTORIA_W, height: HISTORIA_H }}>
      <Progress count={count} active={active} />
      <StoryHeader />
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: SAFE_BOTTOM }}>
        <SignatureBlock>
          {kicker && <Kicker size="var(--h-kicker-size)" style={{ marginBottom: 24 }}>{kicker}</Kicker>}
          <Hook size="var(--h-idea-size)" highlight={highlight}>{idea}</Hook>
        </SignatureBlock>
      </div>
    </PhotoBackdrop>
  );
}

/* Solid dark story slide — big single idea */
function HistoriaTexto({ kicker, idea, highlight, bajada, count = 3, active = 1 }) {
  return (
    <div style={{ position: 'relative', width: HISTORIA_W, height: HISTORIA_H, background: 'var(--surface-dark)', overflow: 'hidden' }}>
      <Progress count={count} active={active} />
      <StoryHeader />
      <div style={{ position: 'absolute', left: 60, right: 60, top: '50%', transform: 'translateY(-50%)' }}>
        <SignatureBlock>
          {kicker && <Kicker size="var(--h-kicker-size)" style={{ marginBottom: 28 }}>{kicker}</Kicker>}
          <Hook size="var(--h-idea-size)" highlight={highlight}>{idea}</Hook>
          {bajada && <Bajada size="var(--h-bajada-size)" style={{ marginTop: 32, maxWidth: 820 }}>{bajada}</Bajada>}
        </SignatureBlock>
      </div>
    </div>
  );
}

/* CTA story slide */
function HistoriaCTA({ idea, keyword = 'INFO', count = 3, active = 2 }) {
  return (
    <div style={{ position: 'relative', width: HISTORIA_W, height: HISTORIA_H, background: 'var(--surface-dark)', overflow: 'hidden' }}>
      <Progress count={count} active={active} />
      <StoryHeader />
      <div style={{ position: 'absolute', left: 60, right: 60, top: '50%', transform: 'translateY(-50%)' }}>
        <SignatureBlock>
          <Hook size="var(--h-idea-size)" highlight={keyword}>{idea}</Hook>
          <div style={{ marginTop: 48, display: 'inline-flex', alignItems: 'center', gap: 16 }}>
            <ArrowChip direction="up" size={40} />
            <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 32, color: 'var(--on-dark-strong)' }}>Deslizá para arriba</span>
          </div>
        </SignatureBlock>
      </div>
    </div>
  );
}

Object.assign(window, { HistoriaFoto, HistoriaTexto, HistoriaCTA, HISTORIA_W, HISTORIA_H });
