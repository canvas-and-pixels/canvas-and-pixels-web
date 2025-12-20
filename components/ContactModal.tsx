'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for modal open events
  if (typeof window !== 'undefined') {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isHidden = modal.classList.contains('hidden');
            setIsOpen(!isHidden);
          }
        });
      });
      observer.observe(modal, { attributes: true });
    }
  }

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      action: 'mailto:canvasandpixels01@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us',
      action: 'https://wa.me/2348163509379',
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      description: 'Schedule a meeting',
      action: 'https://cal.com/canvasandpixels/30min',
    },
  ];

  const handleClose = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('hidden');
  };

  return (
    <div id="contact-modal" className="hidden">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl p-8 z-50 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-[var(--font-open-sauce)] font-light text-[#1a1a1a] mb-2">
                Get in touch
              </h2>
              <p className="text-[#1a1a1a]/60 font-[var(--font-open-sauce)] text-sm mb-8">
                Choose your preferred way to reach us
              </p>

              {/* Contact Options */}
              <div className="space-y-3">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.a
                      key={option.title}
                      href={option.action}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-[#1a1a1a]/10 hover:border-[#4A7FFF] hover:bg-[#4A7FFF]/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#4A7FFF]/10 flex items-center justify-center group-hover:bg-[#4A7FFF]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#4A7FFF]" />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-open-sauce)] font-normal text-[#1a1a1a] text-base">
                          {option.title}
                        </h3>
                        <p className="font-[var(--font-open-sauce)] text-[#1a1a1a]/60 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
