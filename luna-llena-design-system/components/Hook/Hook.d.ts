import * as React from 'react';

/**
 * Props for the ExtraBold hook headline.
 * @startingPoint section="Content" subtitle="ExtraBold hook with orange keyword" viewport="700x220"
 */
export interface HookProps {
  children?: React.ReactNode;
  /** Keyword to colour orange (first case-insensitive match in a string child). */
  highlight?: string;
  /** Text alignment. Omit to inherit the system default (--text-align = left). */
  align?: 'left' | 'center';
  /** Font size. Default var(--hook-size) = 94px (carrusel). Use --h-idea-size for historia. */
  size?: string | number;
  /** Base text color. Default white. */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Hook / headline — Bricolage Grotesque ExtraBold, tight tracking. The keyword goes orange.
 * @dsCard content
 */
export function Hook(props: HookProps): JSX.Element;
