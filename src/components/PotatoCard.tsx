
import React from 'react';
import { PlusCircle } from 'lucide-react';

export interface PotatoProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  origin: string;
}

interface PotatoCardProps {
  product: PotatoProduct;
  onAddToCart: (product: PotatoProduct) => void;
}

const PotatoCard: React.FC<PotatoCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover-scale">
      <div className="aspect-square overflow-hidden bg-potato-50 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-potato-800 px-3 py-1 rounded-full text-sm font-medium">
          {product.weight}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-medium line-clamp-1">
            {product.name}
          </h3>
          <span className="text-potato-600 font-medium">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Origin: {product.origin}
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1 bg-potato-100 hover:bg-potato-200 text-potato-800 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PotatoCard;
