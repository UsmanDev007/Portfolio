"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work With Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6"
    >
      <nav
        className={`container mx-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          isScrolled ? "glass bg-page/70 shadow-glow" : "bg-transparent"
        }`}
      >
        <button onClick={() => go("#home")} className="flex items-center gap-2" aria-label="Back to top">
       
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="text-sm font-medium text-fg/75 hover:text-fg transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => go("#contact")} className="btn-royal !py-2 !px-5 text-sm">
            Contact Us
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full glass text-fg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 mx-auto container rounded-2xl glass bg-page/90 py-2"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="block w-full text-left px-5 py-3 text-fg/85 hover:bg-fg/10 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
