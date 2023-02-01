import React from "react";
import { About } from "./about";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Navbar } from "./Navbar";

export const Homepage = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
};
