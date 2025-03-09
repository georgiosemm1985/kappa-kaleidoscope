
import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  LineChart, 
  Code, 
  Search, 
  ShoppingCart, 
  Smartphone, 
  BarChart4, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  
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
  
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "Web Design & Development",
      description: "Custom websites with stunning visuals and seamless functionality that engage your audience and drive results.",
      features: ["Responsive Design", "Custom CMS", "E-commerce Solutions", "Performance Optimization"],
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: <LineChart className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase visibility, drive quality traffic, and generate leads.",
      features: ["Content Strategy", "Email Marketing", "Social Media", "PPC Campaigns"],
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Search className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies that improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      gradient: "from-green-500 to-teal-500",
      hoverGradient: "from-green-600 to-teal-600"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "E-commerce Solutions",
      description: "Custom online stores that provide seamless shopping experiences and maximize conversions.",
      features: ["Product Management", "Payment Integration", "Inventory Systems", "Customer Accounts"],
      gradient: "from-orange-500 to-amber-500",
      hoverGradient: "from-orange-600 to-amber-600"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that extend your digital presence to mobile users.",
      features: ["iOS & Android", "UX Design", "API Integration", "App Store Optimization"],
      gradient: "from-cyan-500 to-blue-500",
      hoverGradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-white group-hover:text-kappa-blue transition-colors duration-300" />,
      title: "Analytics & Reporting",
      description: "In-depth analytics and custom reporting to track performance and inform strategic decisions.",
      features: ["Custom Dashboards", "Conversion Tracking", "User Behavior", "ROI Reporting"],
      gradient: "from-violet-500 to-fuchsia-500",
      hoverGradient: "from-violet-600 to-fuchsia-600"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="section-padding relative bg-gradient-to-b from-white to-kappa-gray overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-kappa-lightblue/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-50/20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-kappa-lightblue">
              <Sparkles className="h-6 w-6 text-kappa-blue" />
            </div>
          </div>
          <span className="inline-block px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium mb-4">
            Our Premium Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming ideas into <span className="text-gradient">digital realities</span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine cutting-edge technology, creative design, and strategic thinking to build solutions that drive business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "group relative rounded-2xl p-1 transition-all duration-500 animate-on-scroll cursor-pointer overflow-hidden transform hover:scale-[1.02] hover:shadow-xl",
                `bg-gradient-to-br ${service.gradient} hover:${service.hoverGradient}`
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="bg-white rounded-xl p-8 h-full transition-all duration-300 group-hover:bg-opacity-95">
                <div className="p-4 rounded-2xl bg-gradient-to-br mb-6 w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-kappa-blue transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-kappa-accent flex-shrink-0 mr-2" />
                      <span className="group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-medium text-kappa-blue">Learn More</span>
                  <ArrowRight className="h-5 w-5 text-kappa-blue" />
                </div>
              </div>
              
              {/* Service accent shapes */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8 transition-all duration-500 group-hover:scale-150"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Banner */}
        <div className="mt-24 animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-kappa-blue to-kappa-accent p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
            
            <div className="md:flex items-center justify-between relative z-10">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your digital presence?</h3>
                <p className="text-white/90 text-lg">
                  Let's collaborate to create something extraordinary that drives real business results.
                </p>
              </div>
              <div>
                <a href="#contact" className="inline-block px-8 py-4 bg-white text-kappa-blue rounded-lg font-bold hover:bg-kappa-lightblue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
