import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PotatoCard, { PotatoProduct } from '@/components/PotatoCard';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import { toast } from 'sonner';
import { Tractor, Leaf, Award, Clock, HelpCircle } from 'lucide-react';

// Sample potato data
const potatoProducts: PotatoProduct[] = [
  {
    id: 1,
    name: 'Russet Potatoes',
    description: 'Perfect for baking and mashing, these classic potatoes have a fluffy interior and brown exterior.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '2 lb bag',
    origin: 'Idaho, USA'
  },
  {
    id: 2,
    name: 'Yukon Gold',
    description: 'Known for their buttery flavor and creamy texture, ideal for roasting and mashing.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1640983743761-1db8b05a394c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '1.5 lb bag',
    origin: 'Canada'
  },
  {
    id: 3,
    name: 'Red Potatoes',
    description: 'These thin-skinned potatoes with a waxy texture are perfect for potato salads and roasting.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1608919694560-df465c650022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '2 lb bag',
    origin: 'North Dakota, USA'
  },
  {
    id: 4,
    name: 'Fingerling Potatoes',
    description: 'Small, elongated potatoes with a buttery flavor and firm texture, great for roasting whole.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '1 lb bag',
    origin: 'France'
  },
  {
    id: 5,
    name: 'Purple Potatoes',
    description: 'These vibrant potatoes have a nutty flavor and are rich in antioxidants. Great for making colorful dishes.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1633266838490-6ff3292e020e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '1 lb bag',
    origin: 'Peru'
  },
  {
    id: 6,
    name: 'Sweet Potatoes',
    description: 'Naturally sweet with a bright orange flesh, packed with nutrients and perfect for a variety of dishes.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1596097635121-14b38c5a9b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    weight: '2 lb bag',
    origin: 'North Carolina, USA'
  }
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Chef Michael Thompson',
    role: 'Executive Chef',
    content: "I've been using SpudMarket potatoes in my restaurant for over a year now, and the quality is consistently exceptional. The Yukon Golds make the creamiest mashed potatoes my customers have ever tasted.",
    avatar: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Home Cook',
    content: "The variety and quality of potatoes from SpudMarket have transformed my family dinners. My kids actually ask for seconds of vegetables now! The delivery is always on time and the produce is farm-fresh.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'James Rodriguez',
    role: 'Food Blogger',
    content: "As someone who tests recipes daily, I need reliable ingredients. SpudMarket's potatoes are consistently perfect - whether I'm making crispy roasted fingerlings or velvety potato soup. A true gem for any food enthusiast!",
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }
];

// FAQ data
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How are your potatoes grown?",
    answer: "Our potatoes are grown using sustainable farming practices that minimize environmental impact. We partner with family farms that avoid harmful pesticides and focus on soil health and biodiversity."
  },
  {
    id: 2,
    question: "How long do your potatoes stay fresh?",
    answer: "When stored properly in a cool, dark place with good ventilation, our potatoes typically stay fresh for 2-3 weeks. For best results, keep them in a paper bag or mesh container rather than plastic."
  },
  {
    id: 3,
    question: "Do you offer bulk orders for restaurants?",
    answer: "Yes! We offer special wholesale pricing for restaurants and food service businesses. Please contact our sales team at wholesale@spudmarket.com for pricing and minimum order requirements."
  },
  {
    id: 4,
    question: "What's the difference between potato varieties?",
    answer: "Different potato varieties have unique textures, flavors, and starch contents, making them better suited for specific cooking methods. For example, starchy Russets are ideal for baking and mashing, while waxy Red potatoes hold their shape well in salads and roasts."
  },
  {
    id: 5,
    question: "How do you ship your potatoes?",
    answer: "We ship our potatoes in eco-friendly packaging that ensures they arrive fresh and undamaged. For local deliveries, we use reusable crates that we collect on the next delivery."
  }
];

