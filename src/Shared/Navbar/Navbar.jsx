import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  // Handle dropdown hover
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  // Detect scroll and change navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-[25px] transition-all duration-300 ${
        isScrolled ? "bg-[#0057c0] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-1320 mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[170px] h-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-white font-normal">
          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`relative flex items-center gap-1 text-base transition-all py-2 duration-200 ${
                isOpen ? "text-[#fe8b53]" : "text-white hover:text-[#fe8b53]"
              } font-syne`}
            >
              Solutions
              <AiOutlineDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
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
                  { name: "AnyCaaS", path: "/AnyCaaS" },
                  { name: "AnyBaaS", path: "/AnyBaaS" },
                  { name: "AnyPaaS", path: "/AnyPaaS" },
                ].map((item, index) => (
                  <li key={index} className="group relative">
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm transition-all duration-300 text-custom-color group-hover:text-[#FE8B53] font-syne"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "relative inline-flex items-center px-4 py-2 text-base transition-all duration-300 font-syne text-[#FE8B53]"
                : "relative inline-flex items-center px-4 py-2 text-base transition-all duration-300 font-syne group hover:text-[#FE8B53]"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/About Us"
            className={({ isActive }) =>
              isActive
                ? "relative inline-flex items-center px-4 py-2 text-base transition-all duration-300 font-syne text-[#FE8B53]"
                : "relative inline-flex items-center px-4 py-2 text-base transition-all duration-300 font-syne group hover:text-[#FE8B53]"
            }
          >
            About Us
          </NavLink>
        </div>

        {/* Right Section */}
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
        className={`fixed top-0 left-0 w-full h-screen bg-[#0057c0] text-white transition-all duration-300 ease-in-out ${
          toggleMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-[25px]">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-[170px] h-auto" />
          </a>

          <button onClick={() => setToggleMenu(false)}>
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-start gap-6 mt-6 text-lg font-semibold text-white px-6">
          <NavLink
            to="/AnyCaaS"
            title="AnyCaaS"
            className="transition-all duration-300 hover:text-[#FE8B53]"
          >
            AnyCaaS
          </NavLink>
          <NavLink
            to="/AnyBaaS"
            title="AnyBaaS"
            className="transition-all duration-300 hover:text-[#FE8B53]"
          >
            AnyBaaS
          </NavLink>
          <NavLink
            to="/AnyPaaS"
            title="AnyPaaS"
            className="transition-all duration-300 hover:text-[#FE8B53]"
          >
            AnyPaaS
          </NavLink>
          <NavLink
            to="/services"
            title="Services"
            className="transition-all duration-300 hover:text-[#FE8B53]"
          >
            Services
          </NavLink>
          <NavLink
            to="/about-us"
            title="About Us"
            className="transition-all duration-300 hover:text-[#FE8B53]"
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
