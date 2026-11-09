"use client";

import { useState, type FormEvent } from "react";
import b from "./blocks.module.css";
import type { FormBlock } from "./types";

// Styled as the approved Clinical "Profile details" panel: white panel, uppercase field labels,
// two-column fields, and the dark "Continue" button.
// Review build only: the form validates and shows the success message, but sends nothing.
// Wire it to ZeeNovo's CRM or email endpoint before launch.
export default function FormView({ block }: { block: FormBlock }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return <form className={b.panel} onSubmit={onSubmit}>
    <div className={b.panelHeading}>Your details</div>
    <div className={b.fields}>
      {block.fields.map((field) => {
        if (field.kind === "checks") {
          return <fieldset key={field.label} className={b.full}><legend className={b.label}>{field.label}</legend>
            <div className={b.checks}>{field.options.map((option) => <label key={option} className={b.check}><input type="checkbox" name={field.label} value={option} />{option}</label>)}</div>
          </fieldset>;
        }
        const className = field.kind === "textarea" || !("half" in field && field.half) ? b.full : "";
        const optional = "optional" in field && field.optional;
        return <label key={field.label} className={className}>
          <span className={b.label}>{field.label}{optional ? " (optional)" : ""}</span>
          {field.kind === "select"
            ? <select className={b.field} name={field.label} defaultValue=""><option value="" disabled>Select</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select>
            : field.kind === "textarea"
              ? <textarea className={`${b.field} ${b.textarea}`} name={field.label} required={!optional} />
              : <input className={b.field} type={field.kind} name={field.label} required={!optional} />}
        </label>;
      })}
    </div>
    {block.consent && <p className={b.consent}>{block.consent}</p>}
    <div className={b.actions}>
      {sent ? <p className={b.sent} role="status">{block.success}</p> : <button className={b.continue} type="submit">{block.submit}</button>}
    </div>
  </form>;
}
