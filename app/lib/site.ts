export const SITE_URL = "https://db-clean.com";

export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  if (path.startsWith("#")) return path;

  const hashIndex = path.indexOf("#");
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";

  if (pathname === "/") return `/${hash}`;

  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${normalized}${hash}`;
}
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
