import React, { useState } from "react";
import dayjs from "dayjs";
import "./detailsBanner.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/image";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../PlayButton";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { useAppSelector } from "../../../hooks/hooks";

const DetailsBanner = () => {
  const { url } = useAppSelector((state) => state.home);
  const isFetchingData = useAppSelector((state) => state.ui.loading);
  const {
    directors,
    writers,
    status,
    creators,
    genre_ids,
    backdrop_path,
    poster_path,
    title,
    tagline,
    overview,
    vote_average,
    release_date,
    runtime,
  } = useAppSelector((state) => state.currentMovie.currentMovie);

  const [show, setShow] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!isFetchingData ? (
        <React.Fragment>
          <div className="backdrop-img">
            <Img src={url.backdrop + backdrop_path} />
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {poster_path ? (
                  <Img className="posterImg" src={url.backdrop + poster_path} />
                ) : (
                  <Img className="posterImg" src={PosterFallback} />
                )}
              </div>
              <div className="right">
                <div className="title">
                  {`${title || ""} (${dayjs(release_date).format("YYYY")})`}
                </div>
                <div className="subtitle">{tagline}</div>

                <Genres data={genre_ids} />

                <div className="row">
                  <CircleRating rating={parseFloat(vote_average.toFixed(1))} />
                  <div
                    className="playbtn"
                    onClick={() => {
                      setShow(true);
                      setVideoId(videoId);
                    }}
                  >
                    <PlayIcon />
                    <span className="text">Watch Trailer</span>
                  </div>
                </div>

                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{overview}</div>
                </div>

                <div className="info">
                  {status && (
                    <div className="infoItem">
                      <span className="text bold">Status: </span>
                      <span className="text">{status}</span>
                    </div>
                  )}
                  {release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release Date: </span>
                      <span className="text">
                        {dayjs(release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  )}
                  {runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime: </span>
                      <span className="text">{toHoursAndMinutes(runtime)}</span>
                    </div>
                  )}
                </div>

                {directors.length > 0 && (
                  <div className="info">
                    <span className="text bold">Director: </span>
                    <span className="text">
                      {directors?.map((name, i) => (
                        <span key={i}>
                          {name}
                          {directors.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {writers.length > 0 && (
                  <div className="info">
                    <span className="text bold">Writer: </span>
                    <span className="text">
                      {writers?.map((name, i) => (
                        <span key={i}>
                          {name}
                          {writers.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {creators && creators.length > 0 && (
                  <div className="info">
                    <span className="text bold">Creator: </span>
                    <span className="text">
                      {creators.map((d: any, i: any) => (
                        <span key={i}>
                          {d.name}
                          {creators.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </ContentWrapper>
        </React.Fragment>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
