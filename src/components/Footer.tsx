"use client";

import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/UsmanDev007", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-osman69", label: "LinkedIn" },
  { icon: Mail, href: "mailto:Osman.Wad69@gmail.com", label: "Email" },
];

const Footer: React.FC = () => {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-footer text-fg border-t border-fg/10">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold mb-4">
              Usman<span className="text-accent">.dev</span>
            </h3>
            <p className="text-fg/60 mb-6 max-w-md leading-relaxed">
              FullStack Developer open to full-time roles with software houses and product teams, and to
              B2B projects for businesses. Always learning, always building, always improving.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-full bg-fg/10 hover:bg-royal transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((l) => (
                <button key={l.name} onClick={() => go(l.href)} className="block text-sm text-fg/60 hover:text-accent transition-colors">
                  {l.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-fg/60">
              <p>Osman.Wad69@gmail.com</p>
              <p>03086852008</p>
              <p>Rawalpindi, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-fg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-fg/60">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-royal-light" />
            <span>by Muhammad Usman</span>
            <span className="font-semibold text-accent">© {new Date().getFullYear()}</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            Back to top <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
