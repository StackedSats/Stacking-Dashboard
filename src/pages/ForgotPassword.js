import React from "react";
import { Link } from "react-router-dom";

import { Label, Input } from "@windmill/react-ui";

function ForgotPassword() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <main className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full">
            <h1 className="text-3xl font-medium text-gray-700">
              Forgot password
            </h1>
            <p className="mb-8 text-gray-300">
              Please enter your email address below to get instructions for
              password recovery.
            </p>

            <Label>
              <span>Email</span>
              <Input
                className="py-3 mt-1 bg-gray-50"
                placeholder="aliashraf@example.com"
              />
            </Label>

            <Link
              className="mt-4 btn btn-primary btn-lg btn-block"
              block
              to="/app"
            >
              Get Intructions
            </Link>
            <a className="mt-4 text-gray-200 btn btn-link btn-block" href="/">
              Cancel
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassword;
