import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "Quantum React", level: 98, color: "from-blue-500 to-cyan-400" },
  { name: "Neural Node.js", level: 95, color: "from-green-500 to-emerald-400" },
  { name: "Adaptive AWS", level: 92, color: "from-orange-500 to-yellow-400" },
  { name: "Intelligent Docker", level: 90, color: "from-blue-600 to-purple-500" },
  { name: "Evolved TypeScript", level: 96, color: "from-indigo-500 to-blue-400" },
  { name: "Conscious AI", level: 88, color: "from-purple-500 to-pink-400" },
  { name: "Quantum Security", level: 94, color: "from-red-500 to-pink-500" },
  { name: "Hyper GraphQL", level: 91, color: "from-teal-500 to-cyan-400" }
];

export const TechStack = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Powered by </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tomorrow
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our technology stack doesn't just use the latest tools—it evolves them, 
            creating solutions that adapt and improve autonomously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-2xl font-black text-gray-400">
                    {tech.level}%
                  </span>
                </div>
                
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        <div className="mt-20 relative h-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};