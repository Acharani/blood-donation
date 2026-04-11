import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Donate from "./Donate";
import Request from "./Request";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />   {/* ✅ FIXED */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} /> {/* ✅ FIXED */}
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/request" element={<Request />} /> {/* ✅ FIXED */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;