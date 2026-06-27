import * as React from "react";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /** Visual style. `primary` = gradient + glow, `secondary` = outline, `link` = quiet text. */
  variant?: "primary" | "secondary" | "link";
  /** Padding/size step. */
  size?: "default" | "small" | "large";
  /** Render as a native button or an anchor (set `href` when `"a"`). */
  as?: "button" | "a";
  /** Destination when `as="a"`. */
  href?: string;
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label (e.g. a → arrow). */
  rightIcon?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action control for LinkYourSkill — gradient/glow, outline or link.
 *
 * @startingPoint section="Core" subtitle="Gradient, outline & link buttons" viewport="700x190"
 */
export declare function Button(props: ButtonProps): React.JSX.Element;
export default Button;
