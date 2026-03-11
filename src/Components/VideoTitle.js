import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[55%] left-13 text-white w-[40%] z-20 bg-gradient-to-r from-black/80 to-transparent p-6 rounded-lg">
      
      <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
        {title}
      </h1>

      <p className="text-lg mb-6 text-gray-200 leading-relaxed">
        {overview}
      </p>

      <div className="flex gap-4">
        
        <button className="bg-white text-black px-8 py-3 rounded-md font-semibold flex items-center gap-2">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 text-white px-8 py-3 rounded-md font-semibold">
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;