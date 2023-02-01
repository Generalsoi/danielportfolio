import React from "react";
import { workExperience } from "../helpers/experience";

export const Experience = () => {
  return (
    <div className="px-4 md:px-28 py-8 md:py-16 font-poppins">
      <div className="flex items-center ">
        <h1 className="md:text-4xl mb-10">
          Where I've worked<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <div>
        <div>
          {workExperience.map((experience, id) => (
            <h3 key={id}>{experience.company}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};
