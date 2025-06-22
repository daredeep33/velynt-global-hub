import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Import the sheet components
import { Menu, X } from 'lucide-react'; // Import icons

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const navLinks = [
    { href: "/#services", text: "Services", scrollId: "services" },
    { href: "/blog", text: "Blog" },
    { href: "/resources", text: "Free Resources" },
    { href: "/about", text: "About Us" },
    { href: "/partner", text: "Partner With Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-glass border-b border-velynt-navy/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img src="/logo.png" alt="Velynt Global Logo" className="h-8 w-8 object-contain" />
            <div>
              <span className="text-velynt-white">Velynt</span>
              <span className="text-velynt-cyan ml-1">Global</span>
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.text}
                to={link.href}
                onClick={link.scrollId ? (e) => handleScrollToSection(e, link.scrollId) : undefined}
                className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
            <Link to="/contact" className="bg-velynt-navy border border-velynt-cyan text-velynt-white px-6 py-2 rounded-lg hover:bg-velynt-cyan hover:text-velynt-dark hover:scale-105 transition-all duration-200">
              Contact Us
            </Link>
          </nav>

          {/* --- Mobile Menu --- */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-velynt-white p-2">
                  <Menu size={24} />
                  <span className="sr-only">Open Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-zinc-950 border-velynt-navy p-6 pt-12">
                <nav className="flex flex-col space-y-6 text-lg">
                  {navLinks.map(link => (
                    <SheetClose asChild key={link.text}>
                      <Link
                        to={link.href}
                        onClick={link.scrollId ? (e) => handleScrollToSection(e, link.scrollId) : () => setMobileMenuOpen(false)}
                        className="text-velynt-text hover:text-velynt-cyan transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link to="/contact" className="mt-4 text-center bg-velynt-navy border border-velynt-cyan text-velynt-white px-6 py-3 rounded-lg hover:bg-velynt-cyan hover:text-velynt-dark transition-all duration-200">
                      Contact Us
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;