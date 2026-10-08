import Link from "next/link";

export default function UdhetimiNukUGjet() {
  return (
    <main className="page-shell not-found-page">
      <p className="eyebrow">404 · UDHËTIMI MUNGON</p>
      <h1>Udhëtimi nuk u gjet</h1>
      <p className="hero-copy">Kjo adresë nuk përputhet me një udhëtim në listë.</p>
      <Link className="action action--primary" href="/">Kthehu te lista</Link>
    </main>
  );
}
