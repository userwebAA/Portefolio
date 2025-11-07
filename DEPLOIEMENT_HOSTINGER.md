# 🚀 Déploiement sur Hostinger

## 📋 Prérequis

Vous avez besoin de :
- Un compte Hostinger avec hébergement
- Votre nom de domaine configuré
- Accès SSH ou cPanel

## ⚠️ Important : Next.js sur Hostinger

Hostinger propose plusieurs types d'hébergement. Pour Next.js, vous avez **2 options** :

### Option 1 : Vercel (Recommandé - Gratuit et Simple) ✅

**Avantages :**
- ✅ Gratuit
- ✅ Optimisé pour Next.js
- ✅ Déploiement en 2 minutes
- ✅ SSL automatique
- ✅ Vous pouvez connecter votre domaine Hostinger

**C'est la meilleure solution pour Next.js !**

### Option 2 : Hostinger VPS/Cloud

**Nécessite :**
- Un VPS ou Cloud Hosting (pas l'hébergement web classique)
- Configuration manuelle de Node.js
- Plus complexe et coûteux

---

## 🎯 Solution Recommandée : Vercel + Domaine Hostinger

### Étape 1 : Créer un compte GitHub

1. Allez sur https://github.com
2. Créez un compte gratuit
3. Créez un nouveau repository "portfolio"

### Étape 2 : Pousser votre code sur GitHub

Dans le terminal de votre projet :

```bash
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio"

# Lier à GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Import Project"
4. Sélectionnez votre repository "portfolio"
5. Configurez les variables d'environnement :
   - Cliquez sur "Environment Variables"
   - Ajoutez :
     ```
     GMAIL_USER=alexalix58@gmail.com
     GMAIL_APP_PASSWORD=votre_mot_de_passe_application
     ```
6. Cliquez sur "Deploy"
7. Attendez 2-3 minutes ⏳

Votre site sera en ligne sur : `https://votre-portfolio.vercel.app`

### Étape 4 : Connecter votre domaine Hostinger

#### Dans Vercel :
1. Allez dans votre projet
2. Cliquez sur "Settings" > "Domains"
3. Ajoutez votre domaine (ex: `alexandrealix.com`)
4. Vercel vous donnera des enregistrements DNS à configurer

#### Dans Hostinger :
1. Connectez-vous à votre compte Hostinger
2. Allez dans "Domaines" > Sélectionnez votre domaine
3. Cliquez sur "DNS / Nameservers"
4. Ajoutez les enregistrements DNS fournis par Vercel :
   - Type : `A` ou `CNAME`
   - Nom : `@` (pour le domaine principal) ou `www`
   - Valeur : celle fournie par Vercel

5. Sauvegardez

**Attendez 24-48h** pour la propagation DNS (souvent plus rapide, 1-2h)

---

## 🔧 Alternative : Déploiement sur Hostinger VPS (Avancé)

Si vous avez un VPS Hostinger, voici les étapes :

### 1. Connexion SSH

```bash
ssh root@votre-ip-vps
```

### 2. Installation de Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Installation de PM2

```bash
sudo npm install -g pm2
```

### 4. Cloner votre projet

```bash
cd /var/www
git clone https://github.com/VOTRE_USERNAME/portfolio.git
cd portfolio
```

### 5. Installer les dépendances

```bash
npm install
```

### 6. Créer le fichier .env.local

```bash
nano .env.local
```

Ajoutez :
```env
GMAIL_USER=alexalix58@gmail.com
GMAIL_APP_PASSWORD=votre_mot_de_passe_application
```

### 7. Build du projet

```bash
npm run build
```

### 8. Démarrer avec PM2

```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### 9. Configurer Nginx

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Ajoutez :
```nginx
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez le site :
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 10. SSL avec Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com
```

---

## 📊 Comparaison des solutions

| Critère | Vercel | Hostinger VPS |
|---------|--------|---------------|
| Prix | Gratuit | ~5-10€/mois |
| Difficulté | ⭐ Facile | ⭐⭐⭐⭐ Difficile |
| Temps setup | 5 min | 1-2h |
| Maintenance | Aucune | Régulière |
| Performance | Excellente | Dépend config |
| SSL | Automatique | Manuel |
| Recommandé | ✅ OUI | Pour experts |

## 🎯 Ma Recommandation

**Utilisez Vercel** et connectez votre domaine Hostinger. C'est :
- Gratuit
- Simple
- Rapide
- Optimisé pour Next.js
- Maintenance zéro

Vous gardez votre domaine Hostinger, vous l'utilisez juste avec Vercel !

## 🆘 Besoin d'aide ?

Si vous choisissez Vercel, je peux vous guider étape par étape pour :
1. Créer le repository GitHub
2. Déployer sur Vercel
3. Connecter votre domaine Hostinger

Dites-moi quel est votre nom de domaine et je vous aide ! 🚀
