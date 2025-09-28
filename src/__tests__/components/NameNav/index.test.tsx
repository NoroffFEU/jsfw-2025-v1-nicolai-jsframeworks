import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NameNav from "../../../components/NameNav";
import { useCart } from "../../../components/CartContext";

jest.mock("../../../components/CartContext", () => ({
  useCart: jest.fn(),
}));

describe("NameNav component", () => {
  const mockUseCart = useCart as jest.Mock;

  beforeEach(() => {
    mockUseCart.mockReturnValue({ totalQuantity: 0 });
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <NameNav />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact/i })).toBeInTheDocument();
  });

  it("shows cart quantity badge when totalQuantity > 0", () => {
    mockUseCart.mockReturnValue({ totalQuantity: 3 });

    render(
      <MemoryRouter>
        <NameNav />
      </MemoryRouter>
    );

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("links have correct hrefs", () => {
    render(
      <MemoryRouter>
        <NameNav />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Products/i })).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByRole("link", { name: /Cart/i })).toHaveAttribute(
      "href",
      "/cart"
    );
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
