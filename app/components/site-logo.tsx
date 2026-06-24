import { LOGO_SRC } from "../lib/site";

type SiteLogoProps = {
  alt: string;
};

export function SiteLogo({ alt }: SiteLogoProps) {
  return (
    <img
      className="site-logo site-logo--header"
      src={LOGO_SRC}
      alt={alt}
      width={200}
      height={56}
      decoding="async"
    />
  );
}
