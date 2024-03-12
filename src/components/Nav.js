import React, { useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu toggle when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      {/* Menu toggle button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-2 right-2 z-50 bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center text-white"
      >
        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Nav inner - only visible on non-mobile devices */}
      <div className="hidden lg:flex container mx-auto bg-black/20 backdrop-blur-2xl rounded-full max-w-[460px] px-5 justify-between text-2xl text-white/50 items-center">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiUser />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <FaClipboardCheck />
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsBriefcase />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsChatSquareText />
        </Link>
      </div>



      {/* added menu icon and modified  */}

      {/* Mobile Navbar - shown when menu toggle is clicked */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/20 backdrop-blur-2xl  max-w-[560px] mx-auto px-5 text-2xl text-white/50 items-center">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer block py-3"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer block py-3"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer block py-3"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer block py-3"
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer block py-3"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
