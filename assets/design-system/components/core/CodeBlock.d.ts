import * as React from "react";

export type CodeSegment =
  | string
  | { text: string; tone?: "string" | "muted" | "keyword" };

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional leading `// comment` line (muted). */
  comment?: string;
  /** Token-colored lines: each line is an array of strings or {text, tone}. */
  lines?: CodeSegment[][];
  /** Raw monospace content (used when `lines` is omitted). */
  children?: React.ReactNode;
}

/**
 * Dark MCP/API code snippet with purple border and green-string syntax.
 */
export declare function CodeBlock(props: CodeBlockProps): React.JSX.Element;
export default CodeBlock;
