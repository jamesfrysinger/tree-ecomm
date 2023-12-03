interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
}

export interface IShoppingCartState {
  products: IProduct[];
  total: number;
}

export type TAction =
  | { type: "ADD_TO_CART" | "INCREASE_QUANTITY"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "DECREMENT_QUANTITY"; payload: { id: number } };

export interface IContextProps {
  state: IShoppingCartState;
  dispatch: React.Dispatch<TAction>;
}
