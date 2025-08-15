import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="flex flex-col relative items-center px-4 top-[-6.25rem]">
      <Video src="/dty.mp4" />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
