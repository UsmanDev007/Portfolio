"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { useProjectModal } from "@/components/ProjectModal";
import { projects } from "@/data/projects";

const HeroHeader: React.FC = () => {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="max-w-7xl relative mx-auto pt-16 md:pt-24 px-4 w-full left-0 top-0 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pill glass text-fg/90 mb-6"
      >
        <Sparkles className="h-3.5 w-3.5 text-accent" /> Open to full-time roles &amp; B2B projects
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-fg leading-[1.05] tracking-tight"
      >
        Hi, I&apos;m Usman.
        <br />
        I build web products that <span className="text-accent">ship</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-fg/70"
      >
        FullStack Developer with 2 years of experience in the MERN stack, Next.js and TypeScript. I join
        software houses and product teams as a dependable engineer, and I deliver complete web
        products for businesses as a B2B partner.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button onClick={() => go("#work")} className="btn-royal">
          Work With Me <ArrowRight className="h-4 w-4" />
        </button>
        <button onClick={() => go("#projects")} className="btn-ghost">
          View My Work
        </button>
      </motion.div>

      <div className="mt-8 flex justify-center gap-3">
        {[
          { href: "https://github.com/UsmanDev007", icon: Github, label: "GitHub Profile", ext: true },
          { href: "https://www.linkedin.com/in/muhammad-osman69", icon: Linkedin, label: "LinkedIn Profile", ext: true },
          { href: "mailto:Osman.Wad69@gmail.com", icon: Mail, label: "Email Contact", ext: false },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            {...(s.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={s.label}
            className="grid place-items-center w-10 h-10 rounded-full glass text-fg hover:bg-royal transition-colors"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { open } = useProjectModal();

  // Show the client work first, then the rest, in the parallax rows
  const items = projects.map((p) => ({
    title: p.title,
    category: p.category,
    thumbnail: p.image,
    isVideo: !!p.video,
    onSelect: () => open(p),
  }));

  return <HeroParallax header={<HeroHeader />} products={items} />;
};

export default Hero;
