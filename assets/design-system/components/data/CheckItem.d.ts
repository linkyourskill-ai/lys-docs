import * as React from "react";

export interface CheckItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

/**
 * Green-check list row — the standard benefit/feature line.
 */
export declare function CheckItem(props: CheckItemProps): React.JSX.Element;
export default CheckItem;
