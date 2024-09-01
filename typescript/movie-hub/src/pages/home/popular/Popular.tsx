import { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import { fetchPopular } from "../../../store/actions/moviesActions";
import Movie from "../../../Models/Movie";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const Popular = () => {
  const dispatch = useAppDispatch();
  const movies: Movie[] = useAppSelector((state) => state.movies.popular);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [endpoint, setEndpoint] = useState("movie");

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPopular(endpoint));
    setIsLoading(false);
  }, [endpoint, dispatch]);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={movies} loading={isLoading}/>
    </div>
  );
};

export default Popular;
