import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../../../components/CartItem";
import { CartProvider, useCart } from "../../../components/CartContext";
import { ToastProvider } from "../../../components/ToastContext";
import { IProduct } from "../../../components/typescript";

const defaultProduct: IProduct = {
  id: "1",
  title: "Test Product",
  description: "A product for testing",
  price: 100,
  discountedPrice: 80,
  quantity: 2,
  image: { url: "https://via.placeholder.com/150", alt: "Test Product" },
  rating: 4,
  tags: [],
  reviews: [],
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ToastProvider>
    <CartProvider>{children}</CartProvider>
  </ToastProvider>
);

// Simple Cart list for integration-level tests
const CartList = () => {
  const { cart } = useCart();
  return (
    <ul>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

describe("CartItem & Cart integration", () => {
  beforeEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem("cart", JSON.stringify([{ ...defaultProduct }]));
  });

  it("renders with correct aria-label", () => {
    render(<CartItem {...defaultProduct} />, { wrapper: Wrapper });

    expect(
      screen.getByLabelText(
        `Cart item: ${defaultProduct.title}, quantity ${defaultProduct.quantity}, total ${
          defaultProduct.discountedPrice * defaultProduct.quantity
        }`
      )
    ).toBeInTheDocument();
  });

  it("increases quantity when + button is clicked", () => {
    render(<CartItem {...defaultProduct} />, { wrapper: Wrapper });

    fireEvent.click(
      screen.getByRole("button", {
        name: `Increase quantity of ${defaultProduct.title}`,
      })
    );

    expect(
      screen.getByLabelText(
        `Cart item: ${defaultProduct.title}, quantity 3, total ${
          defaultProduct.discountedPrice * 3
        }`
      )
    ).toBeInTheDocument();
  });

  it("decreases quantity when - button is clicked", () => {
    render(<CartItem {...defaultProduct} />, { wrapper: Wrapper });

    fireEvent.click(
      screen.getByRole("button", {
        name: `Decrease quantity of ${defaultProduct.title}`,
      })
    );

    expect(
      screen.getByLabelText(
        `Cart item: ${defaultProduct.title}, quantity 1, total ${
          defaultProduct.discountedPrice * 1
        }`
      )
    ).toBeInTheDocument();
  });

  it("shows quantity 0 when decreased twice", () => {
    render(<CartItem {...defaultProduct} />, { wrapper: Wrapper });

    const decreaseBtn = screen.getByRole("button", {
      name: `Decrease quantity of ${defaultProduct.title}`,
    });

    fireEvent.click(decreaseBtn); // 2 → 1
    fireEvent.click(decreaseBtn); // 1 → 0

    expect(
      screen.getByLabelText(
        `Cart item: ${defaultProduct.title}, quantity 0, total 0`
      )
    ).toBeInTheDocument();
  });

  it("removes item from cart list when quantity reaches 0", async () => {
    render(<CartList />, { wrapper: Wrapper });

    const decreaseBtn = screen.getByRole("button", {
      name: `Decrease quantity of ${defaultProduct.title}`,
    });

    fireEvent.click(decreaseBtn); // 2 → 1
    fireEvent.click(decreaseBtn); // 1 → 0 → removed

    await waitFor(() => {
      expect(
        screen.queryByLabelText(/Cart item: Test Product/i)
      ).not.toBeInTheDocument();
    });
  });

  it("removes item from cart list when remove button is clicked", async () => {
    render(<CartList />, { wrapper: Wrapper });

    fireEvent.click(
      screen.getByRole("button", {
        name: `Remove ${defaultProduct.title} from cart`,
      })
    );

    await waitFor(() => {
      expect(
        screen.queryByLabelText(/Cart item: Test Product/i)
      ).not.toBeInTheDocument();
    });
  });
});
