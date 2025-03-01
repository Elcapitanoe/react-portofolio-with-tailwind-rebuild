import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLink, FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'A modern e-commerce platform built with Next.js and Stripe.',
      link: '#',
      github: '#',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Travel App UI Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'UI/UX design for a travel booking application.',
      link: '#',
      github: '#',
      tags: ['Figma', 'UI/UX', 'Mobile App'],
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive task management system with real-time updates.',
      link: '#',
      github: '#',
      tags: ['React', 'Firebase', 'Material UI'],
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Mobile app for tracking workouts and nutrition.',
      link: '#',
      github: '#',
      tags: ['React Native', 'Redux', 'Health API'],
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'A responsive website for a high-end restaurant with online reservations.',
      link: '#',
      github: '#',
      tags: ['HTML/CSS', 'JavaScript', 'PHP'],
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Analytics dashboard for social media management.',
      link: '#',
      github: '#',
      tags: ['Figma', 'Adobe XD', 'Prototype'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            My Portfolio
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out some of my recent projects and designs.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'web' ? 'bg-primary-600 text-white' : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'design' ? 'bg-primary-600 text-white' : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'}`}
              onClick={() => setFilter('design')}
            >
              Design
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'mobile' ? 'bg-primary-600 text-white' : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'}`}
              onClick={() => setFilter('mobile')}
            >
              Mobile
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group overflow- hidden rounded-xl bg-white dark:bg-secondary-800 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                          <FaLink />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#" className="btn-outline">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;