
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-earth-50 border-t border-earth-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-medium mb-4">
              Spud<span className="text-potato-600">Market</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Bringing you the finest selection of premium potatoes, grown with care and harvested with expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#varieties" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Potato Varieties
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Cooking Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h4 className="font-medium mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-potato-600 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Spud Lane, Potato Fields,<br />Idaho 83701, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-potato-600 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-potato-600 flex-shrink-0" />
                <a href="mailto:info@spudmarket.com" className="text-muted-foreground hover:text-potato-600 transition-colors">
                  info@spudmarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-100 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} SpudMarket. All rights reserved. Designed with care and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
