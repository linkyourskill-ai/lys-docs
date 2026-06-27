/* @ds-bundle: {"format":3,"namespace":"LinkYourSkillDesignSystem_da1488","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"CheckItem","sourcePath":"components/data/CheckItem.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"TrustBadge","sourcePath":"components/data/TrustBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a837237132ff","components/core/Button.jsx":"7f32f7622033","components/core/CodeBlock.jsx":"d593ea9f2445","components/core/GlassCard.jsx":"2096efe6ec44","components/data/CheckItem.jsx":"91b822526650","components/data/StatTile.jsx":"7972ff62e304","components/data/TrustBadge.jsx":"09278877da29","components/forms/Input.jsx":"e190c7583246","ui_kits/platform/PlatformNav.jsx":"e25516141817","ui_kits/platform/screens.jsx":"83fb2331e841","ui_kits/website/CtaFooter.jsx":"94c1902c955d","ui_kits/website/Hero.jsx":"168326f8b0b2","ui_kits/website/IntroCards.jsx":"2d9234061a86","ui_kits/website/Showcase.jsx":"b7728061529d","ui_kits/website/SiteHeader.jsx":"36673f088ff4","ui_kits/website/Trust.jsx":"71b3f4972cf3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LinkYourSkillDesignSystem_da1488 = window.LinkYourSkillDesignSystem_da1488 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    bg: "rgba(168,85,247,0.12)",
    color: "var(--accent-light)",
    border: "rgba(168,85,247,0.3)"
  },
  success: {
    bg: "rgba(34,197,94,0.12)",
    color: "var(--success-on-dark)",
    border: "rgba(34,197,94,0.35)"
  },
  warning: {
    bg: "rgba(245,158,11,0.14)",
    color: "var(--warning-text-dark)",
    border: "rgba(245,158,11,0.4)"
  },
  danger: {
    bg: "rgba(239,68,68,0.12)",
    color: "var(--danger-text-dark)",
    border: "rgba(239,68,68,0.4)"
  },
  neutral: {
    bg: "rgba(255,255,255,0.06)",
    color: "var(--muted)",
    border: "rgba(255,255,255,0.12)"
  }
};

/**
 * Badge — small status / category pill. Used for order states, MCP labels,
 * "Available now", etc. Defaults to the accent (purple) tone.
 */
function Badge({
  tone = "accent",
  outline = false,
  className = "",
  style,
  children,
  ...rest
}) {
  const t = TONES[tone] || TONES.accent;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "3px 10px",
    borderRadius: "var(--radius-full)",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.4,
    background: outline ? "transparent" : t.bg,
    color: t.color,
    border: `1px solid ${t.border}`,
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the LinkYourSkill action control.
 *
 * Renders the product's gradient-glow primary, outline secondary, or quiet
 * link button. Use `as="a"` (with `href`) for navigation, otherwise a native
 * <button>. Icons are passed as nodes (e.g. a Lucide <i data-lucide> or SVG).
 */
function Button({
  variant = "primary",
  size = "default",
  as = "button",
  href,
  leftIcon,
  rightIcon,
  disabled = false,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  const base = variant === "secondary" ? "btn-secondary" : variant === "link" ? "btn-link" : "btn-primary";
  const sizeClass = size === "small" ? "small" : size === "large" ? "large" : "";
  const cls = [base, sizeClass, className].filter(Boolean).join(" ");
  const style = fullWidth ? {
    width: "100%"
  } : undefined;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, rightIcon) : null);
  if (as === "a") {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      style: style,
      "aria-disabled": disabled || undefined
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    style: style,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CodeBlock — the dark MCP/API code-snippet treatment with purple border and
 * green-string syntax. Pass `lines` for token-colored output, or `children`
 * for raw monospace content.
 */
function CodeBlock({
  comment,
  lines,
  className = "",
  style,
  children,
  ...rest
}) {
  const cls = ["code-snippet", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), comment ? /*#__PURE__*/React.createElement("div", {
    className: "code-muted"
  }, `// ${comment}`) : null, Array.isArray(lines) ? lines.map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, ln.map((seg, j) => typeof seg === "string" ? /*#__PURE__*/React.createElement("span", {
    key: j
  }, seg) : /*#__PURE__*/React.createElement("span", {
    key: j,
    className: seg.tone === "string" ? "code-string" : seg.tone === "muted" ? "code-muted" : undefined
  }, seg.text)))) : children);
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassCard — the translucent, blurred surface that holds nearly all content
 * blocks in LinkYourSkill (intro cards, dashboard tiles, modals-in-page).
 */
