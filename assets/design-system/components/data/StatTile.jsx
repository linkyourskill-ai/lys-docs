import React from "react";

/**
 * StatTile — dashboard KPI tile: a small muted label above a large value, on a
 * glass card. Optional sub-line for context (period, count, delta).
 */
export function StatTile({ label, value, sub, className = "", style, ...rest }) {
  const cls = ["glass-card", className].filter(Boolean).join(" ");
  return (
    <div className={cls} style={{ padding: "20px", ...style }} {...rest}>
      <div style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "4px" }}>{label}</div>
      <div style={{ fontSize: "30px", fontWeight: 700, lineHeight: 1.1, color: "var(--text)" }}>{value}</div>
      {sub ? (
        <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>{sub}</div>
      ) : null}
    </div>
  );
}

export default StatTile;
