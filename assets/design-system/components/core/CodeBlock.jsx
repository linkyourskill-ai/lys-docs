import React from "react";

/**
 * CodeBlock — the dark MCP/API code-snippet treatment with purple border and
 * green-string syntax. Pass `lines` for token-colored output, or `children`
 * for raw monospace content.
 */
export function CodeBlock({ comment, lines, className = "", style, children, ...rest }) {
  const cls = ["code-snippet", className].filter(Boolean).join(" ");
  return (
    <div className={cls} style={style} {...rest}>
      {comment ? (
        <div className="code-muted">{`// ${comment}`}</div>
      ) : null}
      {Array.isArray(lines)
        ? lines.map((ln, i) => (
            <div key={i}>
              {ln.map((seg, j) =>
                typeof seg === "string" ? (
                  <span key={j}>{seg}</span>
                ) : (
                  <span key={j} className={seg.tone === "string" ? "code-string" : seg.tone === "muted" ? "code-muted" : undefined}>
                    {seg.text}
                  </span>
                ),
              )}
            </div>
          ))
        : children}
    </div>
  );
}

export default CodeBlock;
