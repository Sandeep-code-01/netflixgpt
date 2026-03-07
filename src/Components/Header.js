import React from "react";
import { Netflix_Logo_Url, Netflix_signout_url } from "../Utils/logo";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice"; 

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid,
            displayName,
            email,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

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
            src={Netflix_signout_url}
            alt="profile"
            className="w-12 h-12 full cursor-pointer"
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