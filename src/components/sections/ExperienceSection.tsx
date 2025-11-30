'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: 'Graphic Designer',
        company: 'DM Printing',
        location: 'Ethiopia',
        period: 'Jan 2023 - Present',
        description: 'Designed marketing materials, created eye-catching graphics aligned with brand messaging, collaborated on visual content for social media, websites, and promotions.',
        skills: ['Brand Design', 'Marketing Materials', 'Social Media Graphics', 'Web Design'],
        type: 'Full-time'
    },
    {
        id: 2,
        title: 'Freelance Graphic Designer',
        company: 'Self-Employed',
        location: 'Remote',
        period: 'Mar 2022 - Present',
        description: 'Worked with diverse clients for custom graphics, managed multiple projects meeting deadlines, developed strong client communication skills.',
        skills: ['Client Management', 'Project Management', 'Custom Graphics', 'Brand Identity'],
        type: 'Freelance'
    }
    ,
    {
        id: 3,
        title: 'Graphics Designer, UI/UX & Video Editor',
        company: 'Wedefit',
        location: 'Remote',
        period: '2023 - Present',
        description: 'Delivered creative design, UI/UX, & social media solutions that connect brands with audiences through impactful visual strategy.',
        skills: ['Graphic Design', 'UI/UX', 'Video Editing', 'Social Media'],
        type: 'Full-time'
    },
    {
        id: 4,
        title: 'Graphic Designer & Social Media Manager',
        company: 'Time Creatives',
        location: 'Remote',
        period: '2021 - 2023',
        description: 'Designed neon signs, posters, & social media posts that elevated brand visibility and impact.',
        skills: ['Poster Design', 'Signage', 'Social Media', 'Brand Visibility'],
        type: 'Contract'
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Work Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My professional journey in graphic design and creative services
                    </p>
                </motion.div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>

                            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-primary font-medium">
                                                    {experience.company}
                                                </p>
                                            </div>
                                            <Badge variant="secondary" className="bg-secondary/50">
                                                {experience.type}
                                            </Badge>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {experience.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {experience.period}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {experience.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {experience.skills.map((skill) => (
                                                <Badge key={skill} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
