"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Développement",
    description: "Création d'applications web modernes et performantes",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces utilisateur élégantes et intuitives",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimisation et rapidité d'exécution",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe et communication efficace",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
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
            <span className="text-primary-white">À propos de </span>
            <span className="gold-text">moi</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary-white mb-6">
              Développeur Full Stack & Mobile passionné
            </h3>
            <p className="text-primary-white/70 text-lg mb-6 leading-relaxed">
              Je suis Alexandre Alix, développeur full stack et mobile avec une expertise
              approfondie en React/Next.js pour le frontend, Laravel/MySQL pour le backend,
              et Flutter/Dart pour les applications mobiles cross-platform.
            </p>
            <p className="text-primary-white/70 text-lg mb-6 leading-relaxed">
              Passionné par les nouvelles technologies, j&apos;aime créer des applications
              performantes et élégantes qui offrent une expérience utilisateur exceptionnelle
              sur tous les supports : web et mobile. Mon objectif est de transformer vos
              idées en solutions digitales innovantes.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-primary-gold text-primary-gold font-semibold rounded-lg hover:bg-primary-gold/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Travaillons ensemble
            </motion.a>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-primary-white/5 backdrop-blur-sm p-6 rounded-lg border border-primary-gold/20 hover:border-primary-gold/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <feature.icon className="text-primary-gold mb-4" size={32} />
                <h4 className="text-primary-white font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-primary-white/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
