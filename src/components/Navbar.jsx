import React from "react";

export const Navbar = () => {
  let navLinks = [
    { name: "About", link: "/" },
    { name: "Experience", link: "/" },
    { name: "Work", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <div className="w-[100%]">
      <div className="w-full md:px-20 py-12 md:flex items-center justify-between">
        <div>
          <span className="border-2 border-[#64FFDA] p-4 font-poppins">
            <span className="text-[#64FFDA]">Daniel</span>Fayemi
            <span className="text-3xl text-[#64FFDA]">.</span>
          </span>
        </div>

        <ul className="md:flex items-center gap-8 font-poppins">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:border-b-4 hover:border-b-[#64FFDA] cursor-pointer transition-all duration-300"
            >
              {navLink.name}
            </li>
          ))}

          <button className="border border-[#64FFDA] rounded-lg py-2 px-4 hover:bg-[#64FFDA] hover:text-white ">
            Resume
          </button>
        </ul>
      </div>
    </div>
  );
};
