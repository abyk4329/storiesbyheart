import Link from "next/link";
export default function CancelPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gold-700 mb-4">הפעולה בוטלה</h1>
      <p className="card-text">לא נורא, אפשר לחזור ולעשות מנוי בכל עת.</p>
      <div className="mt-6 flex gap-3">
  <Link className="btn btn-ghost" href="/">חזרה לדף הבית</Link>
  <Link className="btn btn-primary" href="/subscribe">לנסות שוב</Link>
      </div>
    </main>
  );
}
