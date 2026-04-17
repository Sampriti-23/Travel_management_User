import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Login/Login";
import RegisterModal from "./pages/Registration/Registration";
import About from "./pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterModal />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;