# Portfolio Moderne

Portfolio professionnel créé avec les dernières technologies web et des effets de transition élégants.

## 🎨 Design

- **Palette de couleurs** : 80% Noir, 15% Blanc, 5% Doré
- **Style** : Moderne, minimaliste et élégant
- **Animations** : Transitions fluides avec Framer Motion

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Inter (Google Fonts)

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Structure du projet

```
portfolio/
├── app/
│   ├── globals.css       # Styles globaux et utilitaires
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/
│   ├── Loader.tsx        # Écran de chargement animé
│   ├── Navbar.tsx        # Barre de navigation
│   ├── Hero.tsx          # Section héro
│   ├── About.tsx         # Section à propos
│   ├── Skills.tsx        # Section compétences
│   ├── Projects.tsx      # Section projets
│   ├── Contact.tsx       # Section contact
│   └── Footer.tsx        # Pied de page
├── public/               # Fichiers statiques
└── package.json          # Dépendances
```

## ✨ Fonctionnalités

- ✅ Écran de chargement animé
- ✅ Navigation responsive avec menu mobile
- ✅ Animations de scroll et transitions fluides
- ✅ Section héro avec effets de particules
- ✅ Présentation des compétences avec barres de progression
- ✅ Galerie de projets avec filtres
- ✅ Formulaire de contact
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Optimisé pour les performances
- ✅ Scrollbar personnalisée

## 🎯 Personnalisation

### Modifier les informations personnelles

1. **Hero Section** (`components/Hero.tsx`) :
   - Changez le nom et le titre
   - Modifiez la description
   - Ajoutez vos liens sociaux

2. **About Section** (`components/About.tsx`) :
   - Personnalisez votre présentation
   - Ajustez les features

3. **Skills Section** (`components/Skills.tsx`) :
   - Ajoutez/modifiez vos compétences
   - Ajustez les niveaux de progression

4. **Projects Section** (`components/Projects.tsx`) :
   - Ajoutez vos projets
   - Modifiez les images et descriptions
   - Ajoutez les liens GitHub et démo

5. **Contact Section** (`components/Contact.tsx`) :
   - Mettez à jour vos informations de contact
   - Configurez le formulaire de contact

## 🎨 Couleurs personnalisées

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    black: "#0a0a0a",  // 80%
    white: "#f5f5f5",  // 15%
    gold: "#d4af37",   // 5%
  },
}
```

## 📱 Responsive

Le portfolio est entièrement responsive et optimisé pour :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm run build
```

Puis déployez sur [Vercel](https://vercel.com)

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

MIT License - Libre d'utilisation pour vos projets personnels et commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

Créé avec ❤️ et Next.js
