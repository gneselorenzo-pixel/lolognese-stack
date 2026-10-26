import * as React from 'react';

/**
 * Props for the photo grid.
 * @startingPoint section="Media" subtitle="N fotos en grid — alternativa a un solo backdrop" viewport="540x675"
 */
export interface PhotoGridProps {
  /** Image URLs, one per cell, row-major order. */
  photos?: string[];
  /** Grid columns. Default 2. */
  columns?: number;
  /** Grid rows. Default 2. */
  rows?: number;
  /** Gap between cells (CSS length). Default 0 (fotos a sangre, contiguas). */
  gap?: string | number;
  /** Apply the brand's photo filter (saturate/brightness) per cell. Default true. */
  filter?: boolean;
  style?: React.CSSProperties;
}

/**
 * Grid of N photos (2x2 by default) sharing one canvas — for slides that
 * show several destinations/moments at once instead of one full backdrop.
 * Overlay text separately on top (it doesn't wrap children like PhotoBackdrop).
 * @dsCard media
 */
export function PhotoGrid(props: PhotoGridProps): JSX.Element;
