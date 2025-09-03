"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white border border-gold-100 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gold-700">התקן את האפליקציה</h3>
          <p className="text-sm text-muted-foreground mt-1">
            הוסף למסך הבית לקריאה נוחה יותר
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleInstall}
            className="btn btn-primary text-sm px-3 py-1"
          >
            התקן
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="btn btn-ghost text-sm px-3 py-1"
          >
            לא עכשיו
          </button>
        </div>
      </div>
    </div>
  );
}
