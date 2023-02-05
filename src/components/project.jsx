import React from "react";
import { projectDetails } from "../helpers/projects";
import { BsFolderFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const Project = () => {
  return (
    <div className="px-4 md:px-28 py-8 md:py-24 font-poppins">
      <div className="flex items-center ">
        <h1 className="md:text-4xl mb-10">
          Projects<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <div className="md:flex gap-10 items-center justify-center flex-wrap">
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-80 md:h-60 bg-[#112240] p-8 mt-8 md:mt-0"
          >
            <span className="flex items-center justify-between">
              <BsFolderFill />
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <BsGithub className="cursor-pointer" />
              </a>
            </span>
            <h3 className="md:text-xl mt-4 font-bold">{project.name}</h3>
            <p className="mt-6 text-xs md:text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
