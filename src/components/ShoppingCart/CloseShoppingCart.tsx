import Image from "components/Common/Image";

const CloseShoppingCart = () => {
  return (
    <button className="close w-1/2">
      <Image
        imageUrl="\images\close-btn.svg"
        altText="Close Shopping Cart"
        style={{ width: "24px" }}
      />
    </button>
  );
};

export default CloseShoppingCart;
