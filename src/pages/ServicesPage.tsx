
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24"> {/* Add padding to account for the fixed navbar */}
        <header className="bg-gradient-to-r from-kappa-blue to-kappa-accent text-white py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-on-scroll">
                Comprehensive digital solutions tailored to elevate your business and drive measurable results.
              </p>
            </div>
          </div>
        </header>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
