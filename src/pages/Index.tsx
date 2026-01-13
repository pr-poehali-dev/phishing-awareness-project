import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PhishingDefinition from '@/components/PhishingDefinition';
import ScamExamples from '@/components/ScamExamples';
import Protection from '@/components/Protection';
import Quiz from '@/components/Quiz';
import Resources from '@/components/Resources';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero onExplore={() => scrollToSection('definition')} />
        </section>

        <section id="definition">
          <PhishingDefinition />
        </section>

        <section id="examples">
          <ScamExamples />
        </section>

        <section id="protection">
          <Protection />
        </section>

        <section id="quiz">
          <Quiz />
        </section>

        <section id="resources">
          <Resources />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Цифровая Безопасность. Защитите себя от мошенников.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
