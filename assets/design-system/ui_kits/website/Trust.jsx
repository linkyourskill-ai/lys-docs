/* global React */
// Trust — four security cards + the Made-in-Germany / GDPR / MCP trust pills.
const { GlassCard, TrustBadge } = window.LinkYourSkillDesignSystem_da1488;

const ITEMS = [
  { title: "🛡️ Verified Profiles", desc: "Only vetted accounts and verified identities." },
  { title: "⚡ MCP-ready", desc: "Streamable HTTP, Bearer Token Auth, 60 req/min rate limiting." },
  { title: "📋 EU-Compliant", desc: "GDPR, DSA, P2B, DAC7, BFSG — fully compliant." },
  { title: "🔐 EU Data Protection", desc: "Your data belongs to you – hosted in Germany." },
];

function Trust() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "60px var(--section-pad-x) 100px", maxWidth: "var(--section-max)", margin: "0 auto", textAlign: "center" }}>
      <h2>Security &amp; Trust – built in Germany</h2>

      <div className="lys-trust-grid" style={{ marginTop: 50, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "left" }}>
        {ITEMS.map((it) => (
          <GlassCard key={it.title} padding={24}>
            <h3 style={{ fontSize: 15 }}>{it.title}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginTop: 8 }}>{it.desc}</p>
          </GlassCard>
        ))}
      </div>

      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
        <TrustBadge icon="🇩🇪" label="Made in Germany" />
        <TrustBadge icon="🔒" label="GDPR Compliant" />
        <TrustBadge icon="⚡" label="MCP Protocol" accent />
      </div>
    </section>
  );
}

window.Trust = Trust;
