// Configuration EmailJS
// Pour configurer EmailJS :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Remplacez les valeurs ci-dessous par vos identifiants

export const EMAILJS_CONFIG = {
  // Votre Public Key (disponible dans Account > API Keys)
  PUBLIC_KEY: "VOTRE_PUBLIC_KEY",
  
  // Votre Service ID (disponible dans Email Services)
  SERVICE_ID: "VOTRE_SERVICE_ID",
  
  // Votre Template ID (disponible dans Email Templates)
  TEMPLATE_ID: "VOTRE_TEMPLATE_ID",
};

// Template d'email suggéré pour EmailJS :
// 
// Sujet: Nouveau message de {{from_name}}
// 
// Corps:
// Vous avez reçu un nouveau message depuis votre portfolio :
// 
// Nom: {{from_name}}
// Email: {{from_email}}
// 
// Message:
// {{message}}
