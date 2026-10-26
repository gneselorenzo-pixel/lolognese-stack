import * as React from 'react';

/**
 * Props for the photo backdrop.
 * @startingPoint section="Media" subtitle="Photo + dark overlay for legible text" viewport="540x675"
 */
export interface PhotoBackdropProps {
  /** Image URL. */
  src?: string;
  children?: React.ReactNode;
  /** Render the dark protection gradient (bottom ~60%). Default true. */
  overlay?: boolean;
  /** Render the subtle centre-top vignette. Default true. */
  vignette?: boolean;
  style?: React.CSSProperties;
}

/**
 * Full-bleed photo with the Visite overlay system: desaturated/dimmed photo +
 * vignette + dark protection gradient. Children render on top.
 * @dsCard media
 */
export function PhotoBackdrop(props: PhotoBackdropProps): JSX.Element;
