"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Database, ShieldCheck, Layers, Gauge } from "lucide-react";

const features = [
  { icon: Code, title: "Clean Code", description: "Maintainable, scalable code that follows best practices and modern standards." },
  { icon: Palette, title: "UI/UX Focus", description: "Intuitive, visually appealing interfaces that users love to interact with." },
  { icon: Rocket, title: "Performance", description: "Apps tuned for speed, accessibility and an excellent user experience." },
  { icon: Users, title: "Collaboration", description: "Working with teams, designers and stakeholders to deliver great results." },
  { icon: Database, title: "Full-Stack Data", description: "MERN stack, Prisma ORM, PostgreSQL, and MongoDB with Mongoose behind clean REST and GraphQL APIs." },
  { icon: ShieldCheck, title: "Secure Auth", description: "Role-based access control and NextAuth.js flows built for production." },
  { icon: Layers, title: "Modular UI", description: "Reusable components with Redux Toolkit state management and Tailwind." },
  { icon: Gauge, title: "Agile Delivery", description: "Business requirements turned into shipped features inside Agile/Scrum teams." },
];

const About: React.FC = () => (
  <section id="about" className="relative bg-alt py-20 sm:py-28 rounded-t-[2.5rem] -mt-10 z-10">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <span className="pill bg-surf text-accent border-royal/20 mb-5">About me</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-fg leading-tight">
          FullStack Development, Built <span className="text-accent">Effortlessly</span>
        </h2>
        <p className="mt-5 text-fg-soft leading-relaxed">
          I&apos;m a FullStack Developer with 2 years of professional experience building scalable,
          high-performance web applications across the MERN stack and Next.js with TypeScript, backed by
          Node.js, Prisma ORM, PostgreSQL, and MongoDB with Mongoose. I&apos;ve shipped for a software house, on
          government-collaboration projects, and for contract clients, so I&apos;m comfortable
          both inside an Agile team and owning a delivery end to end. I care about performance,
          accessibility (WCAG/A11y), and clean, maintainable code.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className={`${
              i === 0 ? "bg-royal text-white border-royal shadow-glow rounded-[1.25rem] border" : "card-light"
            } card-light-hover p-6 min-h-[190px] flex flex-col`}
          >
            <span
              className={`grid place-items-center w-11 h-11 rounded-full mb-5 ${
                i === 0 ? "bg-white/20 text-white" : "bg-royal/15 text-accent"
              }`}
            >
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className={`font-bold mb-2 ${i === 0 ? "text-white" : "text-fg"}`}>{f.title}</h3>
            <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-fg-soft"}`}>
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
