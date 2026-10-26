"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase, Check } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    tag: "Software houses & product teams",
    title: "Hire me full-time",
    pitch:
      "A FullStack developer who slots into an Agile team, picks up tickets, and ships clean, reviewed code.",
    points: [
      "MERN stack and Next.js with TypeScript on the front end; Node.js, Prisma, PostgreSQL, and MongoDB with Mongoose on the back end",
      "Maintaining 4 live production platforms at SymCloud, plus Strapi, GraphQL and REST work at Bloomrix",
      "Agile/Scrum workflow, Git and CI/CD, cron-based background jobs, and clear communication with leads",
      "Performance and accessibility (WCAG) treated as part of done, not an extra",
    ],
    cta: "Discuss a role",
    topic: "Full-time role",
    featured: true,
  },
  {
    icon: Building2,
    tag: "Businesses & agencies (B2B)",
    title: "Build a product with me",
    pitch:
      "End-to-end delivery for companies that need a web product built: from the data model to a polished interface.",
    points: [
      "Business systems and dashboards, such as MORIS (inventory, POS, procurement) and TeleTaleem EMIS",
      "Client-facing platforms, such as the Faisal Hills property listings and interactive plot map",
      "Marketing sites and e-commerce, with Strapi or custom back ends when you need editable content",
      "Responsive, fast, SEO-ready builds with a staging link to review before launch",
    ],
    cta: "Start a project",
    topic: "B2B project",
    featured: false,
  },
];

const WorkWithMe: React.FC = () => {
  const goContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="work" className="bg-alt py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="pill bg-surf text-accent border-royal/20 mb-5">Work with me</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-fg leading-tight">
            Two ways to <span className="text-accent">work together</span>
          </h2>
          <p className="mt-4 text-fg-soft">
            Looking for a teammate or a delivery partner? Pick the path that fits and I&apos;ll tailor the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`flex flex-col rounded-[1.5rem] p-7 sm:p-8 ${
                a.featured ? "bg-royal text-white shadow-glow" : "card-light"
              }`}
            >
              <span
                className={`grid place-items-center w-12 h-12 rounded-full mb-5 ${
                  a.featured ? "bg-white/20 text-white" : "bg-royal/15 text-accent"
                }`}
              >
                <a.icon className="h-6 w-6" />
              </span>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${a.featured ? "text-white/75" : "text-fg-muted"}`}>
                {a.tag}
              </p>
              <h3 className={`text-2xl sm:text-3xl font-extrabold mb-3 ${a.featured ? "text-white" : "text-fg"}`}>
                {a.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${a.featured ? "text-white/85" : "text-fg-soft"}`}>{a.pitch}</p>
              <ul className="space-y-3 mb-8">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 mt-1 shrink-0 ${a.featured ? "text-white" : "text-accent"}`} />
                    <span className={`text-sm leading-relaxed ${a.featured ? "text-white/90" : "text-fg"}`}>{p}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={goContact}
                className={`mt-auto self-start inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                  a.featured ? "bg-white text-royal hover:bg-royal-soft" : "btn-royal"
                }`}
              >
                {a.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
