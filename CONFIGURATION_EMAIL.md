# Configuration de l'envoi d'emails - Portfolio

## 🎯 État actuel

Le formulaire de contact fonctionne et affiche les messages dans la **console du serveur** (terminal où vous avez lancé `npm run dev`).

Quand quelqu'un envoie un message, vous verrez :
```
📧 ===== NOUVEAU MESSAGE DE CONTACT =====
👤 Nom: Jean Dupont
📨 Email: jean@example.com
💬 Message: Bonjour, je souhaite discuter d'un projet...
=========================================
```

## 📧 Pour recevoir les emails dans votre boîte mail

### Option 1 : Resend (Recommandé - Gratuit)

**Avantages :**
- 3000 emails gratuits par mois
- Configuration simple
- Fiable et rapide

**Installation :**

1. Créez un compte sur [https://resend.com](https://resend.com)

2. Obtenez votre API Key dans le dashboard

3. Installez le package :
```bash
npm install resend
```

4. Créez un fichier `.env.local` à la racine du projet :
```env
RESEND_API_KEY=re_votre_cle_api_ici
```

5. Décommentez le code Resend dans `app/api/contact/route.ts` (lignes 31-46)

6. Redémarrez le serveur : `npm run dev`

### Option 2 : Nodemailer avec Gmail

**Installation :**
```bash
npm install nodemailer
```

**Configuration dans `.env.local` :**
```env
GMAIL_USER=alexalix58@gmail.com
GMAIL_APP_PASSWORD=votre_mot_de_passe_application
```

**Note :** Vous devez créer un "mot de passe d'application" dans votre compte Google :
1. Allez dans votre compte Google
2. Sécurité > Validation en deux étapes (activez-la)
3. Mots de passe des applications > Créez un mot de passe

**Code à ajouter dans `app/api/contact/route.ts` :**
```typescript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'alexalix58@gmail.com',
  subject: `Nouveau message de ${name}`,
  html: `
    <h2>Nouveau message depuis votre portfolio</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});
```

### Option 3 : SendGrid

**Installation :**
```bash
npm install @sendgrid/mail
```

**Configuration :**
```env
SENDGRID_API_KEY=votre_cle_api
```

## 🧪 Test du formulaire

1. Lancez le serveur : `npm run dev`
2. Allez sur http://localhost:3000
3. Scrollez jusqu'à la section Contact
4. Remplissez et envoyez le formulaire
5. Regardez la console du terminal - vous verrez le message !

## 📝 Pour la production

Avant de déployer sur Vercel/Netlify :

1. Choisissez une option d'envoi d'email (Resend recommandé)
2. Configurez les variables d'environnement sur votre plateforme
3. Testez l'envoi en production

## 🔒 Sécurité

- ✅ Validation des données côté serveur
- ✅ Validation de l'email
- ✅ Variables d'environnement pour les clés API
- ✅ Protection contre les injections

## 💡 Recommandation

Pour un portfolio, **Resend** est le meilleur choix :
- Gratuit jusqu'à 3000 emails/mois
- Configuration en 5 minutes
- API moderne et simple
- Excellent pour Next.js

## 🆘 Besoin d'aide ?

Le formulaire fonctionne déjà ! Les messages s'affichent dans la console.
Pour recevoir les emails, suivez simplement l'Option 1 (Resend) ci-dessus.
