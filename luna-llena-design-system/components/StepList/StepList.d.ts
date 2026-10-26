import * as React from 'react';

export interface StepListItem {
  title: string;
  description?: string;
}

/**
 * Props for the step list.
 * @startingPoint section="Content" subtitle="Pasos/hitos numerados para itinerarios o listas" viewport="700x500"
 */
export interface StepListProps {
  /** Ordered steps — ghost number is auto-assigned from array index. */
  steps?: StepListItem[];
  /** Gap between steps (CSS length). Default var(--space-6). */
  gap?: string | number;
  style?: React.CSSProperties;
}

/**
 * Numbered step/milestone list — ghost number + title + optional description,
 * for itineraries or ordered points.
 * @dsCard content
 */
export function StepList(props: StepListProps): JSX.Element;
