import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductFocus from "../../../components/ProductFocus";
import { useCart } from "../../../components/CartContext";

// Mock the useCart hook
jest.mock("../../../components/CartContext", () => ({
  useCart: jest.fn(),
}));

const mockAddToCart = jest.fn();

describe("ProductFocus", () => {
  const product = {
    id: "123",
    title: "Test Product",
    tags: ["Tag1", "Tag2"],
    price: 100,
    discountedPrice: 80,
    image: {
      url: "test-image.jpg",
      alt: "Test Image",
    },
    reviews: [
      { id: "r1", username: "Alice", rating: 4, description: "Great product" },
      { id: "r2", username: "Bob", rating: 5, description: "Excellent!" },
    ],
    description: "This is a test product.",
    rating: 4,
  };

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
    jest.clearAllMocks();
  });

  it("renders product title, discounted price, image, description, and reviews", () => {
    render(<ProductFocus product={product} />);

    // Title
    expect(screen.getByText(product.title)).toBeInTheDocument();

    // Discounted Price
    expect(screen.getByText(/\b80\b/)).toBeInTheDocument();

    // Image
    const img = screen.getByAltText(product.image.alt) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(product.image.url);

    // Description
    expect(screen.getByText(product.description)).toBeInTheDocument();

    // Reviews
    product.reviews.forEach((review) => {
      expect(
        screen.getByText(new RegExp(review.username, "i"))
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          (content, element) =>
            element?.textContent === `Rating: ${review.rating}`
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(review.description, "i"))
      ).toBeInTheDocument();
    });
  });

  it("calls addToCart when the 'Add to Cart' button is clicked", () => {
    render(<ProductFocus product={product} />);
    const button = screen.getByRole("button", { name: /Add to Cart/i });
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});
