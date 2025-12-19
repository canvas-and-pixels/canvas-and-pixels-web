import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FAQSection from '@/components/FAQSection';
import CollaborationHero from '@/components/CollaborationHero';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ServicesSection />
      <WhyChooseSection />
      <FAQSection />
      <CollaborationHero />
      <Footer />
      <ContactModal />
    </main>
  );
}
