import React from "react";

let _id = 0;

/**
 * Input — labelled text field on the dark theme. Wraps a native input with the
 * product's translucent input surface, optional label, hint and error states.
 */
export function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  className = "",
  style,
  ...rest
}) {
  const inputId = id || `lys-input-${++_id}`;
  const border = error ? "var(--danger)" : "var(--input-border)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label ? (
        <label htmlFor={inputId} style={{ fontSize: "14px", fontWeight: 500, color: "var(--text)" }}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        type={type}
        className={className}
        style={{
          width: "100%",
          background: "var(--input-bg)",
          border: `1px solid ${border}`,
          borderRadius: "var(--radius-md)",
          color: "var(--text)",
          font: "inherit",
          fontSize: "15px",
          padding: "11px 14px",
          outline: "none",
          ...style,
        }}
        {...rest}
      />
      {error ? (
        <span style={{ fontSize: "12px", color: "var(--danger-text-dark)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "12px", color: "var(--muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}

export default Input;
