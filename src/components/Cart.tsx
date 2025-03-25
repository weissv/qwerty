
import React, { useEffect } from 'react';
import { X, ShoppingCart, Minus, Plus, Check } from 'lucide-react';
import { PotatoProduct } from './PotatoCard';
import { cn } from '@/lib/utils';

interface CartItem extends PotatoProduct {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  items, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  // Calculate total price
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Disable body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Checkout function (placeholder)
  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      
      {/* Cart panel */}
      <div 
        className={cn(
          'fixed right-0 top-0 bottom-0 w-full sm:w-96 max-w-full bg-white shadow-xl z-50 transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-medium text-lg flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart 
            <span className="text-sm text-muted-foreground">
              ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
            </span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Cart items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="bg-secondary rounded-full p-3 mb-3">
                <ShoppingCart className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">
                Start adding some delicious potatoes!
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {items.map(item => (
                <li key={item.id} className="px-4 py-3">
                  <div className="flex gap-3">
                    {/* Product image */}
                    <div className="w-20 h-20 rounded-lg bg-potato-50 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium truncate">{item.name}</h3>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                      
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-1 rounded-full border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 rounded-full border border-gray-200 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        
                        <span className="ml-auto font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer with total and checkout */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="h-5 w-5" />
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
