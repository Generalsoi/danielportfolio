import React from "react";
import { Homepage } from "./components/Homepage";
// import { Routes, Route } from "react-router-dom";
// import { About } from "./components/about";
// import { Experience } from "./components/experience";
// import { Project } from "./components/project";
// import { GetInTouch } from "./components/getInTouch";

function App() {
  return (
    // <Routes>
    //   <Route element={<Homepage />} path="/" />
    //   <Route element={<About />} path="/about" />
    //   <Route element={<Experience />} path="/experience" />
    //   <Route element={<Project />} path="/work" />
    //   <Route element={<GetInTouch />} path="/contact" />
    // </Routes>
    <div>
      <Homepage />
    </div>
  );
}

export default App;
