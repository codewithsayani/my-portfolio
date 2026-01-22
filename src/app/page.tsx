import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}
