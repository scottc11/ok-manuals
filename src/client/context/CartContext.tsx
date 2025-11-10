import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, CartContextType } from '../types';

// Cart actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: { slug: string; name: string; thumbnailUrl?: string; stripeId?: string }; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: { items: CartItem[] } };

// Cart state
interface CartState {
  items: CartItem[];
}

// Initial state
const initialState: CartState = {
  items: [],
};

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find(existing =>
        (item.stripeId && existing.stripeId === item.stripeId) || existing.slug === item.slug
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            ((existingItem.stripeId && item.stripeId === existingItem.stripeId) || item.slug === existingItem.slug)
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        const newItem: CartItem = {
          id: `${item.slug}_${Date.now()}`,
          slug: item.slug,
          name: item.name,
          quantity,
          thumbnailUrl: item.thumbnailUrl,
          stripeId: item.stripeId,
        };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== id),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload.items,
      };
    
    default:
      return state;
  }
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: { items } });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(state.items));
  }, [state.items]);

  // Context value
  const value: CartContextType = {
    items: state.items,
    
    addItem: (item, quantity: number = 1) => {
      dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
    },
    
    removeItem: (id: string) => {
      dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    },
    
    updateQuantity: (id: string, quantity: number) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    },
    
    clearCart: () => {
      dispatch({ type: 'CLEAR_CART' });
    },
    
    getItemCount: () => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    },
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 