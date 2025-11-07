"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black border-t border-primary-gold/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gold-text mb-4">Portfolio</h3>
            <p className="text-primary-white/70">
              Développeur passionné créant des expériences web exceptionnelles
              avec les dernières technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace("à propos", "about").replace("compétences", "skills").replace("accueil", "home")}`}
                      className="text-primary-white/70 hover:text-primary-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-primary-white font-semibold mb-4">
              Réseaux sociaux
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-primary-white/5 rounded-lg border border-primary-gold/20 hover:border-primary-gold/50 text-primary-white hover:text-primary-gold transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-white/70 text-sm flex items-center gap-2">
              © {currentYear} Portfolio. Créé avec{" "}
              <Heart size={16} className="text-primary-gold inline" /> et Next.js
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-white/70 hover:text-primary-gold transition-colors duration-300"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-primary-white/70 hover:text-primary-gold transition-colors duration-300"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
