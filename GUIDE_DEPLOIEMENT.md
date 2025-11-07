# 🚀 Déploiement de votre portfolio sur aia-developpement.com

## Étape 1 : Préparer le code pour GitHub

### 1.1 Vérifier que .gitignore est correct

Le fichier `.gitignore` doit contenir (déjà fait) :
```
.env.local
node_modules/
.next/
```

### 1.2 Initialiser Git et pousser sur GitHub

Ouvrez le terminal dans votre projet et exécutez :

```bash
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Portfolio Alexandre Alix - Initial commit"
```

## Étape 2 : Créer un repository GitHub

1. Allez sur **https://github.com**
2. Connectez-vous ou créez un compte
3. Cliquez sur le **+** en haut à droite > **New repository**
4. Nom du repository : `portfolio` ou `aia-developpement`
5. Laissez **Public** ou **Private** (au choix)
6. **NE COCHEZ PAS** "Initialize with README"
7. Cliquez sur **Create repository**

### 2.1 Lier votre projet au repository

GitHub vous donnera des commandes. Copiez votre nom d'utilisateur et exécutez :

```bash
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Entrez vos identifiants GitHub si demandé.

## Étape 3 : Déployer sur Vercel

### 3.1 Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **Sign Up**
3. Choisissez **Continue with GitHub**
4. Autorisez Vercel à accéder à vos repositories

### 3.2 Importer votre projet

1. Sur le dashboard Vercel, cliquez sur **Add New** > **Project**
2. Sélectionnez votre repository **portfolio**
3. Vercel détecte automatiquement Next.js ✅

### 3.3 Configurer les variables d'environnement

**IMPORTANT** : Avant de déployer, ajoutez vos variables :

1. Cliquez sur **Environment Variables**
2. Ajoutez :
   - **Name** : `GMAIL_USER`
   - **Value** : `alexalix58@gmail.com`
   - Cliquez sur **Add**

3. Ajoutez :
   - **Name** : `GMAIL_APP_PASSWORD`
   - **Value** : `votre_mot_de_passe_application_gmail` (celui de .env.local)
   - Cliquez sur **Add**

### 3.4 Déployer

1. Cliquez sur **Deploy**
2. Attendez 2-3 minutes ⏳
3. Votre site sera en ligne sur : `https://portfolio-xxx.vercel.app`

## Étape 4 : Connecter votre domaine aia-developpement.com

### 4.1 Dans Vercel

1. Allez dans votre projet déployé
2. Cliquez sur **Settings** (en haut)
3. Cliquez sur **Domains** (menu de gauche)
4. Dans le champ, tapez : `aia-developpement.com`
5. Cliquez sur **Add**
6. Vercel vous demandera de configurer les DNS

Vercel vous donnera quelque chose comme :
```
Type: A
Name: @
Value: 76.76.21.21 (exemple)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.2 Dans Hostinger

1. Connectez-vous à **https://hpanel.hostinger.com**
2. Allez dans **Domaines**
3. Cliquez sur **aia-developpement.com**
4. Cliquez sur **DNS / Nameservers**
5. Cliquez sur **Gérer les enregistrements DNS**

### 4.3 Configurer les DNS

**Supprimez les anciens enregistrements A et CNAME** (s'ils existent)

**Ajoutez les nouveaux** (ceux fournis par Vercel) :

1. Cliquez sur **Ajouter un enregistrement**
   - Type : `A`
   - Nom : `@`
   - Pointe vers : `76.76.21.21` (utilisez la valeur donnée par Vercel)
   - TTL : `3600`
   - Cliquez sur **Ajouter**

2. Cliquez sur **Ajouter un enregistrement**
   - Type : `CNAME`
   - Nom : `www`
   - Pointe vers : `cname.vercel-dns.com` (utilisez la valeur donnée par Vercel)
   - TTL : `3600`
   - Cliquez sur **Ajouter**

3. **Sauvegardez**

### 4.4 Attendre la propagation DNS

- **Temps d'attente** : 5 minutes à 48 heures (généralement 1-2 heures)
- Vous pouvez vérifier sur : https://dnschecker.org

## Étape 5 : Vérification

Une fois la propagation terminée :

1. Allez sur **https://aia-developpement.com**
2. Votre portfolio devrait s'afficher ! 🎉
3. SSL (https) est automatique avec Vercel

## 🔄 Mises à jour futures

Pour mettre à jour votre site :

```bash
# Faites vos modifications
git add .
git commit -m "Description des changements"
git push
```

Vercel redéploiera automatiquement en 2 minutes ! ✨

## ✅ Checklist finale

- [ ] Code poussé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] Variables d'environnement configurées
- [ ] Domaine ajouté dans Vercel
- [ ] DNS configurés dans Hostinger
- [ ] Site accessible sur aia-developpement.com

## 🆘 Problèmes courants

### Le site ne s'affiche pas après 24h
→ Vérifiez que les DNS dans Hostinger correspondent exactement à ceux de Vercel

### Le formulaire ne fonctionne pas
→ Vérifiez que les variables d'environnement sont bien configurées dans Vercel

### Erreur 404
→ Attendez encore un peu pour la propagation DNS

## 📞 Support

Si vous avez des questions pendant le déploiement, je suis là pour vous aider ! 🚀
