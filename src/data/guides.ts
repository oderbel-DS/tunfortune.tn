// Guides publiés sous /guides/. Un guide n'est proposé aux moteurs de recherche (sitemap, pas de
// noindex) qu'une fois relu par un expert-comptable : renseigner alors `relecture`.
export interface Guide {
  slug: string;
  titre: string;
  resume: string;
  // Date de la dernière mise à jour du contenu (AAAA-MM-JJ).
  majLe: string;
  relecture: { par: string; le: string } | null;
}

export const GUIDES: Guide[] = [
  {
    slug: 'isf-qui-est-concerne',
    titre: "ISF en Tunisie : qui est concerné et comment se calcule l'impôt",
    resume: "Seuil d'assujettissement, patrimoine net au 1er janvier, barème à deux paliers et effet de seuil, résidents et non-résidents, patrimoine des enfants mineurs.",
    majLe: '2026-10-24',
    relecture: null,
  },
  {
    slug: 'biens-exoneres-isf',
    titre: "Biens exonérés de l'ISF : ce que prévoit la note commune n°13/2026",
    resume: "Résidence principale, biens affectés à l'activité, participations d'au moins 50 %, véhicules de 12 CV au plus, comptes d'épargne : les exonérations et leurs conditions.",
    majLe: '2026-10-24',
    relecture: null,
  },
  {
    slug: 'dettes-deductibles-isf',
    titre: "Dettes déductibles de l'ISF : les règles et les pièges",
    resume: "Quelles dettes viennent en diminution du patrimoine, pour quel montant, et pourquoi une garantie donnée au profit d'une société n'est jamais déductible.",
    majLe: '2026-10-24',
    relecture: null,
  },
];

export const guideIndexable = (g: Guide) => g.relecture !== null;
