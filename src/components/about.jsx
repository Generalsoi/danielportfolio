import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="px-4 md:px-28 py-8 md:py-24 font-poppins" id="about">
      <div className="flex items-center ">
        <h1 className="text-xl md:text-4xl mb-10 font-extrabold">
          About me<span className="text-[#64FFDA]">.</span>
        </h1>
        <div className="h-1 w-[50%] bg-[#A8B2D1]"></div>
      </div>

      <motion.span
        id="about-daniel"
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
        }}
      >
        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          A seasoned Software Engineer with 7+ years of professional development
          experience. I specialize in designing, building, maintaining, and
          scaling robust backend systems within the dynamic realms of fintech,
          cryptocurrency, and blockchain technology.
        </p>
        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          My career journey spans startups to large-scale enterprises, where I
          have made significant contributions to a diverse range of products.
          With a solid foundation in both technical and soft skills, I excel in
          environments that require not only coding expertise but also strong
          ownership and leadership qualities. My commitment to innovation and
          excellence had driven me to continuously deliver solutions that meet
          and exceed business objectives, demonstrating my capability to lead
          projects to successful completions in fast-paced and ever-revolving
          tech landscapes.
        </p>

        <p className="md:w-[70%] text-[#A8B2D1] text-sm md:text-lg mb-4">
          Here are a few technologies I have been working with in recent times:
        </p>
      </motion.span>

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
          <p>AWS</p>
        </span>
      </span>
    </div>
  );
};
