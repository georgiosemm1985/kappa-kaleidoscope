import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, CheckCircle, ArrowRight, CreditCard, Package, Smartphone, Globe, Store, Tag } from 'lucide-react';

const EcommerceSolutionsPage = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Set the body background to match our dark theme
    document.body.style.backgroundColor = '#0A1128';
    
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
    <div className="flex flex-col min-h-screen bg-kappa-dark-navy">
      <Navbar />
      <div className="pt-20 md:pt-24"> {/* Add padding to account for the fixed navbar */}
        <header className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden bg-kappa-dark-navy text-white">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-kappa-accent/20 rounded-full blur-3xl opacity-70 parallax" data-speed="0.03"></div>
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-kappa-blue/20 rounded-full blur-3xl opacity-60 parallax" data-speed="0.05"></div>
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-kappa-accent/20 rounded-full blur-3xl opacity-60 parallax" data-speed="0.04"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="max-w-3xl animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 animate-fade-in">
                <span className="mr-2">🛒</span> E-commerce Excellence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
                E-commerce <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-on-scroll">
                Transform your business with powerful online stores that drive sales and deliver exceptional customer experiences.
              </p>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="bg-white">
          {/* Overview Section */}
          <section className="py-20 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-on-scroll">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                    E-commerce Development
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kappa-dark-navy">
                    Convert Visitors into <span className="text-gradient-orange">Loyal Customers</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We build cutting-edge e-commerce platforms that combine stunning design with powerful functionality, creating seamless shopping experiences that drive conversions and foster customer loyalty.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: ShoppingCart, text: "Custom shopping cart solutions with optimized checkout flows" },
                      { icon: CreditCard, text: "Secure payment gateway integrations with multiple options" },
                      { icon: Package, text: "Inventory and order management systems" },
                      { icon: Tag, text: "Dynamic pricing and promotion capabilities" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <item.icon className="h-5 w-5 text-orange-500" />
                        </div>
                        <p className="ml-3 text-gray-600">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative order-first lg:order-last animate-on-scroll">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-100 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1616169201999-0d93183c122b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" 
                      alt="E-commerce development" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Platforms Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                  Platforms We Work With
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kappa-dark-navy">
                  Leading E-commerce <span className="text-gradient-orange">Platforms</span>
                </h2>
                <p className="text-lg text-gray-600">
                  We specialize in building and optimizing stores on all major e-commerce platforms, ensuring your business leverages the best technology for your specific needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
                {[
                  {
                    title: "Shopify",
                    description: "Fully customized Shopify stores with premium themes, custom apps, and optimized checkout experiences.",
                    icon: Store,
                    color: "bg-green-500"
                  },
                  {
                    title: "WooCommerce",
                    description: "WordPress-based stores with unlimited customization options and seamless content integration.",
                    icon: ShoppingCart,
                    color: "bg-purple-500"
                  },
                  {
                    title: "Magento",
                    description: "Enterprise-grade solutions for large catalogs and complex business requirements.",
                    icon: Package,
                    color: "bg-orange-500"
                  },
                  {
                    title: "BigCommerce",
                    description: "Scalable SaaS platform with robust features for growing businesses and enterprise clients.",
                    icon: CreditCard,
                    color: "bg-blue-500"
                  },
                  {
                    title: "Headless Commerce",
                    description: "Custom front-end experiences powered by APIs for ultimate flexibility and performance.",
                    icon: Globe,
                    color: "bg-indigo-500"
                  },
                  {
                    title: "Mobile Commerce",
                    description: "Native shopping apps and PWAs for iOS and Android to capture the mobile shopping audience.",
                    icon: Smartphone,
                    color: "bg-pink-500"
                  }
                ].map((platform, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                    <div className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center mb-4`}>
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-kappa-dark-navy">{platform.title}</h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                  Our Approach
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kappa-dark-navy">
                  E-commerce <span className="text-gradient-orange">Development Process</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Our proven methodology ensures your e-commerce project is delivered on time, within budget, and exceeds performance expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
                {[
                  {
                    number: "01",
                    title: "Discovery & Strategy",
                    description: "We analyze your business needs, target audience, and competition to develop a comprehensive e-commerce strategy."
                  },
                  {
                    number: "02",
                    title: "Design & UX",
                    description: "Creating intuitive user experiences and stunning visual designs that reflect your brand and drive conversions."
                  },
                  {
                    number: "03",
                    title: "Development & Integration",
                    description: "Building your store with clean code and integrating essential tools for payment, shipping, and inventory management."
                  },
                  {
                    number: "04",
                    title: "Launch & Growth",
                    description: "Comprehensive testing, successful deployment, and ongoing optimization to maximize revenue and customer satisfaction."
                  }
                ].map((step, i) => (
                  <div key={i} className="relative p-6 bg-white rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="text-5xl font-bold text-orange-100 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3 text-kappa-dark-navy">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Packages Section */}
          <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                  Our Packages
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kappa-dark-navy">
                  E-commerce <span className="text-gradient-orange">Solutions</span> Packages
                </h2>
                <p className="text-lg text-gray-600">
                  Tailored solutions to match your business size, goals, and budget with transparent deliverables and exceptional support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
                {[
                  {
                    title: "Starter Store",
                    description: "Perfect for small businesses looking to establish their online presence quickly.",
                    features: [
                      "Shopify or WooCommerce setup",
                      "Premium theme customization",
                      "Up to 100 products setup",
                      "Payment gateway integration",
                      "Basic SEO optimization",
                      "Mobile responsive design"
                    ]
                  },
                  {
                    title: "Growth Package",
                    description: "For growing businesses that need advanced features and customizations.",
                    features: [
                      "Custom design & development",
                      "Up to 500 products setup",
                      "Multiple payment integrations",
                      "Shipping & tax automation",
                      "Advanced analytics setup",
                      "Email marketing integration",
                      "3 months maintenance included"
                    ],
                    featured: true
                  },
                  {
                    title: "Enterprise Solution",
                    description: "Comprehensive solution for large businesses with complex requirements.",
                    features: [
                      "Fully custom design & development",
                      "Unlimited products",
                      "ERP/CRM integrations",
                      "Subscription & recurring billing",
                      "Multi-currency & multi-language",
                      "Headless commerce architecture",
                      "Dedicated account manager"
                    ]
                  }
                ].map((pkg, i) => (
                  <div key={i} className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${pkg.featured ? 'transform hover:scale-105 shadow-xl' : 'bg-white hover:shadow-lg'}`}>
                    {pkg.featured && (
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500"></div>
                    )}
                    <div className={`p-8 ${pkg.featured ? 'bg-gradient-to-br from-orange-50 to-pink-50' : 'bg-white'}`}>
                      <h3 className="text-2xl font-bold mb-4 text-kappa-dark-navy">{pkg.title}</h3>
                      <p className="text-gray-600 mb-6">{pkg.description}</p>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-center mb-4">
                        <span className="text-lg font-medium text-kappa-blue">Contact us for pricing</span>
                      </div>
                      <button className="flex items-center justify-center w-full py-3 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:from-orange-600 hover:to-pink-600 transition-colors duration-300">
                        <span>Get Started</span>
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="rounded-3xl overflow-hidden relative bg-gradient-to-r from-orange-500 to-pink-500 animate-on-scroll">
                <div className="absolute top-0 right-0 w-1/3 h-full">
                  <svg viewBox="0 0 400 400" className="absolute h-full w-full opacity-10">
                    <defs>
                      <pattern id="patternGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#patternGrid)" />
                  </svg>
                </div>
                
                <div className="relative z-10 py-16 px-8 md:p-16 flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to grow your business online?
                    </h2>
                    <p className="text-white text-opacity-90 text-lg mb-0">
                      Let's discuss how our e-commerce solutions can help you reach more customers and increase sales.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center md:justify-end">
                    <a href="/contact" className="btn-white flex items-center font-bold px-8 py-4 rounded-lg bg-white text-orange-500 hover:bg-orange-50 transition-colors duration-300 shadow-lg">
                      <span>Get in Touch</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EcommerceSolutionsPage;
