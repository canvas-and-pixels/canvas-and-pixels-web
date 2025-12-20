'use client';

import { motion } from 'framer-motion';
import { Code, Figma, Sparkles, Smartphone, Monitor } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  isWide?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web development',
    description: 'Build fast, scalable web applications with modern frameworks like React and Next.js. From landing pages to complex SaaS platforms, we create responsive experiences that drive results.',
    icon: Code,
  },
  {
    id: 2,
    title: 'Product design',
    description: 'Transform ideas into intuitive, beautiful interfaces. Our design process combines user research, prototyping, and testing to create products people love to use.',
    icon: Figma,
  },
  {
    id: 3,
    title: 'AI solutions',
    description: 'Integrate cutting-edge AI capabilities into your products. From ChatGPT integration to custom machine learning models, we help you leverage AI to automate workflows and enhance user experiences.',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Mobile development',
    description: 'Native iOS and Android apps, or cross-platform solutions with React Native and Flutter. We build mobile experiences that feel natural on every device, from consumer apps to enterprise solutions. Whether you need a standalone mobile app or a companion to your web platform, we deliver quality across all screen sizes.',
    icon: Smartphone,
    isWide: true,
  },
  {
    id: 5,
    title: 'Custom software',
    description: 'Tailored solutions for unique business challenges. We build custom tools, internal platforms, and specialized software that fits your exact requirements and scales with your growth.',
    icon: Monitor,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-[var(--font-geist)] font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our unique approach
          </h2>
          <p className="font-[var(--font-geist)] text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            We're more than just a software studio - we're business partners. We focus on delivering tailored solutions that meet your needs and goals. With a keen eye on the product's success, we work closely with you to ensure that every aspect of the project aligns with your vision.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`
                  relative p-8 bg-[#2a2a2a] border border-white/10 rounded-2xl
                  hover:border-white/20 hover:shadow-xl hover:shadow-black/20
                  transition-all duration-300 group
                  ${service.isWide ? 'md:col-span-2 lg:col-span-2' : ''}
                `}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-geist)] font-semibold text-xl md:text-2xl text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[var(--font-geist)] text-white/60 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A7FFF]/0 to-[#4A7FFF]/0 group-hover:from-[#4A7FFF]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
