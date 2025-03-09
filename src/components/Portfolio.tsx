
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Financial Services Platform",
      category: "web",
      image: "linear-gradient(135deg, #0061ff 0%, #60efff 100%)",
      description: "Custom web application for a leading UK financial services provider.",
      tags: ["React", "Node.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Luxury E-commerce Store",
      category: "ecommerce",
      image: "linear-gradient(135deg, #ff6b6b 0%, #ffa8a8 100%)",
      description: "High-end e-commerce platform with custom product configurator.",
      tags: ["Shopify", "Custom Development", "Payment Integration"]
    },
    {
      id: 3,
      title: "Tech Startup Marketing",
      category: "marketing",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Comprehensive digital marketing campaign for a SaaS startup.",
      tags: ["SEO", "Content Marketing", "PPC"]
    },
    {
      id: 4,
      title: "Healthcare Provider Portal",
      category: "web",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description: "Patient management system with telemedicine integration.",
      tags: ["Vue.js", "Laravel", "AWS"]
    },
    {
      id: 5,
      title: "Retail Chain Marketing",
      category: "marketing",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: "Multi-channel marketing strategy for UK retail chain.",
      tags: ["Social Media", "Email Marketing", "Analytics"]
    },
    {
      id: 6,
      title: "Food Delivery Marketplace",
      category: "ecommerce",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Custom food delivery platform connecting local restaurants with customers.",
      tags: ["React Native", "Node.js", "Payment Processing"]
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };
  
  return (
    <section id="portfolio" className="section-padding bg-kappa-gray">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Showcasing our <span className="text-gradient">best work</span>
          </h2>
          <p className="text-lg text-gray-600">
            Take a look at some of our recent projects that demonstrate our expertise in web development and digital marketing.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-kappa-blue text-white'
                  : 'bg-white text-kappa-navy hover:bg-kappa-lightblue'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="rounded-xl overflow-hidden shadow-lg hover-lift animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div 
                className="h-48 w-full" 
                style={{ background: project.image }}
              ></div>
              <div className="p-6 bg-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-kappa-lightblue text-kappa-blue text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="inline-flex items-center text-kappa-accent font-medium">
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
