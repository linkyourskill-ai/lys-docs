import React from "react";

/**
 * TrustBadge — emoji/icon + bold label pill used in the marketing trust row
 * (🇩🇪 Made in Germany, 🔒 GDPR Compliant, ⚡ MCP Protocol). `accent` tints it
 * purple for the standout badge.
 */
export function TrustBadge({ icon, label, accent = false, className = "", style, ...rest }) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 20px",
        borderRadius: "var(--radius-md)",
        background: accent ? "rgba(168,85,247,0.06)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${accent ? "rgba(168,85,247,0.2)" : "rgba(255,255,255,0.08)"}`,
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: "24px", lineHeight: 1 }} aria-hidden="true">{icon}</span>
      <strong style={{ fontSize: "14px", color: "var(--text)" }}>{label}</strong>
    </div>
  );
}

export default TrustBadge;
