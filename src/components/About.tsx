
import { useEffect } from 'react';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const About = () => {
  useEffect(() => {
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
  
  const stats = [
    { number: "95%", label: "Client Satisfaction" },
    { number: "120+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "40+", label: "Team Members" }
  ];
  
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6 max-w-7xl text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl animate-on-scroll">
                <div className="bg-gradient-to-br from-kappa-blue to-kappa-accent h-full w-full flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">We Are KappaDigital</h3>
                    <p className="text-xl opacity-90">A UK-based team of digital experts passionate about creating meaningful digital experiences.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-kappa-lightblue rounded-2xl animate-on-scroll" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-kappa-blue rounded-2xl animate-on-scroll" style={{ animationDelay: '0.6s' }}></div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover-lift">
                  <p className="text-4xl font-bold text-kappa-blue mb-2">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <span className="inline-block px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UK's premier <span className="text-gradient">digital agency</span> for growing businesses
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in London, KappaDigital has been at the forefront of digital innovation for over a decade. We're a team of strategists, designers, developers, and marketers dedicated to helping businesses achieve digital excellence.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-kappa-lightblue p-3 rounded-lg">
                  <Award className="h-6 w-6 text-kappa-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Award-Winning Work</h3>
                  <p className="text-gray-600">Our projects have been recognized for excellence in design, development, and marketing effectiveness.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-kappa-lightblue p-3 rounded-lg">
                  <Users className="h-6 w-6 text-kappa-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our team consists of industry veterans with specialized expertise across all digital disciplines.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-kappa-lightblue p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-kappa-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Results-Driven Approach</h3>
                  <p className="text-gray-600">We measure our success by the real business outcomes and ROI we generate for our clients.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Work With Us
              </a>
              <a href="#portfolio" className="btn-outline">
                See Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
