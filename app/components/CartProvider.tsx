"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";

interface CartItem {
  id: string;
  slug: string;
  name: string;
  quantity: number;
  thumbnailUrl?: string;
  stripeId?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    item: {
      slug: string;
      name: string;
      thumbnailUrl?: string;
      stripeId?: string;
    },
    quantity?: number,
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        item: {
          slug: string;
          name: string;
          thumbnailUrl?: string;
          stripeId?: string;
        };
        quantity: number;
      };
    }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: { items: CartItem[] } };

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, quantity } = action.payload;
      const existing = state.items.find(
        (i) =>
          (item.stripeId && i.stripeId === item.stripeId) ||
          i.slug === item.slug,
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            (existing.stripeId && i.stripeId === existing.stripeId) ||
            i.slug === existing.slug
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: `${item.slug}_${Date.now()}`,
            slug: item.slug,
            name: item.name,
            quantity,
            thumbnailUrl: item.thumbnailUrl,
            stripeId: item.stripeId,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i,
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "LOAD_CART":
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem("shopping-cart");
    if (saved) {
      try {
        dispatch({ type: "LOAD_CART", payload: { items: JSON.parse(saved) } });
      } catch {
        /* ignore corrupt data */
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(state.items));
  }, [state.items]);

  const value: CartContextType = {
    items: state.items,
    addItem: (item, quantity = 1) =>
      dispatch({ type: "ADD_ITEM", payload: { item, quantity } }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } }),
    updateQuantity: (id, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    getItemCount: () =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
