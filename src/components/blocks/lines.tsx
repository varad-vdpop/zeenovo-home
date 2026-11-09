import { Fragment, type ReactNode } from "react";

/** Splits "Line one / line two" into lines, as in the approved headings. */
export function lines(text: string): ReactNode {
  const parts = text.split(" / ");
  // The space after <br /> keeps words apart on mobile, where the approved styles hide line breaks.
  return parts.map((part, index) => <Fragment key={index}>{part}{index < parts.length - 1 && <><br />{" "}</>}</Fragment>);
}
