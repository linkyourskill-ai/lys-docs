import React from "react";

/**
 * Button — the LinkYourSkill action control.
 *
 * Renders the product's gradient-glow primary, outline secondary, or quiet
 * link button. Use `as="a"` (with `href`) for navigation, otherwise a native
 * <button>. Icons are passed as nodes (e.g. a Lucide <i data-lucide> or SVG).
 */
export function Button({
  variant = "primary",
  size = "default",
  as = "button",
  href,
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  const base =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "link"
        ? "btn-link"
        : "btn-primary";
  const sizeClass = size === "small" ? "small" : size === "large" ? "large" : "";
  const cls = [base, sizeClass, className].filter(Boolean).join(" ");

  const style = fullWidth ? { width: "100%" } : undefined;

  const content = (
    <>
      {leftIcon ? <span aria-hidden="true" style={{ display: "inline-flex" }}>{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span aria-hidden="true" style={{ display: "inline-flex" }}>{rightIcon}</span> : null}
    </>
  );

  if (as === "a") {
    return (
      <a href={href} className={cls} style={style} aria-disabled={disabled || undefined} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} style={style} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}

export default Button;
