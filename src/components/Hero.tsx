
import { ArrowRight, Code, LineChart, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    heroElement.classList.add('is-visible');
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth) - 0.5;
      const yPos = (clientY / window.innerHeight) - 0.5;
      
      const elements = heroElement.querySelectorAll('.parallax');
      elements.forEach(el => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        const xOffset = xPos * 20 * speed;
        const yOffset = yPos * 20 * speed;
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden animate-on-scroll"
      id="hero"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-kappa-accent/10 rounded-full blur-3xl opacity-70 parallax" data-speed="0.03"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-kappa-blue/10 rounded-full blur-3xl opacity-60 parallax" data-speed="0.05"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-kappa-accent/10 rounded-full blur-3xl opacity-60 parallax" data-speed="0.04"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="mr-2">🇬🇧</span> UK-Based Digital Agency
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
              We craft <span className="text-gradient">digital</span> experiences that <span className="text-gradient">matter</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl animate-fade-in" style={{ animationDelay: '0.7s' }}>
              KappaDigital helps ambitious businesses transform their digital presence with cutting-edge web development and strategic marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a href="#services" className="btn-primary">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#portfolio" className="btn-outline">
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6 hover-lift animate-float">
                  <Code className="h-10 w-10 text-kappa-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-gray-600">Custom websites and applications built to perform.</p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 hover-lift animate-float" style={{ animationDelay: '0.5s' }}>
                  <LineChart className="h-10 w-10 text-kappa-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                  <p className="text-gray-600">Strategies that drive traffic, leads and growth.</p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 hover-lift animate-float" style={{ animationDelay: '1s' }}>
                  <Globe className="h-10 w-10 text-kappa-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                  <p className="text-gray-600">Boost visibility and rank higher in search results.</p>
                </div>
                
                <div className="glass-card rounded-2xl p-6 hover-lift animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Ready to Talk?</h3>
                      <p className="text-gray-600 mb-4">Let's discuss your project</p>
                      <a href="#contact" className="text-kappa-accent font-medium inline-flex items-center">
                        Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
