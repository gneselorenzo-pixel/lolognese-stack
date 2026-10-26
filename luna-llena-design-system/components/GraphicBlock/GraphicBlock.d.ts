import * as React from 'react';

/**
 * Props for the graphic block.
 * @startingPoint section="UI" subtitle="Fondo grafico plano, sin foto — circulo/anillo/barra opcionales" viewport="540x675"
 */
export interface GraphicBlockProps {
  /** Background color/gradient. Default var(--text). */
  background?: string;
  /** Decorative shape behind the content. Default 'none'. */
  shape?: 'none' | 'circle' | 'ring' | 'bar';
  /** Color of the decorative shape. Default orange. */
  shapeColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Flat graphic block — solid background + an optional low-opacity shape,
 * no photo required. For slides that lead with shape/color instead of a
 * photo backdrop.
 * @dsCard ui
 */
export function GraphicBlock(props: GraphicBlockProps): JSX.Element;
