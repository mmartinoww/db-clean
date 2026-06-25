import Link from "next/link";
import {
  IconArrow,
  IconAttic,
  IconCheck,
  IconJeep,
  IconMower,
  IconPhone,
  IconSofa,
  IconTree,
  IconTruck,
  IconYard
} from "../icons";
import { getEquipmentByIds } from "../lib/equipment";
import type { ServiceDefinition, ServiceIcon } from "../lib/services";
import { getRelatedServices, getServicePath } from "../lib/services";
import { business, mapEmbedSrc, withTrailingSlash } from "../lib/site";
import { RevealOnScroll } from "../reveal-on-scroll";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { JsonLdScripts } from "./json-ld-scripts";
import { buildServicePageSchemas } from "../lib/json-ld";

const iconMap = {
  attic: IconAttic,
  tree: IconTree,
  yard: IconYard,
  truck: IconTruck,
  sofa: IconSofa,
  jeep: IconJeep,
  mower: IconMower
} satisfies Record<ServiceIcon, typeof IconAttic>;

type ServicePageProps = {
  service: ServiceDefinition;
};

export function ServicePage({ service }: ServicePageProps) {
  const Icon = iconMap[service.icon];
  const equipment = getEquipmentByIds(service.equipmentIds);
  const related = getRelatedServices(service.relatedSlugs);
  const schemas = buildServicePageSchemas(service);
  const { sections } = service;

  return (
    <>
      <div className="service-intro">
        <SiteHeader brandName={business.name} phoneHref={business.phoneHref} phoneLabel={business.phone} />

        <section className="service-hero" aria-labelledby="service-hero-heading">
          <div className="service-hero__glow" aria-hidden="true" />
          <div className="band__inner service-hero__inner">
            <div className="service-hero__content">
              <nav className="service-breadcrumb" aria-label="Навигационна пътека">
                <ol>
                  <li>
                    <Link href={withTrailingSlash("/")}>Начало</Link>
                  </li>
                  <li>
                    <Link href={withTrailingSlash("/#services")}>Услуги</Link>
                  </li>
                  <li aria-current="page">{service.title}</li>
                </ol>
              </nav>

              <p className="eyebrow service-hero__eyebrow">Услуга</p>
              <h1 id="service-hero-heading">{service.h1}</h1>
              <p className="service-hero__lead">{service.heroLead}</p>

              <ul className="service-hero__points" aria-label="Предимства на услугата">
                {service.heroPoints.map((point) => (
                  <li key={point}>
                    <IconCheck size={18} />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="cta-row">
                <a className="button button--primary" href={business.phoneHref}>
                  <IconPhone />
                  Обадете се
                </a>
                <a className="button button--ghost" href={business.viberHref}>
                  <img
                    className="button__brand-icon"
                    src="/icons/viber-logo-png.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Пратете снимки
                </a>
              </div>
            </div>

            <div className="service-hero__media">
              <img src={service.heroImage} alt={service.heroImageAlt} loading="eager" />
              {service.highlight ? (
                <span className="service-hero__badge">{service.highlight}</span>
              ) : null}
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero" aria-labelledby="service-about-heading">
          <div className="band__inner">
            <div className="service-about">
              <div className="service-about__copy">
                <h2 id="service-about-heading" className="eyebrow">
                  {sections.about.eyebrow}
                </h2>
                <p className="section-title">{service.introTitle}</p>
                {service.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="service-about__aside">
                <span className="service-about__icon" aria-hidden="true">
                  <Icon size={34} />
                </span>
                <p className="service-about__aside-title">{sections.about.asideTitle}</p>
                <p>{sections.about.asideText}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="service-includes-heading">
          <div className="band__inner">
            <div className="service-split">
              <div className="service-split__media">
                <img src={service.heroImage} alt={service.heroImageAlt} loading="lazy" />
              </div>
              <div className="service-split__content">
                <h2 id="service-includes-heading" className="eyebrow">
                  {sections.includes.eyebrow}
                </h2>
                <p className="section-title">{sections.includes.title}</p>
                <ul className="service-checklist">
                  {service.includes.map((item) => (
                    <li key={item}>
                      <span className="service-checklist__mark" aria-hidden="true">
                        <IconCheck size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {equipment.length > 0 ? (
          <section className="band band--light band--equipment" aria-labelledby="service-equipment-heading">
            <div className="band__inner">
              <div className="section-heading service-equipment__heading">
                <h2 id="service-equipment-heading" className="eyebrow">
                  {sections.equipment.eyebrow}
                </h2>
                <p className="section-title">{sections.equipment.title}</p>
                <p>{sections.equipment.intro}</p>
              </div>
              <div className="service-equipment__media">
                <img src="/big-bus.webp" alt={sections.equipment.title} loading="lazy" />
              </div>
            </div>
          </section>
        ) : null}

        <section className="band band--light-alt" aria-labelledby="service-process-heading">
          <div className="band__inner">
            <div className="service-process">
              <div className="service-process__intro">
                <h2 id="service-process-heading" className="eyebrow">
                  {sections.process.eyebrow}
                </h2>
                <p className="section-title">{sections.process.title}</p>
                <p>{sections.process.intro}</p>
              </div>
              <ol className="timeline timeline--service" aria-label="Стъпки на услугата">
                {service.process.map((step, i) => (
                  <li className="timeline-step" key={step}>
                    <span className="timeline-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="timeline-body">
                      <p>{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="band band--light" aria-labelledby="service-area-heading">
          <div className="band__inner">
            <div className="area-content">
              <h2 id="service-area-heading" className="eyebrow">
                {sections.area.eyebrow}
              </h2>
              <p className="section-title">{sections.area.title}</p>
              <p>{sections.area.text}</p>
              <div className="keyword-pills" aria-label="Свързани услуги и ключови думи">
                {service.keywordPills.map((pill) => (
                  <span className="keyword-pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="service-faq-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="service-faq-heading" className="eyebrow">
                {sections.faq.eyebrow}
              </h2>
              <p className="section-title">{sections.faq.title}</p>
            </div>
            <div className="faq-grid">
              {service.faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="band band--light" aria-labelledby="related-services-heading">
            <div className="band__inner">
              <div className="section-heading service-related__heading">
                <h2 id="related-services-heading" className="eyebrow">
                  {sections.related.eyebrow}
                </h2>
                <p className="section-title">{sections.related.title}</p>
              </div>
              <div className="service-related-grid">
                {related.map((item) => {
                  const RelatedIcon = iconMap[item.icon];
                  return (
                    <article className="service-card service-card--link" key={item.slug}>
                      <span className="service-card__icon" aria-hidden="true">
                        <RelatedIcon />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <Link className="service-card__link" href={getServicePath(item.slug)}>
                        Вижте услугата
                        <IconArrow size={16} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="band band--light-alt" aria-labelledby="service-cta-heading">
          <div className="band__inner">
            <div className="cta-panel">
              <h2 id="service-cta-heading" className="eyebrow">
                {sections.cta.eyebrow}
              </h2>
              <p className="section-title">{sections.cta.title}</p>
              <p>{sections.cta.text}</p>
              <div className="cta-row">
                <a className="button button--primary" href={business.phoneHref}>
                  <IconPhone />
                  Обадете се
                </a>
                <Link className="button button--ghost" href={withTrailingSlash("/#services")}>
                  Всички услуги
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter business={business} mapEmbedSrc={mapEmbedSrc} />
      <JsonLdScripts schemas={schemas} />
      <RevealOnScroll />
    </>
  );
}
