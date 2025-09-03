import Link from "next/link";

type ColoringStory = {
  id: string;
  title: string;
  summary: string;
  message: string;
  ageRange: string;
  visualElements: string;
  thumbnail: string;
  pages: number;
};

const coloringStories: ColoringStory[] = [
  {
    id: "star-friend",
    title: "הכוכב שמחפש חבר",
    summary: "כוכב קטן בשמיים מרגיש בודד. הוא יוצא למסע בין כוכבים, ירחים ושמשות כדי למצוא חבר. בדרך הוא מגלה שכשהוא מאיר באהבה – הוא כבר מושך אליו חברים. בסוף הוא מגלה שחברות אמיתית מתחילה בלב פתוח ובאור פנימי.",
    message: "האור שבפנים מושך אהבה מבחוץ. כשאנחנו מאירים מעצמנו, אנחנו תמיד מוקפים בחברים.",
    ageRange: "3–7",
    visualElements: "ציורים רכים של לילה, שמיים מנצנצים, כוכב קטן עם חיוך",
    thumbnail: "/star-thumbnail.svg",
    pages: 3
  }
];

export default function ColoringPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gold-700 mb-6">דפי צביעה להדפסה</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          צבעו את הדמויות האהובות מסיפורי הלב! כל דף צביעה מגיע עם הסיפור המלא ופעילויות מהנות.
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            💡 <strong>טיפ להדפסה:</strong> השתמשו בנייר לבן או צבעוני, והדפיסו באיכות גבוהה לקבלת התוצאות הטובות ביותר
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coloringStories.map((story) => (
          <article key={story.id} className="card group hover:scale-105 transition-transform duration-300">
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">⭐</div>
              </div>
              <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-gold-700">
                {story.pages} עמודים
              </div>
            </div>

            <h3 className="card-title text-center">{story.title}</h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-blue-600">👶</span>
                <span className="text-muted-foreground">גילאים: {story.ageRange}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">💝</span>
                <span className="text-muted-foreground">מסר: {story.message}</span>
              </div>
            </div>

            <p className="card-text text-sm mb-4 line-clamp-3">{story.summary}</p>

            <div className="flex gap-2">
              <Link
                href={`/coloring/${story.id}`}
                className="btn btn-primary flex-1 text-center"
              >
                לצביעה 🎨
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Coming Soon Section */}
      <section className="mt-16 text-center">
        <div className="card max-w-md mx-auto opacity-75">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="card-title">עוד דפי צביעה בדרך!</h3>
          <p className="card-text">
            בקרוב נוסיף דפי צביעה לכל הסיפורים בספרייה: טלי בענן הוורוד, הארנב הקטן, כפתור הזהב ועוד...
          </p>
        </div>
      </section>
    </main>
  );
}
