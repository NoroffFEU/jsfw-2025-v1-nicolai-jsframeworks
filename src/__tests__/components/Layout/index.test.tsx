import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Layout from "../../../components/Layout";

// Mock Header
jest.mock("../../../components/Header", () => () => (
  <div data-testid="header">Header</div>
));

describe("Layout component", () => {
  it("renders Header", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders Outlet", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    // since Outlet won’t render anything without routes, 
    // we just check that <main> exists
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders main container with correct classes", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const main = screen.getByRole("main");

    expect(main).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
      "h-screen",
      "bg-accent",
      "dark:bg-secondary"
    );
  });
});
