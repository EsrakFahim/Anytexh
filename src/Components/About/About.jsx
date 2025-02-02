// import { FaBuilding, FaChartLine, FaCreditCard, FaHeart } from "react-icons/fa";
import Image from "../../assets/About_Image.avif";
import CreditCard from "../../assets/credit-card.svg";
import ChartLine from "../../assets/Chart-Line.svg";
import Building from "../../assets/Building.svg";
import Background from "../../assets/content-image-1.png";

import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="overflow-hidden min-h-screen mx-auto  flex items-center justify-center">
      <div className="container mx-auto max-w-[1320px] flex flex-col lg:flex-row items-center gap-10 md:gap-32 px-6 lg:px-12">
        {/* Text Section */}
        <div className="flex-1 text-left z-10">
          <span className="text-base uppercase font-bold text-[#2885f1]">
            POWERING THE FUTURE OF FINANCE
          </span>
          <h2 className="text-[32px] lg:text-[56px] leading-[40px] lg:leading-[64px] font-semibold text-[#0b305b] mt-4">
            Uncovering new <br /> ways to delight customers
          </h2>
          <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[25px] font-bold text-[#164377] mt-4">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[25px] text-[#295282] mt-4">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* SVG Background */}

          <motion.div
            className="absolute hidden md:block w-[550px] h-[650px] -z-10"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              transform: "translate(-50%, -50%) translateY(20px)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translate(-50%, -50%) translateY(0px)",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          <img
            src={Image}
            alt="Finance Technology"
            className="w-[300px] sm:w-[350px] md:w-[375px] lg:w-[425px] h-[400px] sm:h-[450px] md:h-[475px] lg:h-[525px] object-cover shadow-lg"
          />

          {/* Floating Icons */}
          <div className="absolute top-10 -left-5 lg:top-20 lg:left-10 rounded-full">
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={CreditCard} alt="Credit Card" />
            </motion.div>
          </div>
          <div className="absolute top-40 left-8 lg:top-44 lg:left-32 rounded-full">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={ChartLine} alt="Chart Line" />
            </motion.div>
          </div>
          <div className="absolute top-5 -right-10 lg:top-10 lg:right-10 rounded-full">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={Building} alt="Building" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
