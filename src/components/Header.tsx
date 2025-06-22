 import React from 'react';
 import { Link } from 'react-router-dom';

 const Header = () => {
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-glass border-b border-velynt-navy/20">
       <div className="container mx-auto px-4 py-4">
         <div className="flex items-center justify-between">
           {/* Logo */}
           <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
             <img src="/logo.png" alt="Velynt Global Logo" className="h-8 w-8" />
             <div>
               <span className="text-velynt-white">Velynt</span>
               <span className="text-velynt-cyan ml-1">Global</span>
             </div>
           </Link>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center space-x-8">
             <Link to="/#services" className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200">
               Services
             </Link>
             <Link to="/blog" className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200">
               Blog
             </Link>
             <Link to="/#about" className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200">
               About Us
             </Link>
             <Link to="/#cta" className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200">
               Partner With Us
             </Link>
             <Link to="/contact" className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-6 py-2 rounded-lg hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200">
               Contact Us
             </Link>
           </nav>

           {/* Mobile Menu Button (Functionality to be added later) */}
           <button className="md:hidden text-velynt-white">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </button>
         </div>
       </div>
     </header>
   );
 };

 export default Header;