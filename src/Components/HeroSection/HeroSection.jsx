import{ useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import bgImage from '../../assets/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg';
import svg1 from '../../assets/backgrounds/WaveLinesDesktop1.svg';
import svg2 from '../../assets/backgrounds/WaveLinesDesktop2.svg';
import svg3 from '../../assets/backgrounds/WaveLinesDesktop3.svg';
import svg4 from '../../assets/backgrounds/WaveLinesDesktop4.svg';

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
      // When the mouse is to the right of center, offset is positive;
      // When left, offset is negative.
      const centerX = window.innerWidth / 2;
      const offset = mouseX - centerX;

      // Define two different multipliers for different sensitivity.
      // The negative sign makes the SVG move opposite to the mouse movement.
      const groupOneOffset = -offset * 0.05; // for 1st and 3rd SVG images
      const groupTwoOffset = -offset * 0.1;  // for 2nd and 4th SVG images

      return (
            <div
                  onMouseMove={handleMouseMove}
                  className="lg:h-[max(620px,_calc(92vh-49px))] h-auto bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] flex justify-between items-center relative overflow-hidden"
                  style={{ clipPath: "polygon(0px 0px, 100% 0px, 100% 81%, 0% 100%)" }}
            >
                  {/* Left text content */}
                  <div className='min-w-[600px] relative z-50'>
                        <div className='text-white space-y-5 px-10'>
                              <div className='w-full space-y-5'>
                                    <h1 className='text-white text-6xl font-bold '>
                                          Embrace the future of finance
                                    </h1>
                                    <p>
                                          Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
                                    </p>
                                    <div>
                                          <button className='bg-[#fe8b53] px-10 py-3'>
                                                Reach out to us
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Background image with vertical parallax */}
                  <motion.div
                        className="flex justify-end w-full h-full object-cover"
                        style={{
                              clipPath: "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
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
                  <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                        <motion.img
                              src={svg1}
                              alt="Wave 1"
                              className='absolute top-0 left-0'
                              animate={{ x: groupOneOffset }}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                        <motion.img
                              src={svg2}
                              alt="Wave 2"
                              className='absolute top-0 left-0'
                              animate={{ x: groupTwoOffset }}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                        <motion.img
                              src={svg3}
                              alt="Wave 3"
                              className='absolute top-0 left-0'
                              animate={{ x: groupOneOffset }}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                        <motion.img
                              src={svg4}
                              alt="Wave 4"
                              className='absolute bottom-0 left-0'
                              animate={{ x: groupTwoOffset }}
                              transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                  </div>
            </div>
      );
};

export default HeroSection;
