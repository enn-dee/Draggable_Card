import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed  w-full h-screen z-[2]">
        <div className="w-full py-10 flex justify-center font-semibold text-slate-100/70 absolute top-[5%] ">
          Documents
        </div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900 text-lg">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
