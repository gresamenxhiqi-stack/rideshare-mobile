import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

export function KartaUdhetimi({ udhetim }: { udhetim: Udhetim }) {
  return (
    <article className="trip-card">
      <div className="trip-card__topline">
        <span className="eyebrow">Nisja · {udhetim.ora}</span>
        <span className="seat-count">
          {udhetim.vende === 0
            ? "Plot"
            : `${udhetim.vende} ${udhetim.vende === 1 ? "vend" : "vende"}`}
        </span>
      </div>
      <h2>
        {udhetim.nisja} <span aria-hidden="true">→</span> {udhetim.destinacioni}
      </h2>
      <p className="muted">Udhëtim i përbashkët · të dhëna demonstrimi</p>
      <Link className="action action--secondary" href={`/udhetimi/${udhetim.id}`}>
        Shiko detajet <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
