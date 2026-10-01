# Site vitrine TunFortune

Site statique Astro, une page d'accueil orientée « demande de démo », une page de confidentialité et une 404.
Coût d'exploitation : le nom de domaine uniquement.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## À compléter avant la mise en ligne

1. **Clé Web3Forms** dans `src/config.ts` : créer une clé gratuite sur https://web3forms.com avec l'adresse qui doit recevoir les demandes.
2. **Page confidentialité** (`src/pages/confidentialite.astro`) : remplacer les passages entre crochets (raison sociale, adresse, matricule fiscal, date, durée de conservation).
3. **Textes** : relire la page d'accueil, notamment le paragraphe de présentation du fondateur, le délai de rappel annoncé après envoi du formulaire (`src/components/PilotForm.astro`) et le nom du programme pilote.
4. **Aperçu produit** (`src/components/Marquee         bandeau de texte défilant
src/components/ModuleCard      carte de module du carrousel (illustrations fictives)
5. **Domaine** : si le domaine change de `tunfortune.com`, le modifier dans `astro.config.mjs`, `src/config.ts` et `public/robots.txt`.

## Mise en ligne gratuite sur Cloudflare Pages

1. Pousser ce dossier dans un dépôt GitHub (privé possible).
2. Cloudflare, Workers & Pages, Create, Pages, connecter le dépôt.
3. Framework preset : Astro. Build command : `npm run build`. Output directory : `dist`.
4. Custom domains : ajouter `tunfortune.com` (et `www`).
5. Chaque `git push` redéploie automatiquement.

## Services gratuits associés

- **Email** : Cloudflare Email Routing pour rediriger `contact@tunfortune.com` vers votre boîte actuelle.
- **Statistiques** : Cloudflare Web Analytics (sans cookie, rien à ajouter au bandeau).

## Structure

```
src/config.ts                  nom, email, clé du formulaire
src/layouts/Base.astro         en-tête, pied de page, balises SEO
src/components/Marquee         bandeau de texte défilant
src/components/ModuleCard      carte de module du carrousel (illustrations fictives)
src/components/PilotForm       formulaire de demande de démo
src/pages/index.astro          page d'accueil
src/pages/confidentialite.astro
src/pages/404.astro
scripts/apercu.py             génère un aperçu autonome en un seul fichier HTML (après npm run build)
```
