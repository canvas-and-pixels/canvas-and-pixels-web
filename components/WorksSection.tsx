'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Calendar, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
  gradient: string;
  description: string;
  client: string;
  duration: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    icon: any;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    tags: ['Product design', 'Web development'],
    image: '/projects/project1.jpg', // Replace with actual image
    gradient: 'from-purple-500 to-pink-500',
    description: 'A modern e-commerce platform built for a leading fashion retailer. Features include real-time inventory management, AI-powered recommendations, and seamless checkout experience.',
    client: 'Fashion Retail Co.',
    duration: '6 months (Jan 2024 - Jun 2024)',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    metrics: [
      { label: 'Active Users', value: '50K+', icon: Users },
      { label: 'Conversion Rate', value: '+45%', icon: TrendingUp },
      { label: 'Launch Date', value: 'Jun 2024', icon: Calendar },
    ],
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    tags: ['Mobile development', 'AI solutions'],
    image: '/projects/project2.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'An innovative healthcare app connecting patients with doctors through video consultations, AI symptom checker, and prescription management.',
    client: 'MediCare Health',
    duration: '8 months (Mar 2024 - Oct 2024)',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow', 'WebRTC'],
    metrics: [
      { label: 'Downloads', value: '100K+', icon: Users },
      { label: 'Rating', value: '4.8/5', icon: TrendingUp },
      { label: 'Launch Date', value: 'Oct 2024', icon: Calendar },
    ],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    tags: ['Product design', 'Web development'],
    image: '/projects/project3.jpg',
    gradient: 'from-orange-500 to-red-500',
    description: 'A comprehensive analytics dashboard for B2B SaaS companies. Real-time data visualization, custom reports, and team collaboration features.',
    client: 'DataFlow Analytics',
    duration: '4 months (Jul 2024 - Oct 2024)',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB', 'Docker'],
    metrics: [
      { label: 'Companies', value: '200+', icon: Users },
      { label: 'Data Points', value: '1M+/day', icon: TrendingUp },
      { label: 'Launch Date', value: 'Oct 2024', icon: Calendar },
    ],
  },
  {
    id: 4,
    title: 'AI Content Generator',
    tags: ['AI solutions', 'Web development'],
    image: '/projects/project4.jpg',
    gradient: 'from-green-500 to-emerald-500',
    description: 'An AI-powered content creation platform helping marketers generate blog posts, social media content, and ad copy in seconds.',
    client: 'ContentAI Inc.',
    duration: '5 months (May 2024 - Sep 2024)',
    technologies: ['Next.js', 'OpenAI API', 'Python', 'Redis', 'Vercel', 'Supabase'],
    metrics: [
      { label: 'Users', value: '25K+', icon: Users },
      { label: 'Content Generated', value: '500K+', icon: TrendingUp },
      { label: 'Launch Date', value: 'Sep 2024', icon: Calendar },
    ],
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    tags: ['Mobile development', 'Product design'],
    image: '/projects/project5.jpg',
    gradient: 'from-pink-500 to-rose-500',
    description: 'A comprehensive fitness app with workout tracking, nutrition planning, and social features to keep users motivated.',
    client: 'FitLife Studios',
    duration: '7 months (Feb 2024 - Aug 2024)',
    technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit', 'Google Fit'],
    metrics: [
      { label: 'Active Users', value: '75K+', icon: Users },
      { label: 'Workouts Logged', value: '1M+', icon: TrendingUp },
      { label: 'Launch Date', value: 'Aug 2024', icon: Calendar },
    ],
  },
];

export default function WorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth < 768;
      const cardWidth = window.innerWidth * (isMobile ? 0.9 : 0.75) + 24; // 90vw mobile, 75vw desktop + gap
      const scrollPosition = currentIndex * cardWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="works" className="relative bg-[#1a1a1a] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[var(--font-geist)] font-light text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Our works
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Navigation Arrows - Outside */}
          <button
            onClick={handlePrevious}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 flex-shrink-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Cards Container */}
          <div className="flex-1 max-w-[90vw] md:max-w-[75vw] overflow-hidden">
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="flex-shrink-0 w-[90vw] md:w-[75vw] cursor-pointer group snap-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                {/* Project Card */}
                <div className="relative h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
                  {/* Gradient Background (placeholder) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  
                  {/* Image Overlay (when you add real images) */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-[var(--font-geist)] font-normal text-2xl text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-[var(--font-geist)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={handleNext}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 flex-shrink-0"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[90vh] bg-[#1a1a1a] rounded-3xl overflow-hidden z-50 border border-white/10"
            >
              <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className={`relative h-[250px] md:h-[350px] lg:h-[450px] bg-gradient-to-br ${selectedProject.gradient}`}>
                  {/* Replace with actual image */}
                  {/* <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Title & Tags */}
                  <h2 className="font-[var(--font-geist)] font-light text-3xl md:text-4xl text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex gap-2 flex-wrap mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-[var(--font-geist)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="font-[var(--font-geist)] text-white/80 text-base leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-[var(--font-geist)] font-normal text-white/60 text-sm mb-2">
                        Client
                      </h3>
                      <p className="font-[var(--font-geist)] text-white text-base">
                        {selectedProject.client}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-geist)] font-normal text-white/60 text-sm mb-2">
                        Duration
                      </h3>
                      <p className="font-[var(--font-geist)] text-white text-base">
                        {selectedProject.duration}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="font-[var(--font-geist)] font-normal text-white/60 text-sm mb-3">
                      Technologies
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-[#4A7FFF]/10 border border-[#4A7FFF]/30 rounded-lg text-[#4A7FFF] text-sm font-[var(--font-geist)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="font-[var(--font-geist)] font-normal text-white/60 text-sm mb-4">
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            className="p-4 bg-white/5 border border-white/10 rounded-xl"
                          >
                            <Icon className="w-5 h-5 text-[#4A7FFF] mb-2" />
                            <p className="font-[var(--font-geist)] font-light text-2xl text-white mb-1">
                              {metric.value}
                            </p>
                            <p className="font-[var(--font-geist)] text-white/60 text-xs">
                              {metric.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
