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
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const PHONE_DISPLAY = "+359 88 000 0000"; // TODO: заменете с реалния телефон
const PHONE_HREF = "tel:+359880000000"; // TODO: заменете с реалния телефон

const business = {
  name: "DB-Clean",
  city: "България",
  region: "цялата страна",
  addressLine: "Обслужваме клиенти в цялата страна",
  phone: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  email: "office@db-clean.bg", // TODO: заменете с реалния имейл
  facebookUrl: "https://www.facebook.com/", // TODO: заменете с реалната Facebook страница
  siteUrl: "https://db-clean.example.com", // TODO: заменете с реалния домейн
  description:
    "DB-Clean извършва почистване на тавани, мазета и обрасли дворове, рязане на опасни дървета, косене и извозване на отпадъци с голям бус. Достъп до труднодостъпни имоти с високопроходим джип."
};

const mapEmbedSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("България") +
  "&z=6&hl=bg&output=embed";

const services = [
  {
    icon: IconAttic,
    title: "Почистване на тавани и мазета",
    text: "Освобождаваме тавани, мазета и складови помещения от стари вещи и боклук. Възможно заплащане чрез извозените предмети.",
    highlight: "Плащане чрез извозените предмети"
  },
  {
    icon: IconTree,
    title: "Рязане на опасни дървета",
    text: "Сваляме сухи, наклонени и опасни дървета близо до сгради и жици — безопасно, с професионална резачка и техника."
  },
  {
    icon: IconYard,
    title: "Силно замърсени и обрасли дворове",
    text: "Разчистваме занемарени, обрасли с храсти и бурени дворове до чисто и проходимо пространство — храсторез, тримери и косачки."
  },
  {
    icon: IconTruck,
    title: "Извозване на отпадъци с голям бус",
    text: "Събираме и извозваме всичко почистено наведнъж с голям бус — без многократни курсове и без да чакате."
  },
  {
    icon: IconSofa,
    title: "Превоз на мебели при местене",
    text: "Помагаме при изнасяне и местене — внимателен превоз на мебели и обемисти вещи с подходяща техника."
  },
  {
    icon: IconJeep,
    title: "Достъп до труднодостъпни имоти",
    text: "Стигаме до парцели и къщи без асфалтиран път с високопроходим джип — там, където обикновен автомобил не може."
  },
  {
    icon: IconMower,
    title: "Косене и поддръжка на дворове",
    text: "Редовно или еднократно косене и поддръжка — тримери и косачки за спретнат двор през целия сезон."
  }
];

const equipment = [
  { icon: IconTruck, name: "Голям бус", note: "за извозване на отпадъци и мебели" },
  { icon: IconJeep, name: "Високопроходим джип", note: "достъп до труднодостъпни имоти" },
  { icon: IconYard, name: "Тримери и храсторез", note: "за храсти и обрасли площи" },
  { icon: IconMower, name: "Косачки", note: "косене и поддръжка на дворове" },
  { icon: IconTree, name: "Резачка за дърва", note: "рязане на опасни дървета" }
];

