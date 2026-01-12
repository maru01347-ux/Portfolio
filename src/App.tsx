import { useState } from 'react';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
    </div>
  );
}