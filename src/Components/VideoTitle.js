import React from "react";
import { playIconUrl } from "../Utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[55%] left-13 z-20 w-[40%] text-white 
    bg-gradient-to-r from-black via-black/70 to-transparent 
    p-8 rounded-xl backdrop-blur-[1px]">

      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight">
        {title}
      </h1>

      <p className="text-lg text-gray-200 mb-6 leading-relaxed line-clamp-3">
        {overview}
      </p>

      <div className="flex items-center gap-4">

        <button className="flex items-center gap-2 bg-white text-black 
        px-8 py-3 rounded-md font-semibold 
        hover:bg-gray-200 transition-all duration-200 shadow-lg">
          <img src={playIconUrl} alt="Play" className="w-5 h-5" />
          Play
        </button>

        <button className="bg-gray-600/70 text-white 
        px-8 py-3 rounded-md font-semibold 
        hover:bg-gray-500/70 transition-all duration-200 shadow-md">
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;