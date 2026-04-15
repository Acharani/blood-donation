import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Registration from "./Registration";
import Donate from "./Donate";
import Login from "./Login";
import Request from "./Request";
import About from "./About";
import BloodBank from "./BloodBank";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/bloodbank" element={<BloodBank />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;