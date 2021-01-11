import React from "react";
import { useSelector } from "react-redux";
export const Right = () => {
  const prices = useSelector((state) => state.prices);
  return (
    <>
      <div className="text-gray-300 ">
        <p className="mb-2">Total Volume</p>
        <div>
          <b className="mr-2 text-3xl font-normal text-white">
            {prices.liquidStxSupplyResult} STX
          </b>{" "}
          <span>
            <span className="text-yellow-500">
              {" "}
              {(
                (prices.stxusd * prices.liquidStxSupplyResult) /
                prices.btcusd
              ).toLocaleString("fullwide", { useGrouping: false })}
            </span>{" "}
            BTC |{" "}
            <span className="text-green-600">
              {" "}
              {(
                prices.stxusd * prices.liquidStxSupplyResult
              ).toLocaleString("fullwide", { useGrouping: false })}
            </span>{" "}
            USD
          </span>
        </div>
      </div>
    </>
  );
};
