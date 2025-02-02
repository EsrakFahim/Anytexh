import About from "../Components/About/About";
import HeroSection from "../Components/HeroSection/HeroSection";
import Philosophy from "../Components/Philosophy/Philosophy";
import TechnologyTab from "../Components/TechnologyTab/TechnologyTab";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Philosophy />
      <TechnologyTab />
    </div>
  );
};

export default Home;
