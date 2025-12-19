import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactModal />
    </main>
  );
}
