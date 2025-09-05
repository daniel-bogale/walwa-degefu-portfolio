'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold text-foreground"
                    >
                        Waluwa Degefu
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
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
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="hidden sm:inline-flex"
                        size="sm"
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
