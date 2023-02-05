import React from "react";
import { About } from "./about";
import { Experience } from "./experience";
import { GetInTouch } from "./getInTouch";
import { Hero } from "./hero";
import { Navbar } from "./Navbar";
import { Project } from "./project";

export const Homepage = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <GetInTouch />
    </div>
  );
};
