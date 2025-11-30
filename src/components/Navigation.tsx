'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        WD.
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { id: 'hero', label: 'Home' },
                            { id: 'experience', label: 'Experience' },
                            { id: 'projects', label: 'Projects' },
                            { id: 'skills', label: 'Skills' },
                            { id: 'contact', label: 'Contact' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="hidden sm:inline-flex rounded-full px-6"
                        size="sm"
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
