Numbered step/milestone list — a faded ghost number followed by a title and optional short description, one per item. For itineraries, ordered tips, or "N things to do" slides.

```jsx
<StepList
  steps={[
    { title: 'Lima', description: 'Días 1-2 — Miraflores, Barranco y ceviche.' },
    { title: 'Cusco', description: 'Días 3-5 — Valle Sagrado y Machu Picchu.' },
    { title: 'Arequipa', description: 'Días 6-8 — Cañón del Colca y centro histórico.' },
  ]}
/>
```

Pair with `SignatureBlock`/`Kicker` above it for a titled list slide. Ghost numbers use orange at low opacity — don't recolor them to full-strength orange, they should read as background rhythm, not compete with the titles.
