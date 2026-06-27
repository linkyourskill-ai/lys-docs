Labelled text input on the translucent dark surface — forms, search, settings.

```jsx
<Input label="Email" type="email" placeholder="your@email.com" />
<Input label="Name" hint="As it appears on invoices" />
<Input label="Token" error="Invalid token format" defaultValue="lys_…" />
```

Pass `label`, `hint`, and `error` (error overrides hint and reddens the border). All native input attributes pass through.
