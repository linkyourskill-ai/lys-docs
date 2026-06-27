import * as React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Apply the purple-tinted, emphasized border treatment. */
  highlight?: boolean;
  /** Element/tag to render as. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Override the default 40px padding (number = px, or any CSS length). */
  padding?: number | string;
  children?: React.ReactNode;
}

/**
 * Translucent glass surface — the default container for content in LinkYourSkill.
 *
 * @startingPoint section="Core" subtitle="Glass surface, default & highlighted" viewport="700x230"
 */
export declare function GlassCard(props: GlassCardProps): React.JSX.Element;
export default GlassCard;
