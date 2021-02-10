import React from "react";

const Left = () => {
  return (
    <>
      <h1 className="mb-3 text-2xl">My Portfolio</h1>
      <div>{new Date().toLocaleDateString()}</div>
    </>
  );
};

export { Left };
