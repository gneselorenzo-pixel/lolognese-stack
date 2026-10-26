Full-bleed photo with the Visite overlay system — desaturated/dimmed photo, a subtle vignette, and the dark protection gradient that guarantees legible text over the bottom ~60%.

```jsx
<PhotoBackdrop src="assets/placeholder.jpg">
  <div style={{ position: 'absolute', left: 80, bottom: 90, right: 80 }}>
    <SignatureBlock>…</SignatureBlock>
  </div>
</PhotoBackdrop>
```

Always wraps photo slides — never put text on a raw photo. Toggle `overlay`/`vignette` off only for a full-photo slide with no text.
