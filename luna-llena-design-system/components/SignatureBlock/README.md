Wrapper para bloque de texto — agrupa kicker + hook + cta con spacing y font-family consistentes. Plano por defecto, sin línea.

```jsx
<SignatureBlock>
  <Kicker>Argentina sin errores</Kicker>
  <Hook highlight="no">Los 8 lugares que no podés saltearte</Hook>
</SignatureBlock>
```

**Variante `bar`** — barra orange de 5px a la izquierda del texto. Es opcional, NO el default: usarla puntualmente cuando el layout la pida, no en todos los templates.

```jsx
<SignatureBlock bar>
  <Kicker>Argentina sin errores</Kicker>
  <Hook highlight="no">Los 8 lugares que no podés saltearte</Hook>
</SignatureBlock>
```

**Alineación** — `align="left" | "center"`. Si no la pasás, hereda `--text-align` (left por
defecto del sistema). En un bloque flex/grid también setea `alignItems`.

```jsx
<SignatureBlock align="center">…</SignatureBlock>
```

`bar` sólo tiene sentido a la izquierda: con `align="center"` la barra se ignora y queda un
warning en consola.
