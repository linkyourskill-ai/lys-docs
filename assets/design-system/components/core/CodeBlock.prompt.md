Dark code-snippet block for MCP/API examples — purple border, green strings, muted comments.

```jsx
<CodeBlock
  comment="Create order"
  lines={[
    [ "mcp.call(", { text: '"prepare_order"', tone: "string" }, ", {" ],
    [ "  ", { text: "title:", tone: "muted" }, " ", { text: '"Vor-Ort-Check"', tone: "string" } ],
    [ "})" ],
  ]}
/>
```

Use `lines` (array of segment arrays) for syntax coloring, or pass raw `children`. Segment tone: `string` (green), `muted` (gray), default (purple).
