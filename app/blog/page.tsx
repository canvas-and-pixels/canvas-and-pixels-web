'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import ContactModal from '@/components/ContactModal';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#4A7FFF]/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#4A7FFF]/10 rounded-2xl flex items-center justify-center border border-[#4A7FFF]/20">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#4A7FFF]" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-[var(--font-geist)] font-light text-4xl md:text-6xl lg:text-7xl text-white mb-6">
          Blog{' '}
          <span className="font-[var(--font-playfair)] italic font-normal">
            coming soon
          </span>
        </h1>

        {/* Description */}
        <p className="font-[var(--font-geist)] text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          We're crafting something special. Our blog will feature insights on product design, development best practices, AI solutions, and stories from our journey building innovative products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-[#4A7FFF] text-white px-6 py-3 rounded-full font-[var(--font-geist)] text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <button
            onClick={() => {
              const modal = document.getElementById('contact-modal');
              if (modal) modal.classList.remove('hidden');
            }}
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-[var(--font-geist)] text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            Get Notified
          </button>
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <div className="w-2 h-2 bg-[#4A7FFF] rounded-full animate-pulse" />
          <span className="font-[var(--font-geist)] text-white/60 text-sm">
            Expected Launch: Q1 2026
          </span>
        </div>
      </div>
    </main>
      <ContactModal />
    </>
  );
}
