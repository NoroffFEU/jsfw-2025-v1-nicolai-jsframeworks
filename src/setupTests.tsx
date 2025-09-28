import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => {
  return {
    // Routing wrappers (fake versions)
    MemoryRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Route: ({ element }: { element: React.ReactNode }) => <>{element}</>,
    Outlet: () => <div data-testid="outlet" />,

    // Links
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to}>{children}</a>
    ),
    NavLink: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to}>{children}</a>
    ),

    // Hooks
    useNavigate: () => jest.fn(),
    useParams: () => ({}),
    useLocation: () => ({ pathname: "/" }),
  };
});
