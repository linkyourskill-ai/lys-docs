/* global React */
// CtaSection + Footer — closing developer CTA on an inverse surface, plus the
// flat link footer.
const { Button } = window.LinkYourSkillDesignSystem_da1488;

function CtaSection() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "20px var(--section-pad-x) 80px", maxWidth: "var(--section-max)", margin: "0 auto" }}>
      <div className="inverse-surface" style={{ borderRadius: "var(--radius-2xl)", padding: "56px 40px", textAlign: "center" }}>
        <h2 style={{ color: "var(--inverse-surface-fg)", maxWidth: 640, margin: "0 auto" }}>
          Ready to integrate the physical world into your agent?
        </h2>
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Button variant="primary" size="large">Developer? Get Started</Button>
          <Button variant="secondary">Offer Skills</Button>
        </div>
        <p style={{ marginTop: 18, fontSize: 14, color: "var(--inverse-surface-muted)" }}>
          Have questions? Contact us instead.
        </p>
      </div>
    </section>
  );
}

const FOOTER_LINKS = ["Sign in", "About Us", "Privacy Policy", "Legal Notice", "How does it work?", "Accessibility", "Changelog"];

function SiteFooter() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--card-border)", padding: "24px var(--section-pad-x) 48px", maxWidth: "var(--section-max)", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
      {FOOTER_LINKS.map((l) => (
        <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.2s" }}>{l}</a>
      ))}
      <span style={{ fontSize: 13, color: "var(--muted)" }}>© 2026 LinkYourSkill</span>
    </footer>
  );
}

window.CtaSection = CtaSection;
window.SiteFooter = SiteFooter;
