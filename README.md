# SportSee — Dashboard Sportif

Application React/TypeScript affichant le tableau de bord de profil utilisateur de SportSee : activité quotidienne, sessions moyennes, performances et score journalier, le tout via des graphiques interactifs.

---

## Prérequis

- **Node.js** v18+
- **npm** v9+
- *(Optionnel)* Le [backend SportSee](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) pour utiliser les données réelles

---

## Installation

```bash
# Cloner le repo
git clone <url-du-repo>
cd sport-see

# Installer les dépendances
npm install
```

---

## Lancer le projet

```bash
npm run dev
```

L'application est accessible sur **http://localhost:5173**.

Par défaut, elle tourne en **mode mock** : les données sont simulées localement, aucun backend n'est nécessaire.

---

## Mode mock vs API réelle

La variable d'environnement `VITE_USE_MOCK` dans le fichier `.env` contrôle la source des données :

| Valeur | Comportement |
|---|---|
| `true` *(défaut)* | Données mockées locales — pas besoin du backend |
| `false` | Appels HTTP vers `http://localhost:3000` — le backend doit tourner |

Pour basculer sur l'API réelle :
1. Lancer le backend sur le port `3000`
2. Modifier `.env` : `VITE_USE_MOCK=false`

---

## Structure du projet

```
src/
├── types/          # Interfaces TypeScript (données brutes API + normalisées)
├── mocks/          # Données mockées pour les users 12 et 18
├── services/
│   ├── api.ts          # Couche fetch — tous les appels HTTP centralisés ici
│   └── dataModels.ts   # Adapteurs de normalisation des données API
├── hooks/
│   └── useUserData.ts  # Custom hook agrégeant les 4 endpoints
├── components/
│   ├── layout/     # Header et Sidebar fixes
│   ├── ui/         # Composants réutilisables (KeyDataCard, LoadingSpinner)
│   └── charts/     # Les 4 graphiques Recharts
├── pages/
│   └── ProfilePage.tsx  # Route /user/:id
└── App.tsx         # Routing React Router
```

---

## Graphiques

| Composant | Type | Données affichées |
|---|---|---|
| `ActivityBarChart` | Barres | Poids (kg) et calories brûlées par jour |
| `AverageSessionsChart` | Courbe | Durée moyenne des sessions par jour de semaine |
| `PerformanceRadarChart` | Radar | 6 métriques : cardio, énergie, endurance, force, vitesse, intensité |
| `ScoreRadialChart` | Arc SVG | Score du jour en pourcentage de l'objectif |

---

## Technologies

- **React 19** + **TypeScript**
- **Vite** — bundler et serveur de dev
- **React Router v6** — navigation
- **Recharts** — graphiques
- **Tailwind CSS v3** — styles
- **Lucide React** — icônes
- **Fetch API** — appels HTTP (pas d'Axios)

---

## Utilisateurs disponibles

L'API (et les mocks) contiennent des données pour deux profils :

| ID | Prénom |
|---|---|
| `12` | Karl |
| `18` | Cecilia |

Navigation directe : `/user/12` ou `/user/18`  
Un sélecteur est également disponible en haut à droite de l'interface.
