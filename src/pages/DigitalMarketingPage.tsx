
import React, { useEffect } from 'react';
import { 
  TrendingUp, 
  Globe, 
  Mail, 
  BarChart, 
  Megaphone, 
  Share,
  Users,
  Target,
  Search,
  LineChart,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const DigitalMarketingPage = () => {
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
      icon: <Globe className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Search Engine Marketing",
      description: "Strategic paid search campaigns that put your business in front of high-intent customers."
    },
    {
      icon: <Share className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Social Media Marketing",
      description: "Data-driven social media strategies that build communities and drive meaningful engagement."
    },
    {
      icon: <Mail className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Email Marketing",
      description: "Targeted B2B and B2C email campaigns that nurture leads and drive conversions."
    },
    {
      icon: <BarChart className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking and actionable insights to continually optimize your ROI."
    }
  ];

  const features = [
    {
      icon: <Megaphone className="h-6 w-6 text-kappa-accent" />,
      title: "Paid Advertising",
      description: "Strategic PPC campaigns across Google, Bing, and social media platforms."
    },
    {
      icon: <Search className="h-6 w-6 text-kappa-accent" />,
      title: "SEO Optimization",
      description: "Technical and on-page optimization that improves organic visibility and traffic."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-kappa-accent" />,
      title: "Content Marketing",
      description: "Compelling content strategies that establish authority and engage your audience."
    },
    {
      icon: <Target className="h-6 w-6 text-kappa-accent" />,
      title: "Audience Targeting",
      description: "Precision targeting to reach the most valuable customers for your business."
    },
    {
      icon: <LineChart className="h-6 w-6 text-kappa-accent" />,
      title: "Performance Tracking",
      description: "Real-time monitoring and reporting for maximum campaign effectiveness."
    },
    {
      icon: <Users className="h-6 w-6 text-kappa-accent" />,
      title: "Lead Generation",
      description: "Data-driven strategies to capture and nurture qualified business leads."
    }
  ];

  const workflows = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competitive landscape to develop a tailored digital marketing strategy."
    },
    {
      number: "02",
      title: "Campaign Setup",
      description: "Our team configures your campaigns with precise targeting, compelling messaging, and optimized bidding strategies."
    },
    {
      number: "03",
      title: "Content Creation",
      description: "We create engaging, brand-aligned content that resonates with your audience and drives desired actions."
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "Campaigns are launched and continuously refined based on performance data to maximize ROI."
    },
    {
      number: "05",
      title: "Analysis & Reporting",
      description: "Comprehensive reporting provides clear insights into campaign performance and strategic recommendations."
    }
  ];

  const technologies = [
    "Google Ads", "Meta Ads", "LinkedIn Advertising", "Twitter Ads", 
    "Pinterest Ads", "TikTok Ads", "Google Analytics", "Google Tag Manager", 
    "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Salesforce", 
    "Marketo", "Hootsuite", "Buffer", "Sprout Social", "Canva"
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
                  <TrendingUp className="w-4 h-4 mr-2" /> Digital Marketing
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Amplify Your <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">Digital Presence</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Data-driven digital marketing strategies that convert audiences into customers and drive measurable business growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="flex items-center justify-center px-6 py-3 bg-kappa-accent text-white font-medium rounded-lg hover:bg-kappa-accent/90 transition-colors">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link to="/work" className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
                    <span>Our Work</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="animate-on-scroll hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Digital Marketing Services" 
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
                Marketing Across <span className="text-kappa-accent">All Channels</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl">
                Our comprehensive digital marketing services cover all major platforms and channels to ensure your brand reaches the right audience at the right time.
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="B2B Email Marketing" 
                  className="rounded-lg shadow-2xl border border-white/10"
                />
              </div>
              <div className="animate-on-scroll order-1 md:order-2 text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-kappa-accent/20 text-kappa-accent text-sm font-medium mb-6">
                  <Mail className="w-4 h-4 mr-2" /> B2B Email Marketing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Convert Prospects with <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">Strategic Email</span>
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Our B2B email marketing campaigns nurture leads through the sales funnel with targeted, personalized content that drives conversions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Personalized lead nurturing sequences based on behavior</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Account-based marketing campaigns for high-value prospects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Marketing automation that delivers the right content at the right time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">A/B testing and optimization to maximize open and conversion rates</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="flex items-center justify-center px-6 py-3 bg-kappa-accent text-white font-medium rounded-lg hover:bg-kappa-accent/90 transition-colors">
                    <span>Contact Us</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link to="/work" className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
                    <span>View Our Work</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
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
                Comprehensive <span className="text-kappa-blue">Digital Advertising</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                We leverage cutting-edge advertising technology and creative strategies to maximize your return on ad spend.
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
                Our <span className="text-kappa-blue">Marketing Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                A data-driven approach to developing and executing digital marketing campaigns that deliver measurable results.
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
                Marketing <span className="text-kappa-accent">Tools & Platforms</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We leverage industry-leading platforms and tools to deliver exceptional marketing performance.
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
                Ready to Boost Your Digital Marketing?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Partner with us to create data-driven campaigns that deliver measurable business results.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-kappa-blue rounded-lg font-bold hover:bg-kappa-lightblue transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;
