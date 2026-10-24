// Réglages du site — à compléter avant la mise en ligne.
export const SITE = {
  name: 'TunFortune',
  url: 'https://tunfortune.com',
  email: 'contact@tunfortune.com',
  // Clé gratuite à obtenir sur https://web3forms.com (envoyée par email).
  web3formsKey: '8c1e8580-6a42-4a1b-887f-71c10c0d0a5e',
  description:
    "Logiciel pour cabinets d'expertise comptable : simulation ISF et IRPP, estimation immobilière par comparaison de marché et déclaration ISF au format officiel (article 88, loi de finances 2026).",
  // Prochain fait générateur de l'ISF : le patrimoine est apprécié au 1er janvier de l'année d'imposition.
  // Le bandeau d'échéance et la case correspondante du formulaire disparaissent d'eux-mêmes une fois la date passée.
  echeanceIsf: '2027-01-01',
  // Jeton Cloudflare Web Analytics (mesure d'audience sans cookie). Vide : aucune mesure.
  cfAnalyticsToken: '',
};
