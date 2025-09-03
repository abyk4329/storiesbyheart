# סיפורים של הלב

אתר סיפורים לילדים, עם סיפור חדש כל חודש ומנוי חודשי.

## טכנולוגיות
- Next.js (App Router)
- TypeScript
- Tailwind CSS 4
 - קישור תשלום חיצוני (ללא אינטגרציה בקוד)
- פריסה ל-Vercel

## פיתוח מקומי
1. שכפלו קובץ env:
   - העתיקו `.env.local.example` ל- `.env.local` והשלימו ערכים.
2. התקנת חבילות:
   - `npm i`
3. הרצת שרת פיתוח:
   - `npm run dev`

## תשלום
- השתמשו בקישור תשלום חיצוני (למשל קישור תשלום של ספק/דף סליקה) והגדירו כמשתנה סביבה:
   - `NEXT_PUBLIC_PAYMENT_LINK`

## פריסה ל-Vercel
1. התחברו לחשבון Vercel.
2. Import GitHub repo של הפרויקט.
3. הגדירו Environment Variables כנ"ל.
4. פריסה אוטומטית תתחיל עם כל push ל-main.

## מבנה ראשי
- `app/page.tsx` – דף הבית
- `app/stories/page.tsx` – ספריית הסיפורים
- `app/subscribe/*` – תהליך מנוי (דף תשלום והצלחות/ביטול)
  
