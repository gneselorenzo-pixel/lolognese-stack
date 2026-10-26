import * as React from 'react';

export interface BajadaProps {
  children?: React.ReactNode;
  /** Text alignment. Omit to inherit the system default (--text-align = left). */
  align?: 'left' | 'center';
  /** Font size. Default var(--bajada-size) = 36px. */
  size?: string | number;
  /** Color. Default muted white (82%). */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Bajada / body copy — Medium weight, comfortable line-height, muted on dark.
 * @dsCard content
 */
export function Bajada(props: BajadaProps): JSX.Element;
