import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB & PostgreSQL', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m a passionate developer with a keen eye for design and a love for creating seamless user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              With over 5 years of experience in web development, I&apos;ve worked with a diverse range of clients from startups to established businesses. My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also look stunning.
            </p>
            <p className="text-secondary-600 dark:text-secondary-300 mb-8">
              I specialize in building modern web applications using React, Next.js, and Node.js, with a focus on performance, accessibility, and user experience. When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or hiking in the mountains.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">5+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">50+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">30+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">15+</div>
                <div className="text-secondary-600 dark:text-secondary-400">Awards Won</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
              My Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Web Development</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Building responsive, fast, and accessible websites and web applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">UI/UX Design</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Creating intuitive and beautiful user interfaces and experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Mobile-First</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Developing with a mobile-first approach for optimal user experience on all devices.
            </p>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">Backend Development</h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Building robust APIs and server-side applications with Node.js and Express.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;