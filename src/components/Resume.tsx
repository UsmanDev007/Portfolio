"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/FullStack Developer.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: "FullStack Developer / Prisma PostgreSQL",
      company: "SymCloud",
      period: "Feb 2026 - Present",
      description:
        "Developing and maintaining 4 live production platforms: TeleTaleem EMIS Teacher Portal, TeleTaleem EMIS Admin, MORIS Admin, and MORIS Owner Portal. Owning features end-to-end with React.js, Next.js, Prisma ORM, and PostgreSQL, from UI components to API routes and database schemas. Scheduled automated background jobs with Cron for data syncing, cleanup, and notifications, and improved frontend performance with component optimization and API caching.",
    },
    {
      title: "Frontend React.js / Strapi (CMS) Developer",
      company: "Bloomrix",
      period: "Jul 2025 - Oct 2025",
      description:
        "Built and deployed 5+ responsive full-stack Strapi web applications. Integrated GraphQL and REST APIs for CRUD operations and real-time data, implemented JWT authentication and authorization, and boosted UI load speed by 20% with lazy loading and code splitting.",
    },
    {
      title: "Frontend React.js Developer (Contract)",
      company: "AI Software's",
      period: "Nov 2024 - Apr 2025",
      description:
        "Contract frontend work in React.js, including the responsive SmartSite web application built with React, TypeScript, Axios, Radix UI, and Tailwind CSS.",
    },
    {
      title: "Frontend React.js Developer Intern",
      company: "Cane Technologies",
      period: "Jun 2023 - Sep 2023",
      description:
        "Internship building responsive React.js interfaces and gaining hands-on experience with front-end fundamentals and modern UI development.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science (BSCS)",
      institution: "University of Wah",
      period: "Oct 2020 - Oct 2024",
      description:
        "Wah Cantt, Pakistan. Specialized in software engineering and web development technologies.",
    },
  ];

  const certifications = [
    "JavaScript — The Complete Guide (Academind)",
    "React + Redux + Next.js — Academind",
    "Next.js: The Complete Developer's Guide — Udemy",
    "React.js Internship at Cane Technology",
    "DevelopersHub.co Front End Development Internship",
    "Introduction to Frontend Development Simplilearn Skill up"
  ];

  const statColors = ["bg-sun", "bg-sky", "bg-tang", "bg-surf"];

  return (
    <section id="resume" className="bg-surf py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="pill bg-alt text-accent border-royal/20 mb-5">Resume</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-fg leading-tight">
            My journey, <span className="text-accent">so far</span>
          </h2>
          <p className="mt-4 text-fg-soft mb-8">
            A comprehensive overview of my professional journey, skills, and achievements
          </p>
          <button onClick={handleDownload} className="btn-royal">
            <Download className="h-5 w-5" /> Download Resume
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-royal text-white">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-extrabold text-fg">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative pl-8 border-l-2 border-royal/25"
                >
                  <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-royal ring-4 ring-royal-soft" />
                  <div className="card-light card-light-hover p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="pill bg-royal/15 text-accent border-transparent">{job.company}</span>
                      <span className="text-xs font-semibold text-fg-muted">{job.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-fg mb-2">{job.title}</h4>
                    <p className="text-sm text-fg-soft leading-relaxed">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-royal text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-extrabold text-fg">Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="rounded-[1.25rem] bg-royal text-white p-6 shadow-glow">
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="font-semibold text-white/90">{edu.institution}</p>
                  <p className="text-xs font-semibold text-white/70 mb-3">{edu.period}</p>
                  <p className="text-sm text-white/80">{edu.description}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-royal text-white">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-extrabold text-fg">Certifications</h3>
              </div>
              <div className="card-light p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 mt-1 shrink-0 text-accent" />
                      <span className="text-sm font-medium text-fg">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: "2", label: "Years Experience" },
            { number: "8+", label: "Projects Completed" },
            { number: "1", label: "Happy Client" },
            { number: "6", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label} className="card-light card-light-hover text-center p-5 bg-alt">
              <div className="text-4xl sm:text-5xl font-extrabold text-accent mb-1">{stat.number}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-fg-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
