import * as React from 'react';

export interface KickerProps {
  children?: React.ReactNode;
  /** Text alignment. Omit to inherit the system default (--text-align = left). */
  align?: 'left' | 'center';
  /** Font size. Default var(--kicker-size) = 26px (carrusel). */
  size?: string | number;
  /** Color. Default orange. */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Kicker / label — SemiBold uppercase, open tracking, orange. Sits above a hook.
 * @dsCard content
 */
export function Kicker(props: KickerProps): JSX.Element;
