import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import {
  PaperAirplaneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [profileOpen, setProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Prevent closing if mouse returns quickly
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300); // Small delay before closing
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent  text-white  z-50 px-6 py-[25px] ">
      <div className="max-w-1320 mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[170px] h-auto" />
        </a>

        {/* Desktop Menu (Centered Links) */}
        <div className="hidden lg:flex items-center  text-white font-normal">
          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`relative flex items-center gap-1 text-base transition-all py-2 duration-200 ${
                isOpen ? "text-[#ED2A00]" : "text-white hover:text-[#ED2A00]"
              } font-syne`}
            >
              Others Pages
              <AiOutlineDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              {/* Animated Underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 w-0 h-[2px] bg-black transition-all duration-300 ${
                  isOpen ? "w-full" : "w-0"
                }`}
              />
            </button>

            {/* Dropdown Items */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-white text-black shadow-lg rounded-lg transition-all duration-300 ease-out ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                {[
                  { name: "Integration", path: "/integration" },
                  { name: "Testimonials", path: "/testimonials" },
                  { name: "Terms & Conditions", path: "/terms" },
                  { name: "Privacy & Policy", path: "/privacy" },
                  { name: "FAQ", path: "/faq" },
                  { name: "404", path: "/404" },
                ].map((item, index) => (
                  <li key={index} className="group relative">
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm transition-all duration-300 text-custom-color group-hover:text-custom-hover-color font-syne"
                    >
                      {item.name}
                      {/* Animated Underline */}
                      <span
                        className={`absolute left-4 bottom-1 w-0 h-[2px] transition-all duration-300 ${
                          isOpen ? "bg-[#ED2A00]" : "bg-black"
                        } group-hover:w-[80%]`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className="relative inline-flex items-center px-4 py-2 text-base transition-all duration-300 font-syne group"
          >
            Home
            {/* Animated Underline */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-[80%] group-hover:left-1/10 transform -translate-x-1/2" />
          </NavLink>
        </div>

        {/* Right Section (User Profile Dropdown) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-blue-700 transition-all">
            Contact Us{" "}
            <AiOutlineDown className="inline-block ml-2 -rotate-90" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setToggleMenu(true)}>
            <Bars3Icon className="h-7 w-7 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white transition-all duration-300 ease-in-out ${
          toggleMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        {/* Mobile Logo and Close Button */}
        <div className="flex justify-between items-center px-6 py-[25px]">
          <a href="/" className="flex gap-1 font-bold items-center text-white">
            <PaperAirplaneIcon className="h-6 w-6 text-primary" />
            <span className="text-lg">Paper.io</span>
          </a>

          <div className="flex items-center gap-2">
            <img
              alt="User Profile"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full border border-gray-500"
            />
            <button onClick={() => setToggleMenu(false)}>
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start gap-6 mt-6 text-lg font-semibold text-white px-6">
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/benefits"
            aria-label="Benefits"
            title="Benefits"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Benefits
          </NavLink>
          <NavLink
            to="/classes"
            aria-label="Our Classes"
            title="Our Classes"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Our Classes
          </NavLink>
          <NavLink
            to="/integration"
            aria-label="Integration"
            title="Integration"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Integration
          </NavLink>
          <NavLink
            to="/testimonials"
            aria-label="Testimonials"
            title="Testimonials"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/terms"
            aria-label="Terms & Conditions"
            title="Terms & Conditions"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/privacy"
            aria-label="Privacy & Policy"
            title="Privacy & Policy"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Privacy & Policy
          </NavLink>
          <NavLink
            to="/faq"
            aria-label="FAQ"
            title="FAQ"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/404"
            aria-label="404"
            title="404"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            404
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
