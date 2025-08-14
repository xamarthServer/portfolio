import About from "@/components/about";
import Audio from "@/components/audio";
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
      {/* <Audio src="/bgaudio.mp3" /> */}
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
