'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ArrowDown, Sparkles, Eye } from 'lucide-react';

export function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 animate-pulse" />
                            <Avatar className="relative w-32 h-32 sm:w-48 sm:h-48 border-4 border-background shadow-xl">
                                <AvatarImage src="/profile.jpg" alt="Waluwa Degefu" className="object-cover" />
                                <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">
                                    WD
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </motion.div>

                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Available for new projects</span>
                            </motion.div>
                            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-foreground">
                                Waluwa Degefu
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                Graphics Designer & UI/UX Designer
                            </h2>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Crafting digital experiences that blend aesthetics with functionality.
                            Specializing in brand identity, user interface design, and visual storytelling.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            className="w-full sm:w-auto text-lg h-12 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                        >
                            View My Work
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-lg h-12 px-8 rounded-full border-2 hover:bg-secondary/50"
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View CV
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl w-[95vw] h-[96vh] p-0 overflow-hidden flex flex-col gap-0 bg-background/95 backdrop-blur-sm">
                                <DialogHeader className="p-2 border-b flex-shrink-0 flex flex-row items-center justify-between">
                                    <DialogTitle className="text-sm font-semibold">
                                        My CV
                                    </DialogTitle>
                                    <DialogDescription className="sr-only">
                                        Preview of Waluwa Degefu&apos;s Resume
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex-1 w-full h-full bg-muted/10 relative">
                                    <iframe
                                        src="/walwa-degefu-cv.pdf#toolbar=0&navpanes=0"
                                        className="w-full h-full border-none"
                                        title="CV Preview"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="pt-20"
                    >
                        <motion.button
                            onClick={() => scrollToSection('experience')}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowDown className="w-6 h-6 mx-auto" />
                            <span className="text-sm mt-2 block font-medium">Scroll to explore</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
