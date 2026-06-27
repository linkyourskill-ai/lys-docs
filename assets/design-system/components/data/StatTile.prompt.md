Dashboard KPI tile — muted label, large value, optional context sub-line, on a glass card.

```jsx
<StatTile label="Active Agents" value={3} />
<StatTile label="Spend This Month" value="€1,240" sub="4 invoices · All-time: €18,300" />
```

Used across the agent-owner / customer / admin dashboards. Grid them with `display:grid; gap:16px`.
