import About from "../Components/About/About";
import Counter from "../Components/Counter/Counter";
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
      <Counter />
    </div>
  );
};

export default Home;
