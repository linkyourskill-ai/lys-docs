import React from "react";

const TONES = {
  accent: { bg: "rgba(168,85,247,0.12)", color: "var(--accent-light)", border: "rgba(168,85,247,0.3)" },
  success: { bg: "rgba(34,197,94,0.12)", color: "var(--success-on-dark)", border: "rgba(34,197,94,0.35)" },
  warning: { bg: "rgba(245,158,11,0.14)", color: "var(--warning-text-dark)", border: "rgba(245,158,11,0.4)" },
  danger: { bg: "rgba(239,68,68,0.12)", color: "var(--danger-text-dark)", border: "rgba(239,68,68,0.4)" },
  neutral: { bg: "rgba(255,255,255,0.06)", color: "var(--muted)", border: "rgba(255,255,255,0.12)" },
};

/**
 * Badge — small status / category pill. Used for order states, MCP labels,
 * "Available now", etc. Defaults to the accent (purple) tone.
 */
export function Badge({ tone = "accent", outline = false, className = "", style, children, ...rest }) {
  const t = TONES[tone] || TONES.accent;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "3px 10px",
    borderRadius: "var(--radius-full)",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.4,
    background: outline ? "transparent" : t.bg,
    color: t.color,
    border: `1px solid ${t.border}`,
    whiteSpace: "nowrap",
  };
  return (
    <span className={className} style={{ ...base, ...style }} {...rest}>
      {children}
    </span>
  );
}

export default Badge;
