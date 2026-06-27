Translucent blurred surface that holds content blocks — feature cards, dashboard tiles, panels.

```jsx
<GlassCard>
  <h3>For Customers</h3>
  <p>Verified professionals for every task.</p>
</GlassCard>

<GlassCard highlight padding={24}>Highlighted variant for the lead option</GlassCard>
```

`highlight` adds the purple-tinted border + tinted background (used for the "For Developers" card). Override `padding` for compact tiles. Renders as `<div>` by default; pass `as` for a different tag.
