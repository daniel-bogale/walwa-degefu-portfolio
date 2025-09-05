'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/20">
              <AvatarImage src="/profile-photo.jpg" alt="Waluwa Degefu" />
              <AvatarFallback className="text-2xl font-bold bg-primary/10">
                WD
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Waluwa Degefu
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary">
              Graphics Designer & UI/UX Designer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Detail-oriented graphic designer passionate about creating visually appealing content. 
              Skilled in Illustrator, Photoshop, WordPress, and Figma. Seeking opportunities to make 
              meaningful impact through creative design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-16"
          >
            <motion.button
              onClick={() => scrollToSection('experience')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
              <span className="text-sm mt-2 block">Scroll to explore</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
