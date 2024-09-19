import React, { useState } from "react";

const Rendering = () => {
  const [message, setMessage] = useState("click");
  const [clicked, setClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const date = new Date();
  const currentHour = date.getHours();

  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  const toggleButton = () => {
    setMessage(clicked ? "click" : "Hi there");
    setIsAuthenticated(!clicked);
    setClicked(!clicked);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <h1>{greeting}</h1> {/* Greeting based on current time */}
      <button
        className="bg-red-500 h-10 w-16 rounded-xl my-6 text-slate-300 cursor-pointer"
        onClick={toggleButton}
      >
        {message}
      </button>
      {/* Conditional rendering based on isAuthenticated */}
      <p>{isAuthenticated ? "Welcome user" : "Please login"}</p>
    </div>
  );
};

export default Rendering;
