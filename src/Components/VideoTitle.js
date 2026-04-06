import React from "react";
import { playIconUrl } from "../Utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[45%] left-16 md:left-20 z-20 w-[40%] text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl leading-tight">
        {title}
      </h1>
      <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed line-clamp-3 drop-shadow-lg">
        {overview}
      </p>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-200 shadow-xl hover:scale-105">
          <img src={playIconUrl} alt="Play" className="w-5 h-5" />
          Play
        </button>
        <button className="bg-gray-500/60 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-500/80 transition duration-200 shadow-lg backdrop-blur-sm hover:scale-105">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;