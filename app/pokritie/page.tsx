import type { Metadata } from "next";
import Link from "next/link";
import { JsonLdScripts } from "../components/json-ld-scripts";
import { IconPhone } from "../icons";
import { getServicePath, services } from "../lib/services";
import { buildPokritieSchemas } from "../lib/json-ld";
import { business, mapEmbedSrc, SITE_URL, withTrailingSlash } from "../lib/site";
import { RevealOnScroll } from "../reveal-on-scroll";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

const pageUrl = `${SITE_URL}${withTrailingSlash("/pokritie")}`;

export const metadata: Metadata = {
  title: "Зона на покритие — София, Перник и околността",
  description:
    "DB-Clean обслужва имоти в София, Перник и всички прилежащи квартали и села. Почистване, разчистване, рязане на дървета и извозване с голям бус и джип 4x4.",
  alternates: {
    canonical: pageUrl,
    languages: { "bg-BG": pageUrl }
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: pageUrl,
    siteName: "DB-Clean",
    title: "Зона на покритие | DB-Clean — София и Перник",
    description:
      "DB-Clean извършва почистване, разчистване и извозване в София, Перник и всички прилежащи квартали, общини и села."
  },
  robots: { index: true, follow: true }
};

const sofiAreas = [
  "Витоша",
  "Студентски град",
  "Люлин",
  "Надежда",
  "Подуяне",
  "Лозенец",
  "Панчарево",
  "Бистрица",
  "Банкя",
  "Нови Искър",
  "Бояна",
  "Симеоново",
  "Драгалевци",
  "Малинова долина",
  "Горна баня",
  "Княжево",
  "Красна поляна",
  "Триадица",
  "Оборище",
  "Сердика"
];

const pernikAreas = [
  "Перник — централна градска част",
  "Батановци",
  "Рударци",
  "Кралев дол",
  "Църква",
  "Чуйпетлово",
  "Боснек",
  "Студена",
  "Брезник (и прилежащи с.)",
  "Радомир (и прилежащи с.)"
];

const nearbyAreas = [
  "Божурище",
  "Костинброд",
  "Сливница",
  "Петрич (Соф. обл.)",
  "Горна Малина",
  "Долна баня",
  "Самоков (при заявка)",
  "Ихтиман (при заявка)"
];

export default function PokritePage() {
  const schemas = buildPokritieSchemas();
  return (
    <>
      <div className="service-intro">
        <SiteHeader
          brandName={business.name}
          phoneHref={business.phoneHref}
          phoneLabel={business.phone}
        />

        <section className="legal-hero" aria-labelledby="pokritie-heading">
          <div className="legal-hero__glow" aria-hidden="true" />
          <div className="band__inner legal-hero__inner">
            <nav className="service-breadcrumb" aria-label="Навигационна пътека">
              <ol>
                <li>
                  <Link href={withTrailingSlash("/")}>Начало</Link>
                </li>
                <li aria-current="page">Покритие</li>
              </ol>
            </nav>
            <p className="eyebrow legal-hero__eyebrow">Зона на обслужване</p>
            <h1 id="pokritie-heading">Покритие — София, Перник и Околността</h1>
            <p className="legal-hero__updated">
              Обслужваме клиенти в София, Перник и прилежащите квартали, общини и села
            </p>
          </div>
        </section>
      </div>

      <main id="main-content">
        <section className="band band--light band--after-hero" aria-labelledby="coverage-intro-heading">
          <div className="band__inner">
            <div className="legal-page__content">
              <p className="legal-page__intro">
                <strong>DB-Clean</strong> извършва почистване на тавани и мазета, разчистване на
                дворове, рязане на опасни дървета, косене и извозване с голям бус в{" "}
                <strong>София, Перник</strong> и всички прилежащи квартали и общини. С
                високопроходим джип 4x4 стигаме и до имоти без асфалтиран път.
              </p>

              <h2 id="coverage-intro-heading">Квартали и райони в София</h2>
              <p>
                Обслужваме всички административни райони на Столична община, с акцент върху
                следните квартали и части на града:
              </p>
              <ul className="pokritie-list">
                {sofiAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>

              <h2>Перник и Пернишка област</h2>
              <p>
                Редовно работим в град Перник и прилежащите общини и села:
              </p>
              <ul className="pokritie-list">
                {pernikAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>

              <h2>Близки до София и Перник общини</h2>
              <p>
                При достатъчен обем работа приемаме задачи и в следните по-отдалечени точки:
              </p>
              <ul className="pokritie-list">
                {nearbyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>

              <h2>Труднодостъпни имоти с джип 4x4</h2>
              <p>
                За разлика от много фирми, DB-Clean разполага с <strong>високопроходим джип
                4x4</strong>. Стигаме до имоти и парцели без асфалтиран или черен път — кал,
                камъни и наклон не са пречка. Всички услуги — почистване, рязане, косене и
                извозване — се изпълняват директно на трудно достъпния терен.
              </p>

              <div className="pokritie-cta">
                <a
                  className="phone-cta"
                  href={business.phoneHref}
                  aria-label={`Обадете се на ${business.phone}`}
                >
                  <IconPhone size={18} />
                  Обадете се за оглед
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="band band--light-alt" aria-labelledby="coverage-services-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="coverage-services-heading" className="eyebrow">Услуги в София и Перник</h2>
              <p className="section-title">Какво можем да свършим за вас</p>
            </div>
            <div className="keyword-pills" aria-label="Услуги по зона">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={getServicePath(service.slug)}
                  className="keyword-pill keyword-pill--link"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="band band--light" aria-labelledby="pokritie-faq-heading">
          <div className="band__inner">
            <div className="section-heading">
              <h2 id="pokritie-faq-heading" className="eyebrow">Въпроси за зоната</h2>
              <p className="section-title">Обслужваме ли вашия район?</p>
            </div>
            <div className="faq-grid">
              <article className="faq-item">
                <h3>Работите ли само в София и Перник?</h3>
                <p>
                  Основната ни зона е София и Перник, но приемаме задачи и в близките общини
                  — Костинброд, Сливница, Ихтиман. За по-отдалечени адреси — свържете се с нас,
                  за да уточним.
                </p>
              </article>
              <article className="faq-item">
                <h3>Стигате ли до имот без асфалтиран път?</h3>
                <p>
                  Да. Разполагаме с джип 4x4 и стигаме до дворове и парцели в планински или
                  селски райони, до които обикновен автомобил не може да влезе.
                </p>
              </article>
              <article className="faq-item">
                <h3>Има ли допълнително таксуване за по-отдалечени адреси?</h3>
                <p>
                  При имоти извън София и Перник може да се включи транспортна добавка.
                  Уточняваме точната цена при огледа или по телефона преди записване.
                </p>
              </article>
              <article className="faq-item">
                <h3>Как да разбера дали обслужвате моя адрес?</h3>
                <p>
                  Просто се обадете или изпратете адреса чрез Viber. Ще потвърдим достъпността
                  и ще дадем ориентировъчна цена за услугата.
                </p>
              </article>
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
