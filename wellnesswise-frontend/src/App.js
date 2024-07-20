import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home"; 
import CreateProfileButton from "./components/CreateProfileButton";

function App() {

  const [showNav, setShowNav] = useState(true);
  return (
    <Router>
    <div id="root">
      <div className="App">
        { showNav &&
        <nav>
        <Navbar />
        </nav>
        }
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Registration />} />
          {/* Define other routes for different pages/components */}
          <Route path="/button" element={<CreateProfileButton funcNav={setShowNav} />} />
        </Routes>
        { showNav &&
        <footer>
        <Footer />
        </footer>
        }
      </div>
    </div>
    </Router>
  );
}

export default App;