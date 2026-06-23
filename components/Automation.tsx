"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Mail,
  FileText,
  Linkedin,
  Share2,
  Workflow,
  Clock,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Publication automatique sur les réseaux",
    description:
      "Génération et programmation de posts LinkedIn, Indeed et autres réseaux. Vos offres d'emploi et actualités publiées au bon moment, sans effort.",
    tags: ["LinkedIn", "Indeed", "Programmation"],
  },
  {
    icon: Mail,
    title: "Gestion & relance des emails",
    description:
      "Réponses automatiques, relances de prospects et de candidats, tri intelligent de la boîte de réception. Plus aucun email important oublié.",
    tags: ["Relances", "Tri auto", "Réponses IA"],
  },
  {
    icon: FileText,
    title: "Automatisation de la facturation",
    description:
      "Création, envoi et suivi automatique des factures et devis. Relances de paiement et rapprochement comptable sans intervention manuelle.",
    tags: ["Factures", "Devis", "Relances"],
  },
  {
    icon: Bot,
    title: "Agents IA sur mesure",
    description:
      "Assistants IA connectés à vos outils (CRM, Notion, Slack, Google Workspace) capables d'exécuter des tâches complètes de bout en bout.",
    tags: ["GPT", "CRM", "Intégrations"],
  },
  {
    icon: Workflow,
    title: "Workflows & intégrations",
    description:
      "Connexion de vos applications entre elles pour automatiser les processus répétitifs : leads, reporting, synchronisation de données.",
    tags: ["Make", "n8n", "API"],
  },
  {
    icon: Linkedin,
    title: "Prospection & recrutement",
    description:
      "Sourcing automatisé de candidats et de prospects, messages personnalisés et suivi des conversations pour accélérer vos recrutements.",
    tags: ["Sourcing", "Outreach", "Suivi"],
  },
];

const benefits = [
  { icon: Clock, value: "+20h", label: "économisées / semaine" },
  { icon: TrendingUp, value: "x3", label: "de productivité" },
  { icon: Zap, value: "24/7", label: "sans interruption" },
  { icon: ShieldCheck, value: "0", label: "erreur humaine" },
];

export default function Automation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="automation"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary-gold/30 bg-primary-gold/10 text-primary-gold text-sm font-medium">
            <Bot size={16} />
            Pour les entreprises
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-white">Agents IA & </span>
            <span className="gold-text">Automatisation</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" />
          <p className="text-primary-white/70 text-lg max-w-2xl mx-auto">
            J&apos;automatise vos tâches répétitives grâce à l&apos;intelligence
            artificielle : réseaux sociaux, emails, facturation et bien plus.
            Concentrez-vous sur l&apos;essentiel, je m&apos;occupe du reste.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center bg-primary-white/5 backdrop-blur-sm p-6 rounded-lg border border-primary-gold/20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <benefit.icon className="text-primary-gold mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold gold-text">{benefit.value}</div>
              <div className="text-primary-white/60 text-sm mt-1">
                {benefit.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-primary-white/5 backdrop-blur-sm rounded-lg p-8 border border-primary-gold/20 hover:border-primary-gold/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
              }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 via-primary-gold/5 to-primary-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-gold/10 border border-primary-gold/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-white mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-white/70 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-gold/10 text-primary-gold text-xs rounded-full border border-primary-gold/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-primary-white/70 text-lg mb-6">
            Un processus chronophage à automatiser ? Parlons-en.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-primary-black font-bold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
            Automatiser mon entreprise
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
