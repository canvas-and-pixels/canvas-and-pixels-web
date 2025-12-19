import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
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
  index?: number;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  author,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <Link href={`/blog/${id}`} className="block relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-[var(--font-geist)] font-medium text-[#1a1a1a]">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3 text-sm text-[#1a1a1a]/60">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${id}`}>
          <h2 className="font-[var(--font-geist)] font-semibold text-xl text-[#1a1a1a] mb-3 group-hover:text-[#4A7FFF] transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="font-[var(--font-geist)] text-[#1a1a1a]/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
          <div className="flex items-center gap-3">
            <Image
              src={author.avatar}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-[var(--font-geist)] text-sm text-[#1a1a1a]">
              {author.name}
            </span>
          </div>
          <Link
            href={`/blog/${id}`}
            className="flex items-center gap-1 text-[#4A7FFF] text-sm font-[var(--font-geist)] font-medium group-hover:gap-2 transition-all"
          >
            Read
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
