import React from "react";
import { render, screen, act } from "@testing-library/react";
import { ToastProvider, useToast } from "../../../components/ToastContext";

jest.mock(
  "../../../components/ToastMessage",
  () =>
    ({ type, message }: any) =>
      (
        <div data-testid="toast" data-type={type}>
          {message}
        </div>
      )
);

describe("ToastContext", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const TestComponent = () => {
    const { showToast } = useToast();

    return (
      <div>
        <button onClick={() => showToast("Success!", "success")}>
          Add Toast
        </button>
      </div>
    );
  };

  it("adds a toast when showToast is called", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    act(() => {
      screen.getByText("Add Toast").click();
    });

    expect(screen.getByTestId("toast")).toHaveTextContent("Success!");
  });

  it("removes toast after 3 seconds", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    act(() => {
      screen.getByText("Add Toast").click();
    });

    expect(screen.getByTestId("toast")).toHaveTextContent("Success!");

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByTestId("toast")).not.toBeInTheDocument();
  });

  it("keeps only last 3 toasts", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    act(() => {
      screen.getByText("Add Toast").click();
      screen.getByText("Add Toast").click();
      screen.getByText("Add Toast").click();
      screen.getByText("Add Toast").click();
    });

    const toasts = screen.getAllByTestId("toast");
    expect(toasts.length).toBe(3);
  });

  it("throws error if useToast is used outside provider", () => {
    const ConsoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const Component = () => {
      useToast();
      return null;
    };

    expect(() => render(<Component />)).toThrow(
      "useToast must be used within a ToastProvider"
    );
    ConsoleErrorMock.mockRestore();
  });
});
