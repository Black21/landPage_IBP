import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorshipTimes from "@/components/WorshipTimes";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WorshipTimes />
      <AboutSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
