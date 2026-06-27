import React from "react";

/**
 * GlassCard — the translucent, blurred surface that holds nearly all content
 * blocks in LinkYourSkill (intro cards, dashboard tiles, modals-in-page).
 */
export function GlassCard({
  highlight = false,
  as: Tag = "div",
  padding,
  className = "",
  style,
  children,
  ...rest
}) {
  const cls = ["glass-card", highlight ? "highlight" : "", className]
    .filter(Boolean)
    .join(" ");
  const mergedStyle = padding != null ? { padding, ...style } : style;
  return (
    <Tag className={cls} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}

export default GlassCard;
