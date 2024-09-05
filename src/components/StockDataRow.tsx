import React, { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type StockDataRowProps = {
  time: string;
  data: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
};

const StockDataRow: React.FC<StockDataRowProps> = ({ time, data }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });

  if (isVisible && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  return (
    <tr ref={ref}>
      {hasBeenVisible && (
        <>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{time}</span>
          </td>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{data["1. open"]}</span>
          </td>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{data["2. high"]}</span>
          </td>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{data["3. low"]}</span>
          </td>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{data["4. close"]}</span>
          </td>
          <td className="border border-gray-200 px-4 py-2">
            <span className="flex justify-center">{data["5. volume"]}</span>
          </td>
        </>
      )}
    </tr>
  );
};

export default StockDataRow;