const benefits = [
  "Възможно заплащане чрез извозените предмети — изгодно при разчистване на тавани и мазета.",
  "Голям бус — цялото количество отпадъци се извозва наведнъж, без излишни курсове.",
  "Високопроходим джип — достигаме имоти без път, в които другите не влизат.",
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

function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      description: business.description,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      sameAs: [business.facebookUrl],
      areaServed: { "@type": "Country", name: "Bulgaria" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Почистване на имоти, дворове и извозване на отпадъци",
      serviceType: "Почистване и извозване",
      provider: {
        "@type": "LocalBusiness",
        name: business.name,
        telephone: business.phone,
        email: business.email,
        url: business.siteUrl
      },
      areaServed: "Bulgaria",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги на DB-Clean",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return schemas.map((schema, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ));
}

export default function Home() {
  return (
    <>
      <div className="hero-intro">
        <SiteHeader brandName={business.name} phoneHref={business.phoneHref} phoneLabel={business.phone} />

        {/* ── Hero — full-bleed image, gradient with negative space on the left ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__media" aria-hidden="true" />
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__container">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">Почистване · Рязане · Извозване</p>
              <h1 id="hero-heading">
                Разчистваме имоти, дворове и&nbsp;всичко по&nbsp;пътя
              </h1>
              <p className="hero__text">
                DB-Clean почиства тавани, мазета и обрасли дворове, реже опасни дървета,
                коси и извозва отпадъците с голям бус. Стигаме и до труднодостъпните имоти
                с високопроходим джип.
              </p>

              <ul className="hero__usp" aria-label="Защо DB-Clean">
                <li>
                  <IconCheck size={18} />
                  Възможно плащане чрез извозените предмети
                </li>
                <li>
                  <IconCheck size={18} />
                  Извозване наведнъж с голям бус
                </li>
                <li>
                  <IconCheck size={18} />
                  Достъп до имоти без път
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
                  <IconArrow size={18} />
                </a>
              </div>

              <dl className="trust-grid" aria-label="Предимства на DB-Clean">
                <div className="trust-item">
                  <dt><span className="trust-dt">Голям бус</span></dt>
                  <dd><span className="trust-dd">за извозване</span></dd>
                </div>
                <div className="trust-item">
                  <dt><span className="trust-dt">Джип 4x4</span></dt>
                  <dd><span className="trust-dd">труднодостъпни имоти</span></dd>
                </div>
                <div className="trust-item">
                  <dt><span className="trust-dt">Цялата страна</span></dt>
                  <dd><span className="trust-dd">на място при вас</span></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <main id="main-content">
        {/* ── Services ── */}
        <section className="band band--after-hero band--services-intro" id="services" aria-labelledby="services-heading">
          <div className="band__inner">
            <div className="section-heading">
              <p className="eyebrow">Услуги</p>
              <h2 id="services-heading">Една фирма за цялото разчистване</h2>
              <p>
                От почистване на тавани и обрасли дворове до рязане на опасни дървета,
                косене и извозване — DB-Clean покрива целия процес с собствена техника.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <span className="service-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    {service.highlight ? (
                      <span className="service-card__tag">{service.highlight}</span>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Equipment / Техника ── */}
        <section className="band band--equipment" id="equipment" aria-labelledby="equipment-heading">
          <div className="band__inner">
            <div className="section-heading">
              <p className="eyebrow">Техника</p>
              <h2 id="equipment-heading">Машините зад чистия резултат</h2>
              <p>
                Разполагаме със собствена техника за товарене, достъп и рязане — затова
                поемаме задачи, които други фирми отказват.
              </p>
            </div>
            <div className="equipment-grid">
              {equipment.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="equipment-card" key={item.name}>
                    <span className="equipment-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div className="equipment-card__body">
                      <h3>{item.name}</h3>
                      <p>{item.note}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Benefits / Why ── */}
        <section className="band band--elevated" aria-labelledby="why-heading">
          <div className="band__inner">
            <div className="split-layout">
              <div>
                <p className="eyebrow">Защо DB-Clean</p>
                <h2 id="why-heading">Повече свършена работа, по-малко главоболия</h2>
                <p className="split-layout__lead">
                  Една фирма с техника за всичко — разчистване, рязане, косене и извозване.
                </p>
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

        {/* ── Highlight: payment via items ── */}
        <section className="band band--offer" aria-labelledby="offer-heading">
          <div className="band__inner">
            <div className="offer-panel">
              <span className="offer-panel__icon" aria-hidden="true">
                <IconRecycle size={30} />
              </span>
              <div className="offer-panel__body">
                <p className="eyebrow">Изгодно за вас</p>
                <h2 id="offer-heading">Плащане чрез извозените предмети</h2>
                <p>
                  При разчистване на тавани и мазета често има вещи със стойност.
                  Приспадаме стойността им от цената — а в много случаи почистването
                  излиза без доплащане.
                </p>
              </div>
              <a className="button button--primary offer-panel__cta" href={business.phoneHref}>
                <IconPhone />
                Питайте за оглед
              </a>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="band band--dark" aria-labelledby="process-heading">
          <div className="band__inner">
            <div className="split-layout">
              <div>
                <p className="eyebrow">Процес</p>
                <h2 id="process-heading">Как протича разчистването</h2>
              </div>
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
          </div>
        </section>

        {/* ── Service area ── */}
        <section className="band band--area" aria-labelledby="area-heading">
          <div className="band__inner">
            <div className="area-content">
              <p className="eyebrow">Зона на обслужване</p>
              <h2 id="area-heading">На място в цялата страна</h2>
              <p>
                DB-Clean обслужва клиенти в цялата страна. С високопроходимия джип
                достигаме и имоти без асфалтиран път.
              </p>
              <div className="keyword-pills" aria-label="Свързани услуги">
                <span className="keyword-pill">почистване на тавани и мазета</span>
                <span className="keyword-pill">рязане на опасни дървета</span>
                <span className="keyword-pill">разчистване на дворове</span>
                <span className="keyword-pill">извозване на отпадъци</span>
                <span className="keyword-pill">косене на трева</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="band band--elevated" aria-labelledby="faq-heading">
          <div className="band__inner">
            <div className="section-heading">
              <p className="eyebrow">Въпроси</p>
              <h2 id="faq-heading">Преди да започнем работа</h2>
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

        {/* ── Final CTA ── */}
        <section className="band band--dark" aria-labelledby="cta-heading">
          <div className="band__inner">
            <div className="cta-panel">
              <p className="eyebrow">Готови за чисто?</p>
              <h2 id="cta-heading">Свържете се с DB-Clean</h2>
              <p>
                Опишете имота и задачата, изпратете снимка, ако помага. Ще получите бърз
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

      <JsonLd />
    </>
  );
}
