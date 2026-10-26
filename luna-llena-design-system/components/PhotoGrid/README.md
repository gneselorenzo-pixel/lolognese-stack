Grid of N photos sharing one canvas (2x2 by default) — use when a slide needs to show several destinations or moments at once instead of one full-bleed photo.

```jsx
<PhotoGrid
  photos={['assets/photo-1.jpg', 'assets/photo-2.jpg', 'assets/photo-3.jpg', 'assets/photo-4.jpg']}
  columns={2}
  rows={2}
/>
```

Doesn't wrap children like `PhotoBackdrop` — position text/overlays absolutely on top of it in the parent container. Combine with `SignatureBlock`/`Kicker`/`Hook` positioned over the grid's midline for a titled grid slide.
