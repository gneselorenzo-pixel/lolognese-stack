/* Visite.ar — Cuadrado (1080×1080). Post único: dato, cita o foto. */
const { LogoMark, SignatureBlock, Kicker, Hook, Bajada, PhotoBackdrop } =
  window.VisiteArPeru;

const SQ = 1080;

/* Dato / cita sobre dark */
function SquareDato({ kicker, idea, highlight, bajada }) {
  return (
    <div style={{ position: 'relative', width: SQ, height: SQ, background: 'var(--surface-dark)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 72, left: 72, right: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LogoMark variant="white" size={26} showHandle />
      </div>
      <div style={{ position: 'absolute', left: 72, right: 72, top: '50%', transform: 'translateY(-46%)' }}>
        <SignatureBlock>
          <Kicker style={{ marginBottom: 22 }}>{kicker}</Kicker>
          <Hook size="70px" highlight={highlight}>{idea}</Hook>
          {bajada && <Bajada size="30px" style={{ marginTop: 24, maxWidth: 820 }}>{bajada}</Bajada>}
        </SignatureBlock>
      </div>
    </div>
  );
}

/* Foto a sangre con hook */
function SquareFoto({ src, kicker, idea, highlight }) {
  return (
    <PhotoBackdrop src={src} style={{ width: SQ, height: SQ }}>
      <div style={{ position: 'absolute', top: 72, left: 72, right: 72 }}>
        <LogoMark variant="white" size={26} />
      </div>
      <div style={{ position: 'absolute', left: 72, right: 72, bottom: 72 }}>
        <SignatureBlock>
          <Kicker style={{ marginBottom: 18 }}>{kicker}</Kicker>
          <Hook size="66px" highlight={highlight}>{idea}</Hook>
        </SignatureBlock>
      </div>
    </PhotoBackdrop>
  );
}

Object.assign(window, { SquareDato, SquareFoto, SQ });
