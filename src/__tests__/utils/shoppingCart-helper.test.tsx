import React from "react";
import { IProductShoppingCart } from "types/shoppingCartType";
import { addToCart, formattedPrice } from "utils/shoppingCart-helper";

test("formats price correctly", () => {
  const price = 1234.56;
  const formatted = formattedPrice(price);
  expect(formatted).toBe("$1,234.56");
});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useReducer: jest.fn(),
}));

const mockDispatch = jest.fn();
jest.spyOn(React, "useReducer").mockReturnValue([null, mockDispatch]);

test("addToCart dispatches ADD_TO_CART action with the correct payload", () => {
  const product: IProductShoppingCart = {};
  addToCart(product, mockDispatch);
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "ADD_TO_CART",
    payload: { ...product, quantity: product.quantity },
  });
});
