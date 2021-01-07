import React from "react";

function PageTitle({ children, left, right }) {
  if (children) {
    return (
      <div className="flex items-center justify-between px-8 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950">
        <h1 show={children} className="mb-3 text-2xl">
          {children}
        </h1>
      </div>
    );
  }

  if (!children) {
    return (
      <div className="flex flex-wrap items-center justify-between px-12 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    );
  }
}

export default PageTitle;
