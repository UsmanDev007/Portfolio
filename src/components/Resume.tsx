import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/ReactJS_Dev_Resume_Usman.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: "Front End JavaScript (React &Strapi) Developer",
      company: "Bloomrix",
      period: "2025 - Present",
      description:
        "Led frontend development tasks under senior guidance, applying best practices to build scalable and maintainable web applications",
    },
    {
      title: "Frontend Developer",
      company: "AI Solution(Client)",
      period: "2024 - 2025",
      description:
        "Developed responsive SmartSite Web Application using React Typescript and modern JavaScript frameworks for Indian client.",
    },
    {
      title: "React Developer Intern",
      company: "DeveloperHub",
      period: "2024",
      description:
        "Developed responsive web pages using HTML, CSS, JavaScript, and React. Gained hands-on experience with front-end fundamentals and modern UI development.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Wah",
      period: "2020 - 2024",
      description:
        "Specialized in software engineering and web development technologies.",
    },
  ];

  const certifications = [
    "JavaScript — The Complete Guide (Academind)",
    "React + Redux + Next.js — Academind",
    "Next.js: The Complete Developer’s Guide — Udemy",
    "React.js Internship at Cane Technology",
    "DevelopersHub.co Front End Development Internship",
    "Introduction to Frontend Development Simplilearn Skill up"
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey, skills, and
            achievements
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {job.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1", label: "Years Experience" },
            { number: "8+", label: "Projects Completed" },
            { number: "1", label: "Happy Clients" },
            { number: "6", label: "Certifications" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
