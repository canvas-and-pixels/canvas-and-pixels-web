'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ServiceTags from './ServiceTags';
import BackgroundGrid from './BackgroundGrid';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Animated Background Grid */}
      <BackgroundGrid />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          {/* Service Tags */}
          <ServiceTags />

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="block font-[var(--font-open-sauce)] font-light text-[48px] md:text-[64px] lg:text-[96px] leading-[52px] md:leading-[68px] lg:leading-[102px] tracking-[-0.2px] md:tracking-[-0.3px] lg:tracking-[-0.4px] text-white">
              where{' '}
              <span className="font-[var(--font-playfair)] italic font-normal">
                ideas
              </span>
            </span>
            <span className="block font-[var(--font-open-sauce)] font-light text-[48px] md:text-[64px] lg:text-[96px] leading-[52px] md:leading-[68px] lg:leading-[102px] tracking-[-0.2px] md:tracking-[-0.3px] lg:tracking-[-0.4px] text-white">
              come to life.
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const modal = document.getElementById('contact-modal');
              if (modal) modal.classList.remove('hidden');
            }}
            className="group flex items-center gap-3 bg-[#4A7FFF] text-white px-8 py-4 rounded-full font-[var(--font-open-sauce)] text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in touch
            <motion.div
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
