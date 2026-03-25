import React, { useEffect } from "react";
import {
  Netflix_Logo_Url,
  Netflix_signout_url,
  SUPPORTED_LANGUAGE,
} from "../Utils/constants";
import { auth } from "../Utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { togglegptSearch } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
import { FiSearch, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isGptSearchVisible = useSelector(
    (store) => store.gpt.showGPTSearch
  );
  const selectedLanguage =
    useSelector((store) => store.config.lang) || "en";

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign Out Error:", error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptToggle = () => {
    dispatch(togglegptSearch());
  };

  const handleLanguageSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const headerStyle = user
    ? "bg-black/40 backdrop-blur-md border-b border-white/10"
    : "bg-transparent";

  return (
    <div
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 flex justify-between items-center z-50 ${headerStyle}`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <img
          src={Netflix_Logo_Url}
          alt="Netflix Logo"
          className="w-32 md:w-40 cursor-pointer"
          onClick={() => navigate("/browse")}
        />

        {user && (
          <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            {["Home", "Shows", "Movies", "Games", "My List"].map(
              (item) => (
                <span
                  key={item}
                  className="cursor-pointer hover:text-gray-300 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        )}
      </div>

      {/* RIGHT */}
      {user && (
        <div className="flex items-center gap-4">
          
          {/* 🔍 Search / ❌ Close */}
          {isGptSearchVisible ? (
            <FiX
              onClick={handleGptToggle}
              className="text-white text-xl cursor-pointer hover:scale-110 transition"
            />
          ) : (
            <FiSearch
              onClick={handleGptToggle}
              className="text-white text-xl cursor-pointer hover:scale-110 transition"
            />
          )}

          {/* 🌐 Language */}
          {isGptSearchVisible && (
            <select
              value={selectedLanguage}
              onChange={handleLanguageSelect}
              className="px-3 py-1 bg-gray-800 text-white rounded text-sm"
            >
              {SUPPORTED_LANGUAGE.map((language) => (
                <option
                  key={language.identifier}
                  value={language.identifier}
                >
                  {language.name}
                </option>
              ))}
            </select>
          )}

          {/* 👤 Profile */}
          <img
            src={Netflix_signout_url}
            alt="profile"
            className="w-10 h-10 rounded-md cursor-pointer hover:scale-105 transition"
          />

          {/* 🚪 Sign Out */}
          <button
            onClick={handleSignOut}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;