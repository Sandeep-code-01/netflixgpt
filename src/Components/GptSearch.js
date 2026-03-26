import React from "react";
import GptSearchBar from "./GptSearchBar";
import { Netflix_Background_Url } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      
      {/* Background Image */}
      <img
        src={Netflix_Background_Url}
        alt="bg"
        className="fixed top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay (optional but recommended) */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <GptSearchBar />
      </div>

    </div>
  );
};

export default GptSearch;