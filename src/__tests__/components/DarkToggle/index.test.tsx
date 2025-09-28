import { render, screen, fireEvent } from "@testing-library/react";
import DarkToggle from "../../../components/DarkToggle";

describe("DarkToggle", () => {
  afterEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("enables dark mode when checked", () => {
    render(<DarkToggle />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(document.documentElement).toHaveClass("dark");
    expect(checkbox).toBeChecked();
  });

  it("disables dark mode when unchecked", () => {
    render(<DarkToggle />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(document.documentElement).toHaveClass("dark");

    fireEvent.click(checkbox);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(checkbox).not.toBeChecked();
  });
});
