import VoicePhoneArt from "./VoicePhoneArt";
import { assurePattern, clinicalPattern, intelligencePattern, magistralBPattern, type CardPattern } from "./cardPatterns";
import { inter, styles } from "./SceneUi";
import { sceneLabels, scenes } from "./sceneScreens";
import type { CSSProperties } from "react";

// Feature grids where every card shows the screen it describes (sceneScreens.tsx), on a six-column grid: four cards
// as 2 + 2, five as 2 + 3, six as 3 + 3, seven as 2 + 3 + 2. Every illustration runs the full width of its card and
// the panels in a row share one height. A voice booking lead card shows the booking screen on a phone instead.

export type SceneFeature = { id: string; title: string; text: string };

const layouts: Record<number, number[]> = {
  4: [3, 3, 3, 3],
  5: [3, 3, 2, 2, 2],
  6: [2, 2, 2, 2, 2, 2],
  7: [3, 3, 2, 2, 2, 3, 3],
};

const tones = [styles.lavender, styles.peach, styles.mint, styles.aqua];

// One line pattern from the home product cards on each card, behind the screen. It starts below the heading and
// description (fading in, so it never runs into the copy or stops on a straight line) and is drawn at its original
// size from the corner it sits in on the home page, its lines running on to the card's own edges. The purple lead card takes the Assure lines; the pastel cards take the Voice Booking
// arcs, the Magistral lines and the Clinical arcs.
type Placed = { pattern: CardPattern; corner: "topRight" | "bottomLeft" };
const cardPatterns: Placed[] = [
  { pattern: intelligencePattern, corner: "topRight" },
  { pattern: magistralBPattern, corner: "topRight" },
  { pattern: clinicalPattern, corner: "bottomLeft" },
  { pattern: intelligencePattern, corner: "topRight" },
];
const leadPattern: Placed = { pattern: assurePattern, corner: "topRight" };

function PatternLines({ pattern, corner }: Placed) {
  return <svg className={`${styles.pattern} ${styles[corner]}`} width={pattern.width} height={pattern.height} viewBox={`0 0 ${pattern.width} ${pattern.height}`} fill="none" aria-hidden="true" focusable="false">
    <path d={pattern.d} stroke={pattern.stroke} strokeOpacity={pattern.opacity} strokeWidth={pattern.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export default function SceneBento({ label, features }: { label: string; features: SceneFeature[] }) {
  const spans = layouts[features.length] ?? features.map(() => 2);
  // Two columns on tablets: the lead card spans both, and so does the last card when it would sit alone.
  const spanMd = (index: number) => index === 0 || (index === features.length - 1 && (features.length - 1) % 2 === 1) ? 2 : 1;
  return <div className={styles.grid}>
    {features.map((feature, index) => {
      const lead = index === 0;
      const voice = lead && feature.id === "voiceBooking";
      const style = { "--span": spans[index], "--span-md": spanMd(index) } as CSSProperties;
      const className = [styles.card, lead ? styles.lead : tones[(index - 1) % tones.length], voice ? styles.leadVoice : "", voice && spans[0] === 2 ? styles.leadVoiceNarrow : ""].join(" ");
      const placed = voice ? undefined : lead ? leadPattern : cardPatterns[(index - 1) % cardPatterns.length];
      return <article key={feature.id} className={className} style={style}>
        <div className={styles.copy}>
          {lead && <span className={styles.eyebrow}>{label}</span>}
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
        {voice
          ? <div className={styles.phone}><VoicePhoneArt /></div>
          : <div className={`${styles.scene} ${inter.className}`} role="img" aria-label={sceneLabels[feature.id] ?? feature.title}>
            {placed && <span className={styles.patternLayer}><PatternLines {...placed} /></span>}
            {scenes[feature.id]}
          </div>}
      </article>;
    })}
  </div>;
}
