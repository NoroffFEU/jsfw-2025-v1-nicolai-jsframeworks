import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { IProduct } from "../typescript.tsx";
import { useToast } from "../ToastContext";

interface CartItem extends IProduct {
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: IProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalQuantity: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { showToast } = useToast();

  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from sessionStorage
    const saved = sessionStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist cart to sessionStorage on changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showToast(`Added another ${product.title} to cart`, "success");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      showToast(`${product.title} added to cart`, "success");
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const removed = prev.find((item) => item.id === productId);
      if (removed) {
        showToast(`${removed.title} removed from cart`, "warning");
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = Math.max(item.quantity + delta, 0);

            if (newQuantity === 0) {
              showToast(`${item.title} removed from cart`, "warning");
            } else if (delta > 0) {
              showToast(`Added another ${item.title} to cart`, "success");
            } else if (delta < 0) {
              showToast(`Reduced quantity of ${item.title}`, "warning");
            }

            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Cart cleared", "warning");
  };

  const totalQuantity = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
