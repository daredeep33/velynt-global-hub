
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-velynt-navy py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Logo and Tagline */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-velynt-white mb-2">
              Velynt Global
            </h3>
            <p className="text-velynt-cyan italic text-lg">
              Where clarity meets care, and every journey is guided with purpose.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mb-8 space-y-2">
            <p className="text-velynt-text">
              Door No. 371, Chemmanam, Padamughal
            </p>
            <p className="text-velynt-text">
              Kakkanad, Kochi, Kerala 682030
            </p>
            <p className="text-velynt-text">
              Phone: +91 89215 75628 | +91 90748 07602
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/velyntglobal/" 
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/velyntglobal/" 
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/velynt-global/" 
              className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="border-t border-velynt-cyan/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <p className="text-velynt-text text-sm">
                © {new Date().getFullYear()} Velynt Global. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-velynt-text hover:text-velynt-cyan text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-velynt-text hover:text-velynt-cyan text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
