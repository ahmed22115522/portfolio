
"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

type projectProp ={
  title:string,
  disc:string,
  imageMain: any,
  skillsArr: Array<any>,
  liveLink:string,
  gitHubLink:string,
  direction:boolean
}
const Card = ({ title, disc, imageMain,skillsArr,liveLink,gitHubLink,direction }:projectProp) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 0.5 }}
        className="dark:bg-[#eeeeee] bg-[#444444] dark:text-black lg:max-w-[800px] xl:max-w-[1000px]  text-white rounded-lg shadow-2xl flex flex-col lg:flex-row my-3 p-10 justify-center items-center"
      >
        <Image
          src={imageMain}
          alt="Project Image"
          className={direction ? "w-[400px] h-full object-contain mx-auto shadow-lg rounded-lg order-1" : "w-[400px] h-full object-contain mx-auto shadow-lg rounded-lg order-2"}
        />
        <div className={direction ? "p-6 flex flex-col lg:items-start items-center order-2" : "p-6 flex flex-col lg:items-start items-center order-1"}>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="leading-relaxed mb-4 text-center lg:text-start">
            {disc}
          </p>
          <div className="flex items-center">
            {skillsArr.map((skill,i) => (
              <Image
                key={i}
                src={skill}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
            ))}
          </div>
          <div className="flex pt-5 gap-3 text-center">
            <Link href={liveLink} target="_blank"><FaRegEye className="text-3xl cursor-pointer relative hover:scale-110 transation duration-500 ease-in-out"/></Link>
            <Link href={gitHubLink} target="_blank"><FaCode className="text-3xl cursor-pointer relative hover:scale-110 transation duration-500 ease-in-out"/></Link>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default Card;