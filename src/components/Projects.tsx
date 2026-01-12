import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import smartSite from "../assets/images/cert-site-main.jpg";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = [
    {
      id: 1,
      title: "Organic Agricultural Website",
      description:
        "An organic farming e-commerce platform that allows users to browse fresh farm products, add them to cart, and place orders seamlessly.",
      image: "https://i.postimg.cc/QNknRhj1/Organic.png",
      technologies: ["React", "MUI", "Components", "JSON"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://organic-pi-umber.vercel.app/",
      category: "Web Application",
    },
    {
      id: 2,
      title: "Exclusive Ecommerce Website",
      description:
        "An ecommerce website with an attractive UI, add-to-cart functionality, billing flow, multiple pages, and timeout features.",
      image: "https://i.postimg.cc/k4jwgXGp/Exclusive-ecommerce.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://exclusive-ecommerce-website-theta.vercel.app",
      category: "Web Application",
    },
    {
      id: 3,
      title: "Car Dealership Web Application",
      description:
        "A fully responsive and dynamic car dealership web application that works as a 24/7 virtual showroom.",
      image: "/src/assets/images/CarDealerShip.png",
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
      id: 5,
      title: "Restaurant Meal Solutions App",
      description:
        "A modern and responsive restaurant web application showcasing ready meals, catering services, frozen foods, and mobile kitchen solutions.",
      image: "https://i.postimg.cc/V6LzhFLM/Resutarant.png",
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
        "SmartSite is a scalable analytics and automation platform designed to optimize costs, reduce risk, and improve operational efficiency across IT and network environments. It addresses key challenges such as overcharges, security vulnerabilities, outdated inventories, and slow decision-making.Built with React.js, TypeScript, Vite, Tailwind CSS, and Radix UI, the platform integrates tools like Google Maps, React Speech Recognition, and Axios to enable intelligent data visualization and automated workflows aligned with Nesterra’s 4-phase model: Assessment, Plan & Design, Execute, and Operationalize.As a result, SmartSite has helped deliver tens of millions in cost savings, removed thousands of unnecessary circuits, resolved critical vulnerabilities, and established sustainable, transparent, and efficient operational workflows for clients.",
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
      id: 7,
      title: "MovieBox Web Application",
      description:
        "A responsive movie browsing application with genre-based filtering, search functionality, and a mobile-friendly UI.",
      image: "https://i.postimg.cc/yYv6Ft1c/Movie.png",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "http://movie-box-ten-rose.vercel.app",
      category: "Web Application",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-blue-600 mb-2">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 min-h-[72px]">
                  {project.description}
                </p>

                {/* Read More */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 text-sm mt-2 hover:underline self-start"
                >
                  Read more
                </button>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-blue-600"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
 {selectedProject && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
    <div className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-2xl p-6 relative shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 
                   text-gray-700 dark:text-gray-300 
                   hover:text-red-500 transition"
        aria-label="Close modal"
      >
        <X size={22} />
      </button>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 
                     text-gray-900 dark:text-white">
        {selectedProject.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {selectedProject.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {selectedProject.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full
                       bg-gray-100 text-gray-800
                       dark:bg-gray-800 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
)}
   </section>
  );
};

export default Projects;
