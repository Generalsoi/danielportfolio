import React from "react";
import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="px-4 md:px-28 py-10 md:py-12">
      <h4 className="text-[#64FFDA] md:text-xl font-poppins ">
        Hi, my name is
      </h4>
      <h1 className="mt-5 md:mt-8 font-inter text-3xl md:text-8xl font-extrabold">
        Daniel <span className="text-[#64FFDA]">Fayemi.</span>
      </h1>
      <div className="mt-4 font-inter text-2xl md:text-4xl font-extrabold text-[#D9D9D9]">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter

              .typeString(" I build World-class Software and Solutions.")

              .start();
          }}
        />
      </div>

      <p className="text-[#A8B2D1] md:w-[60%] text-sm md:text-lg mt-5 font-poppins">
        I am a Software engineer specializing in building with a wide range of
        technologies and tools that include working on blockchain, Fin-tech &
        crypto projects. In recent times I have been researching and building
        new blockchain/crypto solutions and blockchain integrations with several
        top blockchain and crypto companies like Binance, Latoken, Chippercash
      </p>
    </div>
  );
};
