export default function SuccessPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gold-700 mb-4">ברוכים הבאים!</h1>
      <p className="card-text">המנוי הופעל בהצלחה. אפשר ליהנות מכל הסיפורים.</p>
      <div className="mt-6">
        <a className="btn btn-primary" href="/stories">לעבור לסיפורים</a>
      </div>
    </main>
  );
}
