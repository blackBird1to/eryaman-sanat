import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/eryaman-logo.png";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home", tr: "Anasayfa" },
  { to: "/about", label: "About", tr: "Hakkımızda" },
  { to: "/staff", label: "Staff", tr: "Kadromuz" },
  { to: "/courses", label: "Courses", tr: "Eğitimler" },
  { to: "/exhibitions", label: "Exhibitions", tr: "Sergiler" },
  { to: "/contact", label: "Contact", tr: "İletişim" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          fill="white"
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href="tel:+905052603267">📞 +90 505 260 32 67</a>
            <a href="tel:+905432623266">📞 +90 543 262 32 66</a>
            <a href="mailto:info@eryamansanat.com">✉️ info@eryamansanat.com</a>
          </div>
          <div className="topbar__right">
            <div className="topbar__social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topbar__social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <Link to="/contact" className="topbar__cta">
              {lang === "en" ? "Free Trial Lesson" : "Ücretsiz Deneme Dersi"}
            </Link>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo">
            <img src={logo} alt="Eryaman Sanat" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-main">Eryaman Sanat</span>
              <span className="navbar__logo-sub">Güzel Sanatlar Atölyesi</span>
            </div>
          </Link>

          <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`navbar__link ${location.pathname === link.to ? "navbar__link--active" : ""}`}
                >
                  {lang === "en" ? link.label : link.tr}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__right">
            <button className="lang-toggle" onClick={toggle}>
              <span className={lang === "en" ? "lang-toggle__active" : ""}>
                EN
              </span>
              <span className="lang-toggle__sep">|</span>
              <span className={lang === "tr" ? "lang-toggle__active" : ""}>
                TR
              </span>
            </button>
            <button
              className="navbar__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
