/* global React */
// Platform top nav — fixed bar with logo, inline section links (active underline),
// persona pill, email + logout. Mirrors src/components/PlatformShell.tsx.

function PlatformNav({ items, active, onNav, email = "agentowner@test.local", persona = "Agent Owner" }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 60, background: "var(--nav-bg)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--card-border)",
    }}>
      <div style={{
        maxWidth: "var(--section-max)", margin: "0 auto", padding: "0 var(--section-pad-x)",
        height: "var(--nav-height)", display: "flex", alignItems: "center", gap: 16,
      }}>
        <a href="#" onClick={(e) => e.preventDefault()} className="gradient-text" style={{ fontSize: 18, fontWeight: 700, flexShrink: 0 }}>
          LinkYourSkill
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 24, flex: 1, minWidth: 0 }}>
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href="#"
                onClick={(e) => { e.preventDefault(); onNav(item.id); }}
                style={{
                  position: "relative", fontSize: 14, whiteSpace: "nowrap",
                  color: isActive ? "var(--text)" : "var(--muted)",
                  fontWeight: isActive ? 500 : 400, transition: "color 0.2s",
                }}
              >
                {item.label}
                {isActive && <span style={{ position: "absolute", bottom: -6, left: 0, right: 0, height: 2, borderRadius: 1, background: "var(--gradient-brand)" }} />}
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, paddingLeft: 16, borderLeft: "1px solid var(--card-border)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--accent-light)", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)", padding: "4px 10px", borderRadius: "var(--radius-full)" }}>
            {persona}
          </span>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>{email}</span>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 12, color: "var(--muted)" }}>Logout</a>
        </div>
      </div>
    </nav>
  );
}

window.PlatformNav = PlatformNav;
