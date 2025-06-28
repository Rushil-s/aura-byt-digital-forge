import React from 'react';
import Hero from '@/components/Hero';
import { ServiceShowcase } from '@/components/ui/service-showcase';
import { TechStack } from '@/components/ui/tech-stack';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target, Users, Award } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { FloatingElements } from '@/components/ui/floating-elements';
import SEO from '@/components/SEO';

const Index = () => {
  const stats = [
    { icon: <Target className="w-8 h-8" />, number: "500+", label: "Projects Revolutionized", color: "from-blue-500 to-cyan-400" },
    { icon: <Users className="w-8 h-8" />, number: "99.9%", label: "Client Satisfaction", color: "from-purple-500 to-pink-400" },
    { icon: <Award className="w-8 h-8" />, number: "24/7", label: "Innovation Engine", color: "from-green-500 to-emerald-400" },
    { icon: <Zap className="w-8 h-8" />, number: "∞", label: "Possibilities Unlocked", color: "from-yellow-500 to-orange-400" }
  ];

  const testimonials = [
    {
      quote: "AuraByt didn't just build our platform—they architected our future. The AI-driven solutions have transformed how we operate.",
      author: "Sarah Chen",
      role: "CTO, NeuralTech Industries",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with AuraByt feels like collaborating with time travelers. They see possibilities we never imagined.",
      author: "Marcus Rodriguez",
      role: "Founder, Quantum Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The quantum security implementation exceeded every expectation. Our data has never been more protected.",
      author: "Dr. Elena Vasquez",
      role: "Head of Security, CyberCore",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-black">
      <SEO 
        title="AuraByt – Architecting Tomorrow's Digital Reality"
        description="Revolutionary IT consultancy pushing the boundaries of what's possible. We don't just build software—we craft the future."
        keywords="revolutionary IT, quantum computing, AI development, future technology, digital transformation"
      />
      
      <Hero />
      <ServiceShowcase />
      <TechStack />

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
        <FloatingElements count={15} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">Impact </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that tell the story of transformation, innovation, and limitless potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center group cursor-default">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
              <span className="text-white">Client </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Voices
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from visionaries who've experienced the AuraByt difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="space-y-6">
                    <div className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full border-2 border-blue-500/30"
                      />
                      <div>
                        <div className="font-bold text-white">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
        <FloatingElements count={25} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <GlassCard className="p-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Ready to Transform?</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black">
                  <span className="text-white">Let's Build </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Tomorrow
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Your vision. Our innovation. Unlimited possibilities. 
                  Join the revolution and create something extraordinary.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                  <MagneticButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Start Your Revolution
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>

                  <MagneticButton
                    href="/portfolio"
                    variant="secondary"
                    size="lg"
                    className="group"
                  >
                    <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Explore Our Universe
                  </MagneticButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;