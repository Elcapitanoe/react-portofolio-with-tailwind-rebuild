import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-100 dark:bg-secondary-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">Alex.dev</h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-4 max-w-md">
              Creating elegant, functional, and user-friendly digital experiences that help businesses grow and succeed in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaDribbble className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-secondary-600 dark:text-secondary-300">
                San Francisco, CA
              </li>
              <li>
                <a href="mailto:hello@alex.dev" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  hello@alex.dev
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 dark:border-secondary-700 mt-12 pt-8 text-center text-secondary-600 dark:text-secondary-400">
          <p>© {currentYear} Alex.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;