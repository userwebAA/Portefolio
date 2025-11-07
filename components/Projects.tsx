"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Projet E-commerce",
    description:
      "Application e-commerce complète avec panier, paiement et gestion des commandes",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif avec visualisation de données en temps réel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform avec fonctionnalités de géolocalisation",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Maps API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Plateforme de Blog",
    description:
      "CMS personnalisé avec éditeur Markdown et gestion de contenu",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    technologies: ["Next.js", "MDX", "Tailwind", "Vercel"],
    github: "#",
    demo: "#",
  },
  {
    title: "API REST",
    description:
      "API RESTful sécurisée avec authentification JWT et documentation Swagger",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    technologies: ["Node.js", "Express", "JWT", "Swagger"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio 3D",
    description:
      "Portfolio interactif avec animations 3D et effets WebGL",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    technologies: ["Three.js", "React", "GSAP", "WebGL"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
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
            <span className="text-primary-white">Mes </span>
            <span className="gold-text">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" />
          <p className="text-primary-white/70 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-primary-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-gold/20 hover:border-primary-gold/50 transition-all duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                scale: 1.02
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 via-primary-gold/5 to-primary-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent opacity-60" />
                <motion.div
                  className="absolute inset-0 bg-primary-gold/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-primary-white mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-white/70 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-gold/10 text-primary-gold text-xs rounded-full border border-primary-gold/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary-white hover:text-primary-gold transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-primary-white hover:text-primary-gold transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
