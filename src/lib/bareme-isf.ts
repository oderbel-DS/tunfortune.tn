// Barème ISF lu dans l'export du référentiel national de la plateforme TunFortune
// (npm run parametres-fiscaux -- exporter <annee> <fichier.json>, à déposer dans src/data/) :
// aucune valeur fiscale n'est recopiée à la main dans le site. Clé manquante ou de forme
// inattendue = erreur explicite, au build comme dans le navigateur, jamais une valeur devinée.
//
// Même calcul que appliquerBaremeIsf (libs/fiscal-fortune) : base arrondie au millime, puis
// taux du palier appliqué à la TOTALITÉ de la base (barème non marginal), impôt arrondi au
// millime, demi au-dessus. Montants en millimes (bigint) pour rester exacts.
import lignes from '../data/parametres-fiscaux-2026.json';

interface Taux {
  num: bigint;
  den: bigint;
  // Pourcentage lisible : « 0,5 % ».
  texte: string;
}

export interface BaremeIsf {
  annee: number;
  seuil: bigint;
  limitePalier: bigint;
  tauxPalier1: Taux;
  tauxPalier2: Taux;
  tauxAlertePreventive: Taux;
  perimetre: string;
}

export type Palier = 'NON_ASSUJETTI' | 'PALIER_1' | 'PALIER_2';

interface Ligne {
  annee: number;
  module: string;
  cle: string;
  valeur: Record<string, unknown>;
}

function valeur(cle: string, champ: string): string {
  const ligne = (lignes as Ligne[]).find((l) => l.module === 'ISF' && l.cle === cle);
  const v = ligne?.valeur[champ];
  if (typeof v !== 'string' || (champ !== 'perimetre' && !/^\d+(\.\d+)?$/.test(v))) {
    throw new Error(`Référentiel ISF du site : paramètre ${cle} manquant ou invalide (champ « ${champ} » attendu)`);
  }
  return v;
}

// « 5000000.000 » → 5000000000n millimes.
function versMillimes(decimal: string): bigint {
  const [entier, frac = ''] = decimal.split('.');
  if (frac.length > 3) throw new Error(`Montant au-delà du millime : ${decimal}`);
  return BigInt(entier) * 1000n + BigInt(frac.padEnd(3, '0'));
}

function versTaux(decimal: string): Taux {
  const [entier, frac = ''] = decimal.split('.');
  const den = 10n ** BigInt(frac.length);
  const pourcent = Number(decimal) * 100;
  return {
    num: BigInt(entier + frac),
    den,
    texte: `${pourcent.toLocaleString('fr-FR', { maximumFractionDigits: 4 })} %`,
  };
}

const anneesIsf = new Set((lignes as Ligne[]).filter((l) => l.module === 'ISF').map((l) => l.annee));
if (anneesIsf.size !== 1) {
  throw new Error(`Référentiel ISF du site : une seule année attendue, trouvé ${[...anneesIsf].join(', ') || 'aucune'}`);
}

export const BAREME_ISF: BaremeIsf = {
  annee: [...anneesIsf][0],
  seuil: versMillimes(valeur('ISF_SEUIL_ASSUJETTISSEMENT', 'montant')),
  limitePalier: versMillimes(valeur('ISF_LIMITE_PALIER', 'montant')),
  tauxPalier1: versTaux(valeur('ISF_TAUX_PALIER_1', 'taux')),
  tauxPalier2: versTaux(valeur('ISF_TAUX_PALIER_2', 'taux')),
  tauxAlertePreventive: versTaux(valeur('ISF_TAUX_ALERTE_PREVENTIVE', 'taux')),
  perimetre: valeur('ISF_PERIMETRE_ASSIETTE', 'perimetre'),
};

// Arrondi au millime, demi au-dessus, d'un montant positif exprimé en millimes × num / den.
function arrondi(millimes: bigint, num: bigint, den: bigint): bigint {
  return (millimes * num * 2n + den) / (2n * den);
}

export function appliquerBareme(base: bigint, b: BaremeIsf = BAREME_ISF): { palier: Palier; taux: Taux | null; impot: bigint } {
  if (base < b.seuil) return { palier: 'NON_ASSUJETTI', taux: null, impot: 0n };
  const tauxUnique = b.tauxPalier1.num * b.tauxPalier2.den === b.tauxPalier2.num * b.tauxPalier1.den;
  const palier: Palier = tauxUnique || base <= b.limitePalier ? 'PALIER_1' : 'PALIER_2';
  const taux = palier === 'PALIER_1' ? b.tauxPalier1 : b.tauxPalier2;
  return { palier, taux, impot: arrondi(base, taux.num, taux.den) };
}

// Seuil d'alerte préventive (90 % du seuil d'assujettissement dans le référentiel 2026).
export function seuilAlerte(b: BaremeIsf = BAREME_ISF): bigint {
  return arrondi(b.seuil, b.tauxAlertePreventive.num, b.tauxAlertePreventive.den);
}

// « 24 000 DT » ; les millimes ne s'affichent que s'il y en a.
export function formatDt(millimes: bigint): string {
  const dinars = millimes / 1000n;
  const reste = millimes % 1000n;
  const entier = Number(dinars).toLocaleString('fr-FR').replace(/ /g, ' ');
  return `${entier}${reste ? `,${String(reste).padStart(3, '0')}` : ''} DT`;
}

// « 3 millions de dinars » pour les montants ronds en millions, sinon formatDt.
export function formatMillions(millimes: bigint): string {
  const million = 1_000_000_000n;
  if (millimes % million !== 0n) return formatDt(millimes);
  const n = millimes / million;
  return `${n} million${n > 1n ? 's' : ''} de dinars`;
}
