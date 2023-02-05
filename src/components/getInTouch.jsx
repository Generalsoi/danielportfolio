import React from "react";

export const GetInTouch = () => {
  return (
    <div
      className="text-center px-4 md:px-28 py-6 md:py-10 font-poppins"
      id="contact"
    >
      <h2 className="text-[#D9D9D9] font-extrabold text-xl md:text-5xl">
        Get In Touch
      </h2>
      <p className="my-10 md:my-20 px-4 md:px-20 text-left">
        I am open to new and exciting opportunities. My inbox is always open.
        Whether you have a question or you just want to say hi, I'll try my best
        to get back to you as soon as is possible.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=danieltosinfayemi@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <button className="px-20 py-2 bg-[#64FFDA] text-[#112240] font-bold border-none rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
          Say Hello
        </button>
      </a>
    </div>
  );
};
