
import React, { useEffect } from 'react';
import { ArrowRight, LightbulbIcon, Workflow, Presentation, BarChart4, Sparkles } from 'lucide-react';

const Process = () => {
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

  const processSteps = [
    {
      icon: <LightbulbIcon className="h-8 w-8 text-kappa-blue" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, target audience, and challenges to create a tailored strategy."
    },
    {
      icon: <Workflow className="h-8 w-8 text-kappa-blue" />,
      title: "Planning & UX Design",
      description: "Our team creates detailed wireframes and user flows to establish the foundation for an exceptional user experience."
    },
    {
      icon: <Presentation className="h-8 w-8 text-kappa-blue" />,
      title: "Design & Development",
      description: "We transform concepts into visually stunning, functional solutions that align with your brand identity."
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-kappa-blue" />,
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly across all devices before we deploy your solution."
    }
  ];

  return (
    <section className="section-padding bg-kappa-gray">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-kappa-lightblue">
              <Sparkles className="h-6 w-6 text-kappa-blue" />
            </div>
          </div>
          <span className="inline-block px-4 py-2 rounded-full bg-kappa-lightblue text-kappa-blue text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How we turn <span className="text-gradient">ideas into reality</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our proven methodology ensures consistent, high-quality results for every project we undertake.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-kappa-lightblue hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-on-scroll ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Process step number and icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-kappa-lightblue">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-kappa-blue text-white flex items-center justify-center text-lg font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                {/* Process step content */}
                <div className={`md:w-1/2 p-8 bg-white rounded-xl shadow-lg hover-lift ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className={`flex items-center gap-2 text-kappa-blue ${
                    index % 2 === 0 ? '' : 'md:justify-end'
                  }`}>
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
