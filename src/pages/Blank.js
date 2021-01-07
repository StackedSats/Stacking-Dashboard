import React from "react";

import PageTitle from "../components/Typography/PageTitle";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">Blank Page</h1>
      <div>Dec 20, 2020 01:38</div>
    </>
  );
};

const Right = () => {
  return (
    <>
      <div className="text-gray-300 ">
        <p className="mb-2">Total Volume</p>
        <div>
          <b className="mr-2 text-3xl font-normal text-white">253,548 STX</b>{" "}
          <span>
            <span className="text-yellow-500">3.25</span> BTC |{" "}
            <span className="text-green-600">245,635</span> USD
          </span>
        </div>
      </div>
    </>
  );
};

function Blank() {
  return (
    <>
      <PageTitle left={<Left />} right={<Right />}></PageTitle>
    </>
  );
}

export default Blank;
