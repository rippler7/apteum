import { memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "../assets/icons/close-icon.svg";

interface SidebarProps {
  showSideBar: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ showSideBar, toggleMenu }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    const targetEl = e.target as Node;

    if (sidebarRef.current && !sidebarRef.current.contains(targetEl)) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (showSideBar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSideBar]);

  return (
    <div
      className={`p-4 sidebar-container h-screen min-w-[250px] fixed top-0 ${
        showSideBar ? "sidebar-active" : "sidebar-hidden"
      }`}
      ref={sidebarRef}
    >
      <div className="flex justify-end">
        <img
          className="cursor-pointer"
          src={CloseIcon}
          alt="menu"
          width={40}
          onClick={toggleMenu}
        />
      </div>

      <div className="flex justify-center pt-[86px]">
        <ul className="text-left">
          <li>
            <Link
              to="services"
              onClick={toggleMenu}
              className=" hover:opacity-70"
            >
              <h3>Services</h3>
            </Link>
          </li>
          <li>
            <Link
              to="ourstory"
              onClick={toggleMenu}
              className="hover:opacity-70"
            >
              <h3>Our Story</h3>
            </Link>
          </li>
          <li className="hover:opacity-70">
            <Link to="experts" onClick={toggleMenu}>
              <h3>Our Experts</h3>
            </Link>
          </li>
          <li className="hidden" onClick={toggleMenu}>
            <Link to="nopage">
              <h3>Careers</h3>
            </Link>
          </li>
          <li className="hover:opacity-70" onClick={toggleMenu}>
            <Link to="faqs">
              <h3>FAQ</h3>
            </Link>
          </li>
          <li className="hover:opacity-70" onClick={toggleMenu}>
            <Link to="contact-us">
              <h3>Contact</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MemoSidebar = memo(Sidebar);
export default MemoSidebar;
