import ApteumLogoRgb from "../assets/Apteum_logo_RGB.svg";
import MenuIcon from "../assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleMenu = () => {
    setShowSideBar((show) => !show);
  };

  return (
    <div className="w-full bg-white fixed top-0 right-0 left-0 h-[80px] flex items-center py-[25px] px-[75px] z-50">
      <div className="w-[40px]"></div>

      <div className="flex-1 flex justify-center">
        <Link to="/">
          <img src={ApteumLogoRgb} width={155} alt="apteum" />
        </Link>
      </div>

      <div className="w-[40px] cursor-pointer">
        <img src={MenuIcon} alt="menu" width={40} onClick={toggleMenu} />
      </div>

      <Sidebar showSideBar={showSideBar} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavBar;
