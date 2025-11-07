import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Afficher dans la console pour debug
    console.log("\n📧 ===== NOUVEAU MESSAGE DE CONTACT =====");
    console.log(`👤 Nom: ${name}`);
    console.log(`📨 Email: ${email}`);
    console.log(`💬 Message: ${message}`);
    console.log("=========================================\n");

    // Envoi de l'email avec Nodemailer
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        console.log("🔄 Tentative d'envoi d'email via Gmail...");
        
        // Configuration du transporteur Gmail
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
          tls: {
            // Ne pas échouer sur les certificats invalides (pour développement)
            rejectUnauthorized: false
          }
        });

        // Envoi de l'email
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
          to: 'alexalix58@gmail.com',
          replyTo: email,
          subject: `💼 Nouveau message de ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: #d4af37; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .content { background: #f5f5f5; padding: 30px; border-radius: 0 0 10px 10px; }
                  .field { margin-bottom: 20px; }
                  .label { font-weight: bold; color: #0a0a0a; margin-bottom: 5px; }
                  .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37; }
                  .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0;">✉️ Nouveau Message</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Depuis votre portfolio</p>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">👤 Nom :</div>
                      <div class="value">${name}</div>
                    </div>
                    <div class="field">
                      <div class="label">📧 Email :</div>
                      <div class="value"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
                    </div>
                    <div class="field">
                      <div class="label">💬 Message :</div>
                      <div class="value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                  </div>
                  <div class="footer">
                    <p>Ce message a été envoyé depuis votre portfolio</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
        
        console.log("✅ Email envoyé avec succès à alexalix58@gmail.com via Gmail !");
      } catch (emailError: any) {
        console.error("❌ Erreur lors de l'envoi de l'email:", emailError);
        console.error("📋 Détails:", emailError.message);
      }
    } else {
      console.warn("⚠️ Variables d'environnement Gmail non configurées");
      console.warn("📝 Ajoutez GMAIL_USER et GMAIL_APP_PASSWORD dans .env.local");
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Message envoyé avec succès !" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
