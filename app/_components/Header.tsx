import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="ראשי">
        <Link href="/" className="brand">סיפורים של הלב</Link>
        <div className="nav-links">
          <Link className="nav-link" href="/">דף הבית</Link>
          <Link className="nav-link" href="/stories">סיפורים</Link>
          <Link className="nav-link" href="/coloring">דפי צביעה 🎨</Link>
          <Link className="nav-link" href="/about">על הפרויקט</Link>
          <Link className="nav-link" href="/subscribe">מנוי</Link>
        </div>
      </nav>
    </header>
  );
}
