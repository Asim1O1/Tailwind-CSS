import React from "react";

const PlayAround = () => {
  return (
    <>
      <main className="p-6">
        <h1 className="w-full  text- py-10 text-center text-blue-800 font-mono font-extrabold">
          Hello World
        </h1>
        <div className="w-full bg-slate-500 flex justify-center items-center rounded-md h-9 font-serif font-bold text-pink-200 border-2 border-teal-300">
          {" "}
          A div
        </div>

        {/* Layout */}

        <div className="bg-red-500 w-10 h-10 rounded-lg top-0 fixed"></div>

        <div className="flex  justify-center space-x-10">
          <div className="h-12 w-12 rounded-full bg-yellow-200"> </div>
          <div className="h-12 w-12 rounded-full bg-yellow-200"> </div>
          <div className="h-12 w-12 rounded-full bg-yellow-200"> </div>
        </div>

        {/* grid */}

        <div className="  my-10 flex justify-between">
          <div className="bg-green-400 h-12 w-12"></div>
          <div className="bg-green-400 h-12 w-12"></div>
          <div className="bg-green-400 h-12 w-12"></div>
          <div className="bg-green-400 h-12 w-12"></div>
          <div className="bg-green-400 h-12 w-12"></div>
          <div className="bg-green-400 h-12 w-12"></div>

        </div>

        <div className="flex justify-center ">

        <button className=" bg-orange-500 w-20 h-8 rounded-md  ">
          Click me!
        </button>
        </div>
      </main>
    </>
  );
};

export default PlayAround;
