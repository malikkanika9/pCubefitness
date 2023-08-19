import FirstSection from "./FirstSection";
import FivethSection from "./FivethSection";
import FourthSection from "./FourthSection";
import ThirdSection from "./ThirdSection";
import Sixth from "./Sixth";
import Trainers from "../trainers/Trainers";
import Eighth from "./Eighth";
import Nineth from "./Nineth";
import Tenth from "./Tenth";
const Home = () => {
  return (
    <div className={`margin-sections`}>
      <FirstSection />
            <FourthSection />
     
      <Trainers />
      <Eighth />
     
    </div>
  );
};

export default Home;
