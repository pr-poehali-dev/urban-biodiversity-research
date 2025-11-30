import { useState } from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import TableOfContents from '@/components/TableOfContents';
import ProjectSections from '@/components/ProjectSections';
import ProjectFooter from '@/components/ProjectFooter';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <ProjectHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <TableOfContents activeSection={activeSection} scrollToSection={scrollToSection} />
          <ProjectSections />
        </div>
      </div>

      <ProjectFooter />
    </div>
  );
};

export default Index;
