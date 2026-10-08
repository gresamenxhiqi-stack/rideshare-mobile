import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export default async function Detajet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const udhetim = gjejUdhetimin(id);
  if (!udhetim) notFound();

  return (
    <main className="page-shell detail-page">
      <Link className="back-link" href="/">← <span>Kthehu te udhëtimet</span></Link>
      <p className="eyebrow detail-label">DETAJET E UDHËTIMIT</p>
      <h1>{udhetim.nisja} <span aria-hidden="true">→</span> {udhetim.destinacioni}</h1>
      <p className="hero-copy">Një udhëtim i përbashkët drejt AAB.</p>

      <section className="detail-card" aria-label="Informacioni i udhëtimit">
        <div className="detail-row"><span>Ora e nisjes</span><strong>{udhetim.ora}</strong></div>
        <div className="detail-row"><span>Vendtakimi</span><strong>{udhetim.vendtakimi}</strong></div>
        <div className="detail-row"><span>Vende të lira</span><strong>{udhetim.vende}</strong></div>
      </section>

      {udhetim.vende > 0 ? (
        <Link className="action action--primary action--wide" href={`/udhetimi/${id}/kerkesa`}>
          Kërko vend <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <button className="action action--disabled action--wide" disabled>
          Nuk ka vende të lira
        </button>
      )}
      <p className="fine-print">Kjo është vetëm një provë e ndërfaqes. Nuk dërgohet rezervim.</p>
    </main>
  );
}
