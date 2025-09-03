# סיפורים של הלב

אתר סיפורים לילדים, עם סיפור חדש כל חודש ומנוי חודשי.

## טכנולוגיות
- Next.js (App Router)
- TypeScript
- Tailwind CSS 4
- Stripe תשלומים (Checkout)
- פריסה ל-Vercel

## פיתוח מקומי
1. שכפלו קובץ env:
   - העתיקו `.env.local.example` ל- `.env.local` והשלימו ערכים.
2. התקנת חבילות:
   - `npm i`
3. הרצת שרת פיתוח:
   - `npm run dev`

## Stripe
- הגדירו ב-Vercel את המשתנים:
  - `STRIPE_SECRET_KEY` מ-Stripe Dashboard
  - `STRIPE_PRICE_ID` של המחיר החודשי (Recurring)
  - `NEXT_PUBLIC_APP_URL` (למשל https://storiesbyheart.vercel.app)

## פריסה ל-Vercel
1. התחברו לחשבון Vercel.
2. Import GitHub repo של הפרויקט.
3. הגדירו Environment Variables כנ"ל.
4. פריסה אוטומטית תתחיל עם כל push ל-main.

## מבנה ראשי
- `app/page.tsx` – דף הבית
- `app/stories/page.tsx` – ספריית הסיפורים
- `app/subscribe/*` – תהליך מנוי (דף תשלום והצלחות/ביטול)
- `app/api/checkout/route.ts` – יצירת Checkout Session ב-Stripe
