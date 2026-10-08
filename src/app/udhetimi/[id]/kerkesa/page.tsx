import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export default async function Kerkesa({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const udhetim = gjejUdhetimin(id);
  if (!udhetim) notFound();

  return (
    <main className="page-shell request-page">
      <Link className="back-link" href={`/udhetimi/${id}`}>
        ← <span>Kthehu te detajet</span>
      </Link>
      {udhetim.vende > 0 ? (
        <section className="request-card" aria-labelledby="request-title">
          <div className="status-icon" aria-hidden="true">…</div>
          <p className="eyebrow">KËRKESË DEMONSTRIMI</p>
          <h1 id="request-title">Simulim: Në pritje</h1>
          <p>Kërkesa për udhëtimin nga <strong>{udhetim.nisja}</strong> nuk është dërguar te shoferi.</p>
          <p className="muted">Ruajtjen dhe konfirmimin real mund t’i shtojmë më vonë.</p>
          <Link className="action action--primary action--wide" href={`/udhetimi/${id}`}>
            Kthehu te detajet
          </Link>
        </section>
      ) : (
        <section className="request-card">
          <h1>Nuk ka vende të lira</h1>
          <p className="muted">Zgjidh një udhëtim tjetër nga lista.</p>
          <Link className="action action--primary action--wide" href="/">Kthehu te lista</Link>
        </section>
      )}
    </main>
  );
}
