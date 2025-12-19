'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-[var(--font-geist)] text-sm">Back to Blog</span>
          </Link>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-[#4A7FFF]/10 text-[#4A7FFF] rounded-full text-sm font-[var(--font-geist)] font-medium mb-4">
              Web Development
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[var(--font-geist)] font-light text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight"
          >
            Building Scalable SaaS Applications: Best Practices for 2024
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-[#e0e0e0]"
          >
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="John Doe"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-[var(--font-geist)] font-medium text-[#1a1a1a]">John Doe</p>
                <p className="font-[var(--font-geist)] text-sm text-[#1a1a1a]/60">Senior Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#1a1a1a]/60">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Dec 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
            <button 
              onClick={() => {
                const url = window.location.href;
                const title = 'Building Scalable SaaS Applications: Best Practices for 2024';
                
                // Try native share API first (mobile devices)
                if (navigator.share) {
                  navigator.share({
                    title: title,
                    url: url,
                  }).catch(() => {
                    // Fallback if share is cancelled
                  });
                } else {
                  // Fallback: copy to clipboard
                  navigator.clipboard.writeText(url).then(() => {
                    alert('Link copied to clipboard!');
                  });
                }
              }}
              className="ml-auto flex items-center gap-2 text-[#4A7FFF] hover:text-[#4A7FFF]/80 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="font-[var(--font-geist)] text-sm">Share</span>
            </button>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[400px] rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
              alt="Building Scalable SaaS Applications"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 text-lg leading-relaxed mb-6">
              Building a SaaS application that can scale from your first 100 users to 100,000+ requires careful planning and the right architectural decisions from day one. In this comprehensive guide, we'll explore the essential patterns and practices that will help you build a scalable foundation.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              1. Start with a Solid Architecture
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              The foundation of any scalable SaaS application is its architecture. We recommend starting with a microservices-oriented approach, even if you begin with a monolith. This means designing your application with clear boundaries between different domains, making it easier to extract services later as you scale.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              2. Database Design for Scale
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              Your database design will make or break your ability to scale. Consider implementing multi-tenancy from the start, whether through separate databases, schemas, or row-level security. Each approach has its trade-offs in terms of isolation, performance, and cost.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              3. Caching Strategy
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              Implement caching at multiple levels: application-level caching with Redis, CDN caching for static assets, and database query caching. A well-implemented caching strategy can reduce your database load by 80% or more.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              4. API Design Best Practices
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              Design your APIs with versioning in mind from day one. Use RESTful principles or GraphQL depending on your use case. Implement rate limiting, authentication, and proper error handling. Your API is your product's interface to the world—make it robust and developer-friendly.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              5. Monitoring and Observability
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              You can't scale what you can't measure. Implement comprehensive monitoring from the start: application performance monitoring (APM), error tracking, user analytics, and infrastructure monitoring. Tools like Datadog, New Relic, or open-source alternatives like Prometheus and Grafana are essential.
            </p>

            <h2 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mt-12 mb-4">
              Conclusion
            </h2>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/80 leading-relaxed mb-6">
              Building a scalable SaaS application is a journey, not a destination. Start with solid foundations, measure everything, and iterate based on real user data. Remember that premature optimization is the root of all evil—focus on building features your users need while keeping scalability in mind.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-8 bg-[#f8f8f8] rounded-2xl text-center"
          >
            <h3 className="font-[var(--font-geist)] font-semibold text-2xl text-[#1a1a1a] mb-4">
              Need help building your SaaS application?
            </h3>
            <p className="font-[var(--font-geist)] text-[#1a1a1a]/70 mb-6">
              Our team has helped dozens of startups build scalable applications. Let's talk about your project.
            </p>
            <button
              onClick={() => {
                const modal = document.getElementById('contact-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="inline-flex items-center gap-2 bg-[#4A7FFF] text-white px-8 py-4 rounded-full font-[var(--font-geist)] hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </article>
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
