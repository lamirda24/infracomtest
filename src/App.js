import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Containers from "./components/Layouts/Containers/Containers";
import Headers from "./components/Layouts/Headers";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" exact element={<Containers />}>
          <Route path="/" exact element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
