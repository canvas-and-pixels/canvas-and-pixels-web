'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CollaborationHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
          alt="Team collaboration - overhead view of designers working on wireframes"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <h2 className="font-[var(--font-geist)] font-light text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Collaboration at the heart of everything we do
          </h2>
          <p className="font-[var(--font-geist)] text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8">
            We work closely with you at every step, turning ideas into reality through transparent communication and creative problem-solving.
          </p>
          <button
            onClick={() => {
              const modal = document.getElementById('contact-modal');
              if (modal) modal.classList.remove('hidden');
            }}
            className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-[var(--font-geist)] text-base hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
