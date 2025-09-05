'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

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
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
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

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 sm:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                                        {experience.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-primary font-medium">
                                                        <span>{experience.company}</span>
                                                        <span>•</span>
                                                        <div className="flex items-center gap-1 text-sm">
                                                            <MapPin className="w-4 h-4" />
                                                            {experience.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:items-end gap-2">
                                                    <Badge variant="secondary" className="w-fit">
                                                        {experience.type}
                                                    </Badge>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <Calendar className="w-4 h-4" />
                                                        {experience.period}
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                {experience.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {experience.skills.map((skill) => (
                                                    <Badge key={skill} variant="outline" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
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
