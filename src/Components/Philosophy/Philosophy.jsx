import Image from "../../assets/Philosophy.avif";
import fullSuiteImg from "../../assets/fullSuiteImg.svg";
import simplifyImg from "../../assets/simplifyImg.avif";
import cuttingEdgeImg from "../../assets/cuttingEdgeImg.svg";

const Philosophy = () => {
  const features = [
    {
      imgSrc: fullSuiteImg, // Replace with actual image path
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      imgSrc: simplifyImg, // Replace with actual image path
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      imgSrc: cuttingEdgeImg, // Replace with actual image path
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];

  return (
    <section className="overflow-hidden px-10 min-h-screen mx-auto flex items-center justify-center">
      <div className="container mx-auto max-w-[1320px]">
        {/* Text Section */}
        <div className="mx-auto py-5 text-center z-10">
          <span className="text-base uppercase font-bold text-[#2885f1]">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-[32px] lg:text-[56px] leading-[40px] lg:leading-[64px] font-semibold text-[#0b305b] mt-4">
            Human-centred innovation
          </h2>
          <img className="mt-10 w-full" src={Image} alt="Philosophy" />
        </div>

        {/* Image Section */}
        <div className="lg:flex gap-10 justify-center items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8fcff] shadow-xl rounded-[20px] p-10"
            >
              <div className="rounded-full flex items-center  flex-shrink-0">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-[50px]  h-[50px]  object-contain"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-[24px] font-semibold text-[#0b305b] leading-[31.2px] font-Montserrat">
                  {feature.title}
                </h2>
                <p className="text-[16px] text-[#164377] font-['Montserrat Variable'] leading-[25px] mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
