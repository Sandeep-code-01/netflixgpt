import React, { useState, useRef } from "react";
import { Netflix_Background_Url } from "../Utils/constants";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import { photoURL } from "../Utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";



const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);



  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const result = checkValidData(emailValue, passwordValue);

    if (!result.valid) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage(null);

    // ================= SIGN UP =================

    if (!isSignInForm) {

      try {

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: photoURL,
        });

        console.log("Profile Updated:", userCredential.user);

      } catch (error) {

        setErrorMessage(error.message);

      }

    }

    // ================= SIGN IN =================

    else {

      try {
        await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } catch (error)
        {
        setErrorMessage(error.message);
      }

    }

  };

  return (

    <div className="relative h-screen w-full overflow-hidden">

      <Header />

      <img
        src={Netflix_Background_Url}
        alt="Netflix Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

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

        {!isSignInForm && (

          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="block w-full p-3 mb-4 rounded bg-gray-800
            text-white placeholder-gray-400
            focus:outline-none focus:ring-2
            focus:ring-red-600"
          />

        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="block w-full p-3 mb-4 rounded bg-gray-800
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2
          focus:ring-red-600"
        />

        <input
          ref={password}
          type="password"
          placeholder={isSignInForm ? "Password" : "Create Password"}
          className="block w-full p-3 mb-6 rounded bg-gray-800
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2
          focus:ring-red-600"
        />

        {errorMessage && (

          <p className="text-red-500 font-semibold mb-3">
            {errorMessage}
          </p>

        )}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700
          text-white py-3 rounded"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div
          onClick={toggleSignInForm}
          className="text-gray-400 text-sm mt-6 text-center cursor-pointer"
        >

          {isSignInForm
            ? "Don't have an account?"
            : "Already have an account?"}

          <span className="text-white font-semibold">
            {isSignInForm ? " Sign Up Now" : " Sign In Now"}
          </span>

        </div>

      </form>

    </div>

  );

};

export default Login;