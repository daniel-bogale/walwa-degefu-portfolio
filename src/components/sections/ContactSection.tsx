'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  MessageCircle,
  Download
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+251988095969',
    href: 'tel:+251988095969'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'waluwab@gmail.com',
    href: 'mailto:waluwab@gmail.com'
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Behance',
    icon: ExternalLink,
    href: '#',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Dribbble',
    icon: ExternalLink,
    href: '#',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    color: 'hover:text-pink-600'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete brand identity, web design, or marketing materials, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start a Project
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Follow My Work
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  I typically respond to inquiries within 24 hours. For urgent projects, 
                  feel free to call me directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
