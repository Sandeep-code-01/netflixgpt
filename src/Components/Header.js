import React, { useEffect } from "react";
import { Netflix_Logo_Url, Netflix_signout_url } from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign Out Error:", error);
    });
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {

        const { uid, displayName, email, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );

        navigate("/browse");

      } else {

        dispatch(removeUser());
        navigate("/");

      }

    });

    return () => unsubscribe();

  }, [dispatch, navigate]);

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black to-transparent flex justify-between items-center z-50">

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
            src={Netflix_signout_url}
            alt="profile"
            className="w-12 h-12 cursor-pointer"
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