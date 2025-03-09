
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 blur-backdrop shadow-md' 
          : 'py-5 bg-transparent dark:bg-kappa-dark-navy/70'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold font-display text-kappa-navy dark:text-white">
                Kappa<span className="text-kappa-accent">Digital</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-kappa-navy font-medium hover:text-kappa-accent transition-colors duration-300 dark:text-white dark:hover:text-kappa-accent"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-kappa-navy hover:text-kappa-accent transition-colors p-2 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 blur-backdrop shadow-md animate-scale-in dark:bg-kappa-dark-navy/90">
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-kappa-navy font-medium hover:text-kappa-accent transition-colors duration-300 py-2 dark:text-white dark:hover:text-kappa-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
