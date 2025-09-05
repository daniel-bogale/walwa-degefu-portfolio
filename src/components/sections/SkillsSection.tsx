'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Palette,
    Monitor,
    Users,
    Globe,
    Lightbulb,
    MessageCircle,
    Languages
} from 'lucide-react';

const skillCategories = [
    {
        id: 'technical',
        title: 'Technical Skills',
        icon: Monitor,
        skills: [
            { name: 'Adobe Illustrator', level: 'Expert' },
            { name: 'Adobe Photoshop', level: 'Expert' },
            { name: 'Figma', level: 'Advanced' },
            { name: 'WordPress', level: 'Advanced' },
            { name: 'UI/UX Design', level: 'Advanced' },
            { name: 'Web Design', level: 'Intermediate' }
        ]
    },
    {
        id: 'soft',
        title: 'Soft Skills',
        icon: Users,
        skills: [
            { name: 'Quick Learner', level: 'Expert' },
            { name: 'Adaptable', level: 'Expert' },
            { name: 'Excellent Communication', level: 'Expert' },
            { name: 'Problem Solving', level: 'Advanced' },
            { name: 'Time Management', level: 'Advanced' },
            { name: 'Team Collaboration', level: 'Advanced' }
        ]
    },
    {
        id: 'languages',
        title: 'Languages',
        icon: Languages,
        skills: [
            { name: 'English', level: 'Fluent' },
            { name: 'Amharic', level: 'Native' }
        ]
    }
];

const getLevelColor = (level: string) => {
    switch (level) {
        case 'Expert':
        case 'Native':
            return 'bg-green-500';
        case 'Advanced':
        case 'Fluent':
            return 'bg-blue-500';
        case 'Intermediate':
            return 'bg-yellow-500';
        default:
            return 'bg-gray-500';
    }
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical and soft skills
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <category.icon className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-bold">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="space-y-2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {skill.level}
                                                </Badge>
                                            </div>

                                            <div className="w-full bg-muted rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: skill.level === 'Expert' || skill.level === 'Native' ? '100%' :
                                                            skill.level === 'Advanced' || skill.level === 'Fluent' ? '85%' :
                                                                skill.level === 'Intermediate' ? '70%' : '60%'
                                                    }}
                                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center text-xl font-bold">
                                Additional Expertise
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {[
                                    'Brand Identity Design',
                                    'Social Media Graphics',
                                    'Print Design',
                                    'Logo Design',
                                    'Marketing Materials',
                                    'User Interface Design',
                                    'User Experience Design',
                                    'Web Graphics',
                                    'Illustration',
                                    'Photo Editing',
                                    'Color Theory',
                                    'Typography'
                                ].map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
