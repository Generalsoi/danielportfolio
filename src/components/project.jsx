import React from "react";
import { projectDetails } from "../helpers/projects";
import { BsFolderFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="px-4 md:px-28 py-8 md:py-24 font-poppins" id="work">
      <div className="flex items-center ">
        <h1 className="text-xl md:text-4xl mb-10 font-extrabold">
          Projects<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <motion.div
        className="md:flex gap-10 items-center justify-center flex-wrap"
        whileInView={{
          y: 0,
        }}
        initial={{
          y: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
        }}
      >
        {projectDetails.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-80 md:h-80 bg-[#112240] p-8 mt-8 md:mt-0 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-between">
              <BsFolderFill />
              {project.id === 1 ? (<a href={project.githubLink} target="_blank" rel="noreferrer">
                <BsLink45Deg className="cursor-pointer" />
              </a>) : (<a href={project.githubLink} target="_blank" rel="noreferrer">
                <BsGithub className="cursor-pointer" />
              </a>)}
            </span>
            <h3 className="md:text-xl mt-4 font-bold">{project.name}</h3>
            <p className="mt-6 text-xs md:text-sm">{project.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
