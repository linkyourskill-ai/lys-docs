import * as React from "react";

export interface TrustBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Emoji or icon node shown at the start. */
  icon: React.ReactNode;
  /** Bold label text. */
  label: React.ReactNode;
  /** Purple-tinted standout treatment. */
  accent?: boolean;
}

/**
 * Emoji + label trust pill — "Made in Germany", "GDPR Compliant", "MCP Protocol".
 */
export declare function TrustBadge(props: TrustBadgeProps): React.JSX.Element;
export default TrustBadge;
