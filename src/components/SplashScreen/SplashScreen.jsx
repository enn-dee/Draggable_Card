import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center z-50">
      <h1 className="text-4xl font-bold mb-4">Bringing ideas to life...</h1>
      <p className="text-lg mb-4">Loading...</p>
      <div className="w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-[spin_1s_linear_infinite]"></div>
    </div>
  );
};

export default SplashScreen;
