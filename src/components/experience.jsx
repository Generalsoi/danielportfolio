import React, { useState } from "react";
import { workExperience } from "../helpers/experience";
import Arrow from "../img/Vector.png";

export const Experience = () => {
  const [roleId, setRoleId] = useState(1);
  const handleExperience = (id) => {
    setRoleId(id);
  };
  return (
    <div className="px-4 md:px-28 py-8 md:py-16 font-poppins" id="experience">
      <div className="flex items-center ">
        <h1 className="md:text-4xl mb-10">
          Where I've worked<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <div className="md:flex items-start md:gap-10">
        <div className="border border-t-0 border-b-0 border-r-0 border-l-[#A8B2D1] border-l-2 p-4">
          {workExperience.map((experience) => (
            <h3
              key={experience.id}
              onClick={() => handleExperience(experience.id)}
              className={`cursor-pointer mt-3 py-2 px-1 border-none rounded-lg hover:bg-[#476a62] ${
                roleId === experience.id && "bg-[#476a62]"
              }`}
            >
              {experience.company}
            </h3>
          ))}
        </div>
        <div>
          {workExperience.map(
            (experience) =>
              roleId === experience.id && (
                <div key={experience.id}>
                  <h2 className="md:text-2xl mt-6 md:mt-0 font-bold">
                    {`${experience.role} at `}{" "}
                    <span className="text-[#64FFDA]">{`${experience.company}`}</span>
                  </h2>
                  <p className="text-sm mt-4">{experience.timeline}</p>

                  <ul className="mt-6">
                    {experience.roleDescriptions.map((description, index) => (
                      <li key={index} className="mb-4 flex items-center gap-2 ">
                        <img src={Arrow} alt="green-arrow" />
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
