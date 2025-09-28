// CartContext.test.tsx
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../../../components/CartContext";
import { useToast } from "../../../components/ToastContext";
import { IProduct } from "../../../components/typescript";

// Mock the toast context
jest.mock("../../../components/ToastContext", () => ({
  useToast: jest.fn(),
}));

const mockShowToast = jest.fn();

beforeEach(() => {
  (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  sessionStorage.clear();
  mockShowToast.mockClear();
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

const sampleProduct: IProduct = {
  id: "1",
  title: "Test Product",
  description: "A product for testing",
  price: 10,
  discountedPrice: 8,
  quantity: 1,
  image: { url: "https://via.placeholder.com/150", alt: "Test Product" },
  rating: 4.5,
  tags: ["test", "sample"],
  reviews: [{ id: "r1", username: "user1", rating: 5, description: "Great!" }],
};

describe("CartContext", () => {
  const setup = () => renderHook(() => useCart(), { wrapper });

  it("starts with an empty cart", () => {
    const { result } = setup();
    expect(result.current.cart).toEqual([]);
    expect(result.current.totalQuantity).toBe(0);
  });

  it("adds a product to the cart and shows toast", () => {
    const { result } = setup();
    act(() => result.current.addToCart(sampleProduct, 2));

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(2);
    expect(result.current.totalQuantity).toBe(2);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Test Product added to cart",
      "success"
    );
  });

  it("increments quantity if product already exists in cart", () => {
    const { result } = setup();
    act(() => result.current.addToCart(sampleProduct, 1));
    act(() => result.current.addToCart(sampleProduct, 2));

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(3);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Added another Test Product to cart",
      "success"
    );
  });

  it("removes a product from the cart and shows toast", () => {
    const { result } = setup();
    act(() => result.current.addToCart(sampleProduct));
    act(() => result.current.removeFromCart(sampleProduct.id));

    expect(result.current.cart).toHaveLength(0);
    expect(result.current.totalQuantity).toBe(0);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Test Product removed from cart",
      "warning"
    );
  });

  it("updates quantity correctly and triggers toasts", () => {
    const { result } = setup();
    act(() => result.current.addToCart(sampleProduct, 1));

    // Increase
    act(() => result.current.updateQuantity(sampleProduct.id, 2));
    expect(result.current.cart[0].quantity).toBe(3);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Added another Test Product to cart",
      "success"
    );

    // Decrease
    act(() => result.current.updateQuantity(sampleProduct.id, -1));
    expect(result.current.cart[0].quantity).toBe(2);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Reduced quantity of Test Product",
      "warning"
    );

    // Remove
    act(() => result.current.updateQuantity(sampleProduct.id, -2));
    expect(result.current.cart).toHaveLength(0);
    expect(mockShowToast).toHaveBeenCalledWith(
      "Test Product removed from cart",
      "warning"
    );
  });

  it("clears the cart and shows toast", () => {
    const { result } = setup();
    act(() => result.current.addToCart(sampleProduct));
    act(() => result.current.clearCart());

    expect(result.current.cart).toHaveLength(0);
    expect(result.current.totalQuantity).toBe(0);
    expect(mockShowToast).toHaveBeenCalledWith("Cart cleared", "warning");
  });
});
