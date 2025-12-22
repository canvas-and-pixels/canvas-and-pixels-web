'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Calendar, Users, TrendingUp, ExternalLink, FileText } from 'lucide-react';
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
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  caseStudyUrl?: string;
  metrics: {
    label: string;
    value: string;
    icon: any;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Peony',
    tags: ['Mobile development', 'Product design', 'Web development'],
    image: '/peony.png',
    gradient: 'from-pink-500 to-rose-500',
    description: 'A modern daycare management application that streamlines daily operations for childcare providers. Peony enables seamless check-in/check-out processes, real-time updates about children\'s activities, meals, and milestones, and secure parent-teacher communication. The platform includes both a mobile app for parents and staff, plus a comprehensive admin dashboard for daycare management.',
    client: 'Peony Daycare Solutions',
    duration: '6 months (2024)',
    technologies: ['Flutter', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://peonykids.co',
    appStoreUrl: 'https://apps.apple.com/us/app/peonykids/id6714483325',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.peony.peonykids&pcampaignid=web_share',
    metrics: [
      { label: 'Daily Check-ins', value: '100+', icon: Users },
      { label: 'Parent Satisfaction', value: '98%', icon: TrendingUp },
      { label: 'Launch Date', value: '2024', icon: Calendar },
    ],
  },
  {
    id: 2,
    title: 'Focuslog',
    tags: ['Mobile development', 'Product design', 'AI solutions'],
    image: '/focuslog.jpg',
    gradient: 'from-purple-500 to-indigo-500',
    description: 'A smart productivity and time-tracking application designed for professionals who want to master their focus and understand how they spend their time. Focuslog combines Pomodoro technique with intelligent project tracking, allowing users to create custom projects with tags, track activities across devices, and gain deep insights through AI-powered analytics. Whether you\'re timing a 13-minute task or tracking a month-long project, Focuslog provides comprehensive analytics to help you optimize your productivity and understand your work patterns.',
    client: 'Focuslog',
    duration: '6 months (2024)',
    technologies: ['Flutter', 'Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL', 'Supabase', 'Chrome Extension'],
    liveUrl: 'https://usefocuslog.app',
    metrics: [
      { label: 'Active Users', value: '1K+', icon: Users },
      { label: 'Time Tracked', value: '10K+ hrs', icon: TrendingUp },
      { label: 'Launch Date', value: '2024', icon: Calendar },
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
                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 75vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
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
                <div className="relative h-[250px] md:h-[350px] lg:h-[450px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 1024px"
                  />
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
                  <p className="font-[var(--font-geist)] text-white/80 text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#4A7FFF] text-white rounded-full font-[var(--font-geist)] text-sm hover:bg-[#4A7FFF]/90 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Site
                      </a>
                    )}
                    {selectedProject.appStoreUrl && (
                      <a
                        href={selectedProject.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-black text-white border border-white/20 rounded-full font-[var(--font-geist)] text-sm hover:bg-black/80 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        App Store
                      </a>
                    )}
                    {selectedProject.playStoreUrl && (
                      <a
                        href={selectedProject.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-full font-[var(--font-geist)] text-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Google Play
                      </a>
                    )}
                    {selectedProject.caseStudyUrl && selectedProject.caseStudyUrl !== '#' && (
                      <a
                        href={selectedProject.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-full font-[var(--font-geist)] text-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <FileText className="w-4 h-4" />
                        Case Study
                      </a>
                    )}
                  </div>

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
                    {selectedProject.duration && (
                      <div>
                        <h3 className="font-[var(--font-geist)] font-normal text-white/60 text-sm mb-2">
                          Duration
                        </h3>
                        <p className="font-[var(--font-geist)] text-white text-base">
                          {selectedProject.duration}
                        </p>
                      </div>
                    )}
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
