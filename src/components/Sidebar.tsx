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
      className={`p-4 sidebar-container w-[490px] h-screen fixed top-0 ${
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

      <div className="px-[160px] pt-[86px]">
        <ul className="text-left">
          <li>
            <Link to="expertise" className=" hover:opacity-70">
              <h3>Expertise</h3>
            </Link>
          </li>
          <li>
            <Link to="ourstory" className=" hover:opacity-70">
              <h3>Our Story</h3>
            </Link>
          </li>
          <li className="hidden">
            <Link to="nopage">
              <h3>Our Experts</h3>
            </Link>
          </li>
          <li className="hidden">
            <Link to="nopage">
              <h3>Careers</h3>
            </Link>
          </li>
          <li className="">
            <Link to="faqs">
              <h3>FAQ</h3>
            </Link>
          </li>
          <li className="hidden">
            <Link to="nopage">
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
