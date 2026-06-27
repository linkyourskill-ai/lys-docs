/* global React */
// Platform screens — Dashboard, Agents, Orders. Composed from design-system
// primitives (StatTile, GlassCard, Badge, Button). Mirrors the agent-owner
// dashboard in src/app/[locale]/(platform)/agentowner/.
const { StatTile, GlassCard, Badge, Button, Input } = window.LinkYourSkillDesignSystem_da1488;

const AGENTS = [
  { name: "Property Scout", status: "active" },
  { name: "Fleet Inspector", status: "active" },
  { name: "Research Bot", status: "paused" },
];

const ORDERS = [
  { title: "Vehicle Check Hamburg", status: "in_progress", date: "26 Jun", tone: "accent" },
  { title: "Roof inspection Munich", status: "completed", date: "24 Jun", tone: "success" },
  { title: "Apartment handover Berlin", status: "pending", date: "23 Jun", tone: "warning" },
  { title: "Event staffing Cologne", status: "completed", date: "21 Jun", tone: "success" },
];

function SectionHeader({ title, action }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
      <h2 style={{ fontSize: 18 }}>{title}</h2>
      {action && <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14, color: "var(--accent-light)" }}>{action}</a>}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}><span className="gradient-text">Agent Owner Dashboard</span></h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }} className="lys-stats-grid">
        <StatTile label="Active Agents" value={3} />
        <StatTile label="Recent Orders" value={4} />
        <StatTile label="Spend This Month" value="€1,240" sub="4 invoices · All-time: €18,300" />
        <StatTile label="WhatsApp" value={<span style={{ fontSize: 18, color: "var(--success-on-dark)" }}>✓ Linked</span>} sub="+49 151 •••• 8842" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionHeader title="Your Agents" action="Manage all →" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="lys-two-grid">
          {AGENTS.map((a) => (
            <GlassCard key={a.name} padding={16}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontSize: 15, fontWeight: 500 }}>{a.name}</h3>
                <Badge tone={a.status === "active" ? "success" : "neutral"}>{a.status}</Badge>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Recent Orders" action="View all →" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ORDERS.map((o) => (
            <GlassCard key={o.title} padding={14}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14 }}>{o.title}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <Badge tone={o.tone}>{o.status.replace("_", " ")}</Badge>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>{o.date}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function Agents() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <h1 style={{ fontSize: 24 }}><span className="gradient-text">Agents</span></h1>
        <Button variant="primary" size="small">+ New Agent</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="lys-two-grid">
        {AGENTS.map((a) => (
          <GlassCard key={a.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3 style={{ fontSize: 17 }}>{a.name}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 4, fontFamily: "var(--font-mono)" }}>lys_••••••••{a.name.length}f2a</p>
              </div>
              <Badge tone={a.status === "active" ? "success" : "neutral"}>{a.status}</Badge>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
              <div><div style={{ fontSize: 22, fontWeight: 700 }}>{12 + a.name.length}</div><div style={{ fontSize: 12, color: "var(--muted)" }}>Orders</div></div>
              <div><div style={{ fontSize: 22, fontWeight: 700 }}>4.{8 + (a.name.length % 2)}★</div><div style={{ fontSize: 12, color: "var(--muted)" }}>Rating</div></div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <Button variant="secondary" size="small">Edit</Button>
              <Button variant="link">Regenerate token</Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}><span className="gradient-text">Orders</span></h1>
      <GlassCard padding={0} style={{ overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", borderBottom: "1px solid var(--card-border)", fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          <span>Order</span><span>Status</span><span>Budget</span><span>Date</span>
        </div>
        {ORDERS.map((o, i) => (
          <div key={o.title} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "16px 20px", alignItems: "center", borderBottom: i < ORDERS.length - 1 ? "1px solid var(--card-border)" : "none" }}>
            <span style={{ fontSize: 14 }}>{o.title}</span>
            <span><Badge tone={o.tone}>{o.status.replace("_", " ")}</Badge></span>
            <span style={{ fontSize: 14, color: "var(--muted)" }}>€{75 + i * 20}</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>{o.date}</span>
          </div>
        ))}
      </GlassCard>
    </div>
  );
}

window.PlatformScreens = { Dashboard, Agents, Orders };
