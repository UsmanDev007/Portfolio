import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'TypeScript', level: 75, icon: '📘' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'HTML5', level: 95, icon: '🔶' },
        { name: 'CSS3', level: 90, icon: '🎨' }
      ]
    },
    {
      title: 'Styling & Design',
      skills: [
        { name: 'Tailwind CSS', level: 90, icon: '💨' },
        { name: 'Sass/SCSS', level: 85, icon: '💅' },
        { name: 'Styled Components', level: 80, icon: '💄' },
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'Figma', level: 75, icon: '🎭' },
        { name: 'Adobe XD', level: 70, icon: '🎯' }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '🔧' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'ESLint', level: 80, icon: '✅' },
        { name: 'Jest', level: 75, icon: '🧪' },
        { name: 'VS Code', level: 95, icon: '💻' }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'Strapi 5', level: 80, icon: '🌐' },
        { name: 'Prisma ORM', level: 70, icon: '💎' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'GraphQL', level: 75, icon: '🪐' },
        { name: 'Apollo Client', level: 55, icon: '⚡' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently exploring: Node JS, GraphQL, Docker, and Advanced Animation Libraries
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['API Integration', 'Performance Optimization', 'Accessibility', 'Cross-Browser Compatibility', 'Mobile-First Design'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;