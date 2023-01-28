import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
