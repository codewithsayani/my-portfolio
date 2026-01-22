import { Github, ExternalLink, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
    fork: boolean;
}

async function getRepos() {
    try {
        const res = await fetch(
            "https://api.github.com/users/codewithsayani/repos?sort=updated&per_page=6",
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) return [];
        const repos: Repo[] = await res.json();
        return repos.filter((repo: Repo) => !repo.fork);
    } catch (error) {
        return [];
    }
}

export default async function Projects() {
    const repos = await getRepos();

    const featured = {
        name: "Attendance System",
        description: "A comprehensive class attendance management system built with modern web technologies.",
        url: "https://attendence-system-class.vercel.app",
        repo: "https://github.com/Sandipan003/Attendence-System",
        tech: ["Next.js", "MongoDB", "Tailwind", "Auth.js"],
        image: "/project-placeholder.jpg"
    };

    return (
        <section id="projects" className="py-20 bg-secondary/5">
            <div className="container px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work, from full-stack applications to frontend experiments.
                    </p>
                </div>

                {/* Featured Project */}
                <div className="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 p-1 mb-20 border-primary/20">
                    <div className="relative h-64 md:h-full min-h-[300px] bg-muted/50 rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                            PREVIEW
                        </div>
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                            FEATURED PROJECT
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{featured.name}</h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                            {featured.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {featured.tech.map((t) => (
                                <span key={t} className="px-3 py-1 rounded-md bg-background border border-border text-sm text-muted-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href={featured.url}
                                target="_blank"
                                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                Live Demo <ExternalLink size={18} />
                            </Link>
                            <Link
                                href={featured.repo}
                                target="_blank"
                                className="px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-all flex items-center gap-2"
                            >
                                Source <Github size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo) => (
                        <div
                            key={repo.id}
                            className="group relative rounded-xl bg-background/50 border border-white/5 hover:border-primary/50 transition-colors p-6 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-lg bg-secondary text-primary">
                                    <Github size={20} />
                                </div>
                                <div className="flex gap-3 text-muted-foreground">
                                    {/* Safe check if homepage exists */}
                                    {repo.homepage && (
                                        <Link href={repo.homepage} target="_blank" className="hover:text-primary">
                                            <ExternalLink size={18} />
                                        </Link>
                                    )}
                                    <div className="flex items-center gap-1 text-xs">
                                        <Star size={14} /> {repo.stargazers_count}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                <Link href={repo.html_url} target="_blank">
                                    {repo.name}
                                </Link>
                            </h3>
                            <p className="text-muted-foreground text-sm flex-grow mb-4 line-clamp-3">
                                {repo.description || "No description available."}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {repo.language && (
                                    <span className="text-xs px-2 py-1 rounded bg-secondary/50 text-secondary-foreground">
                                        {repo.language}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="https://github.com/codewithsayani"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-primary hover:underline hover:text-primary/80 transition-colors"
                    >
                        View all repositories <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
