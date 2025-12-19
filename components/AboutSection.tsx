'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-[#F8F8F8] -mt-16 md:-mt-20 rounded-t-[40px] md:rounded-t-[60px] pt-20 md:pt-32 pb-20 md:pb-32 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-2xl">
              <Image
                src="/logo.png"
                alt="Canvas&Pixels Icon"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center max-w-[600px] font-[var(--font-open-sauce)] font-normal text-sm md:text-base leading-6 md:leading-7 text-[#1a1a1a]/80"
          >
            A software studio dedicated to helping small businesses and individual clients build innovative products that drive impact. Our team of experts guides you through every stage of the product development journey, from research and analysis to deployment and maintenance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
