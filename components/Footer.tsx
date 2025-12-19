'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <Image
            src="/logo.png"
            alt="Canvas&Pixels Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </motion.div>

        {/* Contact & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16"
        >
          {/* Phone */}
          <a
            href="tel:+2348163509379"
            className="font-[var(--font-geist)] text-white text-base md:text-lg hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
          >
            (+234) 8163509379
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Email */}
          <a
            href="mailto:hello@canvasandpixels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-geist)] text-white text-base md:text-lg hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
          >
            Email
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/canvasandpixels"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-geist)] text-white text-base md:text-lg hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
          >
            Instagram
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/canvasandpixels"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-geist)] text-white text-base md:text-lg hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
          >
            Facebook
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-px bg-[#333333] mb-12 md:mb-16"
        />

        {/* CTA Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[var(--font-geist)] font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white text-center leading-tight"
        >
          Let's work together
        </motion.h2>

        {/* Optional: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="font-[var(--font-geist)] text-white/40 text-sm">
            © {new Date().getFullYear()} Canvas&Pixels. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
