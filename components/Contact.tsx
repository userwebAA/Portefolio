"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Envoi via l'API Next.js
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        });
        // Réinitialiser le formulaire
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus({
        type: "error",
        message: "Erreur lors de l&apos;envoi. Veuillez réessayer ou m&apos;envoyer un email directement.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alexalix58@gmail.com",
      link: "mailto:alexalix58@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "06 95 45 73 05",
      link: "tel:+33695457305",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Toulouse, France",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-primary-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-white">Me </span>
            <span className="gold-text">Contacter</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" />
          <p className="text-primary-white/70 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-white mb-8">
              Informations de contact
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 bg-primary-black/50 backdrop-blur-sm rounded-lg border border-primary-gold/20 hover:border-primary-gold/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 bg-primary-gold/10 rounded-lg">
                    <info.icon className="text-primary-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-primary-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-white/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-primary-black/50 backdrop-blur-sm rounded-lg border border-primary-gold/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-primary-gold font-semibold mb-3">
                Disponibilité
              </h4>
              <p className="text-primary-white/70">
                Je suis actuellement disponible pour de nouveaux projets et
                collaborations. N'hésitez pas à me contacter pour discuter de
                vos besoins.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-primary-black/50 backdrop-blur-sm p-8 rounded-lg border border-primary-gold/20"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-primary-white font-medium mb-2"
                >
                  Nom
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-white/5 border border-primary-gold/20 rounded-lg text-primary-white focus:outline-none focus:border-primary-gold transition-all duration-300"
                  placeholder="Votre nom"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)"
                  }}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-primary-white font-medium mb-2"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-white/5 border border-primary-gold/20 rounded-lg text-primary-white focus:outline-none focus:border-primary-gold transition-all duration-300"
                  placeholder="votre@email.com"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)"
                  }}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-primary-white font-medium mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-white/5 border border-primary-gold/20 rounded-lg text-primary-white focus:outline-none focus:border-primary-gold transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)"
                  }}
                />
              </div>

              {/* Message de statut */}
              {submitStatus.type && (
                <motion.div
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle size={24} />
                  ) : (
                    <XCircle size={24} />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full px-6 py-3 font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-primary-gold/50 cursor-not-allowed"
                    : "bg-primary-gold"
                } text-primary-black`}
                whileHover={!isSubmitting ? { 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {!isSubmitting && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-primary-black border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="relative z-10" />
                    <span className="relative z-10">Envoyer le message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
