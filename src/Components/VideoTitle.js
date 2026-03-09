import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-20 left-12 text-gray-900 w-2/5 z-20">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>

      <p className="text-lg mb-6 leading-relaxed">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 px-6 py-2 rounded-md font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;