import { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import { fetchTopRated } from "../../../store/actions/moviesActions";
import Movie from "../../../Models/Movie";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const TopRated = () => {
  const dispatch = useAppDispatch();
  const movies: Movie[] = useAppSelector((state) => state.movies.topRated);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [endpoint, setEndpoint] = useState("movie");

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTopRated(endpoint));
    setIsLoading(false);
  }, [endpoint, dispatch]);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={movies} loading={isLoading} />
    </div>
  );
};

export default TopRated;
