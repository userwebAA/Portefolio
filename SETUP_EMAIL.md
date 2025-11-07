# 📧 Configuration de l'envoi d'emails

## ⚡ Configuration rapide (5 minutes)

### Étape 1 : Créer un compte Resend

1. Allez sur **https://resend.com**
2. Cliquez sur **"Sign Up"** (gratuit)
3. Créez votre compte avec votre email

### Étape 2 : Obtenir votre API Key

1. Une fois connecté, allez dans **"API Keys"** dans le menu
2. Cliquez sur **"Create API Key"**
3. Donnez-lui un nom (ex: "Portfolio")
4. Sélectionnez **"Full Access"**
5. Cliquez sur **"Create"**
6. **Copiez la clé** (elle commence par `re_...`)

### Étape 3 : Configurer votre projet

1. **Créez un fichier `.env.local`** à la racine de votre projet :
   ```
   Portfolio/
   ├── app/
   ├── components/
   ├── .env.local  ← Créez ce fichier ici
   └── package.json
   ```

2. **Ajoutez votre clé API** dans `.env.local` :
   ```env
   RESEND_API_KEY=re_votre_cle_copiee_ici
   ```

3. **Redémarrez le serveur** :
   - Arrêtez le serveur (Ctrl+C dans le terminal)
   - Relancez : `npm run dev`

### Étape 4 : Tester !

1. Allez sur http://localhost:3000
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. **Vérifiez votre boîte mail** : alexalix58@gmail.com

## ✅ Vérification

Dans le terminal, vous devriez voir :
```
📧 ===== NOUVEAU MESSAGE DE CONTACT =====
👤 Nom: Test
📨 Email: test@example.com
💬 Message: Ceci est un test
=========================================

✅ Email envoyé avec succès à alexalix58@gmail.com
```

## 🎯 Ce qui se passe maintenant

Quand quelqu'un remplit le formulaire :
1. ✅ Le message s'affiche dans la console (pour debug)
2. ✅ Un email est envoyé à **alexalix58@gmail.com**
3. ✅ L'email contient :
   - Le nom de l'expéditeur
   - Son email (vous pouvez répondre directement)
   - Son message
4. ✅ Design professionnel avec vos couleurs (noir/or)

## 📊 Limites gratuites Resend

- **3000 emails par mois** (largement suffisant pour un portfolio)
- Pas de carte bancaire requise
- Parfait pour Next.js

## 🚨 Si ça ne marche pas

### L'email n'arrive pas ?

1. **Vérifiez vos spams** dans Gmail
2. **Vérifiez la console** du terminal pour voir les erreurs
3. **Vérifiez que** `.env.local` existe et contient la bonne clé
4. **Redémarrez** le serveur après avoir créé `.env.local`

### Message d'erreur dans la console ?

```
⚠️ RESEND_API_KEY non configurée - Email non envoyé
```
→ Créez le fichier `.env.local` avec votre clé API

```
❌ Erreur lors de l'envoi de l'email
```
→ Vérifiez que votre clé API est correcte

## 🎉 C'est tout !

Une fois configuré, tous les messages du formulaire arriveront automatiquement sur **alexalix58@gmail.com** avec un beau design professionnel ! 📨
