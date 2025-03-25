
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-item');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToVarieties = () => {
    const varietiesSection = document.getElementById('varieties');
    if (varietiesSection) {
      varietiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(242,235,221,0.8),transparent_60%)]"></div>
      <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] rounded-full bg-potato-100/40 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-potato-100 text-potato-800 rounded-full text-sm font-medium mb-6 animate-item opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Premium Quality Potatoes
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight animate-item opacity-0 translate-y-10 transition-all duration-700 delay-200">
              Earth's Finest<br />
              <span className="text-potato-600">Potatoes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-item opacity-0 translate-y-10 transition-all duration-700 delay-300">
              Discover our naturally grown, hand-selected potato varieties, delivered fresh from farm to your table. Experience the perfect balance of flavor and nutrition.
            </p>
            <div className="flex flex-wrap gap-4 animate-item opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <button className="btn-primary">
                Shop Now
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-item opacity-0 translate-y-10 transition-all duration-700">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-potato-100/50 to-transparent rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1584896663826-a2c208e9f280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Premium potatoes arranged beautifully"
                className="object-contain h-full w-full rounded-[30%] shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-md">
                <div className="bg-potato-50 rounded-full w-20 h-20 flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-potato-600 font-medium">100%</span>
                  <span className="text-sm font-medium">Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <button 
            onClick={scrollToVarieties}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5 text-potato-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
