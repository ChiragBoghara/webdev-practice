import { useState } from "react";

import "./videosSection.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/image";
import { PlayIcon } from "../PlayButton";
import { useAppSelector } from "../../../hooks/hooks";

const VideosSection = () => {
  const isFetchingData = useAppSelector((state) => state.ui.loading);
  const [show, setShow] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const { videos } = useAppSelector((state) => state.currentMovie.currentMovie);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!isFetchingData ? (
          <div className="videos">
            { videos.length!==0
            ? videos.map((video: any) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))
            : <div className="thirdHeader">No Videos Found</div>}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
