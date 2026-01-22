"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react"; // Removed unused imports
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden -z-10 bg-transparent pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out to me.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-secondary/10 rounded-2xl p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Let's Talk</h3>
                        <p className="text-muted-foreground">
                            I'm currently open to new opportunities and collaborations.
                        </p>

                        <div className="space-y-4">
                            <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors border border-white/5">
                                <div className="p-2 rounded-full bg-primary/20 text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                                    <p className="font-semibold">{siteConfig.email}</p>
                                </div>
                            </Link>

                            <div className="flex gap-4 pt-4">
                                {siteConfig.socials.map((social: any) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        className="p-3 rounded-full bg-background border border-white/10 hover:border-primary hover:text-primary transition-all"
                                    >
                                        <social.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        action="https://formspree.io/f/your-form-id" // Placeholder
                        method="POST"
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="Your message..."
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            />
                        </div>

                        <button type="submit" className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
