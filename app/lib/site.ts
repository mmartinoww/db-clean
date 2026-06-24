export const SITE_URL = "https://db-clean.example.com"; // TODO: replace with real domain
export const LOGO_SRC = "/identity/db-logo.webp";
export const OG_IMAGE_SRC = "/identity/og-img.webp";

export const PHONE_DISPLAY = "+359 894 334 177";
export const PHONE_HREF = "tel:+359894334177";
export const VIBER_HREF = "viber://chat?number=359894334177";

export const business = {
  name: "DB-Clean",
  city: "София, Перник и околията",
  region: "цялата страна",
  addressLine: "Обслужваме клиенти в София, Перник и околията",
  phone: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  viberHref: VIBER_HREF,
  email: "db.clean.office@gmail.com",
  facebookUrl: "https://www.facebook.com/", // TODO: replace with real Facebook page
  siteUrl: SITE_URL,
  description:
    "DB-Clean извършва почистване на тавани, мазета и обрасли дворове, рязане на опасни дървета, косене и извозване на отпадъци с голям бус. Достъп до труднодостъпни имоти с високопроходим джип."
};

export const mapEmbedSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("България") +
  "&z=6&hl=bg&output=embed";

export const BUSINESS_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
