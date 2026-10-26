"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Play, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { useProjectModal } from "@/components/ProjectModal";

const Projects: React.FC = () => {
  const { open } = useProjectModal();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-alt py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="pill bg-surf text-accent border-royal/20 mb-5">Selected work</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-fg leading-tight">
            Projects I&apos;m <span className="text-accent">proud</span> of
          </h2>
          <p className="mt-4 text-fg-soft">
            A showcase of recent work, built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => open(project)}
              className="group card-light card-light-hover overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video bg-navy-950 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 pill bg-royal text-white border-transparent">
                  {project.category}
                </span>
                {project.video && (
                  <>
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid place-items-center w-16 h-16 rounded-full bg-royal shadow-glow group-hover:scale-110 transition-transform">
                        <Play size={24} className="fill-white text-fg ml-1" />
                      </span>
                    </span>
                    <span className="absolute bottom-3 right-3 pill bg-surf text-fg border-transparent">
                      <MessageCircle size={14} className="text-green-600" /> Client feedback inside
                    </span>
                  </>
                )}
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-fg">{project.title}</h3>
                  <span className="grid place-items-center shrink-0 w-10 h-10 rounded-full bg-royal/15 text-accent group-hover:bg-royal group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </span>
                </div>
                <p className="text-sm text-fg-soft leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-alt text-fg border border-line">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => open(project)}
              className="group card-light card-light-hover overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-alt overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex items-end justify-between gap-3 flex-1">
                <div>
                  <h3 className="font-bold text-fg leading-tight">{project.title}</h3>
                  <p className="text-xs font-medium text-fg-muted mt-1">{project.category}</p>
                </div>
                <span className="grid place-items-center shrink-0 w-9 h-9 rounded-full bg-royal/15 text-accent group-hover:bg-royal group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
          <motion.a
            href="https://github.com/UsmanDev007"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.25rem] bg-royal text-white p-6 flex flex-col justify-between min-h-[220px] shadow-glow hover:-translate-y-1 transition-transform"
          >
            <Github size={32} />
            <div>
              <p className="text-2xl font-extrabold leading-tight mb-2">More on GitHub</p>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-white/85">
                See all repositories <ArrowRight size={16} />
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
