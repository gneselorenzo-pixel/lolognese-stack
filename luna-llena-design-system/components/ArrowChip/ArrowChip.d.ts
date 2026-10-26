import * as React from 'react';

export interface ArrowChipProps {
  /** Diameter in px. Default 46. */
  size?: number;
  /** Chevron direction. Default 'right'. */
  direction?: 'right' | 'left' | 'down';
  style?: React.CSSProperties;
}

/**
 * Circular orange chip with a chevron — the "deslizá" affordance.
 * @dsCard ui
 */
export function ArrowChip(props: ArrowChipProps): JSX.Element;
