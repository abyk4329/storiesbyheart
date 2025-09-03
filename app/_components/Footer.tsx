import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <nav aria-label="קישורי תחתית" className="footer-nav">
          <Link className="footer-link" href="/">דף הבית</Link>
          <Link className="footer-link" href="/stories">סיפורים</Link>
          <Link className="footer-link" href="/subscribe">מנוי</Link>
          <a className="footer-link" href="mailto:contact@storiesbyheart.example">צור קשר</a>
        </nav>
        <p className="footer-copy">© {year} סיפורים של הלב</p>
      </div>
    </footer>
  );
}
