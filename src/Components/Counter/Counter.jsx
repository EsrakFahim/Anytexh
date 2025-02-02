import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 my-60 ">
      {/* Years of Experience */}
      <div className="text-center">
        <div
          className="font-semibold text-[#1370db]"
          style={{
            fontSize: "96px",
            fontFamily: "Montserrat Variable, sans-serif",
            letterSpacing: "-1.92px",
            lineHeight: "96px",
          }}
        >
          <span className="mr-1">{">"}</span>
          <CountUp start={0} end={20} duration={3} />
        </div>
        <div className="text-lg text-[#1e2637]">Years of Experience</div>
      </div>

      {/* Financial Institutions */}
      <div className="text-center">
        <div
          className="font-semibold text-[#1370db]"
          style={{
            fontSize: "96px",
            fontFamily: "Montserrat Variable, sans-serif",
            letterSpacing: "-1.92px",
            lineHeight: "96px",
          }}
        >
          <CountUp start={0} end={40} duration={3} />+
        </div>
        <div className="text-lg text-[#1e2637]">Financial Institutions</div>
      </div>

      {/* Customers */}
      <div className="text-center">
        <div
          className="font-semibold text-[#1370db]"
          style={{
            fontSize: "96px",
            fontFamily: "Montserrat Variable, sans-serif",
            letterSpacing: "-1.92px",
            lineHeight: "96px",
          }}
        >
          <span className="mr-1">{">"}</span>
          <CountUp start={0} end={200} duration={3} />m
        </div>
        <div className="text-lg text-[#1e2637]">Customers Each</div>
      </div>
    </div>
  );
};

export default Counter;
