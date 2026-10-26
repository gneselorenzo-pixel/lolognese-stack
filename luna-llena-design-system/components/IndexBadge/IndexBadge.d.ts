import * as React from 'react';

export interface IndexBadgeProps {
  /** Explicit label (overrides current/total). e.g. "GUÍA AR". */
  children?: React.ReactNode;
  /** Current slide number (zero-padded with total). */
  current?: number;
  /** Total slides. */
  total?: number;
  style?: React.CSSProperties;
}

/**
 * Faint uppercase index / slide counter for the top-right corner.
 * @dsCard ui
 */
export function IndexBadge(props: IndexBadgeProps): JSX.Element;
