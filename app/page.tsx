import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow-200/25 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200/30 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>

      <section className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="text-center space-y-6 fade-in">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gold-700 drop-shadow-soft text-center">
            סיפורים של הלב
          </h1>
          <p className="text-base sm:text-lg text-gold-700/80 font-semibold tracking-wide text-center">
            מקום של דמיון, רוך וקסם
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
            מקום חם לסיפורים לילדים. בכל חודש מתווסף סיפור חדש ומרגש, לקריאה לפני השינה ולחלומות מתוקים.
          </p>
          <div className="flex gap-3 justify-center flex-wrap fade-in-delay">
            <Link href="/stories" className="btn btn-primary">לכל הסיפורים</Link>
            <Link href="/subscribe" className="btn btn-ghost">הצטרפות למנוי</Link>
          </div>
        </div>
      </section>

      <section className="bg-white/70 backdrop-blur-sm border-t border-gold-100/60 relative z-10">
        <div className="container mx-auto px-4 py-12 grid sm:grid-cols-3 gap-6">
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="card-title">סיפור חדש כל חודש</h3>
            <p className="card-text">תוכן מקורי ומאויר באהבה, שתמיד ישמח את הילדים.</p>
          </div>
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="card-title">שפה חמה ומכבדת</h3>
            <p className="card-text">ערכים של חברות, אומץ, חמלה ודמיון פורח.</p>
          </div>
          <div className="card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="card-title">מנוי חודשי נוח</h3>
            <p className="card-text">גישה לכל הספרייה במחיר חודשי קטן.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
