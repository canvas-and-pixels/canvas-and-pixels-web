'use client';

import { motion } from 'framer-motion';
import { Palette, Smartphone, Globe, Sparkles } from 'lucide-react';

const services = [
  { name: 'Product design', icon: Palette, href: '#services' },
  { name: 'Mobile development', icon: Smartphone, href: '#services' },
  { name: 'Web development', icon: Globe, href: '#services' },
  { name: 'AI solutions', icon: Sparkles, href: '#services' },
];

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function ServiceTags() {
  return (
    <div className="relative w-full overflow-hidden mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex gap-3 md:gap-4"
      >
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-3 md:gap-4 flex-shrink-0"
        >
          {[...services, ...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={`${service.name}-${index}`}
                href={service.href}
                onClick={(e) => handleClick(e, service.href)}
                className="group flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-white/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white font-[var(--font-open-sauce)] text-sm transition-colors">
                  {service.name}
                </span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
