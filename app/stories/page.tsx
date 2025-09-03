import Link from "next/link";

type Story = {
  id: string;
  title: string;
  excerpt: string;
};

const demoStories: Story[] = [
  { id: "1", title: "המסע של טלי בענן הוורוד", excerpt: "סיפור עדין על דמיון שממריא גבוה..." },
  { id: "2", title: "הארנב הקטן שלא ויתר", excerpt: "על התמדה, חברות וקצת קסם." },
  { id: "3", title: "כפתור הזהב של נועם", excerpt: "הפתעות קטנות שמאירות את הלב." },
];

export default function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gold-700 mb-6">הספרייה</h1>
      <p className="text-muted-foreground mb-8">כאן תמצאו את כל הסיפורים. בכל חודש מצטרף סיפור חדש.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {demoStories.map((s) => (
          <article key={s.id} className="card">
            <h3 className="card-title">{s.title}</h3>
            <p className="card-text mb-4">{s.excerpt}</p>
            <div className="flex gap-2">
              <Link href={`/stories/${s.id}`} className="btn btn-primary">לקרוא</Link>
              <Link href="/subscribe" className="btn btn-ghost">מנוי</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
