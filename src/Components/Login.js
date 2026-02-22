import React, { useState } from "react";
import { Netflix_Background_Url } from "../Utils/logo";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here later
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src={Netflix_Background_Url}
        alt="Netflix Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 transform 
                   -translate-x-1/2 -translate-y-1/2 
                   bg-black bg-opacity-75 p-8 rounded-lg 
                   w-full max-w-sm"
      >
        <h1 className="text-3xl font-semibold text-white mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name (Only for Sign Up) */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full p-3 mb-4 rounded bg-gray-800 
                       text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 
                       focus:ring-red-600 transition"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="block w-full p-3 mb-4 rounded bg-gray-800 
                     text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 
                     focus:ring-red-600 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder={isSignInForm ? "Password" : "Create Password"}
          className="block w-full p-3 mb-6 rounded bg-gray-800 
                     text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 
                     focus:ring-red-600 transition"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 
                     text-white py-3 rounded transition 
                     duration-200"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Remember Me + Forgot Password (Only Sign In) */}
        {isSignInForm && (
          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button
              type="button"
              className="hover:text-white transition"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Toggle Form */}
        <div
          onClick={toggleSignInForm}
          className="text-gray-400 text-sm mt-6 text-center 
                     cursor-pointer hover:underline"
        >
          {isSignInForm
            ? "Don't have an account? "
            : "Already have an account? "}
          <span className="text-white font-semibold">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;