const Index: React.FC = () => {
  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<PotatoProduct & { quantity: number }>>([]);
  
  // Animation refs
  const varietiesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Add to cart function
  const handleAddToCart = (product: PotatoProduct) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast.success(`Added ${product.name} to your cart`, {
      description: 'Go to cart to complete your purchase',
      duration: 3000
    });
  };
  
  // Update quantity in cart
  const handleUpdateQuantity = (productId: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  // Remove item from cart
  const handleRemoveItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    
    toast.info('Item removed from cart', {
      duration: 2000
    });
  };
  
  // Set up intersection observers for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('show');
            }, index * 100); // Stagger the animations
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    [varietiesRef, aboutRef, testimonialsRef, faqRef, contactRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen page-reveal">
      <Navbar 
        openCart={() => setIsCartOpen(true)} 
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
      />
      
      <main>
        <Hero />
        
        {/* Potato Varieties Section */}
        <section id="varieties" ref={varietiesRef} className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-potato-100 text-potato-800 rounded-full text-sm font-medium mb-4 animate-on-scroll">
                Our Selection
              </span>
              <h2 className="section-title animate-on-scroll">
                Premium Potato Varieties
              </h2>
              <p className="section-subtitle animate-on-scroll">
                Discover our carefully selected range of premium potatoes, each with unique flavors and best suited for specific culinary applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {potatoProducts.map((product, index) => (
                <div key={product.id} className="animate-on-scroll">
                  <PotatoCard product={product} onAddToCart={handleAddToCart} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-on-scroll">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628784230353-5bee16e2f005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Farmers harvesting potatoes"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg max-w-[250px] animate-on-scroll">
                  <p className="text-sm">
                    "We believe in sustainable farming practices that respect the earth and produce the finest potatoes."
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-potato-100 flex items-center justify-center">
                      <Tractor className="h-5 w-5 text-potato-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">John Spudman</p>
                      <p className="text-xs text-muted-foreground">Head Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="inline-block px-4 py-1.5 bg-earth-100 text-earth-800 rounded-full text-sm font-medium mb-4 animate-on-scroll">
                  Our Story
                </span>
                <h2 className="section-title animate-on-scroll">
                  From Soil to Table with Care
                </h2>
                <p className="text-lg text-muted-foreground mb-6 animate-on-scroll">
                  At SpudMarket, we're passionate about potatoes. Our journey began with a simple idea: to provide the finest quality potatoes directly from farms to your kitchen.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4 animate-on-scroll">
                    <div className="w-12 h-12 rounded-full bg-potato-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-6 w-6 text-potato-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Organic Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        We grow our potatoes using organic methods, without harmful pesticides or chemicals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 animate-on-scroll">
                    <div className="w-12 h-12 rounded-full bg-potato-100 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-potato-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Premium Quality</h3>
                      <p className="text-sm text-muted-foreground">
                        Each potato is hand-selected to ensure you receive only the best quality produce.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 animate-on-scroll">
                    <div className="w-12 h-12 rounded-full bg-potato-100 flex items-center justify-center flex-shrink-0">
                      <Tractor className="h-6 w-6 text-potato-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Family Farms</h3>
                      <p className="text-sm text-muted-foreground">
                        We partner with small family farms that have been growing potatoes for generations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 animate-on-scroll">
                    <div className="w-12 h-12 rounded-full bg-potato-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-potato-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Fresh Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        We deliver freshly harvested potatoes directly to your doorstep within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary animate-on-scroll">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-potato-100 text-potato-800 rounded-full text-sm font-medium mb-4 animate-on-scroll">
                Testimonials
              </span>
              <h2 className="section-title animate-on-scroll">
                What Our Customers Say
              </h2>
              <p className="section-subtitle animate-on-scroll">
                Don't just take our word for it. Hear from our satisfied customers who have experienced the difference our premium potatoes make.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-secondary rounded-2xl p-6 border border-potato-100 hover-scale animate-on-scroll"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" ref={faqRef} className="py-20 bg-potato-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-potato-100 text-potato-800 rounded-full text-sm font-medium mb-4 animate-on-scroll">
                Frequently Asked Questions
              </span>
              <h2 className="section-title animate-on-scroll">
                Common Questions About Our Potatoes
              </h2>
              <p className="section-subtitle animate-on-scroll">
                Find answers to the most common questions about our products, delivery, and storage.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-sm animate-on-scroll">
              <FAQAccordion items={faqItems} />
            </div>
            
            <div className="mt-10 text-center animate-on-scroll">
              <p className="text-muted-foreground mb-4">
                Can't find the answer you're looking for?
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Ask Us a Question
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact/Newsletter Section */}
        <section id="contact" ref={contactRef} className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-potato-100 text-potato-800 rounded-full text-sm font-medium mb-4 animate-on-scroll">
                Stay Connected
              </span>
              <h2 className="section-title animate-on-scroll">
                Join Our Potato Community
              </h2>
              <p className="section-subtitle animate-on-scroll">
                Subscribe to our newsletter for recipes, potato care tips, and exclusive offers. Be the first to know when new varieties arrive.
              </p>
              
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto animate-on-scroll">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 rounded-md border border-potato-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-potato-600 focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4 animate-on-scroll">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Cart */}
      <Cart 
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
