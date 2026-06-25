import Link from "next/link";
import {
  IconArrow,
  IconAttic,
  IconCheck,
  IconJeep,
  IconMower,
  IconPhone,
  IconRecycle,
  IconSofa,
  IconTree,
  IconTruck,
  IconYard
} from "./icons";
import { JsonLdScripts } from "./components/json-ld-scripts";
import { equipment, type EquipmentItem } from "./lib/equipment";
import { buildHomePageSchemas } from "./lib/json-ld";
import { getServicePath, services } from "./lib/services";
import type { ServiceIcon } from "./lib/services";
import { business, mapEmbedSrc } from "./lib/site";
import { RevealOnScroll } from "./reveal-on-scroll";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const featuredEquipment = equipment.slice(0, 2);
const toolEquipment = equipment.slice(2, -2);
const bottomFeaturedEquipment = equipment.slice(-2);

function EquipmentCard({ item }: { item: EquipmentItem }) {
  return (
    <article className="equipment-card">
      <div className="equipment-card__media">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="equipment-card__body">
        <h3>{item.name}</h3>
        <p>{item.note}</p>
      </div>
    </article>
  );
}

const iconMap = {
  attic: IconAttic,
  tree: IconTree,
  yard: IconYard,
  truck: IconTruck,
  sofa: IconSofa,
  jeep: IconJeep,
  mower: IconMower
} satisfies Record<ServiceIcon, typeof IconAttic>;

const stats = [
  { value: "25+", label: "почистени имота" },
  { value: "80+", label: "тона извозени отпадъци" },
  { value: "24ч", label: "бърза реакция" },
  { value: "100%", label: "доволни клиенти" }
];

const benefits = [
  "Възможно заплащане чрез извозените предмети — изгодно при разчистване на тавани и мазета.",
  "Голям бус — цялото количество отпадъци се извозва наведнъж, без излишни курсове. Така цената е най-ниска!",
  "Високопроходим джип - достигаме имоти без път, където другите фирми не влизат.",
  "Пълна услуга — от рязане и косене до товарене и извозване, без да наемате няколко фирми."
];

const process = [
  "Свържете се с нас и опишете имота, задачата и достъпа до него.",
  "Получавате оглед и ориентировъчна цена — включително вариант за заплащане чрез извозените вещи.",
  "Идваме с подходящата техника — бус, джип и инструменти за конкретната задача.",
  "Почистваме, нарязваме и косим, след което извозваме всичко и оставяме имота чист."
];

const faqs = [
  {
    question: "Какво означава „заплащане чрез извозените предмети“?",
    answer:
      "При разчистване на тавани и мазета често има вещи със стойност. Можем да приспаднем стойността им от цената на услугата, а понякога почистването излиза без доплащане. Уточняваме това при огледа."
  },
  {
    question: "Режете ли опасни и големи дървета?",
    answer:
      "Да. Сваляме сухи, наклонени и опасни дървета, включително близо до сгради и огради, с професионална резачка и подходяща техника."
  },
  {
    question: "Можете ли да стигнете до имот без асфалтиран път?",
    answer:
      "Да. Разполагаме с високопроходим джип и стигаме до труднодостъпни парцели и къщи, до които обикновен автомобил или камион не може да влезе."
  },
  {
    question: "Извозвате ли всичко след почистването?",
    answer:
      "Да. С големия бус събираме и извозваме целия отпадък наведнъж — строителни остатъци, стари мебели, клони и битови вещи."
  },
  {
    question: "Поемате ли само косене и поддръжка на двор?",
    answer:
      "Да. Можем да дойдем еднократно или редовно за косене, разчистване на бурени и поддръжка на двора с тримери и косачки."
  }
];

