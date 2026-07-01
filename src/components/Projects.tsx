import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";
import smartSite from "../assets/images/cert-site-main.png";
import carDealerShip from "../assets/images/CarDealerShip.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  staffUrl?: string;
  portalLabels?: [string, string];
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 9,
      title: "MORIS",
      description:
        "MORIS (Multi-Outlet Retail Information System) is a comprehensive business management platform built with Next.js 15, featuring dual Owner and Admin portals. It manages retail operations including inventory with IMEI/serial tracking, point-of-sale transactions, vendor management, procurement workflows (PO to GRN), repair services, and staff management with role-based permissions. Supports hierarchical categories, province-based tax calculations, multi-currency transactions, and financial analytics.",
      image: "https://i.postimg.cc/WzRf1cSP/722shots-so.png",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "NextAuth.js",
        "Tailwind CSS",
        "Radix UI",
        "Recharts",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://madmin-test.dockhost-01.symcloud.net/",
      staffUrl: "https://moris-test.dockhost-01.symcloud.net/",
      portalLabels: ["Admin", "Owner"],
      category: "Business Management System",
    },
    {
      id: 8,
      title: "TeleTaleem EMIS",
      description:
        "TeleTaleem EMIS is an Education Management Information System developed as a private government collaboration project in Pakistan. It aims to provide quality online education to students in remote locations where access to traditional schooling is limited. The platform features dual portals — Admin and Teacher — with comprehensive capabilities including student management, attendance tracking (with GPS-based staff attendance), marks management, school facility ticketing, analytics dashboards, notification systems, detailed records and more..",
      image: "https://i.postimg.cc/DZ8xL0Ht/659shots-so.png",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma ORM",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://emis-staging.dockhost.symcloud.net/",
      staffUrl: "https://schoolui.dockhost.symcloud.net/",
      portalLabels: ["Admin", "Staff"],
      category: "Education Management System",
    },
    
    {
      id: 5,
      title: "Restaurant Meal Solutions App",
      description:
        "A modern and responsive restaurant web application showcasing ready meals, catering services, frozen foods, and mobile kitchen solutions.",
      image: "https://i.postimg.cc/Bn0nX1Rq/7shots-so.png",
      technologies: [
        "React JS",
        "TypeScript",
        "Strapi 5",
        "GraphQL",
        "React-Bootstrap",
        "LottieFiles",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://github.com/UsmanDev007",
      category: "Web Application",
    },
    {
      id: 6,
      title: "SmartSite",
      description:
        "SmartSite is a scalable analytics and automation platform designed to optimize costs, reduce risk, and improve operational efficiency across IT and network environments.",
      image: smartSite,
      technologies: [
        "React JS",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Radix UI",
        "React Speech Recognition",
        "Google Maps",
        "Postman",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://sitecert.nesterra.net/login",
      category: "Web Application",
    },
    
    {
      id: 3,
      title: "Car Dealership Web Application",
      description:
        "A fully responsive and dynamic car dealership web application that works as a 24/7 virtual showroom.",
      image: carDealerShip,
      technologies: [
        "React JS",
        "TypeScript",
        "Strapi 5",
        "GraphQL",
        "Material UI",
        "LottieFiles",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://github.com/UsmanDev007",
      category: "Web Application",
    },
    {
      id: 1,
      title: "Organic Agricultural Website",
      description:
        "An organic farming e-commerce platform that allows users to browse fresh farm products, add them to cart, and place orders seamlessly.",
      image: "https://i.postimg.cc/QN9tzSh1/Organic.png",
      technologies: ["React", "MUI", "Bootstrap", "Redux"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://organic-pi-umber.vercel.app/",
      category: "Web Application",
    },
    {
      id: 2,
      title: "Exclusive Ecommerce Website",
      description:
        "An ecommerce website with an attractive UI, add-to-cart functionality, billing flow, multiple pages, and timeout features.",
      image: "https://i.postimg.cc/CxPsFY6j/884shots-so.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://exclusive-ecommerce-website-theta.vercel.app",
      category: "Web Application",
    },
  ];

  const getPortalLabels = (project: Project): [string, string] => {
    return project.portalLabels || ["Admin", "Staff"];
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work — built with modern technologies and
            best practices
          </p>
        </motion.div>

        {/* Projects Grid - responsive columns */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {projects.map((project, index) => {
            const [primaryLabel, secondaryLabel] = getPortalLabels(project);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px]"
              >
                {/* Full Card Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay - desktop only */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/70" />

                {/* Mobile View - Minimal bottom bar */}
                <div className="sm:hidden absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white mb-2">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="flex items-center gap-1 text-blue-400 text-sm font-medium">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Desktop Default View - Title Only at Bottom */}
                <div className="hidden sm:block absolute inset-x-0 bottom-0 p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-600/80 text-white mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Desktop Hover View - Full Content */}
                <div className="hidden sm:flex absolute inset-0 p-6 flex-col justify-between opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {/* Top Section */}
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Section - Tech Stack + Links */}
                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-white/20 text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/20 text-white backdrop-blur-sm">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex gap-4">
                        {project.staffUrl ? (
                          <>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} /> {primaryLabel}
                            </a>
                            <a
                              href={project.staffUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} /> {secondaryLabel}
                            </a>
                          </>
                        ) : (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} /> Live
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} /> Code
                        </a>
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 max-w-sm sm:max-w-md md:max-w-xl w-full mx-4 rounded-2xl p-5 sm:p-6 relative shadow-xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

             
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-3">
                {selectedProject.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t dark:border-gray-700">
                {selectedProject.staffUrl ? (
                  <>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />{" "}
                      {getPortalLabels(selectedProject)[0]} Portal
                    </a>
                    <a
                      href={selectedProject.staffUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />{" "}
                      {getPortalLabels(selectedProject)[1]} Portal
                    </a>
                  </>
                ) : (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
