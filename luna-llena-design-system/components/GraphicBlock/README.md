Flat graphic block — a solid/tinted background with an optional low-opacity decorative shape (`circle`, `ring`, or `bar`), no photo required. Use it for slides that lead with shape and color instead of a photo backdrop.

```jsx
<GraphicBlock shape="circle">
  <div style={{ position: 'absolute', left: 80, bottom: 90, right: 80 }}>
    <SignatureBlock>
      <Kicker>Antes de viajar</Kicker>
      <Hook highlight="errores">Los 5 errores que no podés cometer</Hook>
    </SignatureBlock>
  </div>
</GraphicBlock>
```

Shapes render at low opacity by design (0.12–0.25) — they're rhythm/texture, not another accent competing with text. Combine with `PhotoGrid` or `PhotoBackdrop` in other slides of the same carousel so the graphic-only slide reads as a deliberate break in rhythm, not a mismatch.
