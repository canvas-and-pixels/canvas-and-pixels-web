'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/hero_section_grid.svg"
            alt=""
            width={842}
            height={538}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        animate={{
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/hero_section_grid.svg"
            alt=""
            width={842}
            height={538}
            className="w-full h-full object-cover object-center blur-sm"
            priority
          />
        </div>
      </motion.div>

      {/* Animated dots overlay for extra depth */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r="2"
            fill="white"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
