import HeroBanner from "./heroBanner/HeroBanner";
import "./home.scss";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;