import * as React from "react";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Muted label above the value. */
  label: React.ReactNode;
  /** The headline metric (number, currency, status). */
  value: React.ReactNode;
  /** Optional context line below the value. */
  sub?: React.ReactNode;
}

/**
 * Dashboard KPI tile — label, big value, optional sub-line, on a glass card.
 *
 * @startingPoint section="Data" subtitle="Dashboard KPI tile" viewport="700x140"
 */
export declare function StatTile(props: StatTileProps): React.JSX.Element;
export default StatTile;
