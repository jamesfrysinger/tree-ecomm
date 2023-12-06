import { FC, useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";

const freeShippingThreshold = 150;

const ProgressBarTrack = styled.div`
  background-color: #d7dad2;
  height: 10px;
  width: 100%;
`;
const ProgressBar = styled.div`
  background-color: #155343;
  height: 10px;
`;

const ShoppingCartFreeShippingProgressBar: FC<{
  totalAmount: number;
}> = ({ totalAmount }) => {
  const [progress, setProgress] = useState(0);
  const roundTotalAmount = Math.round(totalAmount);

  useEffect(() => {
    const calculatedProgress: number = Math.min(
      (roundTotalAmount / freeShippingThreshold) * 100,
      100
    );
    setProgress(calculatedProgress);
  }, [roundTotalAmount]);

  const calculateAmountLeft = useCallback(() => {
    const amountLeft: number = freeShippingThreshold - roundTotalAmount;
    return amountLeft > 0 ? amountLeft.toFixed(2) : 0;
  }, [roundTotalAmount]);

  const [amountLeft, setAmountLeft] = useState<string | number>();
  useEffect(() => {
    setAmountLeft(calculateAmountLeft());
  }, [calculateAmountLeft]);

  return (
    <div className="flex flex-wrap w-full pt-0 pb-6">
      {amountLeft ? (
        <>
          <p className="text-center w-full py-2">
            You're <span className="font-bold">{`$${amountLeft}`}</span> away
            from free shipping!
          </p>
          <ProgressBarTrack>
            <ProgressBar style={{ width: `${progress}%` }} />
          </ProgressBarTrack>
        </>
      ) : (
        <p className="text-center w-full py-2 font-extrabold">
          This order qualifies for free shipping!
        </p>
      )}
    </div>
  );
};

export default ShoppingCartFreeShippingProgressBar;
