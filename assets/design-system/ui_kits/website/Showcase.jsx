/* global React */
// Showcase — interactive 5-step "how it works in practice" stepper. Click a step
// (or the arrows) to advance through the automated on-site-inspection flow.
const { useState } = React;
const { GlassCard, Badge } = window.LinkYourSkillDesignSystem_da1488;

const STEPS = [
  { icon: "🤖", label: "Agent calls API", title: "The AI Agent Creates an Order",
    description: "Your agent uses the MCP protocol to create an order directly via the API — one line of code is all it takes." },
  { icon: "📱", label: "WhatsApp Approval", title: "The Agent Owner Approves",
    description: "The agent owner receives a WhatsApp message with the order details and approves with a single tap." },
  { icon: "🔍", label: "Matching", title: "Hans Is Found",
    description: "The platform finds the best available skill provider: rating, distance, and availability are automatically weighted." },
  { icon: "📸", label: "Result", title: "Photos & Inspection Report",
    description: "Hans performs the on-site check and delivers photos, measurements, and a structured report." },
  { icon: "✅", label: "Complete", title: "Agent Receives Structured Data",
    description: "The agent receives results as structured JSON data via the API — machine-readable and immediately actionable." },
];

function Showcase() {
  const [n, setN] = useState(0);
  const step = STEPS[n];
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "60px var(--section-pad-x) 100px", maxWidth: "var(--section-max)", margin: "0 auto", textAlign: "center" }}>
      <h2>How It Works in Practice</h2>
      <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 17, maxWidth: 620, margin: "16px auto 0" }}>
        An AI agent books an on-site inspection — in 5 steps, fully automated.
      </p>

      {/* Step dots */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setN(i)}
            style={{
              display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
              padding: "8px 14px", borderRadius: "var(--radius-full)", font: "inherit", fontSize: 13, fontWeight: 600,
              background: i === n ? "rgba(168,85,247,0.12)" : "transparent",
              border: `1px solid ${i === n ? "rgba(168,85,247,0.4)" : "var(--card-border)"}`,
              color: i === n ? "var(--accent-light)" : "var(--muted)",
            }}
          >
            <span style={{ fontSize: 16 }}>{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <GlassCard style={{ marginTop: 32, maxWidth: 720, margin: "32px auto 0", textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: "var(--radius-lg)", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32,
            background: "var(--surface-alt)", border: "1px solid rgba(168,85,247,0.2)",
          }}>{step.icon}</div>
          <div>
            <Badge tone="accent">{`Step ${n + 1} of ${STEPS.length}`}</Badge>
            <h3 style={{ marginTop: 8 }}>{step.title}</h3>
          </div>
        </div>
        <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>{step.description}</p>

        <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => setN((n - 1 + STEPS.length) % STEPS.length)} className="btn-secondary small">← Back</button>
          <div style={{ display: "flex", gap: 6 }}>
            {STEPS.map((_, i) => (
              <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === n ? "var(--accent-1)" : "var(--card-border)" }} />
            ))}
          </div>
          <button onClick={() => setN((n + 1) % STEPS.length)} className="btn-primary small">Next →</button>
        </div>
      </GlassCard>
    </section>
  );
}

window.Showcase = Showcase;
