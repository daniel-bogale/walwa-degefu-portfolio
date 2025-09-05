'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <span>Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                        </motion.div>
                        <span>by Waluwa Degefu</span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © 2024 Waluwa Degefu. All rights reserved.
                    </p>

                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span>Graphics Designer</span>
                        <span>•</span>
                        <span>UI/UX Designer</span>
                        <span>•</span>
                        <span>Creative Professional</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
