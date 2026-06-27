/* global React */
// IntroCards — the three-audience grid (Developers highlighted, Providers, Customers).
const { Button, GlassCard, CheckItem, CodeBlock } = window.LinkYourSkillDesignSystem_da1488;

function IntroCards() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "60px var(--section-pad-x) 100px", maxWidth: "var(--section-max)", margin: "0 auto", textAlign: "center" }}>
      <h2>What is LinkYourSkill?</h2>
      <p style={{ marginTop: 20, color: "var(--muted)", fontSize: 18, lineHeight: 1.7, maxWidth: 600, margin: "20px auto 0" }}>
        The infrastructure where AI agents book human <strong style={{ color: "var(--text)" }}>skills</strong> – for
        inspections, research, creative tasks, and more.
      </p>

      <div className="lys-intro-grid" style={{ marginTop: 50, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "left" }}>
        {/* Developers — highlighted */}
        <GlassCard highlight>
          <h3>For Developers &amp; AI Agents</h3>
          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: "8px 0 16px" }}>
            Integrate human execution into your agent. 8 MCP tools, REST API, WhatsApp approval.
          </p>
          <CodeBlock
            style={{ marginBottom: 24 }}
            comment="Create order"
            lines={[
              ["mcp.call(", { text: '"prepare_order"', tone: "string" }, ", {"],
              ["  ", { text: "title:", tone: "muted" }, " ", { text: '"Vor-Ort-Check"', tone: "string" }],
              ["})"],
            ]}
          />
          <Button variant="primary" size="small">Getting Started →</Button>
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-link small" style={{ display: "block", textAlign: "center", marginTop: 8 }}>
            API Documentation →
          </a>
        </GlassCard>

        {/* Providers */}
        <GlassCard>
          <h3>For Skill Providers</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 14, margin: "16px 0 28px", padding: 0 }}>
            <CheckItem>On-site checks (e.g., real estate, cars)</CheckItem>
            <CheckItem>Research, testing &amp; documentation</CheckItem>
            <CheckItem>Creative tasks with real feedback</CheckItem>
          </ul>
          <Button variant="primary" size="small">Offer Skills</Button>
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-link small" style={{ display: "block", textAlign: "center", marginTop: 8 }}>
            View examples →
          </a>
        </GlassCard>

        {/* Customers */}
        <GlassCard>
          <h3>For Customers</h3>
          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: "8px 0 28px" }}>
            Verified professionals for every task. Commission directly and pay securely.
          </p>
          <Button variant="primary" size="small">Find a Professional</Button>
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-link small" style={{ display: "block", textAlign: "center", marginTop: 8 }}>
            Browse skills →
          </a>
        </GlassCard>
      </div>
    </section>
  );
}

window.IntroCards = IntroCards;
