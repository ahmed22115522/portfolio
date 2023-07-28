"use client";
import React, { useState } from "react";
import { FaAtlassian } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <AnimatePresence>
        {toggle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" z-10 w-screen h-screen sm:hidden fixed flex items-center justify-center bg-white dark:bg-[#1e2020]"
            >
              <ul className="text-2xl text-center gap-10 flex flex-col overflow-hidden">
                <motion.div
                  onClick={() => setToggle(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {" "}
                  <li>
                    <Link href={"#home"}>Home</Link>
                  </li>
                </motion.div>
                <motion.div
                  onClick={() => setToggle(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <li>
                    <Link href={"#about"}>About</Link>
                  </li>
                </motion.div>
                <motion.div
                  onClick={() => setToggle(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <li>
                    <Link href={"#skills"}>Skills</Link>
                  </li>
                </motion.div>
                <motion.div
                  onClick={() => setToggle(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                >
                  <li>
                    <Link href={"#projects"}>Projects</Link>
                  </li>
                </motion.div>
                <motion.div
                  onClick={() => setToggle(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.8 }}
                >
                  <li>
                    <Link href={"#contact"}>Contact</Link>
                  </li>
                </motion.div>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav className="navbar-glass dark:shadow-lg dark:shadow-slate-50/20 fixed top-0 right-0 left-0 z-50">
        <div className="p-3 flex justify-between sm:w-[85%] md:w-[90%] w-[90%] m-auto">
          <div className="flex items-center order-2 sm:order-1">
            <Link href={'#home'} scroll={false}><FaAtlassian className="text-4xl text-center animate-pulse" /></Link>
          </div>
          <div className="order-1 sm:order-2 hidden sm:flex">
            <ul className="sm:flex flex-row items-center gap-4 text-lg">
              <li>
                <Link href={'#home'} scroll={false}>Home</Link>
              </li>
              <li>
                <Link href={'#about'} scroll={false}>About</Link>
              </li>
              <li>
                <Link href={'#skills'} scroll={false}>Skills</Link>
              </li>
              <li>
                <Link href={'#projects'} scroll={false}>Projects</Link>
              </li>
              <li>
                <Link href={'#contact'} scroll={false}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="order-3 sm:order-3">
            <ThemeToggler />
          </div>
          <div className="sm:hidden">
            {toggle ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HiXMark
                  className="text-3xl cursor-pointer"
                  onClick={() => setToggle((prev) => !prev)}
                />
              </motion.div>
            ) : (
              <HiBars2
                className="text-3xl cursor-pointer"
                onClick={() => setToggle((prev) => !prev)}
              >
                click
              </HiBars2>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
