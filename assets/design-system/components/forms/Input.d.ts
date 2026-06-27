import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text shown below the field. */
  hint?: string;
  /** Error message — shown instead of hint and reddens the border. */
  error?: string;
}

/**
 * Labelled text field on the dark theme.
 *
 * @startingPoint section="Forms" subtitle="Labelled text field with hint/error" viewport="700x140"
 */
export declare function Input(props: InputProps): React.JSX.Element;
export default Input;
