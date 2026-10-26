"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2 } from "lucide-react";
import {
  siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss3,
  siTailwindcss, siSass, siStyledcomponents, siFigma, siAdobexd,
  siGit, siGithub, siWebpack, siVite, siEslint, siJest, siPostman,
  siStrapi, siPrisma, siPostgresql, siMongodb, siGraphql, siApollographql,
  siRedux, siNodedotjs, siMui, siReacthookform, siExpress, siMongoose,
} from "simple-icons";
import { LogoCloud, type Logo } from "@/components/ui/logo-cloud";

const fromIcon = (icon: { title: string; path: string; hex: string }, name = icon.title): Logo => ({
  name,
  path: icon.path,
  hex: icon.hex,
});

// Interleaved so each row mixes frontend, styling, tooling and backend
const logos: Logo[] = [
  fromIcon(siReact, "React"),
  fromIcon(siNextdotjs, "Next.js"),
  fromIcon(siTypescript, "TypeScript"),
  fromIcon(siJavascript, "JavaScript"),
  fromIcon(siHtml5, "HTML5"),
  fromIcon(siCss3, "CSS3"),
  fromIcon(siTailwindcss, "Tailwind CSS"),
  fromIcon(siSass, "Sass/SCSS"),
  fromIcon(siStyledcomponents, "Styled Components"),
  fromIcon(siMui, "Material UI"),
  fromIcon(siRedux, "Redux Toolkit"),
  fromIcon(siReacthookform, "React Hook Form"),
  { name: "Responsive Design", Icon: Smartphone },
  fromIcon(siFigma, "Figma"),
  fromIcon(siAdobexd, "Adobe XD"),
  fromIcon(siGit, "Git"),
  fromIcon(siGithub, "GitHub"),
  fromIcon(siWebpack, "Webpack"),
  fromIcon(siVite, "Vite"),
  fromIcon(siEslint, "ESLint"),
  fromIcon(siJest, "Jest"),
  fromIcon(siPostman, "Postman"),
  { name: "VS Code", Icon: Code2 },
  fromIcon(siNodedotjs, "Node.js"),
  fromIcon(siExpress, "Express"),
  fromIcon(siStrapi, "Strapi 5"),
  fromIcon(siPrisma, "Prisma ORM"),
  fromIcon(siPostgresql, "PostgreSQL"),
  fromIcon(siMongodb, "MongoDB"),
  fromIcon(siMongoose, "Mongoose"),
  fromIcon(siGraphql, "GraphQL"),
  fromIcon(siApollographql, "Apollo Client"),
];

const Skills: React.FC = () => (
  <section id="skills" className="hero-bg relative py-20 sm:py-28 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="pill glass text-fg/90 mb-5">Skills &amp; Expertise</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-fg leading-tight">
          A Toolkit for <span className="text-accent">Exceptional</span> Web Experiences
        </h2>
        <p className="mt-4 text-fg-soft max-w-2xl mx-auto">
          The frameworks, languages and tools I reach for across frontend, styling, workflow and backend.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <LogoCloud logos={logos} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-14 glass rounded-3xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-fg mb-2">Always Learning</h3>
        <p className="text-fg/70 mb-6">Currently exploring: Docker, AWS, and Advanced Animation Libraries</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["API Integration", "Performance Optimization", "Accessibility", "Cross-Browser Compatibility", "Mobile-First Design"].map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-fg/10 border border-fg/20 text-sm font-medium text-fg">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
