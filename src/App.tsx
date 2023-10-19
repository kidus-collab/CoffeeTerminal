import React from "react";

import { Routes, Route } from "react-router-dom";

//pages
import {
  Home,
  About,
  Branches,
  Future,
  Mission,
  Services,
} from "./Routes/export";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Branches" element={<Branches />} />
        <Route path="/Future" element={<Future />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
