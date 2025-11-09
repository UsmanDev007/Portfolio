import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description:
        "Creating intuitive and visually appealing interfaces that users love to interact with.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and excellent user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with teams, designers, and stakeholders to deliver exceptional results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Muhammad Usman working on development"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Full Stack JavaScript (React &Strapi) Developer
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Goal-focused Full Stack JavaScript (React &Strapi) Developer with
              1 year of experience in React.js, TypeScript, and Strapi CMS.
              Skilled in developing modern, responsive user interfaces and
              integrating RESTful APIs for dynamic content management. Adept at
              collaborating with teams to deliver high-quality web solutions and
              eager to explore backend technologies such as Node.js and
              Express.js to move toward full-stack development.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in the power of clean, efficient code and user-centered
              design. Whether working on a startup's MVP or an enterprise
              application, I bring the same level of dedication, attention to
              detail, and commitment to excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
