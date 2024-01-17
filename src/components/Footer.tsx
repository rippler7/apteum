import ApteumW from "../assets/Apteum_logo_WHITE.svg";
import lnIconW from "../assets/icons8-linkedin-100-white.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      id="footerBar"
      className="sm:flex md:bottom-0 sm:bottom-0 mb-auto w-full justify-between items-center lg:text-right align-middle"
    >
      <div className="items-right align-middle px-10 py-10 md:align-center">
        <Link to="/">
          <img
            src={ApteumW}
            height={50}
            width={130}
            alt=""
            className="items-center m-auto lg:ml-0"
          />
        </Link>
      </div>
      <div>
        <div className="grid justify-items-center lg:justify-items-end w-full items-center px-6 md:px-10 pt-3 sm:text-center lg:text-right">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4">
            <div className="text-center">
              <Link to="services">Services</Link>
            </div>
            <div className="text-center sm:col-span-2">
              <Link to="ourstory">Our Story</Link>
            </div>
            <div className="text-center sm:col-span-2">
              <Link to="experts">Our Experts</Link>
            </div>
            <div className="text-center sm:col-span-2">
              <Link to="careers">Careers</Link>
            </div>
            <div className="text-center">
              <Link to="faqs">FAQ</Link>
            </div>
            <div className="text-center">
              <Link to="contact-us">Contact</Link>
            </div>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/apteumcorp/about/"
                target="_blank"
              >
                <img src={lnIconW} width={25} height={25} className="m-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-center sm:text-right px-6 md:px-10 py-3">
          <h5>&#169; 2024 Apteum. All Rights Reserved.</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
