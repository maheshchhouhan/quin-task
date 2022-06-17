import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryClient = new QueryClient();

const MockApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>
  );
};

describe("App Component", () => {
  test("renders learn react link", () => {
    render(<MockApp />);
    const divElement: HTMLDivElement = screen.getByTestId("app-container");
    expect(divElement).toBeInTheDocument();
  });
});
