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

export interface BajadaProps {
  children?: React.ReactNode;
  /** Text alignment. Omit to inherit the system default (--text-align = left). */
  align?: 'left' | 'center';
  /** Font size. Default var(--bajada-size) = 36px. */
  size?: string | number;
  /** Color. Default muted white (82%). */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Bajada / body copy — Medium weight, comfortable line-height, muted on dark.
 * @dsCard content
 */
export function Bajada(props: BajadaProps): JSX.Element;

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

/**
 * Props for the comentá KEYWORD CTA.
 * @startingPoint section="Content" subtitle="comentá KEYWORD call-to-action" viewport="700x120"
 */
export interface CTAProps {
  /** ManyChat trigger keyword, uppercase. One of VIAJE / GUIA / ARGENTINA / INFO (or custom). */
  keyword?: string;
  /** Leading verb in voseo. Default "Comentá". */
  label?: string;
  style?: React.CSSProperties;
}

/**
 * Carrusel CTA — the "comentá KEYWORD" pattern that triggers ManyChat. Keyword goes orange.
 * @dsCard ui
 */
export function CTA(props: CTAProps): JSX.Element;

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
