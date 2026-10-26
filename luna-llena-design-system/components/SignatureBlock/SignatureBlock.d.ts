import * as React from 'react';

/**
 * Props for the signature text block.
 * @startingPoint section="Content" subtitle="Signature orange bar + text block" viewport="700x220"
 */
export interface SignatureBlockProps {
  children?: React.ReactNode;
  /** Space between the bar and the text. Default var(--signature-gap) = 32px. */
  gap?: string | number;
  /** Opt into the orange signature bar. Left-aligned only — ignored with align='center'. */
  bar?: boolean;
  /**
   * Text alignment of the block. Omit to inherit the system default (--text-align = left).
   * When the block is a flex/grid stack, it also sets alignItems.
   */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * The Visite signature — a 5px orange vertical bar to the left of a text block.
 * Present on every template. Wrap kicker/hook/cta inside it.
 * @dsCard layout
 */
export function SignatureBlock(props: SignatureBlockProps): JSX.Element;
