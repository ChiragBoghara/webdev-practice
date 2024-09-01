import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/image";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import "./carousel.scss";
import type { RootState } from "../../store/store";
import Movie from "../../Models/Movie";

interface CarouselProps {
  data: Movie[];
  loading: boolean;
  title?: string;
  endpoint?: string;
}

const Carousel = ({ data, loading, title, endpoint }: CarouselProps) => {
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const url = useSelector((state: RootState) => state.home.url);
  const navigate = useNavigate();

  const navigation = (dir: "left" | "right") => {
    const container: HTMLDivElement | null = carouselContainer.current;
    if (container) {
      const scrollAmount =
        dir === "left"
          ? container.scrollLeft - (container.offsetWidth + 20)
          : container.scrollLeft + (container.offsetWidth + 20);

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        {!loading ? (
          data.length === 0 ? (
            <div className="thirdHeader">No {title || "data"} Found</div>
          ) : (
            <>
              <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => navigation("left")}
              />
              <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={() => navigation("right")}
              />
              <div className="carouselItems" ref={carouselContainer}>
                {data?.map((item) => {
                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallback;
                  return (
                    <div
                      key={item.id}
                      className="carouselItem"
                      onClick={() =>
                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                      }
                    >
                      <div className="posterBlock">
                        <Img src={posterUrl} />
                        <CircleRating
                          rating={parseFloat(item.vote_average.toFixed(1))}
                        />
                        <Genres data={item.genre_ids.slice(0, 2)} />
                      </div>
                      <div className="textBlock">
                        <span className="title">{item.title}</span>
                        <span className="date">
                          {dayjs(item.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
