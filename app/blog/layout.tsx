import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Coming Soon | Canvas&Pixels',
  description: 'Our blog is coming soon. Stay tuned for insights on product design, development, and innovation.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
