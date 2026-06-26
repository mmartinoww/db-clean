import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** Old service slugs → current slugs (301 for Google + bookmarks). */
const legacyServiceSlugRedirects = [
  ["dostup-trudnodostapni-imoti-sofia-pernik", "dostup-trudnodostupni-imoti-sofia-pernik"],
  ["kosene-poddrzhka-dvorove-sofia-pernik", "kosene-poddrujka-dvorove-sofia-pernik"],
  ["ryazane-opasni-dyrveta-sofia-pernik", "rqzane-opasni-durveta-sofia-pernik"]
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  turbopack: {
    root: projectRoot
  },
  async redirects() {
    return legacyServiceSlugRedirects.flatMap(([from, to]) => [
      {
        source: `/uslugi/${from}`,
        destination: `/uslugi/${to}/`,
        permanent: true
      },
      {
        source: `/uslugi/${from}/`,
        destination: `/uslugi/${to}/`,
        permanent: true
      }
    ]);
  }
};

export default nextConfig;
