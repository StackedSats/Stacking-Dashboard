import React from "react";
import { Link } from "react-router-dom";

import { Label, Input } from "@windmill/react-ui";
import { FiArrowRight } from "react-icons/fi";

function Login() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <main className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full">
            <h1 className="text-3xl font-medium text-gray-700">Welcome</h1>
            <p className="mb-8 text-gray-300">
              Please Sign up to create your account
            </p>
            <Label>
              <span>Email</span>
              <Input
                className="py-3 mt-1 bg-gray-50"
                type="email"
                placeholder="john@doe.com"
              />
            </Label>

            <Label className="mt-4">
              <span>Password</span>
              <Input
                className="py-3 mt-1 bg-gray-50"
                type="password"
                placeholder="***************"
              />
            </Label>

            <Link
              className="mt-4 btn btn-primary btn-lg btn-block"
              block
              to="/app/my-portfolio"
            >
              Log in
            </Link>

            <p className="mt-4 font-medium text-gray-300">
              By pressing “Create account” you agree to our &nbsp;
              <Link
                className="hover:underline text-primary-500"
                to="/app/blank"
              >
                privacy policy
              </Link>
            </p>
            <p className="mt-6">Already have an account?</p>
            <Link
              className="flex items-center mt-3 text-lg font-medium text-success-500 hover:underline"
              to="/login"
            >
              <span className="mr-2">Sign In</span> <FiArrowRight />
            </Link>
            <Link
              className="flex items-center mt-8 font-medium text-primary-500 hover:underline"
              to="/forgot-password"
            >
              Forgot Password
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
