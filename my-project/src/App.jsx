import HomeLayout from "./pages/homeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeLayout />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
