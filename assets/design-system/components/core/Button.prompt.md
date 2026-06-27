Gradient/glow primary, outline secondary, or quiet link button — use for any call-to-action or navigation in LinkYourSkill surfaces.

```jsx
<Button variant="primary" rightIcon={<span>→</span>}>Developer? Get Token</Button>
<Button variant="secondary" size="small">Offer Skills</Button>
<Button variant="link">Hire as Customer →</Button>
<Button as="a" href="/login" variant="primary" size="large">Create Account</Button>
```

Variants: `primary` (gradient + purple glow, the dominant CTA), `secondary` (transparent + border), `link` (muted text, no chrome). Sizes: `small`, `default`, `large`. Pass `leftIcon`/`rightIcon` nodes for icons; `fullWidth` to stretch; `as="a"` + `href` to render an anchor.
