import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

export default async function Home() {
  let udhetimet: Udhetim[];
  try {
    udhetimet = await lexoUdhetimet();
  } catch {
    return (
      <main className="page-shell">
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <a className="action action--primary" href="/">Provo përsëri</a>
      </main>
    );
  }
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
        {udhetimet.length === 0 ? (
          <p>Nuk ka udhëtime për momentin.</p>
        ) : <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
          ))}
        </div>}
      </section>
      <footer className="page-footer">Prototip mësimor · Nuk kryhen rezervime reale</footer>
    </main>
  );
}
