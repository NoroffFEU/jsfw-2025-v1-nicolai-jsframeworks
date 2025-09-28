import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ShowingProducts from "../../../components/ShowingProducts";
import { useApi } from "../../../components/hook/useApiProducts";
import { useToast } from "../../../components/ToastContext";

// Mock dependencies
jest.mock("../../../components/hook/useApiProducts");
jest.mock("../../../components/ToastContext");
jest.mock("../../../components/ProductItem", () => ({ product }: any) => (
  <div data-testid="product-item">{product.title}</div>
));

const originalIO = window.IntersectionObserver;
afterAll(() => {
  window.IntersectionObserver = originalIO;
});

describe("ShowingProducts", () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  });

  it("renders loading state initially", () => {
    (useApi as jest.Mock).mockReturnValue({
      data: [],
      meta: null,
      loading: true,
      error: null,
      fetchData: jest.fn(),
    });

    render(<ShowingProducts search="" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useApi as jest.Mock).mockReturnValue({
      data: [],
      meta: null,
      loading: false,
      error: true,
      fetchData: jest.fn(),
    });

    render(<ShowingProducts search="" />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("renders products and filters based on search", () => {
    const products = [
      { id: "1", title: "Apple" },
      { id: "2", title: "Banana" },
    ];

    const fetchData = jest.fn();

    (useApi as jest.Mock).mockReturnValue({
      data: products,
      meta: null,
      loading: false,
      error: null,
      fetchData,
    });

    const { rerender } = render(<ShowingProducts search="" />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();

    // Test search filtering
    rerender(<ShowingProducts search="apple" />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });

  it("shows toast when no results found", () => {
    const products = [{ id: "1", title: "Apple" }];
    (useApi as jest.Mock).mockReturnValue({
      data: products,
      meta: null,
      loading: false,
      error: null,
      fetchData: jest.fn(),
    });

    render(<ShowingProducts search="Banana" />);
    expect(mockShowToast).toHaveBeenCalledWith(
      "No results found for your search",
      "error"
    );
  });

  it("handles infinite scroll by observing last product", async () => {
    const products = [
      { id: "1", title: "Apple" },
      { id: "2", title: "Banana" },
    ];
    const fetchData = jest.fn();
    (useApi as jest.Mock).mockReturnValue({
      data: products,
      meta: { nextPage: 2, isLastPage: false },
      loading: false,
      error: null,
      fetchData,
    });

    const observeMock = jest.fn();
    const disconnectMock = jest.fn();

    // Mock IntersectionObserver
    (window as any).IntersectionObserver = jest.fn((callback) => ({
      observe: observeMock,
      disconnect: disconnectMock,
    }));

    render(<ShowingProducts search="" />);
    expect(observeMock).toHaveBeenCalled();
  });
});
