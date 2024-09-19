import React from "react";
import HomeLayout from "./pages/homeLayout";
import PlayAround from "./practice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rendering from "./components/rendering";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeLayout />}></Route>
          <Route path={"/playAround"} element={<PlayAround />}>

            {" "}

          </Route>
          <Route path={"/render"} element={<Rendering />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
