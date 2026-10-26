import * as React from 'react';

/**
 * Props for the comentá KEYWORD CTA.
 * @startingPoint section="Content" subtitle="comentá KEYWORD call-to-action" viewport="700x120"
 */
export interface CTAProps {
  /** ManyChat trigger keyword, uppercase. One of VIAJE / GUIA / ARGENTINA / INFO (or custom). */
  keyword?: string;
  /** Leading verb in voseo. Default "Comentá". */
  label?: string;
  style?: React.CSSProperties;
}

/**
 * Carrusel CTA — the "comentá KEYWORD" pattern that triggers ManyChat. Keyword goes orange.
 * @dsCard ui
 */
export function CTA(props: CTAProps): JSX.Element;
