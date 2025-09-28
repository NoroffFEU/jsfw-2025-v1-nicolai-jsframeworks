import { render, screen, waitFor } from "@testing-library/react";
import { useApi } from "../../../components/hook/useApiProducts";
import React from "react";

const TestComponent = ({ url }: { url: string }) => {
  const { data, meta, loading, error } = useApi(url);

  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>Error</span>}
      <ul>
        {data.map((item: any, idx: number) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
      {meta && <span>Page: {meta.page}</span>}
    </div>
  );
};

const originalFetch = global.fetch;

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
  global.fetch = originalFetch;
});

describe("useApi hook", () => {
  const mockData = {
    data: [{ name: "Item 1" }, { name: "Item 2" }],
    meta: { page: 1, total: 2 },
  };

  it("fetches data successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<TestComponent url="/api/items" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
    expect(await screen.findByText("Page: 1")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  it("handles fetch error", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Failed"));

    render(<TestComponent url="/api/items" />);

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
