import Image from "next/image";
import { voiceArcsPath } from "./voiceArcs";
import styles from "./VoicePhoneArt.module.css";

/** The voice booking phone, placed as on the home "Voice Booking" card: the concentric arcs filling the frame from the
    bottom-right corner, and the phone large on the right, cut off just below its spoken request so only the voice
    screen shows. Fills its parent (position it over the whole card or
    panel); the copy sits on the left. Arcs are drawn inline with a non-scaling stroke: white on purple, the home card's
    dark teal (`tone="dark"`) on light panels. Tune with --phone-right and --phone-width. */
export default function VoicePhoneArt({ label = "Booking an appointment by voice on a phone", tone = "light" }: { label?: string; tone?: "light" | "dark" }) {
  return <div className={`${styles.art} ${tone === "dark" ? styles.dark : ""}`} role="img" aria-label={label}>
    <svg className={styles.arcs} viewBox="0 0 465 326" preserveAspectRatio="xMaxYMax slice" aria-hidden="true" focusable="false">
      <path d={voiceArcsPath} vectorEffect="non-scaling-stroke" />
    </svg>
    <Image className={styles.phone} src="/assets/patient-portal-voice-phone.png" alt="" width={719} height={900} sizes="(max-width: 760px) 70vw, 520px" />
  </div>;
}