export default function Home() {
  const [featuredService, ...otherServices] = services;
  const FeaturedIcon = iconMap[featuredService.icon];
  const schemas = buildHomePageSchemas({ faqs, services });

  return (
    <>
      <div className="hero-intro">
        <SiteHeader brandName={business.name} phoneHref={business.phoneHref} phoneLabel={business.phone} />

        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__media" aria-hidden="true" />
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__particles" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => (
              <span className="hero__particle" key={index} />
            ))}
          </div>
          <div className="hero__container">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">Почистване · Рязане · Извозване</p>
              <h1 id="hero-heading">
                Почистване на имоти и извозване на отпадъци - София и Перник
              </h1>
              <p className="hero__text">
                DB-Clean разчиства тавани, мазета и терени, коси и поддържа дворове, реже опасни дървета,
                и извозва отпадъците с голям бус. Стигаме и до труднодостъпни имоти с високопроходим джип.
              </p>

              <ul className="hero__usp" aria-label="Защо DB-Clean">
                <li>
                  <IconCheck size={18} />
                  Плащане чрез извозените предмети
                </li>
                <li>
                  <IconCheck size={18} />
                  Извозване на много отпадъци наведнъж
                </li>
                <li>
                  <IconCheck size={18} />
                  Достъп до труднодостъпни имоти
                </li>
              </ul>

              <div className="cta-row" aria-label="Основно действие">
                <a
                  className="button button--primary"
                  href={business.phoneHref}
                  aria-label={`Обадете се на ${business.phone}`}
                >
                  <IconPhone />
                  Обадете се
                </a>
                <a className="button button--ghost" href="#services">
                  Вижте услугите
                  <span className="button__levitate" aria-hidden="true">
                    <IconArrow size={18} />
                  </span>
                </a>
              </div>

              <dl className="trust-grid" aria-label="Предимства на DB-Clean">
                <div className="trust-item">
                  <dt><span className="trust-dt">Голям бус</span></dt>
                  <dd><span className="trust-dd">за извозване на отпадъци</span></dd>
                </div>
                <div className="trust-item">
                  <dt><span className="trust-dt">Джип 4x4</span></dt>
                  <dd><span className="trust-dd">за труднодостъпни имоти</span></dd>
                </div>
                <div className="trust-item">
                  <dt><span className="trust-dt">Поддържаме чисто</span></dt>
                  <dd><span className="trust-dd">в София, Перник и околията</span></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero band--services-intro" id="services" aria-labelledby="services-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="services-heading" className="eyebrow">Услуги</h2>
              <p className="section-title">Една фирма за цялото разчистване</p>
              <p>
                От почистване на тавани и обрасли дворове до рязане на опасни дървета,
                косене и извозване - DB-Clean покрива целия процес със собствена техника.
              </p>
            </div>
            <div className="services-layout">
              <article className="service-card service-card--featured service-card--link">
                <span className="service-card__icon" aria-hidden="true">
                  <FeaturedIcon size={30} />
                </span>
                <div className="service-card__content">
                  <h3>{featuredService.title}</h3>
                  <p className="mb-0">{featuredService.text}</p>
                  <div className="service-card__footer">
                    {featuredService.highlight ? (
                      <span className="service-card__tag">{featuredService.highlight}</span>
                    ) : null}
                    <Link className="service-card__link" href={getServicePath(featuredService.slug)}>
                      Вижте услугата
                      <IconArrow size={16} />
                    </Link>
                  </div>
                </div>
              </article>
              <div className="services-grid services-grid--rest">
                {otherServices.map((service) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <article className="service-card service-card--link" key={service.slug}>
                      <span className="service-card__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      {service.highlight ? (
                        <span className="service-card__tag">{service.highlight}</span>
                      ) : null}
                      <Link className="service-card__link" href={getServicePath(service.slug)}>
                        Вижте услугата
                        <IconArrow size={16} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light-alt band--equipment" id="equipment" aria-labelledby="equipment-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="equipment-heading" className="eyebrow">Техника</h2>
              <p className="section-title">Машините зад чистия резултат</p>
              <p>
                Разполагаме със собствена техника за товарене, достъп и рязане - затова
                поемаме задачи, които други фирми отказват.
              </p>
            </div>
            <div className="equipment-layout">
              <div className="equipment-grid equipment-grid--featured">
                {featuredEquipment.map((item) => (
                  <EquipmentCard item={item} key={item.id} />
                ))}
              </div>
              <div className="equipment-grid equipment-grid--tools">
                {toolEquipment.map((item) => (
                  <EquipmentCard item={item} key={item.id} />
                ))}
              </div>
              <div className="equipment-grid equipment-grid--featured">
                {bottomFeaturedEquipment.map((item) => (
                  <EquipmentCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light" aria-labelledby="why-heading">
          <div className="band__inner">
            <div className="split-layout">
              <div className="split-layout__col">
                <h2 id="why-heading" className="eyebrow">Защо DB-Clean</h2>
                <p className="section-title">Повече свършена работа, по-малко главоболия</p>
                <p className="split-layout__lead">
                  Една фирма с техника за всичко — разчистване, рязане, косене и извозване.
                </p>
                <ul className="stat-cards" aria-label="Резултати от DB-Clean">
                  {stats.map((stat) => (
                    <li className="stat-card" key={stat.label}>
                      <strong className="stat-card__value">{stat.value}</strong>
                      <span className="stat-card__label">{stat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="benefit-rows">
                {benefits.map((benefit) => (
                  <li className="benefit-row" key={benefit}>
                    <span className="benefit-check" aria-hidden="true">
                      <IconCheck size={16} />
                    </span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="offer-heading">
          <div className="band__inner">
            <div className="offer-panel">
              <span className="offer-panel__icon" aria-hidden="true">
                <IconRecycle size={30} />
              </span>
              <div className="offer-panel__body">
                <h2 id="offer-heading" className="eyebrow">Изгодно за вас</h2>
                <p className="section-title">Плащане чрез извозените предмети</p>
                <p>
                  При разчистване на тавани и мазета често има вещи със стойност.
                  Приспадаме стойността им от цената — а в много случаи почистването
                  излиза без доплащане.
                </p>
              </div>
              <div className="offer-panel__actions">
                <a className="button button--primary" href={business.phoneHref}>
                  <IconPhone />
                  Резервирайте оглед
                </a>
                <a className="button button--ghost" href={business.viberHref}>
                  <img className="button__brand-icon" src="/icons/viber-logo-png.png" alt="" width={20} height={20} />
                  Пратете снимки
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light" aria-labelledby="process-heading">
          <div className="band__inner">
            <div className="process-layout">
              <div className="process-content">
                <h2 id="process-heading" className="eyebrow">Процес</h2>
                <p className="section-title">Как протича разчистването</p>
                <ol className="timeline" aria-label="Стъпки на услугата">
                  {process.map((step, i) => (
                    <li className="timeline-step" key={step}>
                      <span className="timeline-num" aria-hidden="true">{i + 1}</span>
                      <div className="timeline-body">
                        <p>{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="process-image" aria-hidden="true">
                <img src="/image-clean-yard.webp" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="area-heading">
          <div className="band__inner">
            <div className="area-content">
              <h2 id="area-heading" className="eyebrow">Зона на обслужване</h2>
              <p className="section-title">На място в София, Перник и околията</p>
              <p>
                DB-Clean обслужва клиенти в район София и Перник. С високопроходимия ни джип
                достигаме и имоти без асфалтиран път.
              </p>
              <div className="keyword-pills" aria-label="Свързани услуги">
                {services.map((service) => (
                  <Link className="keyword-pill keyword-pill--link" href={getServicePath(service.slug)} key={service.slug}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light" aria-labelledby="faq-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="faq-heading" className="eyebrow">Въпроси</h2>
              <p className="section-title">Преди да започнем работа</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="cta-heading">
          <div className="band__inner">
            <div className="cta-panel">
              <h2 id="cta-heading" className="eyebrow">Готови да видите резултата?</h2>
              <p className="section-title">Свържете се с DB-Clean!</p>
              <p>
                Опишете имота и задачата и изпратете снимки. Ще получите бърз
                оглед и ясна цена — включително вариант за плащане чрез извозените вещи.
              </p>
              <div className="cta-row">
                <a
                  className="button button--primary"
                  href={business.phoneHref}
                  aria-label={`Обадете се на ${business.phone}`}
                >
                  <IconPhone />
                  Обадете се
                </a>
                <a
                  className="button button--ghost"
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook страница
                </a>
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
