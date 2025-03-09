
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger scroll handler on mount to set correct initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when navigating to a new route
  useEffect(() => {
    setServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceItems = [
    { name: "Web Design & Development", href: "/services#web-design" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "E-commerce Solutions", href: "/services#ecommerce" },
    { name: "Mobile App Development", href: "/services#mobile-app" },
    { name: "Analytics & Reporting", href: "/services#analytics" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-black/40 backdrop-blur-xl shadow-md border-b border-white/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-display text-white">
                Kappa<span className="text-kappa-accent">Digital</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} ref={dropdownRef} className="relative">
                  <button
                    onClick={toggleServicesDropdown}
                    className="flex items-center text-white font-medium hover:text-kappa-accent transition-colors duration-300"
                  >
                    {link.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesDropdownOpen && (
                    <div className="absolute top-full mt-2 py-2 w-64 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl animate-scale-in z-50">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2 text-white hover:bg-white/20 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white font-medium hover:text-kappa-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-kappa-accent transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-xl shadow-md border-b border-white/10 animate-scale-in">
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="relative">
                    <button
                      onClick={toggleServicesDropdown}
                      className="flex items-center justify-between w-full text-white font-medium hover:text-kappa-accent transition-colors duration-300 py-2"
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {servicesDropdownOpen && (
                      <div className="mt-2 py-2 pl-4 space-y-2 border-l-2 border-white/20">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block py-2 text-white hover:text-kappa-accent transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white font-medium hover:text-kappa-accent transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
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
