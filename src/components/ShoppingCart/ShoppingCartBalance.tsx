import { FC } from "react";
import { formattedPrice } from "utils/shoppingCart-helper";

const ShoppingCartBalance: FC<{ subTotal: number }> = ({ subTotal }) => {
  return (
    <div className="w-full border-b-4 border-gray-300 py-4">
      <div className="px-6 flex justify-between">
        <h2 className="font-medium text-lg">Subtotal</h2>
        <p className="text-lg">{formattedPrice(subTotal)}</p>
      </div>
    </div>
  );
};

export default ShoppingCartBalance;
