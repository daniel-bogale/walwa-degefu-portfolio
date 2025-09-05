'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Temari Share',
        description: 'A free hub for ready-made projects, assignments, and thesis ideas.',
        category: 'Brand Design',
        thumbnail: '/projects/temari-share/TS_logo_main.png',
        images: [
            '/projects/temari-share/__________.png',
            '/projects/temari-share/APP_ICON_pg7.png',
            '/projects/temari-share/cover page_behance_test.png',
            '/projects/temari-share/horizontal logo_corect.png',
            '/projects/temari-share/horizontal logo.png',
            '/projects/temari-share/logo_in black_background_pg2.png',
            '/projects/temari-share/logo_in white_background_pg9.png',
            '/projects/temari-share/logo_lineup_pg 13.png',
            '/projects/temari-share/press_conference_backdrop_logo_placement wooooo.png',
            '/projects/temari-share/social media_post_screen_Mockup.png',
            '/projects/temari-share/TS_logo_darkbg_pg6.png',
            '/projects/temari-share/TS_logo_main.png',
            '/projects/temari-share/TS_logo_skach_pg2.png',
            '/projects/temari-share/TS_logo_whitbg_1pg.png',
            '/projects/temari-share/TS_Mocku up_dark_final2 pg.png',
            '/projects/temari-share/TS_mockup_2_last pg.png',
            '/projects/temari-share/TS_Mockup.png',
            '/projects/temari-share/TS_note book design.png',
            '/projects/temari-share/TS_notebook_Mockup_finall.png',
            '/projects/temari-share/TS_post 1 whitebg_pg8.png',
            '/projects/temari-share/TS_typeface_pg4.png',
            '/projects/temari-share/TS_Wall Logo Mockup.png',
            '/projects/temari-share/TS_webe_mock up.png',
            '/projects/temari-share/TS-color palet_pg17.png',
            '/projects/temari-share/Untitled-1.png',
            '/projects/temari-share/vertical_logo_perestation_add_19.png'
        ],
        technologies: ['Figma', 'Full Branding', 'UI/UX Design'],
        // link: '#'
    },
    {
        id: 2,
        title: 'M2M',
        description: 'A motivational content channel on YouTube and social media.',
        category: 'Brand Design',
        thumbnail: '/projects/m2m/m2m_presntation_pg1.png',
        images: [
            '/projects/m2m/Artboard 9.png',
            '/projects/m2m/m2m_p_pd11_trifold.png',
            '/projects/m2m/m2m_p_pg-6.png',
            '/projects/m2m/m2m_p_pg10_business.png',
            '/projects/m2m/m2m_P_pg12_icon.png',
            '/projects/m2m/m2m_p_pg13_sport wear cole.png',
            '/projects/m2m/m2m_p_pg14_ Office Logo Mockup.png',
            '/projects/m2m/m2m_p_pg2.png',
            '/projects/m2m/m2m_p_pg3.png',
            '/projects/m2m/m2m_p_pg4.png',
            '/projects/m2m/m2m_p_pg5.png',
            '/projects/m2m/m2m_p_pg7.png',
            '/projects/m2m/m2m_P_pg8.png',
            '/projects/m2m/m2m_p_pg9.png',
            '/projects/m2m/m2m_presntation_pg1.png'
        ],
        technologies: ['Illustrator', 'Photoshop', 'Social Media Design'],
        // link: '#'
    },
    {
        id: 3,
        title: 'Postor Design Collection',
        description: 'A curated set of design works showcasing various creative projects.',
        category: 'Graphic Design',
        thumbnail: '/projects/temari-share/APP_ICON_pg7.png',
        images: [
            '/projects/temari-share/__________.png',
            '/projects/temari-share/APP_ICON_pg7.png',
            '/projects/temari-share/cover page_behance_test.png',
            '/projects/m2m/m2m_p_pg4.png',
            '/projects/m2m/m2m_p_pg5.png',
        ],
        technologies: ['Illustrator', 'Photoshop', 'Print Design'],
        // link: '#'
    }
];

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my creative work and design projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={`${project.title} thumbnail`}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">Click to view details</span>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="!max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">
                                {selectedProject?.title}
                            </DialogTitle>
                        </DialogHeader>

                        {selectedProject && (
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <p className="text-muted-foreground">
                                    {selectedProject.description}
                                </p>

                                <div className="space-y-4">
                                    {selectedProject.images.map((image, index) => (
                                        <div key={index} className="relative w-full">
                                            <img
                                                src={image}
                                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                                className="w-full h-auto rounded-lg shadow-md"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="flex justify-center pt-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Project
                                    </a>
                                </div> */}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
