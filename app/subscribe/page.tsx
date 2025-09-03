"use client";

import { useState } from "react";

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const paymentLink = process.env.NEXT_PUBLIC_PAYMENT_LINK || "#";
  const handleCheckout = () => {
    setLoading(true);
    window.location.href = paymentLink;
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gold-700 mb-6">מנוי חודשי</h1>
      <p className="text-muted-foreground mb-8">גישה לכל הסיפורים, סיפור חדש בכל חודש, ביטול בכל עת.</p>
      <div className="max-w-md">
        <div className="card">
          <div className="mb-4">
            <div className="text-2xl font-bold">₪19<span className="text-base font-semibold">/חודש</span></div>
          </div>
          <ul className="card-text mb-6" style={{ listStyle: 'disc', paddingInlineStart: '1.25rem' }}>
            <li>גישה לכל הספרייה</li>
            <li>סיפור חדש כל חודש</li>
            <li>קריאה בכל מכשיר</li>
          </ul>
          <button className="btn btn-primary w-full" onClick={handleCheckout} disabled={loading || paymentLink === "#"}>
            {paymentLink === "#" ? "הוסיפו קישור תשלום" : loading ? "מעביר לתשלום..." : "להצטרפות"}
          </button>
        </div>
      </div>
    </main>
  );
}
