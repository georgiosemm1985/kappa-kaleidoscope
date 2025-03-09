
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Set the body background to match our theme
    document.body.style.backgroundColor = '#FFFFFF';
    
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
      // Clean up the background color when unmounting
      document.body.style.backgroundColor = '';
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 md:pt-24"> {/* Add padding to account for the fixed navbar */}
        <header className="relative min-h-[40vh] flex items-center pt-16 overflow-hidden bg-kappa-blue text-white">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-kappa-accent/20 rounded-full blur-3xl opacity-70 parallax" data-speed="0.03"></div>
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-60 parallax" data-speed="0.05"></div>
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-kappa-accent/20 rounded-full blur-3xl opacity-60 parallax" data-speed="0.04"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="max-w-3xl animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 animate-fade-in">
                <span className="mr-2">📩</span> Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
                Let's <span className="bg-gradient-to-r from-white to-kappa-accent text-transparent bg-clip-text">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-on-scroll">
                Have a project in mind? We're here to help you bring your digital vision to life.
              </p>
            </div>
          </div>
        </header>
        <div className="bg-white">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
