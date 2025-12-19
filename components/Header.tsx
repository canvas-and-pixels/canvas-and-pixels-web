'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Works', 'Services', 'About', 'Blog', 'Contact'];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-[#1a1a1a]/80 shadow-lg' : ''
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Canvas&Pixels Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-[var(--font-open-sauce)] font-normal text-lg">
                Canvas&Pixels
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 h-10 px-2 rounded-full border border-white/10 bg-white/5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-[var(--font-geist)] text-sm px-5 flex items-center h-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={() => {
                const modal = document.getElementById('contact-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="hidden md:flex items-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-[var(--font-open-sauce)] text-sm hover:scale-105 transition-transform duration-300"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1a1a1a] z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end text-white p-2 mb-8"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Menu Items */}
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-xl font-[var(--font-geist)] hover:text-white/70 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const modal = document.getElementById('contact-modal');
                    if (modal) modal.classList.remove('hidden');
                  }}
                  className="mt-auto flex items-center justify-center gap-2 bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-[var(--font-open-sauce)] text-sm"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
