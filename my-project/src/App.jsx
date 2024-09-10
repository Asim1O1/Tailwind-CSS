import React from "react";
import HomeLayout from "./pages/homeLayout";
import PlayAround from "./practice";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeLayout />}></Route>
          <Route path={"/playAround"} element={<PlayAround />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
