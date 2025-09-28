// ContactForm.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../../../components/ContactForm";
import { useToast } from "../../../components/ToastContext";

jest.mock("../../../components/ToastContext", () => ({
  useToast: jest.fn(),
}));

const mockShowToast = jest.fn();

beforeEach(() => {
  (useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast });
  jest.clearAllMocks();
});

describe("ContactForm", () => {
  it("renders all inputs and buttons", () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  });

  it("shows toast errors when fields are invalid", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /Send/i }));

    await waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledTimes(4);
    });

    const calls = mockShowToast.mock.calls.map(([msg, type]) => [msg, type]);

    expect(calls).toContainEqual([
      "Name must be at least 3 characters long",
      "error",
    ]);
    expect(calls).toContainEqual([
      "Subject must be at least 3 characters long",
      "error",
    ]);
    expect(calls).toContainEqual(["Invalid email address", "error"]);
    expect(calls).toContainEqual([
      "Message must be at least 10 characters long",
      "error",
    ]);
  });

  it("submits valid form and shows success toast", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), {
      target: { value: "Feedback" },
    });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Message/i), {
      target: { value: "This is a long enough message." },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send/i }));

    await waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith(
        "Message sent successfully!",
        "success"
      );
    });

    // fields should reset
    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Subject/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/E-mail/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Message/i)).toHaveValue("");
  });

  it("resets fields when reset button is clicked", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John Doe" },
    });
    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("John Doe");

    fireEvent.click(screen.getByRole("button", { name: /Reset/i }));

    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("");
  });
});
