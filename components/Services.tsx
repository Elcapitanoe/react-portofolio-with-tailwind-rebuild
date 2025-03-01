import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaServer, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary-500" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-primary-500" />,
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive, accessible, and visually appealing interfaces.',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary-500" />,
      title: 'Responsive Design',
      description: 'Websites that look and function perfectly on all devices, from desktops to smartphones.',
    },
    {
      icon: <FaServer className="text-4xl text-primary-500" />,
      title: 'Backend Development',
      description: 'Robust server-side applications, APIs, and database integrations to power your web applications.',
    },
    {
      icon: <FaShoppingCart className="text-4xl text-primary-500" />,
      title: 'E-commerce Solutions',
      description: 'Custom online stores with secure payment processing, inventory management, and user-friendly interfaces.',
    },
    {
      icon: <FaSearch className="text-4xl text-primary-500" />,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in search engines with technical SEO and performance optimization.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            My Services
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I offer a wide range of services to help you build and grow your online presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card group hover:border-l-4 hover:border-primary-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;