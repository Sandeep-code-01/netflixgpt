import React from "react";
import { Netflix_Logo_Url, Netflix_signout_url } from "../Utils/logo";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();

  // ⭐ USER FROM REDUX
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
      });

  };

  return (

    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black to-transparent flex justify-between items-center z-10">

      {/* Logo */}

      <img
        src={Netflix_Logo_Url}
        alt="Netflix Logo"
        className="w-32 md:w-40"
      />

      {/* Profile */}

      {user && (

        <div className="flex items-center">

          <img
            src={user.photoURL || Netflix_signout_url}
            alt="profile"
            className="w-8 rounded-md"
          />

          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-1 bg-red-600 text-white rounded"
          >
            Sign Out
          </button>

        </div>

      )}

    </div>

  );
};

export default Header;