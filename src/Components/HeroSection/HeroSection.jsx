import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import bgImage from "../../assets/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg";
import svg1 from "../../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../../assets/backgrounds/WaveLinesDesktop3.svg";
// import svg4 from '../../assets/backgrounds/WaveLinesDesktop4.svg';

const HeroSection = () => {
      // Parallax effect on the background image (Y-axis)
      const { scrollY } = useViewportScroll();
      const yPos = useTransform(scrollY, [0, 300], [0, -50]);

      // Mouse movement state for the SVG overlays
      const [mouseX, setMouseX] = useState(window.innerWidth / 2);

      // Update mouseX on mouse move over the container
      const handleMouseMove = (e) => {
            setMouseX(e.clientX);
      };

      // Calculate offset relative to the center of the screen.
      const centerX = window.innerWidth / 2;
      const offset = mouseX - centerX;

      // Reduced multipliers for smaller movement.
      const groupOneOffset = -offset * 0.02; // for 1st and 3rd SVG images
      const groupTwoOffset = -offset * 0.04; // for 2nd and 4th SVG images

      return (
            <div>
                  <div
                        onMouseMove={handleMouseMove}
                        className="mx-auto lg:h-[max(620px,_calc(92vh-49px))] h-auto bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] hidden lg:flex justify-between items-center relative overflow-hidden "
                        style={{ clipPath: "polygon(0px 0px, 100% 0px, 100% 81%, 0% 100%)" }}
                  >
                        {/* Left text content */}
                        <div className="space-y-5 z-50 w-[750px] lg:ml-72 ml-10">
                              <h1 className="text-white text-[80px] font-semibold leading-[92px] tracking-[-1.6px] font-Montserrat">
                                    Embrace the future of finance
                              </h1>
                              <p className="text-white text-[16px] font-semibold leading-[25.6px] font-Montserrat">
                                    Reimagine financial services with AnyTech’s open platform, distributed{" "}
                                    <br />
                                    banking solution that powers transformation.
                              </p>
                              <button className="bg-[#fe8b53] text-white text-[18px] font-semibold leading-[23px] font-Montserrat px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-[#fe8b53]">
                                    Reach Out to Us <span>›</span>
                              </button>
                        </div>

                        {/* Background image with vertical parallax */}
                        <motion.div
                              className="absolute right-0  h-full object-cover"
                              style={{
                                    clipPath:
                                          "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
                                    y: yPos,
                              }}
                        >
                              <img
                                    src={bgImage}
                                    alt="Hero Background"
                                    className="w-full h-full object-cover"
                              />
                        </motion.div>

                        {/* SVG overlays that animate horizontally on mouse move */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                              <motion.img
                                    src={svg1}
                                    alt="Wave 1"
                                    className="absolute top-0 left-0 min-w-[150%] object-cover"
                                    animate={{ x: groupOneOffset }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              />
                              <motion.img
                                    src={svg2}
                                    alt="Wave 2"
                                    className="absolute top-0 left-0 min-w-[150%] object-cover"
                                    animate={{ x: groupTwoOffset }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              />
                              <motion.img
                                    src={svg3}
                                    alt="Wave 3"
                                    className="absolute top-0 right-0 min-w-[120%] object-cover"
                                    animate={{ x: groupOneOffset }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              />
                              <motion.img
                                    src={svg2}
                                    alt="Wave 4"
                                    className="absolute bottom-0 right-0 min-w-[110%] object-cover"
                                    animate={{ x: groupTwoOffset }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                              />
                        </div>
                  </div>
                  <div className="lg:hidden bg-red-500 w-full h-[300px]">

                  </div>
            </div>
      );
};

export default HeroSection;
