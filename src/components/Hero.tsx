import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { FloatingElements } from '@/components/ui/floating-elements';
import { NeuralNetwork } from '@/components/ui/neural-network';
import { MorphingText } from '@/components/ui/morphing-text';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const morphingTexts = [
    "Digital Excellence",
    "Innovation Unleashed", 
    "Future-Ready Solutions",
    "Transformative Technology",
    "Limitless Possibilities"
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <NeuralNetwork className="opacity-30" />
        <FloatingElements count={30} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Logo with advanced animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 1.5 
          }}
          className="mb-12 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 scale-150" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img 
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-110" 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white">Aura</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Byt
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-4"
          >
            Architecting Tomorrow's
          </motion.div>

          <div className="text-3xl md:text-5xl lg:text-6xl font-bold h-20 flex items-center justify-center">
            <MorphingText 
              texts={morphingTexts}
              className="text-4xl md:text-6xl lg:text-7xl font-black"
            />
          </div>
        </motion.div>

        {/* Description with reveal animation */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We don't just build software—we craft digital experiences that 
          <span className="text-blue-400 font-semibold"> revolutionize industries</span>, 
          <span className="text-purple-400 font-semibold"> amplify human potential</span>, and 
          <span className="text-pink-400 font-semibold"> shape the future</span>.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
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
            href="/services"
            variant="secondary"
            size="lg"
            className="group"
          >
            <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Explore Possibilities
          </MagneticButton>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "500+", label: "Projects Launched" },
            { number: "99.9%", label: "Success Rate" },
            { number: "24/7", label: "Innovation Mode" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;