import React from "react";
import { Link } from "react-router-dom";

import { RiFileForbidFill } from "react-icons/ri";

function Page404() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <div className="h-64 text-center">
        <RiFileForbidFill
          className="mx-auto mt-8 text-white wh-32"
          aria-hidden="true"
        />
        <h1 className="text-6xl font-semibold text-white">404</h1>
        <p className="text-white">
          Oops! Page not found! <br />
          <Link
            className="block mt-4 hover:underline text-primary-400"
            to="/app/my-portfolio"
          >
            Go to dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page404;
