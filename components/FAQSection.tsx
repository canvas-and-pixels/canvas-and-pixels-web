'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Monitor, Clock, Tag, Play, Loader, MessageCircle, Pause, ThumbsDown, ThumbsUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: any;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What services does your software studio offer?',
    answer: 'Our software studio provides comprehensive services, from conceptualizing and designing software solutions to developing, testing, deploying, and maintaining them.',
    icon: Monitor,
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A typical project can range from 4-12 weeks for smaller applications to 6-12 months for enterprise solutions. We provide detailed timelines during the initial consultation.',
    icon: Clock,
  },
  {
    id: 3,
    question: 'What pricing models do you use?',
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and monthly retainers. We work with you to find the best model that fits your budget and project requirements.',
    icon: Tag,
  },
  {
    id: 4,
    question: 'How do I initiate a project with your studio?',
    answer: 'Getting started is easy! Simply reach out through our contact form or schedule a consultation call. We\'ll discuss your project requirements, goals, and timeline to create a customized proposal.',
    icon: Play,
  },
  {
    id: 5,
    question: 'How do I stay updated with the progress?',
    answer: 'We provide regular updates through weekly status meetings, project management tools, and detailed progress reports. You\'ll have full visibility into the development process at every stage.',
    icon: Loader,
  },
  {
    id: 6,
    question: 'What communication tools do you use?',
    answer: 'We use industry-standard tools like Slack, Microsoft Teams, Zoom, and email. We adapt to your preferred communication channels to ensure seamless collaboration.',
    icon: MessageCircle,
  },
  {
    id: 7,
    question: 'Can I pause my subscription?',
    answer: 'Yes, for retainer-based engagements, you can pause your subscription with 30 days notice. We\'ll work with you to ensure a smooth transition and resume when you\'re ready.',
    icon: Pause,
  },
  {
    id: 8,
    question: 'Unsatisfied?',
    answer: 'Your satisfaction is our priority. If you\'re not happy with any deliverable, we\'ll work with you to make it right. We offer revision rounds and maintain open communication throughout the project.',
    icon: ThumbsDown,
  },
  {
    id: 9,
    question: 'Satisfaction Guarantee',
    answer: 'We stand behind our work with a satisfaction guarantee. If the final product doesn\'t meet the agreed-upon specifications, we\'ll continue working until you\'re completely satisfied.',
    icon: ThumbsUp,
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-[#f8f8f8] py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[var(--font-geist)] font-light text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-12 md:mb-16"
        >
          Frequently asked questions
        </motion.h2>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-[#e0e0e0] last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center gap-4 py-6 md:py-7 text-left hover:opacity-70 transition-opacity duration-200"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-[#e0e0e0] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
                  </div>

                  {/* Question */}
                  <span className="flex-1 font-[var(--font-geist)] font-medium text-base md:text-lg text-[#1a1a1a]">
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#1a1a1a]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pr-4 pb-6 md:pb-7">
                        <p className="font-[var(--font-geist)] text-[#1a1a1a]/70 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
