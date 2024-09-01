import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./movieCard.scss";
import Img from "../lazyLoadImage/image";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import { useAppSelector } from "../../hooks/hooks";
import { SearchedMovie } from "../../pages/searchResult/SearchResult";

interface MovieCardInterface {
  data: SearchedMovie;
  fromSearch: boolean;
  mediaType: string | undefined;
}

const MovieCard = ({ data, fromSearch, mediaType }: MovieCardInterface) => {
  const { url } = useAppSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={parseFloat(data.vote_average.toFixed(1))} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
