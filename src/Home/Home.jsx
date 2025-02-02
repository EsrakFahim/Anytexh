import About from "../Components/About/About";
import Philosophy from "../Components/Philosophy/Philosophy";
import TechnologyTab from "../Components/TechnologyTab/TechnologyTab";


const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-red-600 font-bold underline">
        Hello world!f
      </h1>
      <About />
      <Philosophy />
      <TechnologyTab />
    </div>
  );
};

export default Home;
