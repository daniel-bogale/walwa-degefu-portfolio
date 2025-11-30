'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 3,
        title: 'Postor Design Collection',
        description: 'A curated set of design works showcasing various creative projects.',
        category: 'Graphic Design',
        thumbnail: '/projects/postors/PICK DELIVERY_2.png',
        images: [
            '/projects/postors/2.png',
            '/projects/postors/bini_2_show case.png',
            '/projects/postors/G_f_H_3_POST.png',
            '/projects/postors/PICK DELIVERY_2.png',
            '/projects/postors/PICK DELIVERY_app.png',
            '/projects/postors/social media_screen.png',
            '/projects/postors/temer_1.png',
            '/projects/postors/TS_post 1 whitebg_pg8 (2).png',
            '/projects/postors/winza_1.png',
            '/projects/postors/winza-2.png'
        ],
        technologies: ['Illustrator', 'Photoshop', 'Print Design'],
        // link: '#'
    }
    ,
    {
        id: 4,
        title: 'Thumbnail Designs',
        description: 'A collection of thumbnail designs and small-format visuals created for various projects and social platforms.',
        category: 'Graphic Design',
        thumbnail:
            '/projects/thumbnails/facebook add.png',
        images: [
            '/projects/thumbnails/facebook add.png',
            '/projects/thumbnails/from 3k upto 500k.png',
        ],
        technologies: ['Photoshop', 'Illustrator'],
        // link: '#'
    },
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

];

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto">
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <Card
                                className="group cursor-pointer border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full flex flex-col p-0"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                        <span className="text-white font-medium flex items-center gap-2">
                                            View Details <Eye className="w-4 h-4" />
                                        </span>
                                    </div>
                                    <Image
                                        src={project.thumbnail}
                                        alt={`${project.title} thumbnail`}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between mb-3">
                                        <Badge variant="secondary" className="bg-secondary/50 hover:bg-secondary/70 transition-colors">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)} >
                    <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-background/95 backdrop-blur-xl border-border/50 p-0 gap-0">
                        <DialogHeader className="p-6 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-xl z-10">
                            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                {selectedProject?.title}
                                {selectedProject && (
                                    <Badge variant="secondary">
                                        {selectedProject.category}
                                    </Badge>
                                )}
                            </DialogTitle>
                        </DialogHeader>

                        {selectedProject && (
                            <div className="p-6 space-y-8">
                                <div className="space-y-4">
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="px-3 py-1">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {selectedProject.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative w-full rounded-xl overflow-hidden shadow-md group aspect-auto"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
