import { memo } from "react";
import CloseIcon from "../assets/icons/close-icon.svg";
import { Link } from "react-router-dom";

interface SidebarProps {
  showSideBar: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ showSideBar, toggleMenu }: SidebarProps) => {
  return (
    <div
      className={`p-4 sidebar-container h-screen fixed top-0 ${
        showSideBar ? "sidebar-active" : "sidebar-hidden"
      }`}
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

      <div className="px-[140px] md:px-[3vw] pt-[86px]">
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
