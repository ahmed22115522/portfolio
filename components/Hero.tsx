"use client";
import React, { useEffect, useState } from "react";
import portfolioPic from "../public/black.png";
import portfolioPiWhite from "../public/white1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const wordsType = [
    "Hello, This is Ahmed",
    "<Guy who loves coding />",
    "Coffe.tsx",
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" id="home">
      <motion.div
        className="flex justify-center items-center pb-2 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={portfolioPic}
          alt="portfolio picture"
          className="w-[100%] hidden dark:block"
        />
        <Image
          src={portfolioPiWhite}
          alt="portfolio picture"
          priority={false}
          className="w-[100%] dark:hidden"
        />
      </motion.div>

      <div className="text-center">
        <motion.h2
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-500 uppercase sm:tracking-[10px] tracking-[6px] pb-2"
        >
          front-end developer
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl pb-2 font-serif"
        >
          <Typewriter
            words={wordsType}
            loop={true}
            cursor={true}
            cursorColor="#00ff00"
          />
        </motion.h1>
        <motion.h2
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-500 tracking-[2px] sm:tracking-[5px]"
        >
          Turning Ideas into real life products.
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
