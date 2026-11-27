import { provinceMaps } from "./provinceMaps";
import styles from "./page.module.css";

// A province's map in the hero, drawn and animated like Ontario's: the province in the same purple gradient, with its
// outline traced and filled over it on the same loop (the ontarioMapTrace styles).
export default function ProvinceMapArt({ slug, name }: { slug: string; name: string }) {
  const map = provinceMaps[slug];
  if (!map) return null;
  const gradient = `province-map-${slug}`;
  const size = { width: `${(map.width / 316) * 100}%` };
  return <>
    <svg className={styles.provinceMap} style={size} viewBox={map.viewBox} role="img" aria-label={`Map of ${name}`}>
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#D5D3FD" />
          <stop offset="1" stopColor="#3B309D" />
        </linearGradient>
      </defs>
      <path d={map.d} fill={`url(#${gradient})`} />
    </svg>
    <svg className={`${styles.ontarioMapTrace} ${styles.provinceMapTrace}`} style={size} viewBox={map.viewBox} aria-hidden="true" focusable="false">
      <path className={styles.ontarioMapTracePath} d={map.d} pathLength={1} fill="#ddd7fa" stroke="#6751d5" strokeWidth={map.stroke} strokeLinejoin="round" paintOrder="stroke fill" />
    </svg>
  </>;
}
