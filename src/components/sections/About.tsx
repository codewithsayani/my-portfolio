"use client";

import { motion } from "framer-motion";
import { siteConfig, skills } from "@/lib/data";
import { Code2, Database, Layout, Server, Terminal } from "lucide-react";

const skillIcons = [
    { name: "Frontend", icon: Layout, color: "text-blue-500" },
    { name: "Backend", icon: Server, color: "text-green-500" },
    { name: "Database", icon: Database, color: "text-yellow-500" },
    { name: "Tools", icon: Terminal, color: "text-purple-500" },
];

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Bio */}
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hello! I'm <span className="text-foreground font-medium">{siteConfig.name}</span>, a dedicated {siteConfig.role} based in India.
                            </p>
                            <p>
                                {siteConfig.description} I thrive on turning complex problems into beautiful, intuitive, and performant web applications.
                                With a strong foundation in the MERN stack and Next.js, I bridge the gap between design and engineering.
                            </p>
                            <p>
                                When I'm not coding, I'm exploring new technologies, contributing to open source, or refining my design skills.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Code2 className="text-primary" /> Technical Arsenal
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill: string, index: number) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 rounded-lg bg-background border border-white/10 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {skillIcons.map((item) => (
                                    <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-white/5">
                                        <item.icon className={item.color} size={20} />
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
