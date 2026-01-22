"use client";

import { motion } from "framer-motion";
import { Award, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const achievements = [
    {
        title: "Bharatiya Antariksh Hackathon 2025",
        issuer: "ISRO & Hack2Skill",
        description: "Certificate of Acknowledgement for submitting innovative ideas for the Bharatiya Antariksh Hackathon 2025.",
        link: "/certificates/bharatiya-antariksh-hackathon.pdf",
        icon: Award,
    },
    {
        title: "AI & Data Analytics Internship",
        issuer: "Edunet Foundation",
        description: "Completed 4-week virtual internship on Artificial Intelligence and Data Analytics focused on Green Skills (AICTE & Shell).",
        link: "/certificates/ai-green-skills-internship.pdf",
        icon: Award,
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 relative">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Achieve<span className="text-gradient">ments</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-secondary/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all hover:bg-secondary/30 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <item.icon size={100} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit text-primary">
                                    <item.icon size={24} />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-primary font-medium mb-3">{item.issuer}</p>
                                <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>

                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:text-primary/80 transition-colors"
                                >
                                    View Certificate <ExternalLink size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
