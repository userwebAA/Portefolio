"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #d4af37 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #d4af37 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative">
        {/* Outer rings with stagger effect */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-primary-gold/30"
            style={{
              width: 120 + index * 40,
              height: 120 + index * 40,
              left: -index * 20,
              top: -index * 20,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}

        {/* Main spinning ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-transparent border-t-primary-gold border-r-primary-gold/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner counter-rotating ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-transparent border-b-primary-gold/70 border-l-primary-gold/40"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center pulsing core */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-primary-gold shadow-lg shadow-primary-gold/50"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 20px rgba(212, 175, 55, 0.5)",
                "0 0 40px rgba(212, 175, 55, 0.8)",
                "0 0 20px rgba(212, 175, 55, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 rounded-full bg-primary-gold"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [
                Math.cos((index * Math.PI) / 2) * 60,
                Math.cos((index * Math.PI) / 2 + Math.PI * 2) * 60,
              ],
              y: [
                Math.sin((index * Math.PI) / 2) * 60,
                Math.sin((index * Math.PI) / 2 + Math.PI * 2) * 60,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Loading text with letter animation */}
      <motion.div
        className="absolute mt-56 flex gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {"CHARGEMENT".split("").map((letter, index) => (
          <motion.span
            key={index}
            className="text-primary-gold font-bold tracking-wider text-lg"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="text-primary-gold font-bold text-lg ml-1"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ...
        </motion.span>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-20 w-64 h-1 bg-primary-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-gold via-yellow-400 to-primary-gold"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
