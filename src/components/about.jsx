import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 3,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#about-daniel",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div className="px-4 md:px-28 py-8 md:py-24 font-poppins" id="about">
      <div className="flex items-center ">
        <h1 className="text-xl md:text-4xl mb-10 font-extrabold">
          About me<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <span ref={aboutRef} id="about-daniel">
        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          A Software Engineer with 7+ years of professional development
          experience, I have been in active development in Crypto, Payments,
          P2P, Blockchain, and Blockchain Integration for 4 of those years.
        </p>
        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          Throughout my career, I have Integrated over 30+ blockchains ranging
          from UTXO blockchains to EVM compactable blockchains, Cosmos
          blockchains, IoT blockchains, to unique and standout blockchains. I
          have integrated their native currency, Tokens (ERC20, ERC721), and
          functions into backend systems. I have been involved in all
          integration processes, from researching blockchains, and communicating
          with the blockchain team, to setting up dedicated blockchain Nodes (if
          needed) to code implementation, code reviewing, and testing.
        </p>

        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          I have had the opportunity to build and grow with a startup and worked
          with other global teams. Here are a few technologies I have been
          working with in recent times:
        </p>
      </span>

      <span className="flex items-start gap-12 md:gap-24 text-[#64FFDA]">
        <span>
          <p> Web3</p>
          <p>Typescript</p>
          <p>Golang</p>
          <p>RabbitMQ</p>
          <p>Redis</p>
        </span>

        <span>
          <p> PHP</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Laravel</p>
        </span>
      </span>
    </div>
  );
};
