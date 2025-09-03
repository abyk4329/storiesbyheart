type Story = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
};

// Mock data – replace with real data source later
const mockStories: Record<string, Story> = {
  "1": {
    id: "1",
    title: "המסע של טלי בענן הוורוד",
    excerpt: "סיפור עדין על דמיון שממריא גבוה...",
    content: `
      <p>פעם אחת, בחורף קר, ישבה טלי בחדרה וחלמה על עולם אחר. היא ראתה בעיני רוחה ענן וורוד רך, שמרחף בשמיים הכחולים.</p>
      <p>"אני רוצה לטוס על הענן הזה," אמרה טלי לעצמה. היא סגרה את עיניה ודמיינה את הרוח הרכה שמרימה אותה למעלה.</p>
      <p>בחלומה, היא פגשה חברים חדשים – ציפורים קטנות ופרפרים צבעוניים. הם לימדו אותה על אומץ וחברות.</p>
      <p>כשטלי התעוררה, היא ידעה שדמיון הוא הכוח הכי חזק בעולם. והיא חיכתה בקוצר רוח לסיפור הבא...</p>
    `,
    publishedAt: "2025-09-01",
  },
  "2": {
    id: "2",
    title: "הארנב הקטן שלא ויתר",
    excerpt: "על התמדה, חברות וקצת קסם.",
    content: `
      <p>ביער ירוק ויפה, חי ארנב קטן בשם דני. דני רצה לרוץ מהר כמו הארנבים הגדולים, אבל הוא היה קטן וחלש.</p>
      <p>כל יום הוא התאמן: רץ, קפץ, וחזר שוב. "אני לא אוותר," אמר לעצמו. החברים שלו עודדו אותו, והוא למד שחברות היא הכוח הכי חזק.</p>
      <p>יום אחד, דני רץ מהר כל כך שהוא זכה בתחרות. הוא הבין שהתמדה מביאה הצלחה.</p>
      <p>והם חיו באושר לנצח...</p>
    `,
    publishedAt: "2025-08-01",
  },
  "3": {
    id: "3",
    title: "כפתור הזהב של נועם",
    excerpt: "הפתעות קטנות שמאירות את הלב.",
    content: `
      <p>נועם מצא כפתור זהב קטן ברחוב. הוא היה מבריק ומזמין. "מה זה עושה?" תהה נועם.</p>
      <p>הוא לחץ עליו, ופתאום הכל השתנה: הצבעים היו בהירים יותר, והחברים חייכו יותר.</p>
      <p>נועם למד שהכפתור הוא סוד הקסם: להיות טוב לב ולהעריך את הקטן.</p>
      <p>מאז, הוא חי באושר עם הלב מלא אהבה...</p>
    `,
    publishedAt: "2025-07-01",
  },
};

import Link from "next/link";

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = mockStories[params.id];

  if (!story) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gold-700 mb-6">סיפור לא נמצא</h1>
        <p className="text-muted-foreground">הסיפור הזה עדיין לא זמין. חזרו מאוחר יותר!</p>
        <Link href="/stories" className="btn btn-primary mt-4">חזרה לספרייה</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="story-article">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gold-700 mb-4">{story.title}</h1>
          <p className="text-muted-foreground text-lg">{story.excerpt}</p>
          <time className="text-sm text-muted-foreground mt-2 block">
            פורסם ב-{new Date(story.publishedAt).toLocaleDateString("he-IL")}
          </time>
        </header>
        <div
          className="story-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
        <footer className="mt-12 pt-8 border-t border-gold-100">
          <Link href="/stories" className="btn btn-ghost">חזרה לספרייה</Link>
        </footer>
      </article>
    </main>
  );
}
