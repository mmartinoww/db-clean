"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".service-card",
  ".equipment-card",
  ".service-equipment__media",
  ".benefit-row",
  ".stat-card",
  ".offer-panel",
  ".process-image",
  ".timeline-step",
  ".area-content",
  ".keyword-pill",
  ".faq-item",
  ".cta-panel",
  ".site-footer__panel",
  ".site-footer__mapWrap",
  ".service-hero__content",
  ".service-hero__media",
  ".service-about__copy",
  ".service-about__aside",
  ".service-checklist > li",
  ".service-split__media",
  ".service-process__intro",
  ".service-related-grid .service-card",
  ".split-layout__col"
].join(",");

export function RevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    if (!elements.length) return;

    document.documentElement.classList.add("reveal-ready");

    const staggerGroups = new Map<Element, number>();
    elements.forEach((element) => {
      element.classList.add("reveal-item");

      const parent = element.parentElement;
      const index = parent ? staggerGroups.get(parent) ?? 0 : 0;
      element.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 70}ms`);
      if (parent) staggerGroups.set(parent, index + 1);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px 15% 0px",
        threshold: 0
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      elements.forEach((element) => {
        element.classList.remove("reveal-item", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
