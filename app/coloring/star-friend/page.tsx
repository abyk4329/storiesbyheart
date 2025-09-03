import Link from "next/link";

export default function StarFriendColoring() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gold-100 p-4 print:hidden">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/coloring" className="btn btn-ghost">
            ← חזרה לדפי הצביעה
          </Link>
          <h1 className="text-2xl font-bold text-gold-700">הכוכב שמחפש חבר</h1>
          <button
            onClick={() => window.print()}
            className="btn btn-primary"
          >
            🖨️ הדפס
          </button>
        </div>
      </header>

      {/* Print Instructions */}
      <div className="container mx-auto px-4 py-6 print:hidden">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">📋 הוראות להדפסה:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• השתמשו בנייר לבן או צבעוני באיכות טובה</li>
            <li>• הדפיסו באיכות "גבוהה" או "צבע" אם זמין</li>
            <li>• צבעו בעיפרון צבעוני או טושים</li>
            <li>• שתפו את הציורים שלכם עם החברים!</li>
          </ul>
        </div>
      </div>

      {/* Story Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Story Header */}
          <div className="text-center mb-8 print:mb-4">
            <h1 className="text-4xl font-bold text-gold-700 mb-4 print:text-3xl">
              הכוכב שמחפש חבר ⭐
            </h1>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground print:hidden">
              <span>👶 גילאים: 3–7</span>
              <span>📖 סיפור עם דפי צביעה</span>
              <span>🎨 3 דפי צביעה</span>
            </div>
          </div>

          {/* Story Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8 print:bg-white print:p-4">
            <h2 className="text-xl font-semibold text-gold-700 mb-3">תקציר הסיפור:</h2>
            <p className="text-lg leading-relaxed mb-4">
              כוכב קטן בשמיים מרגיש בודד. הוא יוצא למסע בין כוכבים, ירחים ושמשות כדי למצוא חבר.
              בדרך הוא מגלה שכשהוא מאיר באהבה – הוא כבר מושך אליו חברים. בסוף הוא מגלה שחברות
              אמיתית מתחילה בלב פתוח ובאור פנימי.
            </p>
            <div className="bg-white/50 rounded p-4">
              <p className="font-semibold text-gold-700">💝 המסר המרכזי:</p>
              <p className="text-gold-800">האור שבפנים מושך אהבה מבחוץ. כשאנחנו מאירים מעצמנו, אנחנו תמיד מוקפים בחברים.</p>
            </div>
          </div>

          {/* Coloring Pages */}
          <div className="space-y-12">
            {/* Page 1 */}
            <div className="coloring-page">
              <h3 className="text-2xl font-bold text-center text-gold-700 mb-6 print:text-xl">
                דף צביעה 1: הכוכב הקטן ⭐
              </h3>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px] flex items-center justify-center print:border-none print:p-4">
                <div className="text-center">
                  <div className="text-8xl mb-4 print:text-6xl">⭐</div>
                  <p className="text-lg text-gray-600 print:text-base">
                    צבעו את הכוכב הקטן בצבעים שאתם אוהבים!
                  </p>
                  <p className="text-sm text-gray-500 mt-2 print:text-xs">
                    הוסיפו לו חיוך וקרני אור
                  </p>
                </div>
              </div>
            </div>

            {/* Page 2 */}
            <div className="coloring-page">
              <h3 className="text-2xl font-bold text-center text-gold-700 mb-6 print:text-xl">
                דף צביעה 2: השמיים המנצנצים 🌙
              </h3>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px] flex items-center justify-center print:border-none print:p-4">
                <div className="text-center">
                  <div className="text-8xl mb-4 print:text-6xl">🌙</div>
                  <p className="text-lg text-gray-600 print:text-base">
                    צבעו את הירח והכוכבים בשמיים
                  </p>
                  <p className="text-sm text-gray-500 mt-2 print:text-xs">
                    הוסיפו עננים וכוכבים נוספים
                  </p>
                </div>
              </div>
            </div>

            {/* Page 3 */}
            <div className="coloring-page">
              <h3 className="text-2xl font-bold text-center text-gold-700 mb-6 print:text-xl">
                דף צביעה 3: החברים החדשים 👫
              </h3>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px] flex items-center justify-center print:border-none print:p-4">
                <div className="text-center">
                  <div className="text-8xl mb-4 print:text-6xl">👫</div>
                  <p className="text-lg text-gray-600 print:text-base">
                    צבעו את הכוכב עם החברים החדשים שלו
                  </p>
                  <p className="text-sm text-gray-500 mt-2 print:text-xs">
                    ציירו עוד כוכבים וחברים מסביב
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text for Reading */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-lg p-6 print:bg-white print:p-4">
            <h3 className="text-xl font-semibold text-gold-700 mb-4">הסיפור המלא:</h3>
            <div className="prose prose-lg max-w-none text-right">
              <p className="mb-4">
                פעם, בשמיים הרחוקים, חי כוכב קטן וזוהר. הכוכב הזה היה הכי קטן מכל הכוכבים,
                והוא הרגיש קצת בודד. "אני רוצה חבר," אמר הכוכב לעצמו.
              </p>
              <p className="mb-4">
                יום אחד, החליט הכוכב לצאת למסע. הוא עף בין כוכבים גדולים, ירחים עגולים,
                ושמשות חמות. הוא שאל את כולם: "האם תרצו להיות החבר שלי?"
              </p>
              <p className="mb-4">
                אבל כשאף אחד לא ענה, הכוכב התחיל להאיר חזק יותר. הוא האיר באהבה גדולה,
                והאור שלו היה כל כך יפה וחם. ואז, פתאום, כוכבים אחרים התחילו להתקרב אליו.
              </p>
              <p className="mb-4">
                "היי!" אמרו הכוכבים החדשים. "אנחנו רוצים להיות החברים שלך!"
                והכוכב הבין שכשהוא מאיר באהבה, הוא מושך אליו חברים.
              </p>
              <p>
                מאז, הכוכב הקטן כבר לא בודד. הוא יודע שהאור שבפנים מושך אהבה מבחוץ,
                ושהחברות האמיתית מתחילה בלב פתוח.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pb-8 print:hidden">
            <Link href="/coloring" className="btn btn-primary mr-4">
              ← חזרה לדפי הצביעה
            </Link>
            <Link href="/stories" className="btn btn-ghost">
              לסיפורים נוספים 📚
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          .coloring-page {
            page-break-before: always;
            margin-top: 2rem;
          }
          .coloring-page:first-child {
            page-break-before: avoid;
          }
        }
      `}</style>
    </div>
  );
}
