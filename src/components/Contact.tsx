"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  topic: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "Osman.Wad69@gmail.com", href: "mailto:Osman.Wad69@gmail.com" },
  { icon: Phone, label: "Phone", value: "03086852008", href: "tel:+923086852008" },
  { icon: MapPin, label: "Location", value: "Rawalpindi, Pakistan", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/UsmanDev007" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-osman69" },
];

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus("idle");
    setErrorDetail("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Next.js inlines these at build time, so a missing value means .env.local wasn't loaded
    if (!serviceId || !templateId || !publicKey) {
      setErrorDetail("Email isn't configured: the NEXT_PUBLIC_EMAILJS_* variables are missing. Restart the dev server after editing .env.local.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: `[${data.topic}] ${data.subject}`,
          message: data.message,
        },
        publicKey
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      // EmailJS rejects with { status, text }, for example 412 for a bad service or template id
      const e = error as { status?: number; text?: string };
      setErrorDetail(e?.text ? `EmailJS says: ${e.text}${e.status ? ` (${e.status})` : ""}` : "");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const label = "block text-xs font-semibold uppercase tracking-wider text-fg/70 mb-2";

  return (
    <section id="contact" className="hero-bg relative py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill glass text-fg/90 mb-5">Contact</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-fg leading-[1.05] mb-5">
              Hiring or have a <span className="text-accent">project</span>?
            </h2>
            <p className="text-fg/70 mb-8 max-w-md leading-relaxed">
              Whether you&apos;re a software house or product team looking for a full-time developer, or a
              business that needs a web product built, tell me a little and I&apos;ll get back to you.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className="glass rounded-2xl flex items-center gap-4 p-4 hover:bg-fg/15 transition-colors">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-royal text-white">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-fg/60">{info.label}</span>
                    <span className="block font-semibold text-fg">{info.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-11 h-11 rounded-full glass text-fg hover:bg-royal transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-fg mb-6">Send a Message</h3>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/15 border border-green-400/40 text-fg flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-400/40 text-fg flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>
                  Failed to send message. Please try again or email me directly.
                  {errorDetail && <span className="block mt-1 text-xs opacity-80">{errorDetail}</span>}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={label}>Name *</label>
                  <input id="name" type="text" placeholder="Your Name" className="input-nav" {...register("name", { required: "Name is required" })} />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={label}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-nav"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="topic" className={label}>I&apos;m reaching out about *</label>
                <select id="topic" className="input-nav" defaultValue="Full-time role" {...register("topic", { required: true })}>
                  <option className="text-black" value="Full-time role">A full-time role</option>
                  <option className="text-black" value="B2B project">A B2B / business project</option>
                  <option className="text-black" value="Contract work">Contract or freelance work</option>
                  <option className="text-black" value="Something else">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className={label}>Subject *</label>
                <input id="subject" type="text" placeholder="Frontend role / Project inquiry" className="input-nav" {...register("subject", { required: "Subject is required" })} />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className={label}>Message *</label>
                <textarea id="message" rows={5} placeholder="Tell me about your project or just say hello!" className="input-nav resize-none" {...register("message", { required: "Message is required" })} />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-royal w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
