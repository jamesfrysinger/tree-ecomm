import { render, screen, waitFor } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import ProductLandingPage from "pages/ProductLandingPage";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const mockData = {
  products: [
    {
      id: 1,
    },
  ],
};

const mockedAxiosGet = axios.get as jest.MockedFunction<typeof axios.get>;
mockedAxiosGet.mockResolvedValue({ data: mockData } as AxiosResponse);

test("renders ProductLandingPage component with products", async () => {
  render(<ProductLandingPage />);

  await act(async () => {
    await waitFor(() => {
      const productElements = screen.getAllByTestId("product-landing-tile");
      expect(productElements.length).toBe(mockData.products.length);
    });
  });
});
