import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const assistant = Assistant({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "סיפורים של הלב",
  description: "אתר סיפורים לילדים - סיפורים חדשים מדי חודש ומנוי חודשי",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} antialiased bg-gradient-soft text-foreground`}>
  <Header />
  {children}
  <Footer />
      </body>
    </html>
  );
}
