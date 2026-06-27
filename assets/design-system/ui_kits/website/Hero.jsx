/* global React */
// Hero — gradient headline, lead, validation badges, live stats, guest search,
// and the role-prioritized CTA cluster. Mirrors src/components/Hero.tsx.
const { Button, CheckItem } = window.LinkYourSkillDesignSystem_da1488;

function HeroStat({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text)" }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "80px var(--section-pad-x) 100px", maxWidth: "var(--section-max)", margin: "0 auto" }}>
      <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", maxWidth: 820 }}>
        When AI needs the <span className="gradient-text">real world</span>.
      </h1>

      <p style={{ marginTop: 22, color: "var(--muted)", fontSize: "clamp(16px, 2.2vw, 19px)", lineHeight: 1.6, maxWidth: 600 }}>
        The physical API for AI agents. Verified humans do what AI can't — inspections, repairs,
        on-site checks. MCP integration in 5 minutes.
      </p>

      <div style={{ marginTop: 28, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--muted)" }}>
          <span className="check-badge" style={{ width: 20, height: 20 }}>✓</span> MCP Protocol
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--muted)" }}>
          <span className="check-badge" style={{ width: 20, height: 20 }}>✓</span> EU Compliance
        </span>
        <span style={{ fontSize: 14, color: "var(--muted)" }}>🇩🇪 Made in Germany</span>
      </div>

      <div style={{ marginTop: 32, display: "flex", gap: 40, flexWrap: "wrap" }}>
        <HeroStat value="2,400+" label="Skill Providers" />
        <HeroStat value="11,800+" label="Orders completed" />
        <HeroStat value="4.9★" label="Avg Rating" />
      </div>

      {/* Guest search */}
      <div style={{ marginTop: 32, maxWidth: 640 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            placeholder='What do you need? e.g. "Roof inspection in Munich"'
            style={{
              flex: 1, minWidth: 260, background: "var(--input-bg)", border: "1px solid var(--input-border)",
              borderRadius: "var(--radius-md)", color: "var(--text)", font: "inherit", fontSize: 15, padding: "14px 16px", outline: "none",
            }}
          />
          <Button variant="primary">Find Skills</Button>
        </div>
        <div style={{ marginTop: 10, fontSize: 13, color: "var(--muted)" }}>
          Describe your task — we'll match you with verified professionals
        </div>
      </div>

      {/* CTA cluster */}
      <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <Button variant="primary" rightIcon={<span>→</span>}>Developer? Get Token</Button>
        <Button variant="secondary" size="small" rightIcon={<span>→</span>}>Offer Skills</Button>
        <Button variant="link">Hire as Customer →</Button>
      </div>

      <div style={{ marginTop: 18, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
        🔒 Verified profiles · EU data protection · Streamable HTTP · Bearer Token Auth
      </div>
    </section>
  );
}

window.Hero = Hero;
