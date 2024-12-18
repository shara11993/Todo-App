import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import Themes from "./Themes";

const Navbar = ({ theme, setTheme }) => {
  const saveToLS = () => {
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    saveToLS();
  }, [theme]);

  const changeTheme = (e, t) => {
    e.stopPropagation();
    setTheme(t);
  };

  return (
    <nav className="navbar w-full flex flex-col sm:flex-row h-20 justify-between items-end sm:items-center sm:gap-4 absolute">
      <div className="invisible">asd</div>

      <div className="invisible">sdf</div>

      <div className="end h-20 w-[100%] sm:w-[20%] lg:w-[20%] flex mt-5 mb-[-40px] sm:mt-0 sm:mb-0 justify-end items-center gap-4 pr-8 sm:pr-0 lg:pr-10 mr-3">
        <button
          id="theme-1"
          className={`theme bg-gradient-to-r from-[${Themes[0].fromGradient}] to-[${Themes[0].toGradient}] w-9 h-9 rounded-full border border-[#d1dae3] hover:shadow-[white_0_0_8px] transition-all animate-pulse hover:animate-none`}
          onClick={(e) => changeTheme(e, 0)}
        ></button>
        <button
          id="theme-2"
          className={`theme bg-gradient-to-r from-[${Themes[1].fromGradient}] to-[${Themes[1].toGradient}] w-9 h-9 rounded-full border border-[#d1dae3] hover:shadow-[white_0_0_8px] transition-all animate-pulse hover:animate-none`}
          onClick={(e) => changeTheme(e, 1)}
        ></button>
        <button
          id="theme-3"
          className={`theme bg-gradient-to-r from-[${Themes[2].fromGradient}] to-[${Themes[2].toGradient}] w-9 h-9 rounded-full border border-[#d1dae3] hover:shadow-[white_0_0_8px] transition-all animate-pulse hover:animate-none`}
          onClick={(e) => changeTheme(e, 2)}
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
