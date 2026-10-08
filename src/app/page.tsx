import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="hero">
        <p className="eyebrow"><span className="live-dot" /> RIDE SHARE · AAB</p>
        <h1>Rruga bëhet më e lehtë <span>bashkë.</span></h1>
        <p className="hero-copy">Zgjidh një nisje, shiko hollësitë dhe provo një kërkesë demonstrimi.</p>
        <div className="route-pill"><span>Prishtinë dhe rrethinë</span><span aria-hidden="true">↗</span></div>
      </header>

      <section aria-labelledby="trips-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PËR SOT</p>
            <h2 id="trips-heading">Udhëtimet e afërta</h2>
          </div>
          <span className="trip-total">{udhetimet.length} udhëtime</span>
        </div>
        <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
          ))}
        </div>
      </section>
      <footer className="page-footer">Prototip mësimor · Nuk kryhen rezervime reale</footer>
    </main>
  );
}
