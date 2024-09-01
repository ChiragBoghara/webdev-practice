import { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import { fetchTrending } from "../../../store/actions/moviesActions";
import Movie from "../../../Models/Movie";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const Trending = () => {
  const dispatch = useAppDispatch();
  const movies: Movie[] = useAppSelector((state) => state.movies.trending);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [endpoint, setEndpoint] = useState("day");

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchTrending(endpoint));
    setIsLoading(false);
  }, [endpoint, dispatch]);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={movies} loading={isLoading}  />
    </div>
  );
};

export default Trending;
