import React from "react";

/**
 * CheckItem — a green check pill followed by text. The product's standard
 * "what you get" list row (provider benefits, feature lists).
 */
export function CheckItem({ children, className = "", style, ...rest }) {
  return (
    <li
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "15px",
        color: "var(--muted)",
        lineHeight: 1.5,
        listStyle: "none",
        ...style,
      }}
      {...rest}
    >
      <span className="check-badge">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default CheckItem;
