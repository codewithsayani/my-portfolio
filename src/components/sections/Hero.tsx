"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-600 dark:text-purple-300 font-medium"
                    >
                        👋 Hi, I'm Sayani Das
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
                        Building digital <br />
                        <span className="text-gradient">experiences</span> that matter.
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg">
                        {siteConfig.role}. {siteConfig.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-colors font-semibold flex items-center gap-2"
                        >
                            Resume <Download size={20} />
                        </Link>
                    </div>

                    <div className="flex gap-4 pt-4 text-muted-foreground">
                        <Link href={siteConfig.socials[0].href} target="_blank" className="hover:text-primary transition-colors">
                            <Github size={24} />
                        </Link>
                        <Link href={siteConfig.socials[1].href} target="_blank" className="hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </motion.div>

                {/* Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto lg:ml-auto"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                        {/* Glass Card Effect behind */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/20 backdrop-blur-sm transform rotate-6 z-0" />

                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-background/30 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden z-10 shadow-2xl">
                            <Image
                                src="/myself.jpeg"
                                alt="Sayani Das"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -bottom-6 -left-6 z-20 p-4 rounded-xl glass-card flex items-center gap-3"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-medium">Open to work</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
