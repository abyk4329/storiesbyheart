import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const heebo = Heebo({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "סיפורים של הלב",
  description: "אתר סיפורים לילדים - סיפורים חדשים מדי חודש ומנוי חודשי",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased bg-gradient-soft text-foreground`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
