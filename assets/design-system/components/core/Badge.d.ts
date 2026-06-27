import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. `accent` (purple) is the default; status tones map to semantic colors. */
  tone?: "accent" | "success" | "warning" | "danger" | "neutral";
  /** Transparent background with a colored border only. */
  outline?: boolean;
  children?: React.ReactNode;
}

/**
 * Small status / category pill — order states, MCP labels, availability.
 *
 * @startingPoint section="Core" subtitle="Status & category pills" viewport="700x120"
 */
export declare function Badge(props: BadgeProps): React.JSX.Element;
export default Badge;
