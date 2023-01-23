import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  let navLinks = [
    { name: "About", link: "/" },
    { name: "Experience", link: "/" },
    { name: "Work", link: "/" },
    { name: "Contact", link: "/" },
  ];

  //handle click function for the hamburger
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-[100%] relative">
      <div className="w-full px-4 md:px-20 py-8 md:py-12 md:flex items-center justify-between">
        <div>
          <span className="border-2 border-[#64FFDA] p-4 font-poppins">
            <span className="text-[#64FFDA]">Daniel</span>Fayemi
            <span className="text-3xl text-[#64FFDA]">.</span>
          </span>
        </div>

        <span
          className={`md:hidden text-3xl font-extrabold absolute top-8 right-4 transition-all duration-300 text-white`}
          onClick={handleClick}
        >
          {open ? (
            <GrClose className="text-white" />
          ) : (
            <RxHamburgerMenu className="text-white" />
          )}
        </span>

        <ul
          className={`${
            open ? "static" : "hidden transition-all ease-in-out duration-300"
          } md:static md:flex items-center gap-8 font-poppins mt-12 md:mt-0 `}
        >
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="mt-6 md:mt-0 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:border-b-4 hover:border-b-[#64FFDA] cursor-pointer transition-all duration-300"
            >
              {navLink.name}
            </li>
          ))}

          <button className="mt-6 md:mt-0 border border-[#64FFDA] rounded-lg py-2 px-4 hover:bg-[#64FFDA] hover:text-white ">
            Resume
          </button>
        </ul>
      </div>
    </div>
  );
};