'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable SaaS Applications: Best Practices for 2024',
    excerpt: 'Learn the essential patterns and practices for building SaaS applications that can scale from 100 to 100,000 users without breaking a sweat.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'Web Development',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  },
  {
    id: '2',
    title: 'The Future of Mobile Development: React Native vs Flutter',
    excerpt: 'A comprehensive comparison of the two leading cross-platform mobile frameworks and which one you should choose for your next project.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    category: 'Mobile Development',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  },
  {
    id: '3',
    title: 'AI-Powered Features: How to Integrate ChatGPT into Your App',
    excerpt: 'Step-by-step guide to adding AI capabilities to your application using OpenAI\'s API and best practices for prompt engineering.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'AI Solutions',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  },
  {
    id: '4',
    title: 'Design Systems That Scale: Lessons from Building Enterprise UIs',
    excerpt: 'How we built a design system that serves 50+ products and maintains consistency across web, mobile, and desktop applications.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    category: 'Product Design',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  },
  {
    id: '5',
    title: 'From Idea to Launch: Our 90-Day Product Development Process',
    excerpt: 'Behind the scenes look at how we take a product from concept to market in just 90 days, including real case studies and timelines.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    category: 'Product Design',
    date: 'Nov 20, 2024',
    readTime: '12 min read',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  },
  {
    id: '6',
    title: 'Performance Optimization: Making Your React App Lightning Fast',
    excerpt: 'Practical tips and techniques for optimizing React applications, from code splitting to lazy loading and beyond.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    category: 'Web Development',
    date: 'Nov 15, 2024',
    readTime: '9 min read',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Product Design', 'AI Solutions'];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8f8f8] pt-20">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-[var(--font-geist)] font-light text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Blog
              </h1>
              <p className="font-[var(--font-geist)] text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                Insights, tutorials, and stories from our team about product development, design, and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-[#e0e0e0]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-[var(--font-geist)] text-sm transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-[#4A7FFF] text-white'
                      : 'bg-white text-[#1a1a1a] hover:bg-[#4A7FFF]/10 border border-[#e0e0e0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-[var(--font-geist)] font-medium text-[#1a1a1a]">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-[#1a1a1a]/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="font-[var(--font-geist)] font-semibold text-xl text-[#1a1a1a] mb-3 group-hover:text-[#4A7FFF] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="font-[var(--font-geist)] text-[#1a1a1a]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="font-[var(--font-geist)] text-sm text-[#1a1a1a]">
                          {post.author.name}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-[#4A7FFF] text-sm font-[var(--font-geist)] font-medium group-hover:gap-2 transition-all"
                      >
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
