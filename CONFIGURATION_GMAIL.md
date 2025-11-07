# 📧 Configuration Gmail pour l'envoi d'emails

## 🎯 Étapes à suivre (5 minutes)

### Étape 1 : Créer un mot de passe d'application Gmail

1. **Allez sur votre compte Google** : https://myaccount.google.com/security

2. **Activez la validation en deux étapes** (si ce n'est pas déjà fait) :
   - Cliquez sur "Validation en deux étapes"
   - Suivez les instructions

3. **Créez un mot de passe d'application** :
   - Retournez sur https://myaccount.google.com/security
   - Cherchez "Mots de passe des applications" (ou "App passwords")
   - Cliquez dessus
   - Sélectionnez "Mail" et "Autre (nom personnalisé)"
   - Tapez "Portfolio" comme nom
   - Cliquez sur "Générer"
   - **Copiez le mot de passe de 16 caractères** (format: xxxx xxxx xxxx xxxx)

### Étape 2 : Mettre à jour .env.local

1. Ouvrez le fichier `.env.local`
2. Remplacez `VOTRE_MOT_DE_PASSE_APPLICATION_ICI` par le mot de passe que vous venez de copier
3. **Important** : Enlevez les espaces du mot de passe (gardez juste les 16 caractères)

Exemple :
```env
GMAIL_USER=alexalix58@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

### Étape 3 : Redémarrer le serveur

1. **Arrêtez le serveur** : `Ctrl+C` dans le terminal
2. **Relancez** : `npm run dev`

### Étape 4 : Tester !

1. Allez sur http://localhost:3000
2. Remplissez le formulaire de contact
3. Envoyez un message
4. **Vérifiez votre boîte mail** : alexalix58@gmail.com

## ✅ Vérification

Dans le terminal, vous devriez voir :
```
📧 ===== NOUVEAU MESSAGE DE CONTACT =====
👤 Nom: Test
📨 Email: test@example.com
💬 Message: Ceci est un test
=========================================

🔄 Tentative d'envoi d'email via Gmail...
✅ Email envoyé avec succès à alexalix58@gmail.com via Gmail !
```

## 🎉 Avantages de Gmail

- ✅ **Gratuit et illimité** (500 emails/jour)
- ✅ **Fonctionne immédiatement**
- ✅ **Pas de vérification de domaine**
- ✅ **Fiable et rapide**
- ✅ **Vous contrôlez tout**

## 🚨 Dépannage

### "Mot de passe des applications" n'apparaît pas ?
→ Activez d'abord la validation en deux étapes

### L'email n'arrive pas ?
1. Vérifiez que le mot de passe dans `.env.local` est correct (16 caractères, sans espaces)
2. Vérifiez vos spams
3. Regardez les logs du terminal pour voir les erreurs

### Erreur "Invalid login" ?
→ Le mot de passe d'application est incorrect, recréez-en un nouveau

## 🔒 Sécurité

- ✅ Le mot de passe d'application est dans `.env.local` (ignoré par git)
- ✅ Ne partagez jamais ce fichier
- ✅ Vous pouvez révoquer le mot de passe à tout moment dans votre compte Google

## 📝 Note importante

**N'utilisez PAS votre mot de passe Gmail normal** - utilisez uniquement un mot de passe d'application !
