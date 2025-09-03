import Link from "next/link";
import Image from "next/image";

type Story = {
  id: string;
  title: string;
  excerpt: string;
  tags?: string[];
};

const demoStories: Story[] = [
  { id: "1", title: "המסע של טלי בענן הוורוד", excerpt: "סיפור עדין על דמיון שממריא גבוה...", tags: ["חדש החודש", "דמיון"] },
  { id: "2", title: "הארנב הקטן שלא ויתר", excerpt: "על התמדה, חברות וקצת קסם.", tags: ["חברות", "אומץ"] },
  { id: "3", title: "כפתור הזהב של נועם", excerpt: "הפתעות קטנות שמאירות את הלב.", tags: ["הפתעה", "אהבה"] },
];

export default function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gold-700 mb-6">הספרייה</h1>
      <p className="text-muted-foreground mb-8">כאן תמצאו את כל הסיפורים. בכל חודש מצטרף סיפור חדש.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {demoStories.map((s, index) => (
          <article key={s.id} className={`card fade-in ${index === 1 ? 'fade-in-delay' : index === 2 ? 'fade-in-delay-2' : ''}`}>
            <Image
              src="/story-placeholder.svg"
              alt={`איור לסיפור ${s.title}`}
              width={200}
              height={150}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="card-title">{s.title}</h3>
            <p className="card-text mb-4">{s.excerpt}</p>
            {s.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
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
