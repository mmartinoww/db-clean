import { withTrailingSlash } from "../site";
import { dostupTrudnodostupniImoti } from "./data/dostup-trudnodostupni-imoti-sofia-pernik";
import { izvozvaneOtpadaci } from "./data/izvozvane-otpadaci-sofia-pernik";
import { kosenePoddrujkaDvorove } from "./data/kosene-poddrujka-dvorove-sofia-pernik";
import { pochistvaneTavaniMazeta } from "./data/pochistvane-tavani-mazeta-sofia-pernik";
import { prevozMebeli } from "./data/prevoz-mebeli-sofia-pernik";
import { razchistvaneDvorove } from "./data/razchistvane-dvorove-sofia-pernik";
import { rqzaneOpasniDurveta } from "./data/rqzane-opasni-durveta-sofia-pernik";
import type { ServiceDefinition, ServiceFaq, ServiceIcon, ServicePageSections } from "./types";

export type { ServiceDefinition, ServiceFaq, ServiceIcon, ServicePageSections };

export const services: ServiceDefinition[] = [
  pochistvaneTavaniMazeta,
  rqzaneOpasniDurveta,
  razchistvaneDvorove,
  izvozvaneOtpadaci,
  prevozMebeli,
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
