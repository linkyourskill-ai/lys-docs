/* global React */
// Sticky marketing header — logo wordmark, inline nav with active underline,
// theme/lang affordances, sign-in + gradient register CTA.
const { Button } = window.LinkYourSkillDesignSystem_da1488;

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "kunden", label: "For Customers" },
  { id: "beispiele", label: "Examples" },
  { id: "api", label: "API" },
  { id: "ueber", label: "About Us" },
];

function SiteHeader({ active = "home", onNav }) {
  return (
    <header
      className="lys-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          height: "var(--nav-height)",
          padding: "0 var(--section-pad-x)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNav && onNav("home"); }}
          style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
        >
          <img src="../../assets/logo-linkyourskill.png" alt="" width="36" height="36" style={{ display: "block" }} />
          <span className="gradient-text" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
            LinkYourSkill
          </span>
        </a>

        <div className="lys-nav-inline" style={{ display: "flex", alignItems: "center", gap: 32, flex: 1, justifyContent: "flex-end", minWidth: 0 }}>
          {NAV.map((item) => {
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href="#"
                onClick={(e) => { e.preventDefault(); onNav && onNav(item.id); }}
                style={{
                  position: "relative",
                  fontSize: 15,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  color: isActive ? "var(--text)" : "var(--muted)",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, borderRadius: 1, background: "var(--gradient-brand)" }} />
                )}
              </a>
            );
          })}
        </div>

        <div className="lys-nav-cta" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 15, fontWeight: 500, color: "var(--muted)", whiteSpace: "nowrap" }}>
            Sign in
          </a>
          <Button variant="primary" size="small">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}

window.SiteHeader = SiteHeader;
