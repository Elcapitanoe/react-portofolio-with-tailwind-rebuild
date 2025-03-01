import React, { useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-900 dark:text-white">
              <span className="text-primary-600 dark:text-primary-400">Full-Stack</span> Developer & UI/UX Designer
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-xl">
              I create beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn-outline">
                View My Work
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaDribbble className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white dark:bg-secondary-800 rounded-full overflow-hidden">
                <Image 
                  src="/avatar.png" 
                  alt="Alex Developer" 
                  width={400} 
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-secondary-800 shadow-lg rounded-lg p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="text-primary-600 font-bold">React</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-secondary-800 shadow-lg rounded-lg p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <div className="text-primary-600 font-bold">Next.js</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-8 bg-white dark:bg-secondary-800 shadow-lg rounded-lg p-3"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <div className="text-primary-600 font-bold">TypeScript</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;