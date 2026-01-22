"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { education } from "@/lib/data";

interface ExperienceItem {
    role: string;
    company: string;
    date: string;
    description: string;
}

const experience: ExperienceItem[] = [
    {
        role: "Machine Learning",
        company: "Interest & Projects",
        date: "Present",
        description:
            "Building predictive models and exploring neural networks. Experience with Python, Scikit-learn, and TensorFlow.",
    },
    {
        role: "Web Development",
        company: "Full Stack Projects",
        date: "Present",
        description:
            "Designing and developing responsive web applications using the MERN stack and Next.js. Focused on performance and user experience.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Briefcase className="text-primary" /> Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-primary/20 pl-8 relative">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 p-2 rounded-full bg-background border border-primary/50 text-primary">
                                        <Briefcase size={16} />
                                    </span>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors">
                                        <h4 className="text-xl font-bold">{item.role}</h4>
                                        <p className="text-primary font-medium mb-1">{item.company}</p>
                                        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                                            <Calendar size={14} /> {item.date}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Briefcase className="text-primary" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-primary/20 pl-8 relative">
                            {education.map((item: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 p-2 rounded-full bg-background border border-primary/50 text-primary">
                                        <Briefcase size={16} />
                                    </span>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors">
                                        <h4 className="text-xl font-bold">{item.degree}</h4>
                                        <p className="text-primary font-medium mb-1">{item.institution}</p>
                                        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                                            <Calendar size={14} /> {item.year}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
