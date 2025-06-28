import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './glass-card';
import { ArrowRight, Code, Palette, Shield, Zap, Globe, Database } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Neural Development",
    description: "AI-powered development workflows that adapt and evolve with your business needs.",
    features: ["Quantum Computing Ready", "Self-Healing Code", "Predictive Scaling"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Immersive Experiences",
    description: "Next-generation interfaces that blur the line between digital and reality.",
    features: ["AR/VR Integration", "Haptic Feedback", "Neural Interfaces"],
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quantum Security",
    description: "Unbreakable security protocols using quantum encryption and AI threat detection.",
    features: ["Quantum Encryption", "AI Threat Detection", "Zero-Trust Architecture"],
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Infrastructure",
    description: "Hyper-optimized cloud architecture that scales at the speed of thought.",
    features: ["Edge Computing", "Serverless Evolution", "Auto-Optimization"],
    color: "from-yellow-500 to-orange-400"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Orchestration",
    description: "Seamlessly coordinate distributed systems across multiple dimensions.",
    features: ["Multi-Cloud Harmony", "Global Load Balancing", "Intelligent Routing"],
    color: "from-indigo-500 to-blue-400"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Consciousness",
    description: "Transform raw data into intelligent insights that predict the future.",
    features: ["Predictive Analytics", "Real-time Processing", "Autonomous Learning"],
    color: "from-red-500 to-pink-400"
  }
];

export const ServiceShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8"
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Next-Gen Solutions</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Beyond </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Imagination
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't just follow trends—we create them. Our revolutionary approach 
            combines cutting-edge technology with visionary design to build the impossible.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <GlassCard hover glow className="h-full group cursor-pointer">
                <div className="space-y-6">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all cursor-pointer">
                      <span>Explore Technology</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold hover:scale-105 transition-transform cursor-pointer">
            <span>Ready to Build the Future?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};