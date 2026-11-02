import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Icon, { BrandIcon } from "./Icons.jsx";
import { profile } from "../data/content.js";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/lab", label: "Lab" },
  { to: "/publications", label: "Publications" },
  // { to: '/projects', label: 'Projects' },
  { to: "/awards", label: "Awards" },
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || null;
    } catch {
      return null;
    }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
    try {
      theme
        ? localStorage.setItem("theme", theme)
        : localStorage.removeItem("theme");
    } catch {
      /* ignore */
    }
  }, [theme]);
  const isDark = theme
    ? theme === "dark"
    : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return [isDark, () => setTheme(isDark ? "light" : "dark")];
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, toggle] = useTheme();
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
      >
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" aria-label="Rediat Terefe — home">
            <span className="nav__mark">RT</span>
            <span className="nav__name">Rediat Terefe</span>
          </Link>

          <nav className="nav__links" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className="nav__link">
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <Icon name={isDark ? "sun" : "moon"} size={18} />
            </button>
            <Link to="/contact" className="btn btn--primary nav__cta">
              Contact
            </Link>
            <button
              className="icon-btn nav__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav__drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="container">
          {[...NAV, { to: "/contact", label: "Contact" }].map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className="nav__drawer-link"
              style={{ "--i": i }}
              tabIndex={open ? 0 : -1}
            >
              <span className="mono">0{i + 1}</span>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__intro">
            <Link to="/" className="nav__brand">
              <span className="nav__mark">RT</span>
              <span className="nav__name">{profile.fullName}</span>
            </Link>
            <p>
              Ph.D. researcher in Chemical Engineering at IIT Roorkee, working
              on catalytic routes from biomass to fuels and chemicals.
            </p>
            <div className="footer__socials">
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="icon-btn"
                >
                  <BrandIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer__title">Explore</h4>
            <ul className="footer__list">
              {NAV.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer__title">Get in touch</h4>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              {profile.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>{p.display}</a>
                </li>
              ))}
              <li className="muted">IIT Roorkee, India</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {profile.fullName}. All rights
            reserved.
          </span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="link-arrow"
          >
            Back to top <Icon name="arrowUpRight" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
