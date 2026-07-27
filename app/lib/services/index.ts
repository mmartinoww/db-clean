import { withTrailingSlash } from "../site";
import { dulbokoInteriornoPochistvaneDoma } from "./data/dulboko-interiorno-pochistvane-doma-sofia-pernik";
import { dostupTrudnodostupniImoti } from "./data/dostup-trudnodostupni-imoti-sofia-pernik";
import { izvozvaneOtpadaci } from "./data/izvozvane-otpadaci-sofia-pernik";
import { kosenePoddrujkaDvorove } from "./data/kosene-poddrujka-dvorove-sofia-pernik";
import { pochistvaneTavaniMazeta } from "./data/pochistvane-tavani-mazeta-sofia-pernik";
import { prevozSglobqvaneMebeli } from "./data/prevoz-sglobqvane-mebeli-sofia-pernik";
import { razchistvaneDvorove } from "./data/razchistvane-dvorove-sofia-pernik";
import { remontniDeynosti } from "./data/remontni-deynosti-sofia-pernik";
import { rqzaneOpasniDurveta } from "./data/rqzane-opasni-durveta-sofia-pernik";
import type { ServiceDefinition, ServiceFaq, ServiceFeatureSection, ServiceHighlightVariant, ServiceIcon, ServicePageSections } from "./types";

export type {
  ServiceDefinition,
  ServiceFaq,
  ServiceFeatureSection,
  ServiceHighlightVariant,
  ServiceIcon,
  ServicePageSections
};

export const services: ServiceDefinition[] = [
  remontniDeynosti,
  pochistvaneTavaniMazeta,
  dulbokoInteriornoPochistvaneDoma,
  rqzaneOpasniDurveta,
  razchistvaneDvorove,
  izvozvaneOtpadaci,
  prevozSglobqvaneMebeli,
  dostupTrudnodostupniImoti,
  kosenePoddrujkaDvorove
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceDefinition[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceDefinition => Boolean(s));
}

export function getServicePath(slug: string): string {
  return withTrailingSlash(`/uslugi/${slug}`);
}
