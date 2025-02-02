import { useState } from "react";
import Image01 from "../../assets/Customer-focused.avif";
import Image02 from "../../assets/Agile-adaptable.avif";
import Image03 from "../../assets/Compliance-ready.avif";
import Image04 from "../../assets/About_Image.avif";

const TechnologyTab = () => {
  const [activeTab, setActiveTab] = useState("Customer focused");

  const tabs = [
    "Customer focused",
    "Agile and adaptable",
    "Compliance ready",
    "Secure and safe",
  ];

  const tabContent = {
    "Customer focused": {
      title: "Purpose-built financial services",
      description: [
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.",
      ],
      image: Image01,
    },
    "Agile and adaptable": {
      title: "Agile and adaptable for growth",
      description: [
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance, and performance.",
        "Optimize your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing, and lending capabilities.",
      ],
      image: Image02,
    },
    "Compliance ready": {
      title: "Manage compliance with ease",
      description: [
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
      ],
      image: Image03,
    },
    "Secure and safe": {
      title: "Highly secure and safe",
      description: [
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
        "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust, and reliable infrastructure.",
      ],
      image: Image04,
    },
  };

  return (
    <>
      <div className="mx-auto mt-24 text-center z-10">
        <span className="text-base uppercase font-bold text-[#2885f1]">
          TECHNOLOGY BUILT FOR YOU
        </span>
        <h2 className="text-[32px] lg:text-[56px] leading-[40px] lg:leading-[64px] font-semibold text-[#0b305b] mt-4">
          The future of finance
        </h2>
      </div>
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs Section */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg transition ${
                  activeTab === tab
                    ? "bg-blue-200 text-blue-600 font-bold"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 border border-gray-200 min-h-[400px]">
            {/* Text Content */}
            <div className="md:w-1/2 w-full">
              <h4 className="text-sm md:text-base font-bold text-blue-500 uppercase tracking-wide">
                {activeTab}
              </h4>
              <h2 className="text-2xl md:text-4xl font-semibold text-[#0b305b] mt-2">
                {tabContent[activeTab].title}
              </h2>
              {tabContent[activeTab].description.map((text, index) => (
                <p
                  key={index}
                  className="mt-4 text-sm md:text-base text-[#486c94] leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={tabContent[activeTab].image}
                alt={activeTab}
                className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyTab;
