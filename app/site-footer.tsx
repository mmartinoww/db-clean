import { IconFacebook, IconMail, IconPhone, IconPin } from "./icons";
export type FooterBusiness = {
  name: string;
  city: string;
  addressLine: string;
  phone: string;
  phoneHref: string;
  email: string;
  facebookUrl: string;
};

type SiteFooterProps = {
  business: FooterBusiness;
  mapEmbedSrc: string;
};

export function SiteFooter({ business, mapEmbedSrc }: SiteFooterProps) {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <p className="eyebrow site-footer__colLabel">Контакт</p>
          <div className="site-footer__panel">
            <h2 id="footer-heading" className="site-footer__title">
              {business.name}
            </h2>
            <div className="site-footer__location">
              <span className="site-footer__pin" aria-hidden="true">
                <IconPin size={18} />
              </span>
              <address className="site-footer__address">{business.addressLine}</address>
            </div>

            <ul className="site-footer__channels">
              <li>
                <a href={business.phoneHref} className="site-footer__channel">
                  <span className="site-footer__iconGlow" aria-hidden="true">
                    <span className="site-footer__icon">
                      <IconPhone />
                    </span>
                  </span>
                  <span className="site-footer__channelBody">
                    <span className="site-footer__channelLabel">Телефон</span>
                    <span className="site-footer__channelValue">{business.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="site-footer__channel">
                  <span className="site-footer__iconGlow" aria-hidden="true">
                    <span className="site-footer__icon">
                      <IconMail />
                    </span>
                  </span>
                  <span className="site-footer__channelBody">
                    <span className="site-footer__channelLabel">Имейл</span>
                    <span className="site-footer__channelValue">{business.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.facebookUrl}
                  className="site-footer__channel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="site-footer__iconGlow" aria-hidden="true">
                    <span className="site-footer__icon">
                      <IconFacebook />
                    </span>
                  </span>
                  <span className="site-footer__channelBody">
                    <span className="site-footer__channelLabel">Facebook</span>
                    <span className="site-footer__channelValue">Следете ни онлайн</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="eyebrow site-footer__colLabel">Местоположение</p>
          <div className="site-footer__mapWrap">
            <iframe
              className="site-footer__map"
              title={`Зона на обслужване — ${business.name}, ${business.city}`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <span>
          © {new Date().getFullYear()} {business.name}. Почистване и извозване — {business.city}.
        </span>
      </div>
    </footer>
  );
}
