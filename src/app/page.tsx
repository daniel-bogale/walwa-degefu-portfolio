'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 ">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}