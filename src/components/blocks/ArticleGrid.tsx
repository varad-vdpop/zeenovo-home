"use client";

import Link from "next/link";
import { useState } from "react";
import s from "./sections.module.css";

export type Article = { tag: string; title: string; text: string; meta?: string; href?: string };

/** Card grid for articles, case studies, guides and updates, with an optional category filter.
    The category is the first part of each item's tag ("Category · Note"). */
export default function ArticleGrid({ filters, items, empty }: { filters?: string[]; items: Article[]; empty?: string }) {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((item) => item.tag.split(" · ")[0] === filter);

  return <>
    {filters && <div className={s.filters} role="group" aria-label="Filter by category">
      {filters.map((name) => <button key={name} type="button" aria-pressed={name === filter} className={`${s.filter} ${name === filter ? s.filterActive : ""}`} onClick={() => setFilter(name)}>{name}</button>)}
    </div>}
    {shown.length > 0
      ? <div className={s.articles}>{shown.map((item) => {
        const [category, ...notes] = item.tag.split(" · ");
        const content = <>
          <div className={s.articleTags}><span className={s.articleTag}>{category}</span>{notes.map((note) => <span className={s.articleNote} key={note}>{note}</span>)}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.meta && (item.href ? <span className={s.articleLink}>{item.meta} <span aria-hidden="true">↗</span></span> : <span className={s.articleResult}>{item.meta}</span>)}
        </>;
        return item.href
          ? <Link className={s.article} href={item.href} key={item.title}>{content}</Link>
          : <article className={s.article} key={item.title}>{content}</article>;
      })}</div>
      : <p className={s.empty}>{empty ?? "Nothing in this category yet."}</p>}
  </>;
}
