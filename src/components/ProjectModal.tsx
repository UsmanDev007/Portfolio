"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ModalContextType {
  open: (project: Project) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useProjectModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useProjectModal must be used within ProjectModalProvider");
  return ctx;
};

export const ProjectModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<Project | null>(null);
  const labels = selected?.portalLabels ?? ["Admin", "Staff"];

  return (
    <ModalContext.Provider value={{ open: setSelected }}>
      {children}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full ${
                selected.video ? "max-w-3xl" : "max-w-xl"
              } max-h-[88vh] overflow-y-auto rounded-3xl bg-surf shadow-glow`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-surf/90 text-fg hover:bg-royal hover:text-white transition"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="bg-navy-950">
                {selected.video ? (
                  <video
                    src={selected.video}
                    poster={selected.image}
                    controls
                    autoPlay
                    playsInline
                    className="w-full aspect-video"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selected.image} alt={selected.title} className="w-full max-h-64 object-contain bg-alt" />
                )}
              </div>

              <div className="p-6 sm:p-8">
                <span className="pill bg-royal/15 text-accent border-royal/20 mb-3">
                  {selected.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-fg mb-4">{selected.title}</h3>
                <p className="text-fg-soft leading-relaxed mb-6">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-alt text-fg border border-line">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-5 border-t border-line">
                  <a href={selected.liveUrl} target="_blank" rel="noreferrer" className="btn-royal !py-2.5 !px-5 text-sm">
                    <ExternalLink size={16} /> {selected.staffUrl ? `${labels[0]} Portal` : "Live Demo"}
                  </a>
                  {selected.staffUrl && (
                    <a href={selected.staffUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-royal text-accent font-semibold text-sm hover:bg-royal hover:text-white transition">
                      <ExternalLink size={16} /> {labels[1]} Portal
                    </a>
                  )}
                  {selected.githubUrl && (
                    <a href={selected.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-fg-soft font-semibold text-sm hover:bg-alt transition">
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};
