import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ProjectModalProvider } from "@/components/ProjectModal";

export default function Home() {
  return (
    <ProjectModalProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <WorkWithMe />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </ProjectModalProvider>
  );
}
