import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductItem from "../../../components/ProductItem";
import { useCart } from "../../../components/CartContext";
import { IProduct } from "../../../components/typescript";

jest.mock("../../../components/CartContext", () => ({
  useCart: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

const mockAddToCart = jest.fn();

const product: IProduct = {
  id: "1",
  title: "Test Product",
  description: "This is a test product",
  price: 100,
  discountedPrice: 80,
  quantity: 10,
  image: { url: "test.jpg", alt: "Test Image" },
  rating: 3,
  tags: ["tag1", "tag2"],
  reviews: [
    { id: "r1", username: "Alice", rating: 4, description: "Great product!" },
    { id: "r2", username: "Bob", rating: 3, description: "Its okay." },
  ],
};

describe("ProductItem", () => {
  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders product title and image", () => {
    render(<ProductItem product={product} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    const img = screen.getByAltText(/Test Image/i) as HTMLImageElement;
    expect(img.src).toContain("test.jpg");
  });

  it("shows discounted price and 'On sale' badge", () => {
    render(<ProductItem product={product} />);
    expect(screen.getByText(/on sale/i)).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();
  });

  it("renders correct number of filled and empty rating dots", () => {
    render(<ProductItem product={product} />);

    // Count inner filled dots
    expect(screen.getAllByTestId("filled-dot")).toHaveLength(product.rating);

    // The outer dots are always 5
    expect(screen.getAllByTestId("empty-dot")).toHaveLength(5);
  });

  it("renders product tags", () => {
    render(<ProductItem product={product} />);
    expect(screen.getByText(/tag1\s+\|\s+tag2/i)).toBeInTheDocument();
  });

  it("calls addToCart when 'Add to Cart' button is clicked", () => {
    render(<ProductItem product={product} />);
    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });

  it("links to correct product page", () => {
    render(<ProductItem product={product} />);
    const link = screen.getByRole("link", { name: /View product/i });
    expect(link).toHaveAttribute("href", `/product/${product.id}`);
  });
});
