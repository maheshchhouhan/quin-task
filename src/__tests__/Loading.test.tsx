import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Loading from "../components/Common/Loading/Index";

const queryClient = new QueryClient();

const MockLoading = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Loading />
      </QueryClientProvider>
    </>
  );
};

describe("Loading Component", () => {
  test("Loading should render properly", () => {
    render(<MockLoading />);
    const divElement: HTMLDivElement = screen.getByTestId("loading-container");
    expect(divElement).toBeInTheDocument();
  });
});
