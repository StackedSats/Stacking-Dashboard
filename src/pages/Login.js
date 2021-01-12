import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Label, Input } from "@windmill/react-ui";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/reducers";
import { useHistory } from "react-router-dom";
import joi from "joi";

const loginSchema = joi.object({
  username: joi.string().email({ tlds: { allow: false } }),
});

function Login() {
  let history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const changeName = (e) => {
    setusername(e.target.value);
  };

  const changePass = (e) => {
    setpassword(e.target.value);
  };
  const login = async () => {
    setError(false);
    const { error } = loginSchema.validate({ username });
    if (error) {
      setError(true);
    } else {
      const loggingIn = await axios({
        url: `${process.env.REACT_APP_BACKENDURL}/login`,
        data: { username, password },
        method: "post",
      });

      if (loggingIn.status === 200) {
        localStorage.setItem("auth", loggingIn.data.token);
        dispatch({ type: userDetails, payload: loggingIn.data.user });
        history.push("/app/network");
      } else {
        setError(true);
      }
    }
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <main className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full">
            <h1 className="text-3xl font-medium text-gray-700">Welcome</h1>
            <p className="mb-8 text-gray-300">
              Please Login to access your Dashboard
            </p>
            <Label>
              <span>Email</span>
              <Input
                className="py-3 mt-1 bg-gray-50"
                type="email"
                placeholder="john@doe.com"
                onChange={changeName}
                value={username}
              />
            </Label>

            <Label className="mt-4">
              <span>Password</span>
              <Input
                className="py-3 mt-1 bg-gray-50"
                type="password"
                placeholder="***************"
                onChange={changePass}
                value={password}
              />
            </Label>

            <div
              className="mt-4 btn btn-primary btn-lg btn-block"
              block
              to="/app/my-portfolio"
              onClick={login}
            >
              Log in
            </div>
            {error && <p style={{ color: "red" }}>Invalid Email or Password</p>}
            <p className="mt-4">
              <Link
                className="font-medium text-gray-300 hover:underline"
                to="/forgot-password"
              >
                Forgot your password?
              </Link>
            </p>
            <p className="mt-6">Don't have an account?</p>
            <Link
              className="flex items-center mt-3 text-lg font-medium text-success-500 hover:underline"
              to="/create-account"
            >
              <span className="mr-2">Sign Up</span> <FiArrowRight />
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
