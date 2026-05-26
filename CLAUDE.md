# gsaconsulting-website — Fichier maître Claude

## Projet
Site vitrine GSA Consulting P23
URL : https://gsaconsultingp23.com
Repo GitHub : angouyag/gsaconsulting-website
Déployé sur Vercel (compte greg-s-projects8)
Domaine acheté sur Namecheap : gsaconsultingp23.com

## Pages déployées
- / : page d'accueil (10 sections, 6 solutions)
- /a-propos : Greg Stéphane Angouya (parcours, conviction, solutions)
- /livre : "Devenez Expert en Comptabilité Fournisseurs" (photos + vidéo)
- /formations : catalogue formations professionnelles
- /smartauditprocess : redirection vers smartauditprocess.vercel.app
- /contact : formulaire mailto + 3 moyens de contact

## Médias
- public/livre/ : photo_livre1-5.jpg + video_livre.mp4
- public/Photo/ : photo professionnelle de Greg

## Design system
- Fond : #0d0e10, Cards : #16181c, Bordures : #2a2d35
- Orange : #E8711A, Vert : #34d399
- Fonts : Syne (titres), DM Mono (accents)
- Styles dans globals.css uniquement — jamais de balises <style> dans le JSX
- Composants partagés : Navbar.tsx, Footer.tsx, FadeIn.tsx, ScrollToTop.tsx, Breadcrumb.tsx, EmailCapture.tsx

## Améliorations premium livrées
- Animations scroll FadeIn (IntersectionObserver)
- Bouton retour haut ScrollToTop
- Fil d'ariane Breadcrumb
- Pop-up capture email (localStorage gsa_email_popup_closed)
- Compteur scarcité formations
- SEO : sitemap.ts, robots.ts, JSON-LD schema.org

## Contexte business
- Cabinet : GSA Consulting P23 — Greg Stéphane Angouya
- 20+ ans multinationales pétrolières : Maurel & Prom Gabon, TotalEnergies EP Gabon, Perenco Oil & Gas Gabon
- Master Audit & Contrôle de Gestion
- Citation : "Ce qui n'est pas structuré n'existe pas. Ce qui n'est pas mesuré ne s'améliore pas."

## Projets à venir (nouveaux repos)
- ACHILLE : plateforme trajectoires professionnelles et financières
- SmartInvoiceProcess : pilotage cycle fournisseurs
- PROCÉDIA : structuration procédures internes

## Règles importantes
- Auteur commits : toujours angouyag (git config user.name "angouyag")
- Pas de balises <style> dans le JSX — tout dans globals.css
- Utiliser <img> standard (pas next/image) pour les médias locaux
