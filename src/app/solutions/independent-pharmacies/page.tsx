import { shareMeta } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { BlockList } from "@/components/blocks/BlockPage";
import { solutionPages } from "@/content/pages/solutions";
import blocks from "@/components/blocks/blocks.module.css";
import styles from "./page.module.css";

const pageAsset = asset.independentPharmacies;

const page = solutionPages["/solutions/independent-pharmacies"];
export const metadata = shareMeta(page.meta);

const realityCards = [
  {
    number: "01",
    title: "Clinical time is capped by admin",
    body: "Booking, documentation, fax and follow-up are done by hand, so fewer funded services get delivered.",
  },
  {
    number: "02",
    title: "Chains have booking and reminders. Most independents don't.",
    body: "Patients book where booking is easiest.",
  },
  {
    number: "03",
    title: "Manual paperwork erodes service margin",
    body: "Each assessment adds documentation, a physician fax and a follow-up call.",
  },
] as const;

const changes = [
  { label: "Admin automated", icon: pageAsset.automation },
  { label: "Online storefront", icon: pageAsset.storefront },
  { label: "Clinical revenue tracked", icon: pageAsset.revenue },
  { label: "No IT project", icon: pageAsset.noIt },
] as const;

const week = [
  {
    number: "01",
    title: "Services published",
    body: "Your website lists every service you offer, with live booking.",
  },
  {
    number: "02",
    title: "Bookings organised",
    body: "Patients choose the service and time. Walk-ins join the same queue.",
  },
  {
    number: "03",
    title: "Visits guided",
    body: "Screening, red flags and documents are produced during the visit.",
  },
  {
    number: "04",
    title: "Follow-ups sent",
    body: "Email follow-up runs automatically. Only flagged responses return to the team.",
  },
  {
    number: "05",
    title: "Billing ready",
    body: "The billing PIN for the service, mode and outcome is shown on every visit.",
  },
] as const;

function Arrow() {
  return <span data-cta-icon aria-hidden="true">↗</span>;
}

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="independent-pharmacies-title">
      <div className={styles.heroBackdrop}>
        <Image className={styles.heroArt} src={pageAsset.heroArt} alt="" width={1362} height={819} priority />
      </div>

      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Independent pharmacies</p>
        <h1 id="independent-pharmacies-title">Big pharmacy tools,{" "}<br />for a pharmacy with{" "}<br />one front door.</h1>
        <p className={styles.heroDescription}>Online and voice booking, guided clinical services, automated follow-up and a safety program. No per-user fees. No IT project. Set up in about a day.</p>
        <div className={blocks.solutionActions}>
          <Link data-cta className={styles.primaryButton} href="/book-a-demo"><Arrow />Book a Demo</Link>
          <Link data-cta className={`${styles.primaryButton} ${blocks.solutionSecondary}`} href="https://auth.zeenovo.com/signup"><Arrow />Start Free Trial</Link>
        </div>
      </div>

      <Image
        className={styles.heroPharmacist}
        src={pageAsset.hero}
        alt="Independent pharmacist reviewing a patient record"
        width={1086}
        height={1448}
        priority
        sizes="(max-width: 760px) 78vw, 390px"
      />

      <article className={styles.liveAssessment}>
        <span>Live assessment</span>
        <small>Red flag cleared</small>
        <strong>Allergic rhinitis</strong>
        <div>
          <span><Image src={pageAsset.symptoms} alt="" width={24} height={24} /></span>
          <b>Symptoms</b>
          <small>3 answers captured</small>
        </div>
      </article>

      <article className={styles.recordReady}>
        <Image src={pageAsset.document} alt="" width={26} height={26} />
        <strong>Record ready</strong>
        <span>Assessment, outcome and physician note.</span>
      </article>
    </section>
  );
}

function Reality() {
  return (
    <section className={styles.reality} aria-labelledby="reality-title">
      <div className={styles.sectionRail}>
        <div className={styles.realityHeading}>
          <div><p>The reality</p><h2 id="reality-title">The week-to-week reality</h2></div>
          <p>Independent pharmacy work rarely arrives one role at a time.</p>
        </div>
        <div className={styles.realityCards}>
          {realityCards.map((card) => (
            <article key={card.number}>
              <span>{card.number}</span>
              <Image src={pageAsset.quote} alt="" width={79} height={64} />
              <div><h3>{card.title}</h3><p>{card.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PictureChanges() {
  return (
    <section className={styles.changes} aria-labelledby="changes-title">
      <div className={styles.changesHeading}>
        <span><Image src={pageAsset.star} alt="" width={20} height={20} />With ZeeNovo</span>
        <h2 id="changes-title">How the picture changes</h2>
        <p>ZeeNovo takes on the repeat work, so the team can focus on clinical services.</p>
      </div>
      <div className={styles.changeTrack}>
        <Image className={styles.changeArt} src={pageAsset.changeArt} alt="" width={1440} height={240} />
        <Image className={`${styles.changeArt} ${styles.changeArtTrace}`} src={pageAsset.changeArt} alt="" aria-hidden="true" width={1440} height={240} />
        {changes.map((item) => (
          <article key={item.label}>
            <Image className={styles.changeIcon} src={item.icon} alt="" width={50} height={50} />
            <h3>{item.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function BetterWeek() {
  return (
    <section className={styles.betterWeek} aria-labelledby="better-week-title">
      <div className={styles.sectionRail}>
        <div className={styles.weekHeading}>
          <div><p>A better week</p><h2 id="better-week-title">Less admin around the care.</h2></div>
          <p>ZeeNovo runs quietly around the pharmacy’s real work.</p>
        </div>
        <div className={styles.weekCards}>
          {week.map((day, index) => (
            <article key={day.number}>
              <span>{day.number}</span>
              <div className={styles.weekIcon}><Image src={pageAsset.days[index]} alt="" width={50} height={50} /></div>
              <div><h3>{day.title}</h3><p>{day.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <Image className={styles.ctaCircle} src={pageAsset.ctaCircle} alt="" width={1491} height={1634} />
      <div className={styles.ctaCopy}>
        <p>Built for independent pharmacy</p>
        <h2 id="cta-title">Keep the independence.<br />Lose the operational drag.</h2>
        <span>Start with your services, your patients and the systems you already use.</span>
        <div><Link data-cta href="/book-a-demo">Book a Demo <Arrow /></Link><Link data-cta href="https://auth.zeenovo.com/signup">Start Free Trial <Arrow /></Link></div>
      </div>
      <div className={styles.ctaPhoto}>
        <Image src={pageAsset.cta} alt="Gloved pharmacist preparing a syringe" fill sizes="440px" />
      </div>
      <article className={styles.timeReturned}><strong>Time returned to care</strong><span>Automation handles the repeat work.</span></article>
    </section>
  );
}

export default function IndependentPharmaciesPage() {
  return <main className={styles.page}><Hero /><Reality /><PictureChanges /><BetterWeek /><BlockList blocks={page.blocks} /><Cta /></main>;
}
