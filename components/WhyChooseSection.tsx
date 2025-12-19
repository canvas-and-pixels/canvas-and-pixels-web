'use client';

import { motion } from 'framer-motion';
import { Briefcase, Store, Maximize2 } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: any;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Business-Oriented',
    description: 'Solutions that drive growth and impact.',
    icon: Briefcase,
  },
  {
    id: 2,
    title: 'One-Stop Shop',
    description: 'All the services you need under one roof.',
    icon: Store,
  },
  {
    id: 3,
    title: 'Flexible Engagement Models',
    description: 'Choose the service that best fits your needs.',
    icon: Maximize2,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[var(--font-geist)] font-light text-4xl md:text-5xl lg:text-6xl text-white mb-16 md:mb-24"
        >
          Why choose Canvas & Pixels
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`
                  relative flex flex-col items-center text-center px-6 md:px-8 lg:px-12
                  ${index !== features.length - 1 ? 'md:border-r md:border-[#333333]' : ''}
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <Icon className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h3 className="font-[var(--font-geist)] font-semibold text-xl md:text-2xl text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-[var(--font-geist)] text-white/70 text-sm md:text-base leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
