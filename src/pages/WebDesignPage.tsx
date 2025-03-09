import React, { useEffect } from 'react';
import { 
  Laptop, 
  Globe, 
  Smartphone, 
  Code, 
  Brain, 
  Cpu, 
  Server, 
  Layers,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const WebDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.body.style.backgroundColor = '#0A1128';
    
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
      document.body.style.backgroundColor = '';
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const platforms = [
    {
      icon: <Laptop className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Web Applications",
      description: "Custom web applications that provide seamless user experiences across all devices and browsers."
    },
    {
      icon: <Smartphone className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Mobile Platforms",
      description: "Native and hybrid mobile applications for iOS and Android that extend your digital reach."
    },
    {
      icon: <Layers className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Cross-Platform Solutions",
      description: "Unified codebases that work flawlessly across desktop, mobile, and tablet devices."
    },
    {
      icon: <Server className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Backend Systems",
      description: "Robust server architectures and APIs that power your applications with reliability and security."
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-kappa-accent" />,
      title: "Responsive Design",
      description: "Websites that adapt perfectly to any screen size or device."
    },
    {
      icon: <Code className="h-6 w-6 text-kappa-accent" />,
      title: "Clean Code Architecture",
      description: "Maintainable and scalable code that follows industry best practices."
    },
    {
      icon: <Brain className="h-6 w-6 text-kappa-accent" />,
      title: "AI Integration",
      description: "Smart features powered by the latest AI technologies to enhance user experience."
    },
    {
      icon: <Cpu className="h-6 w-6 text-kappa-accent" />,
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions for optimal user engagement."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-kappa-accent" />,
      title: "Modern Aesthetics",
      description: "Visually stunning designs that capture your brand's unique identity."
    },
    {
      icon: <Server className="h-6 w-6 text-kappa-accent" />,
      title: "Robust Backend",
      description: "Secure, scalable server architecture that handles your business logic efficiently."
    }
  ];

  const workflows = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and unique requirements through collaborative discussions."
    },
    {
      number: "02",
      title: "UX/UI Design",
      description: "Our designers create intuitive user experiences and visually appealing interfaces that align with your brand identity."
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert developers bring designs to life with clean, efficient code and cutting-edge technologies."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing across devices and platforms ensures your application performs flawlessly for all users."
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "We handle the launch process and provide ongoing maintenance to keep your application running smoothly."
    }
  ];

  const technologies = [
    "React", "Angular", "Vue.js", "Next.js", "Node.js", "Python", 
    "Django", "Laravel", "GraphQL", "AWS", "Google Cloud", "Azure", 
    "Docker", "Kubernetes", "TensorFlow", "PyTorch", "Swift", "Kotlin"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-kappa-dark-navy">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <header className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden bg-kappa-dark-navy text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-kappa-accent/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-kappa-blue/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-kappa-accent/20 rounded-full blur-3xl opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-on-scroll text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                  <Laptop className="w-4 h-4 mr-2" /> Web Design & Development
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Transform Your <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">Digital Presence</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  We create stunning, high-performance digital experiences that drive business growth across all platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-6 py-3 bg-kappa-accent text-white font-medium rounded-lg hover:bg-kappa-accent/90 transition-colors">
                    Get Started
                  </a>
                  <a href="#process" className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
                    Our Process
                  </a>
                </div>
              </div>
              <div className="animate-on-scroll hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Web Design and Development" 
                  className="rounded-lg shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-left mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Building for <span className="text-kappa-accent">All Platforms</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl">
                Our expertise spans across all major platforms, ensuring your digital presence is consistent and powerful wherever your users are.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-left text-gray-900 hover:transform hover:scale-105 transition-all duration-300 animate-on-scroll shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{platform.title}</h3>
                  <p className="text-gray-700">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-kappa-dark-blue relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 md:order-1 mt-10 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="AI Integration" 
                  className="rounded-lg shadow-2xl border border-white/10"
                />
              </div>
              <div className="animate-on-scroll order-1 md:order-2 text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-kappa-accent/20 text-kappa-accent text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" /> Next Generation Technology
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Intelligent Solutions with <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">AI Integration</span>
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Leverage the power of artificial intelligence to create smarter, more intuitive digital experiences that adapt to user behavior and business needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Personalized user experiences based on behavior and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Intelligent content recommendation engines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Automated customer service with chatbots and virtual assistants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Data analysis and predictive analytics for business insights</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-kappa-accent text-white font-medium rounded-lg hover:bg-kappa-accent/90 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-left mb-16 animate-on-scroll">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-kappa-lightblue mb-4">
                <Sparkles className="h-6 w-6 text-kappa-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for <span className="text-kappa-blue">Modern Web Applications</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                We combine cutting-edge technology with creative design to deliver exceptional digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-kappa-lightblue inline-block rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-left mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-kappa-blue">Development Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                A streamlined approach to bring your digital vision to life efficiently and effectively.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-kappa-blue/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {workflows.map((step, index) => (
                  <div 
                    key={index} 
                    className="relative animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                      <div className="md:w-1/2 mb-6 md:mb-0">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                          <div className="text-4xl font-bold text-kappa-accent/20 mb-3">{step.number}</div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-10 h-10 bg-kappa-blue rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-kappa-navy text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cutting-Edge <span className="text-kappa-accent">Technologies</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We stay at the forefront of technological advancements to deliver the best solutions for your business.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-kappa-blue to-kappa-accent">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's collaborate to create something extraordinary that drives real business results.
              </p>
              <a href="/contact" className="inline-block px-8 py-4 bg-white text-kappa-blue rounded-lg font-bold hover:bg-kappa-lightblue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WebDesignPage;
