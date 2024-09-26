import React from "react";
import HomeLayout from "./pages/homeLayout";
import PlayAround from "./practice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rendering from "./components/rendering";
import Responsive from "./components/Responsive";


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
          <Route path={"/responsive"} element={<Responsive />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
