import { withTrailingSlash } from "../site";
import { dostupTrudnodostapniImoti } from "./data/dostup-trudnodostapni-imoti-sofia-pernik";
import { izvozvaneOtpadaci } from "./data/izvozvane-otpadaci-sofia-pernik";
import { kosenePoddrzhkaDvorove } from "./data/kosene-poddrzhka-dvorove-sofia-pernik";
import { pochistvaneTavaniMazeta } from "./data/pochistvane-tavani-mazeta-sofia-pernik";
import { prevozMebeli } from "./data/prevoz-mebeli-sofia-pernik";
import { razchistvaneDvorove } from "./data/razchistvane-dvorove-sofia-pernik";
import { ryazaneOpasniDyrveta } from "./data/ryazane-opasni-dyrveta-sofia-pernik";
import type { ServiceDefinition, ServiceFaq, ServiceIcon, ServicePageSections } from "./types";

export type { ServiceDefinition, ServiceFaq, ServiceIcon, ServicePageSections };

export const services: ServiceDefinition[] = [
  pochistvaneTavaniMazeta,
  ryazaneOpasniDyrveta,
  razchistvaneDvorove,
  izvozvaneOtpadaci,
  prevozMebeli,
  dostupTrudnodostapniImoti,
  kosenePoddrzhkaDvorove
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
