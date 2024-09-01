import { useState, KeyboardEvent, useEffect } from "react";
import "./heroBanner.scss";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/image";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import { useAppSelector } from "../../../hooks/hooks";

const HeroBanner = () => {
  const { url } = useAppSelector((state) => state.home);
  const navigate = useNavigate();
  const [background, setBackground] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const background =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(background);
  }, [data, url.backdrop]);

  const searchQueryHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query?.length > 0) {
      navigate("/search/" + query);
    }
  };

  const handleSearch = () => {
    if (query?.length > 0) {
      navigate("/search/" + query);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Million of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
