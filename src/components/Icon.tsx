import type { SVGProps } from "react";

// Line icons used in place of text arrows (↗ → ›). They inherit colour from `currentColor` and size from the
// surrounding font-size, so existing rules that sized the old glyphs keep working.

const paths = {
  arrowUpRight: "M7 17 17 7M8.5 7H17v8.5",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  chevronRight: "m9.5 6 6 6-6 6",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name = "arrowUpRight", size = "0.72em", style, ...props }: { name?: IconName; size?: string | number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: "inline-block", flex: "none", verticalAlign: "-0.1em", ...style }}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
