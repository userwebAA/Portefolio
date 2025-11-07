"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 93 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "PHP", level: 87 },
      { name: "Node.js", level: 80 },
      { name: "REST API", level: 92 },
    ],
  },
  {
    title: "Mobile & Outils",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Git", level: 93 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            <span className="text-primary-white">Mes </span>
            <span className="gold-text">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-primary-black/50 backdrop-blur-sm p-8 rounded-lg border border-primary-gold/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary-gold mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-primary-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-gold font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-primary-white/10 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-gold via-yellow-400 to-primary-gold relative"
                        style={{ backgroundSize: "200% 100%" }}
                        initial={{ width: 0 }}
                        animate={isInView ? { 
                          width: `${skill.level}%`,
                          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
                        } : {}}
                        transition={{
                          width: {
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          },
                          backgroundPosition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }
                        }}
                      >
                        {/* Shimmer effect - réduit pour ne pas cacher le texte */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
