
import React, { useEffect } from 'react';
import { 
  Search, 
  Globe, 
  LineChart, 
  BarChart, 
  Clock,
  TrendingUp,
  FileText,
  List,
  CheckCircle,
  Check,
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SeoOptimizationPage = () => {
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

  const services = [
    {
      icon: <Globe className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Keyword Research & Strategy",
      description: "In-depth analysis to identify high-value keywords that align with your business goals and target audience."
    },
    {
      icon: <FileText className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "On-Page SEO",
      description: "Optimization of content, meta data, and HTML structure to improve visibility for target keywords."
    },
    {
      icon: <LineChart className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Technical SEO",
      description: "Resolving technical issues affecting crawlability, indexing, and overall site performance."
    },
    {
      icon: <BarChart className="h-10 w-10 mb-4 text-kappa-accent" />,
      title: "Link Building",
      description: "Strategic acquisition of quality backlinks to boost your site's authority and improve rankings."
    }
  ];

  const features = [
    {
      icon: <List className="h-6 w-6 text-kappa-accent" />,
      title: "Content Optimization",
      description: "SEO-friendly content that engages users and satisfies search engine ranking factors."
    },
    {
      icon: <Globe className="h-6 w-6 text-kappa-accent" />,
      title: "Local SEO",
      description: "Targeted strategies to improve visibility in local search results and Google Maps."
    },
    {
      icon: <FileText className="h-6 w-6 text-kappa-accent" />,
      title: "Competitor Analysis",
      description: "Comprehensive research to identify opportunities and gaps in your market."
    },
    {
      icon: <LineChart className="h-6 w-6 text-kappa-accent" />,
      title: "Performance Tracking",
      description: "Detailed reports showing rankings, traffic, and conversion improvements over time."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-kappa-accent" />,
      title: "Algorithm Updates",
      description: "Proactive strategies to keep your site compliant with Google's evolving algorithm."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-kappa-accent" />,
      title: "Site Structure Optimization",
      description: "Enhancement of site architecture for better user experience and crawlability."
    }
  ];

  const timelines = [
    {
      month: "Month 1-2",
      title: "Foundation & Setup",
      description: "Comprehensive site audit, keyword research, competitor analysis, and initial on-page optimizations to establish a solid SEO foundation.",
      tasks: [
        "Technical SEO audit and fixes",
        "Keyword research and mapping",
        "On-page SEO implementation",
        "Google Search Console setup"
      ]
    },
    {
      month: "Month 3-4",
      title: "Content & Authority Building",
      description: "Creation of optimized content and beginning of link building efforts to improve site authority and relevance.",
      tasks: [
        "Content optimization and creation",
        "Initial link building",
        "Local SEO implementation",
        "User experience improvements"
      ]
    },
    {
      month: "Month 5-6",
      title: "Expansion & Refinement",
      description: "Expanding content strategy, increasing link acquisition, and refining strategies based on performance data.",
      tasks: [
        "Advanced link building",
        "Content expansion",
        "Performance analysis",
        "Strategy refinement"
      ]
    },
    {
      month: "Month 7+",
      title: "Growth & Scaling",
      description: "Continued optimization, scaling successful strategies, and adapting to algorithm changes to maintain and improve rankings.",
      tasks: [
        "Sustained link acquisition",
        "Content calendar management",
        "Conversion rate optimization",
        "Competitive gap analysis"
      ]
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$899",
      description: "Perfect for small businesses looking to establish an SEO foundation",
      features: [
        "Keyword research (up to 20 keywords)",
        "Monthly technical SEO audit",
        "On-page optimization (5 pages/month)",
        "Basic link building (2-3 links/month)",
        "Monthly performance reporting"
      ],
      recommended: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Growth",
      price: "$1,499",
      description: "Ideal for growing businesses seeking to expand their digital presence",
      features: [
        "Advanced keyword research (up to 50 keywords)",
        "Bi-weekly technical SEO audits",
        "On-page optimization (10 pages/month)",
        "Strategic link building (5-7 links/month)",
        "Content optimization (2 pieces/month)",
        "Local SEO optimization",
        "Bi-weekly performance reporting"
      ],
      recommended: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      description: "Comprehensive solution for established businesses in competitive markets",
      features: [
        "Comprehensive keyword strategy (100+ keywords)",
        "Weekly technical SEO audits",
        "Unlimited on-page optimization",
        "Advanced link building (10+ links/month)",
        "Content strategy & creation (4 pieces/month)",
        "Competitor analysis & strategy",
        "Conversion rate optimization",
        "Weekly performance reporting with insights"
      ],
      recommended: false,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy that typically shows initial results within 3-6 months. The timeline depends on factors like your website's current condition, competition level, and the aggressiveness of your strategy. Significant results usually become apparent after 6+ months of consistent optimization."
    },
    {
      question: "Why should I invest in monthly SEO services rather than a one-time optimization?",
      answer: "Search engines continually update their algorithms, and your competitors are constantly improving their SEO strategies. Monthly services ensure your website keeps pace with these changes, maintains its rankings, and builds upon early successes for long-term growth."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including keyword rankings, organic traffic, user engagement metrics, conversion rates, and backlink profile growth. We provide comprehensive monthly reports showing progress across all these areas."
    },
    {
      question: "What makes your SEO services different from other agencies?",
      answer: "We focus on sustainable, white-hat SEO techniques that build long-term value. Our approach is transparent, data-driven, and tailored to your specific business goals. We combine technical expertise with content strategy and link building for a comprehensive approach."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "No ethical SEO provider can guarantee specific rankings as search algorithms consider hundreds of factors outside our control. However, we have a proven track record of significantly improving rankings and organic traffic for our clients through our methodical approach."
    }
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
                  <Search className="w-4 h-4 mr-2" /> SEO Optimization
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Climb the <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">Search Rankings</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Data-driven SEO strategies that improve visibility, drive qualified traffic, and grow your business organically.
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
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="SEO Optimization Services" 
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
                Comprehensive <span className="text-kappa-accent">SEO Services</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl">
                We provide end-to-end search engine optimization services that improve your organic visibility and drive sustainable traffic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-left text-gray-900 hover:transform hover:scale-105 transition-all duration-300 animate-on-scroll shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="SEO Timeline and Process" 
                  className="rounded-lg shadow-2xl border border-white/10"
                />
              </div>
              <div className="animate-on-scroll order-1 md:order-2 text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-kappa-accent/20 text-kappa-accent text-sm font-medium mb-6">
                  <Clock className="w-4 h-4 mr-2" /> Understanding the SEO Timeline
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The SEO <span className="bg-gradient-to-r from-blue-400 to-kappa-accent text-transparent bg-clip-text">Growth Timeline</span>
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  SEO is a long-term investment that yields compounding returns over time. Understanding the typical timeline helps set realistic expectations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Initial results typically begin around months 3-4</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Significant improvements usually seen by months 6-8</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Compounding growth continues as your site authority increases</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-kappa-accent flex-shrink-0 mr-2" />
                    <span className="text-white/80">Monthly optimization protects against algorithm updates</span>
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
                Comprehensive <span className="text-kappa-blue">SEO Strategy</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Our holistic approach addresses all aspects of search engine optimization to maximize your organic visibility.
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
                The SEO <span className="text-kappa-blue">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Understanding what to expect each month with our ongoing SEO services.
              </p>
            </div>

            <div className="space-y-12">
              {timelines.map((timeline, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-kappa-blue to-kappa-accent p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{timeline.month}</h3>
                      <p className="text-white/80 text-lg">{timeline.title}</p>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <p className="text-gray-700 mb-4">{timeline.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {timeline.tasks.map((task, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-kappa-accent flex-shrink-0 mr-2" />
                            <span className="text-gray-800">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-kappa-navy text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                <Info className="w-4 h-4 mr-2" /> Google Ranking Factors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Google <span className="text-kappa-accent">Ranks Websites</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Search engines consider hundreds of factors when ranking websites. Here are some of the most important ones we focus on.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">Content Quality</h3>
                <p className="text-white/80">
                  Google prioritizes content that answers searchers' queries completely, demonstrates expertise, and provides unique value not found elsewhere.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">Backlink Profile</h3>
                <p className="text-white/80">
                  Links from authoritative, relevant websites signal to Google that your content is trustworthy and valuable.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">User Experience</h3>
                <p className="text-white/80">
                  Site speed, mobile-friendliness, easy navigation, and safe browsing all influence how Google evaluates your website.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">Technical SEO</h3>
                <p className="text-white/80">
                  Crawlability, proper indexing, structured data, and secure connections (HTTPS) are essential technical factors.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">User Signals</h3>
                <p className="text-white/80">
                  Click-through rates, dwell time, bounce rates and other engagement metrics help Google determine if users find your content valuable.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-kappa-accent">E-A-T</h3>
                <p className="text-white/80">
                  Expertise, Authoritativeness, and Trustworthiness are especially important for websites in health, finance, and other YMYL (Your Money or Your Life) categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Monthly <span className="text-kappa-blue">SEO Packages</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our SEO packages are designed to provide ongoing optimization and continuous improvement for sustainable organic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-2xl overflow-hidden border ${pkg.recommended ? 'border-kappa-accent' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {pkg.recommended && (
                    <div className={`absolute top-0 right-0 bg-gradient-to-r ${pkg.gradient} text-white px-4 py-1 text-sm font-medium`}>
                      Most Popular
                    </div>
                  )}
                  <div className={`h-2 w-full bg-gradient-to-r ${pkg.gradient}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-kappa-accent flex-shrink-0 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors ${
                        pkg.recommended 
                          ? 'bg-gradient-to-r from-kappa-blue to-kappa-accent text-white hover:opacity-90' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-kappa-blue">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about our SEO services and the search optimization process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="mb-6 bg-white rounded-xl p-6 shadow-md animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-kappa-blue to-kappa-accent">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Improve Your Search Rankings?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Partner with us for sustainable, long-term organic growth through strategic SEO.
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

export default SeoOptimizationPage;
