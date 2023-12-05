export interface IProductShoppingCart {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  thumbnail?: string;
  quantity?: number;
}

export interface IShoppingCartState {
  products: IProductShoppingCart[];
  subTotal: number;
  cartIsOpen: boolean;
}

export type TAction =
  | { type: "ADD_TO_CART" | "INCREASE_QUANTITY"; payload: IProductShoppingCart }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "DECREMENT_QUANTITY"; payload: { id: number } }
  | { type: "TOGGLE_CART" };

export interface IContextProps {
  state: IShoppingCartState;
  dispatch: React.Dispatch<TAction>;
}
