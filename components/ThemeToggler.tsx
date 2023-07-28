"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  
  useEffect(() => {
    setMounted(true);

  },[]);

  if (!mounted) {
    return null;
  } else {
    return (
      <>
        <div className="rounded-full mt-2">
          <div className="m-0">
            <input type="checkbox" className="checkbox" id="chk" />
            <label
              className="label"
              htmlFor="chk"
              onClick={() => {
                theme === "dark" ? setTheme("light") : setTheme("dark");
              }}
            >
              <i className="fas fa-moon">
                <FaMoon />
              </i>
              <i className="fas fa-sun">
                {" "}
                <FaSun />
              </i>
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </>
    );
  }
};

export default ThemeToggler;
