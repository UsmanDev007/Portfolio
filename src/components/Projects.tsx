import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
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
      title: "Exclusive-Ecommerce-Website",
      description:
        "A Ecommerce Website with attractive UI add to carts billing 5 to 6 pages TimeOut Funcationality and more..",
      image: "https://i.postimg.cc/k4jwgXGp/Exclusive-ecommerce.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://exclusive-ecommerce-website-theta.vercel.app",
      category: "Web Application",
    },
    {
      id: 3,
      title: "Car Dealer Ship Web Application",
      description:
        "fully responsive and Dynamic car dealership web application that serves as a 24/7 virtual showroom",
      image: "/src/assets/images/CarDealerShip.png",
      technologies: [
        "React JS",
        "Typescript",
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
      id: 4,
      title: "Travel Ustad Landing Page",
      description:
        "A responsive Landing of Travel Ustad.com using Grid FlexBox with a beaiftiful Responsive UI in all devices",
      image: "https://i.postimg.cc/VvqB81SJ/Travel-Ustad.png",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "https://travel-ustad-landing-page.vercel.app",
      category: "Landing Page",
    },
    {
      id: 5,
      title: "Restaurant Meal Solutions Web Application",
      description:"Developed a modern and fully responsive restaurant web application that showcases various food services such as Ready Meals, Outdoor Catering, In-House Menus, Frozen Foods, and Mobile Kitchen Ideas",
      image:
        "https://i.postimg.cc/V6LzhFLM/Resutarant.png",
       technologies: [
        "React JS",
        "Typescript",
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
      title: "MovieBox Web Application",
      description:"Built a responsive movie browsing app using vanilla JavaScript and Bootstrap, enabling users to search and filter movies by genres (Action, Adventure, Thriller, Romantic, etc.), view movie details, and enjoy a mobile-friendly UI..(Hint username =usman308@gmail.com, password=movie@123)",
      image:
        "https://i.postimg.cc/yYv6Ft1c/Movie.png",
       technologies: [
        "JavaSript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/UsmanDev007",
      liveUrl: "http://movie-box-ten-rose.vercel.app",
      category: "Web Application",
    },
  ];

  const [filter, setFilter] = React.useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col" // ✅ Added `flex flex-col`
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    {/* Hover Buttons */}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {" "}
                {/* ✅ Added `flex-grow` */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Footer buttons pushed to bottom */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
