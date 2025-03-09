
import { useEffect, useRef } from 'react';
import { 
  Globe, 
  LineChart, 
  Code, 
  Search, 
  ShoppingCart, 
  Smartphone, 
  Share2, 
  BarChart4, 
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      icon: <Globe className="h-10 w-10 text-kappa-blue" />,
      title: "Web Design & Development",
      description: "Custom websites with stunning visuals and seamless functionality that engage your audience and drive results.",
      features: ["Responsive Design", "Custom CMS", "E-commerce Solutions", "Performance Optimization"]
    },
    {
      icon: <LineChart className="h-10 w-10 text-kappa-blue" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase visibility, drive quality traffic, and generate leads.",
      features: ["Content Strategy", "Email Marketing", "Social Media", "PPC Campaigns"]
    },
    {
      icon: <Search className="h-10 w-10 text-kappa-blue" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies that improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-kappa-blue" />,
      title: "E-commerce Solutions",
      description: "Custom online stores that provide seamless shopping experiences and maximize conversions.",
      features: ["Product Management", "Payment Integration", "Inventory Systems", "Customer Accounts"]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-kappa-blue" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that extend your digital presence to mobile users.",
      features: ["iOS & Android", "UX Design", "API Integration", "App Store Optimization"]
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-kappa-blue" />,
      title: "Analytics & Reporting",
      description: "In-depth analytics and custom reporting to track performance and inform strategic decisions.",
      features: ["Custom Dashboards", "Conversion Tracking", "User Behavior", "ROI Reporting"]
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="section-padding bg-kappa-gray"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Digital solutions for forward-thinking <span className="text-gradient">businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine creativity, technology, and strategy to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover-lift animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kappa-accent flex-shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
