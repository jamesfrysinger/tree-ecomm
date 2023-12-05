import { FC, useCallback, useEffect, useState } from "react";

const freeShippingThreshold = 1000;

const FreeShippingProgressBar: FC<{
  totalAmount: number;
}> = ({ totalAmount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = Math.min(
      (totalAmount / freeShippingThreshold) * 100,
      100
    );
    setProgress(calculatedProgress);
  }, [totalAmount]);

  const calculateAmountLeft = useCallback(() => {
    const amountLeft = freeShippingThreshold - totalAmount;
    return amountLeft > 0 ? amountLeft.toFixed(2) : 0;
  }, [totalAmount]);

  const [amountLeft, setAmountLeft] = useState<string | number>();
  useEffect(() => {
    setAmountLeft(calculateAmountLeft());
  }, [calculateAmountLeft]);

  return (
    <div className="flex flex-wrap w-full py-8">
      {amountLeft ? (
        <>
          <p className="text-center w-full py-2">
            You're <span className="font-bold">{`$${amountLeft}`}</span> away
            from free shipping!
          </p>
          <div
            style={{
              backgroundColor: "#D7DAD2",
              height: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                backgroundColor: "#155343",
                height: "10px",
              }}
            ></div>
          </div>
        </>
      ) : (
        <p className="text-center w-full py-2 font-extrabold">
          This order qualifies for free shipping!
        </p>
      )}
    </div>
  );
};

export default FreeShippingProgressBar;