function GlassCard({
  highlight = false,
  as: Tag = "div",
  padding,
  className = "",
  style,
  children,
  ...rest
}) {
  const cls = ["glass-card", highlight ? "highlight" : "", className].filter(Boolean).join(" ");
  const mergedStyle = padding != null ? {
    padding,
    ...style
  } : style;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: mergedStyle
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/data/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CheckItem — a green check pill followed by text. The product's standard
 * "what you get" list row (provider benefits, feature lists).
 */
function CheckItem({
  children,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "15px",
      color: "var(--muted)",
      lineHeight: 1.5,
      listStyle: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "check-badge"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatTile — dashboard KPI tile: a small muted label above a large value, on a
 * glass card. Optional sub-line for context (period, count, delta).
 */
function StatTile({
  label,
  value,
  sub,
  className = "",
  style,
  ...rest
}) {
  const cls = ["glass-card", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      padding: "20px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--muted)",
      marginBottom: "4px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: 1.1,
      color: "var(--text)"
    }
  }, value), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--muted)",
      marginTop: "6px"
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/data/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TrustBadge — emoji/icon + bold label pill used in the marketing trust row
 * (🇩🇪 Made in Germany, 🔒 GDPR Compliant, ⚡ MCP Protocol). `accent` tints it
 * purple for the standout badge.
 */
function TrustBadge({
  icon,
  label,
  accent = false,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 20px",
      borderRadius: "var(--radius-md)",
      background: accent ? "rgba(168,85,247,0.06)" : "rgba(255,255,255,0.04)",
      border: `1px solid ${accent ? "rgba(168,85,247,0.2)" : "rgba(255,255,255,0.08)"}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "24px",
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "14px",
      color: "var(--text)"
    }
  }, label));
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/**
 * Input — labelled text field on the dark theme. Wraps a native input with the
 * product's translucent input surface, optional label, hint and error states.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  className = "",
  style,
  ...rest
}) {
  const inputId = id || `lys-input-${++_id}`;
  const border = error ? "var(--danger)" : "var(--input-border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--text)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: className,
    style: {
      width: "100%",
      background: "var(--input-bg)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-md)",
      color: "var(--text)",
      font: "inherit",
      fontSize: "15px",
      padding: "11px 14px",
      outline: "none",
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--danger-text-dark)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/PlatformNav.jsx
try { (() => {
/* global React */
// Platform top nav — fixed bar with logo, inline section links (active underline),
// persona pill, email + logout. Mirrors src/components/PlatformShell.tsx.

function PlatformNav({
  items,
  active,
  onNav,
  email = "agentowner@test.local",
  persona = "Agent Owner"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 60,
      background: "var(--nav-bg)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--card-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--section-max)",
      margin: "0 auto",
      padding: "0 var(--section-pad-x)",
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "gradient-text",
    style: {
      fontSize: 18,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "LinkYourSkill"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flex: 1,
      minWidth: 0
    }
  }, items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav(item.id);
      },
      style: {
        position: "relative",
        fontSize: 14,
        whiteSpace: "nowrap",
        color: isActive ? "var(--text)" : "var(--muted)",
        fontWeight: isActive ? 500 : 400,
        transition: "color 0.2s"
      }
    }, item.label, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: -6,
        left: 0,
        right: 0,
        height: 2,
        borderRadius: 1,
        background: "var(--gradient-brand)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0,
      paddingLeft: 16,
      borderLeft: "1px solid var(--card-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--accent-light)",
      background: "rgba(168,85,247,0.1)",
      border: "1px solid rgba(168,85,247,0.25)",
      padding: "4px 10px",
      borderRadius: "var(--radius-full)"
    }
  }, persona), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, email), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, "Logout"))));
}
window.PlatformNav = PlatformNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/PlatformNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/screens.jsx
try { (() => {
/* global React */
// Platform screens — Dashboard, Agents, Orders. Composed from design-system
// primitives (StatTile, GlassCard, Badge, Button). Mirrors the agent-owner
// dashboard in src/app/[locale]/(platform)/agentowner/.
const {
  StatTile,
  GlassCard,
  Badge,
  Button,
  Input
} = window.LinkYourSkillDesignSystem_da1488;
const AGENTS = [{
  name: "Property Scout",
  status: "active"
}, {
  name: "Fleet Inspector",
  status: "active"
}, {
  name: "Research Bot",
  status: "paused"
}];
const ORDERS = [{
  title: "Vehicle Check Hamburg",
  status: "in_progress",
  date: "26 Jun",
  tone: "accent"
}, {
  title: "Roof inspection Munich",
  status: "completed",
  date: "24 Jun",
  tone: "success"
}, {
  title: "Apartment handover Berlin",
  status: "pending",
  date: "23 Jun",
  tone: "warning"
}, {
  title: "Event staffing Cologne",
  status: "completed",
  date: "21 Jun",
  tone: "success"
}];
function SectionHeader({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 18
    }
  }, title), action && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: "var(--accent-light)"
    }
  }, action));
}
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Agent Owner Dashboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 32
    },
    className: "lys-stats-grid"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Active Agents",
    value: 3
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Recent Orders",
    value: 4
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Spend This Month",
    value: "\u20AC1,240",
    sub: "4 invoices \xB7 All-time: \u20AC18,300"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "WhatsApp",
    value: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: "var(--success-on-dark)"
      }
    }, "\u2713 Linked"),
    sub: "+49 151 \u2022\u2022\u2022\u2022 8842"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Your Agents",
    action: "Manage all \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    },
    className: "lys-two-grid"
  }, AGENTS.map(a => /*#__PURE__*/React.createElement(GlassCard, {
    key: a.name,
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, a.name), /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === "active" ? "success" : "neutral"
  }, a.status)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Recent Orders",
    action: "View all \u2192"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, ORDERS.map(o => /*#__PURE__*/React.createElement(GlassCard, {
    key: o.title,
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone
  }, o.status.replace("_", " ")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, o.date))))))));
}
function Agents() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Agents")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small"
  }, "+ New Agent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    },
    className: "lys-two-grid"
  }, AGENTS.map(a => /*#__PURE__*/React.createElement(GlassCard, {
    key: a.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17
    }
  }, a.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      marginTop: 4,
      fontFamily: "var(--font-mono)"
    }
  }, "lys_\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", a.name.length, "f2a")), /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === "active" ? "success" : "neutral"
  }, a.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, 12 + a.name.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, "Orders")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, "4.", 8 + a.name.length % 2, "\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, "Rating"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small"
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Regenerate token"))))));
}
function Orders() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Orders")), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      padding: "14px 20px",
      borderBottom: "1px solid var(--card-border)",
      fontSize: 12,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Order"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Budget"), /*#__PURE__*/React.createElement("span", null, "Date")), ORDERS.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.title,
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      padding: "16px 20px",
      alignItems: "center",
      borderBottom: i < ORDERS.length - 1 ? "1px solid var(--card-border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, o.title), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone
  }, o.status.replace("_", " "))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--muted)"
    }
  }, "\u20AC", 75 + i * 20), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--muted)"
    }
  }, o.date)))));
}
window.PlatformScreens = {
  Dashboard,
  Agents,
  Orders
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaFooter.jsx
try { (() => {
/* global React */
// CtaSection + Footer — closing developer CTA on an inverse surface, plus the
// flat link footer.
const {
  Button
} = window.LinkYourSkillDesignSystem_da1488;
function CtaSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "20px var(--section-pad-x) 80px",
      maxWidth: "var(--section-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inverse-surface",
    style: {
      borderRadius: "var(--radius-2xl)",
      padding: "56px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--inverse-surface-fg)",
      maxWidth: 640,
      margin: "0 auto"
    }
  }, "Ready to integrate the physical world into your agent?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      justifyContent: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large"
  }, "Developer? Get Started"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Offer Skills")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      color: "var(--inverse-surface-muted)"
    }
  }, "Have questions? Contact us instead.")));
}
const FOOTER_LINKS = ["Sign in", "About Us", "Privacy Policy", "Legal Notice", "How does it work?", "Accessibility", "Changelog"];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      zIndex: 1,
      borderTop: "1px solid var(--card-border)",
      padding: "24px var(--section-pad-x) 48px",
      maxWidth: "var(--section-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 24
    }
  }, FOOTER_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      color: "var(--muted)",
      transition: "color 0.2s"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--muted)"
    }
  }, "\xA9 2026 LinkYourSkill"));
}
window.CtaSection = CtaSection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
// Hero — gradient headline, lead, validation badges, live stats, guest search,
// and the role-prioritized CTA cluster. Mirrors src/components/Hero.tsx.
const {
  Button,
  CheckItem
} = window.LinkYourSkillDesignSystem_da1488;
function HeroStat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "var(--text)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, label));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "80px var(--section-pad-x) 100px",
      maxWidth: "var(--section-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(28px, 5vw, 52px)",
      maxWidth: 820
    }
  }, "When AI needs the ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "real world"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      color: "var(--muted)",
      fontSize: "clamp(16px, 2.2vw, 19px)",
      lineHeight: 1.6,
      maxWidth: 600
    }
  }, "The physical API for AI agents. Verified humans do what AI can't \u2014 inspections, repairs, on-site checks. MCP integration in 5 minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "check-badge",
    style: {
      width: 20,
      height: 20
    }
  }, "\u2713"), " MCP Protocol"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "check-badge",
    style: {
      width: 20,
      height: 20
    }
  }, "\u2713"), " EU Compliance"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--muted)"
    }
  }, "\uD83C\uDDE9\uD83C\uDDEA Made in Germany")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(HeroStat, {
    value: "2,400+",
    label: "Skill Providers"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    value: "11,800+",
    label: "Orders completed"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    value: "4.9\u2605",
    label: "Avg Rating"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "What do you need? e.g. \"Roof inspection in Munich\"",
    style: {
      flex: 1,
      minWidth: 260,
      background: "var(--input-bg)",
      border: "1px solid var(--input-border)",
      borderRadius: "var(--radius-md)",
      color: "var(--text)",
      font: "inherit",
      fontSize: 15,
      padding: "14px 16px",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Find Skills")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      color: "var(--muted)"
    }
  }, "Describe your task \u2014 we'll match you with verified professionals")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    rightIcon: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Developer? Get Token"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    rightIcon: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Offer Skills"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "Hire as Customer \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 13,
      color: "rgba(255,255,255,0.35)"
    }
  }, "\uD83D\uDD12 Verified profiles \xB7 EU data protection \xB7 Streamable HTTP \xB7 Bearer Token Auth"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IntroCards.jsx
try { (() => {
/* global React */
// IntroCards — the three-audience grid (Developers highlighted, Providers, Customers).
const {
  Button,
  GlassCard,
  CheckItem,
  CodeBlock
} = window.LinkYourSkillDesignSystem_da1488;
function IntroCards() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "60px var(--section-pad-x) 100px",
      maxWidth: "var(--section-max)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", null, "What is LinkYourSkill?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      color: "var(--muted)",
      fontSize: 18,
      lineHeight: 1.7,
      maxWidth: 600,
      margin: "20px auto 0"
    }
  }, "The infrastructure where AI agents book human ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "skills"), " \u2013 for inspections, research, creative tasks, and more."), /*#__PURE__*/React.createElement("div", {
    className: "lys-intro-grid",
    style: {
      marginTop: 50,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    highlight: true
  }, /*#__PURE__*/React.createElement("h3", null, "For Developers & AI Agents"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 15,
      lineHeight: 1.7,
      margin: "8px 0 16px"
    }
  }, "Integrate human execution into your agent. 8 MCP tools, REST API, WhatsApp approval."), /*#__PURE__*/React.createElement(CodeBlock, {
    style: {
      marginBottom: 24
    },
    comment: "Create order",
    lines: [["mcp.call(", {
      text: '"prepare_order"',
      tone: "string"
    }, ", {"], ["  ", {
      text: "title:",
      tone: "muted"
    }, " ", {
      text: '"Vor-Ort-Check"',
      tone: "string"
    }], ["})"]]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small"
  }, "Getting Started \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "btn-link small",
    style: {
      display: "block",
      textAlign: "center",
      marginTop: 8
    }
  }, "API Documentation \u2192")), /*#__PURE__*/React.createElement(GlassCard, null, /*#__PURE__*/React.createElement("h3", null, "For Skill Providers"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      margin: "16px 0 28px",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(CheckItem, null, "On-site checks (e.g., real estate, cars)"), /*#__PURE__*/React.createElement(CheckItem, null, "Research, testing & documentation"), /*#__PURE__*/React.createElement(CheckItem, null, "Creative tasks with real feedback")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small"
  }, "Offer Skills"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "btn-link small",
    style: {
      display: "block",
      textAlign: "center",
      marginTop: 8
    }
  }, "View examples \u2192")), /*#__PURE__*/React.createElement(GlassCard, null, /*#__PURE__*/React.createElement("h3", null, "For Customers"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 15,
      lineHeight: 1.7,
      margin: "8px 0 28px"
    }
  }, "Verified professionals for every task. Commission directly and pay securely."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small"
  }, "Find a Professional"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "btn-link small",
    style: {
      display: "block",
      textAlign: "center",
      marginTop: 8
    }
  }, "Browse skills \u2192"))));
}
window.IntroCards = IntroCards;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IntroCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Showcase.jsx
try { (() => {
/* global React */
// Showcase — interactive 5-step "how it works in practice" stepper. Click a step
// (or the arrows) to advance through the automated on-site-inspection flow.
const {
  useState
} = React;
const {
  GlassCard,
  Badge
} = window.LinkYourSkillDesignSystem_da1488;
const STEPS = [{
  icon: "🤖",
  label: "Agent calls API",
  title: "The AI Agent Creates an Order",
  description: "Your agent uses the MCP protocol to create an order directly via the API — one line of code is all it takes."
}, {
  icon: "📱",
  label: "WhatsApp Approval",
  title: "The Agent Owner Approves",
  description: "The agent owner receives a WhatsApp message with the order details and approves with a single tap."
}, {
  icon: "🔍",
  label: "Matching",
  title: "Hans Is Found",
  description: "The platform finds the best available skill provider: rating, distance, and availability are automatically weighted."
}, {
  icon: "📸",
  label: "Result",
  title: "Photos & Inspection Report",
  description: "Hans performs the on-site check and delivers photos, measurements, and a structured report."
}, {
  icon: "✅",
  label: "Complete",
  title: "Agent Receives Structured Data",
  description: "The agent receives results as structured JSON data via the API — machine-readable and immediately actionable."
}];
function Showcase() {
  const [n, setN] = useState(0);
  const step = STEPS[n];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "60px var(--section-pad-x) 100px",
      maxWidth: "var(--section-max)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", null, "How It Works in Practice"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: "var(--muted)",
      fontSize: 17,
      maxWidth: 620,
      margin: "16px auto 0"
    }
  }, "An AI agent books an on-site inspection \u2014 in 5 steps, fully automated."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setN(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      padding: "8px 14px",
      borderRadius: "var(--radius-full)",
      font: "inherit",
      fontSize: 13,
      fontWeight: 600,
      background: i === n ? "rgba(168,85,247,0.12)" : "transparent",
      border: `1px solid ${i === n ? "rgba(168,85,247,0.4)" : "var(--card-border)"}`,
      color: i === n ? "var(--accent-light)" : "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, s.icon), /*#__PURE__*/React.createElement("span", null, s.label)))), /*#__PURE__*/React.createElement(GlassCard, {
    style: {
      marginTop: 32,
      maxWidth: 720,
      margin: "32px auto 0",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-lg)",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 32,
      background: "var(--surface-alt)",
      border: "1px solid rgba(168,85,247,0.2)"
    }
  }, step.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, `Step ${n + 1} of ${STEPS.length}`), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 8
    }
  }, step.title))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: "var(--muted)",
      fontSize: 15,
      lineHeight: 1.7
    }
  }, step.description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setN((n - 1 + STEPS.length) % STEPS.length),
    className: "btn-secondary small"
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, STEPS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: i === n ? "var(--accent-1)" : "var(--card-border)"
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setN((n + 1) % STEPS.length),
    className: "btn-primary small"
  }, "Next \u2192"))));
}
window.Showcase = Showcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Showcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* global React */
// Sticky marketing header — logo wordmark, inline nav with active underline,
// theme/lang affordances, sign-in + gradient register CTA.
const {
  Button
} = window.LinkYourSkillDesignSystem_da1488;
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "skills",
  label: "Skills"
}, {
  id: "kunden",
  label: "For Customers"
}, {
  id: "beispiele",
  label: "Examples"
}, {
  id: "api",
  label: "API"
}, {
  id: "ueber",
  label: "About Us"
}];
function SiteHeader({
  active = "home",
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "lys-header",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "var(--nav-bg)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--card-border)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 1400,
      margin: "0 auto",
      height: "var(--nav-height)",
      padding: "0 var(--section-pad-x)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-linkyourskill.png",
    alt: "",
    width: "36",
    height: "36",
    style: {
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text",
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "LinkYourSkill")), /*#__PURE__*/React.createElement("div", {
    className: "lys-nav-inline",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      flex: 1,
      justifyContent: "flex-end",
      minWidth: 0
    }
  }, NAV.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav(item.id);
      },
      style: {
        position: "relative",
        fontSize: 15,
        fontWeight: 500,
        whiteSpace: "nowrap",
        color: isActive ? "var(--text)" : "var(--muted)",
        transition: "color 0.2s"
      }
    }, item.label, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: -4,
        left: 0,
        right: 0,
        height: 2,
        borderRadius: 1,
        background: "var(--gradient-brand)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "lys-nav-cta",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: "var(--muted)",
      whiteSpace: "nowrap"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "small"
  }, "Get Started"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Trust.jsx
try { (() => {
/* global React */
// Trust — four security cards + the Made-in-Germany / GDPR / MCP trust pills.
const {
  GlassCard,
  TrustBadge
} = window.LinkYourSkillDesignSystem_da1488;
const ITEMS = [{
  title: "🛡️ Verified Profiles",
  desc: "Only vetted accounts and verified identities."
}, {
  title: "⚡ MCP-ready",
  desc: "Streamable HTTP, Bearer Token Auth, 60 req/min rate limiting."
}, {
  title: "📋 EU-Compliant",
  desc: "GDPR, DSA, P2B, DAC7, BFSG — fully compliant."
}, {
  title: "🔐 EU Data Protection",
  desc: "Your data belongs to you – hosted in Germany."
}];
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 1,
      padding: "60px var(--section-pad-x) 100px",
      maxWidth: "var(--section-max)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Security & Trust \u2013 built in Germany"), /*#__PURE__*/React.createElement("div", {
    className: "lys-trust-grid",
    style: {
      marginTop: 50,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      textAlign: "left"
    }
  }, ITEMS.map(it => /*#__PURE__*/React.createElement(GlassCard, {
    key: it.title,
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.6,
      marginTop: 8
    }
  }, it.desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "\uD83C\uDDE9\uD83C\uDDEA",
    label: "Made in Germany"
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "\uD83D\uDD12",
    label: "GDPR Compliant"
  }), /*#__PURE__*/React.createElement(TrustBadge, {
    icon: "\u26A1",
    label: "MCP Protocol",
    accent: true
  })));
}
window.Trust = Trust;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Trust.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.Input = __ds_scope.Input;

})();
