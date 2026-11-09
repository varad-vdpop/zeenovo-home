"use client";

import { useState, type FormEvent } from "react";
import b from "./blocks.module.css";
import type { FormBlock } from "./types";

// Review build only: the form validates and shows the success message, but sends nothing.
// Wire it to ZeeNovo's CRM or email endpoint before launch.
export default function FormView({ block }: { block: FormBlock }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const form = <form className={b.form} onSubmit={onSubmit}>
    {block.fields.map((field) => {
      if (field.kind === "checks") {
        return <fieldset key={field.label}><legend>{field.label}</legend>{field.options.map((option) => <label key={option}><input type="checkbox" name={field.label} value={option} />{option}</label>)}</fieldset>;
      }
      if (field.kind === "select") {
        return <label key={field.label} className={field.half ? b.half : ""}>{field.label}<select name={field.label} defaultValue=""><option value="" disabled>Select</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select></label>;
      }
      if (field.kind === "textarea") {
        return <label key={field.label}>{field.label}{field.optional && <span className={b.optional}> (optional)</span>}<textarea name={field.label} required={!field.optional} /></label>;
      }
      return <label key={field.label} className={field.half ? b.half : ""}>{field.label}{field.optional && <span className={b.optional}> (optional)</span>}<input type={field.kind} name={field.label} required={!field.optional} /></label>;
    })}
    {block.consent && <p className={b.consent}>{block.consent}</p>}
    {sent ? <p className={b.success} role="status">{block.success}</p> : <button className={b.submit} type="submit">{block.submit}</button>}
  </form>;

  if (!block.aside) return form;
  return <div className={b.formLayout}>
    {form}
    <aside className={b.aside}><h3>{block.aside.title}</h3>{block.aside.lines.map((line) => <p key={line}>{line}</p>)}</aside>
  </div>;
}
