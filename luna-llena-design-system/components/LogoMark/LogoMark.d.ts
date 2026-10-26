import * as React from 'react';

export interface LogoMarkProps {
  /** Color treatment — white on dark surfaces, dark on light. */
  variant?: 'white' | 'dark';
  /** Font size of the wordmark in px. Default 28. */
  size?: number;
  /** Show the @handle to the right (fills container width). */
  showHandle?: boolean;
  /** Handle text. Default "@visite.ar". */
  handle?: string;
  style?: React.CSSProperties;
}

/**
 * The VISITE wordmark with its signature orange dot.
 * @dsCard brand
 */
export function LogoMark(props: LogoMarkProps): JSX.Element;
