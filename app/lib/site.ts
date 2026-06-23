export const SITE_URL = "https://db-clean.example.com"; // TODO: replace with real domain

export const PHONE_DISPLAY = "+359 88 000 0000"; // TODO: replace with real phone
export const PHONE_HREF = "tel:+359880000000";
export const VIBER_HREF = "viber://chat?number=359880000000";

export const business = {
  name: "DB-Clean",
  city: "София, Перник и околията",
  region: "цялата страна",
  addressLine: "Обслужваме клиенти в София, Перник и околията",
  phone: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  viberHref: VIBER_HREF,
  email: "office@db-clean.bg", // TODO: replace with real email
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
