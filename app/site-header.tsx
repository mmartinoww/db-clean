"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { SiteLogo } from "./components/site-logo";
import { IconPhone } from "./icons";

type SiteHeaderProps = {
  brandName: string;
  phoneHref: string;
  phoneLabel: string;
};

const nav = [
  { href: "/#services", label: "Услуги" },
  { href: "/#equipment", label: "Техника" },
  { href: "/#process-heading", label: "Процес" },
  { href: "/#faq-heading", label: "Въпроси" },
  { href: "/#footer-heading", label: "Контакт" }
];

function IconMenu() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader({ brandName, phoneHref, phoneLabel }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const root = document.documentElement;
    if (!menuOpen) {
      document.body.classList.remove("site-menu-open");
      root.classList.remove("site-menu-open");
      return;
    }
    document.body.classList.add("site-menu-open");
    root.classList.add("site-menu-open");
    return () => {
      document.body.classList.remove("site-menu-open");
      root.classList.remove("site-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Затвори менюто"
          tabIndex={-1}
          onClick={closeMenu}
        />
      ) : null}
      <header className="site-header">
        <div className="site-header__sheen" aria-hidden="true" />
        <div className="site-header__cluster">
          <div className="site-header__shell">
            <Link href="/" className="site-header__brand" aria-label={brandName}>
              <SiteLogo alt={brandName} />
            </Link>

            <nav className="site-header__nav site-header__nav--desktop" aria-label="Основна навигация">
              <ul className="site-header__navList">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-header__navLink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="site-header__menuToggle"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>

            <a
              href={phoneHref}
              className="site-header__cta"
              aria-label={`Обадете се на ${phoneLabel}`}
            >
              <IconPhone size={18} />
              Обадете се
            </a>
          </div>

          <div
            id={panelId}
            className="site-header__mobilePanel"
            role="region"
            aria-label="Мобилна навигация"
            hidden={!menuOpen}
          >
            <nav aria-label="Основна навигация">
              <ul className="site-header__mobileNavList">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-header__mobileNavLink" onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={phoneHref}
              className="site-header__mobileCta"
              onClick={closeMenu}
              aria-label={`Обадете се на ${phoneLabel}`}
            >
              <IconPhone size={18} />
              Обадете се
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
