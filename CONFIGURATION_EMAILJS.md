# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Connectez votre compte Gmail (alexalix58@gmail.com)
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template comme suit :

**Nom du template :** Portfolio Contact Form

**To Email :** alexalix58@gmail.com

**Subject :** Nouveau message de {{from_name}}

**Content (HTML) :**
```html
<p>Vous avez reçu un nouveau message depuis votre portfolio :</p>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>

<p><strong>Message :</strong></p>
<p>{{message}}</p>

<hr>
<p><small>Ce message a été envoyé depuis votre portfolio.</small></p>
```

4. Testez le template avec le bouton "Test it"
5. Notez le **Template ID** généré

### 4. Obtenir votre Public Key
1. Allez dans **"Account"** > **"General"**
2. Dans la section **"API Keys"**, copiez votre **Public Key**

### 5. Configurer le fichier emailjs.ts
Ouvrez le fichier `lib/emailjs.ts` et remplacez les valeurs :

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "VOTRE_PUBLIC_KEY_ICI",      // Ex: "user_abc123xyz"
  SERVICE_ID: "VOTRE_SERVICE_ID_ICI",      // Ex: "service_gmail"
  TEMPLATE_ID: "VOTRE_TEMPLATE_ID_ICI",    // Ex: "template_contact"
};
```

### 6. Variables du template
Assurez-vous que votre template EmailJS utilise ces variables :
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{message}}` - Message
- `{{to_email}}` - Votre email (alexalix58@gmail.com)

## Test du formulaire

1. Sauvegardez tous les fichiers
2. Le serveur Next.js devrait se recharger automatiquement
3. Allez sur votre portfolio : http://localhost:3000
4. Scrollez jusqu'à la section Contact
5. Remplissez le formulaire et cliquez sur "Envoyer le message"
6. Vous devriez voir un message de succès
7. Vérifiez votre boîte mail alexalix58@gmail.com

## Limites du plan gratuit EmailJS
- 200 emails par mois
- Parfait pour un portfolio personnel

## Dépannage

### Erreur "Invalid public key"
- Vérifiez que vous avez copié la bonne Public Key
- Assurez-vous qu'il n'y a pas d'espaces avant/après

### Erreur "Service not found"
- Vérifiez le Service ID
- Assurez-vous que le service est actif dans EmailJS

### Erreur "Template not found"
- Vérifiez le Template ID
- Assurez-vous que le template est publié

### Les emails n'arrivent pas
- Vérifiez vos spams
- Vérifiez que l'email de destination est correct dans le template
- Testez le template directement dans EmailJS

## Support
Si vous avez des problèmes, consultez la documentation EmailJS :
https://www.emailjs.com/docs/
