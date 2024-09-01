import { useNavigate, useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchMovieDetails } from "../../store/actions/moviesActions";

type DetailsParam = {
  mediaType: string | undefined;
  id: string | undefined;
};

const Details = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mediaType, id } = useParams<DetailsParam>();

  useEffect(() => {
    dispatch(fetchMovieDetails(mediaType, id));
  }, [dispatch, mediaType, id]);

  if (
    mediaType === undefined ||
    id === undefined ||
    (mediaType !== "movie" && mediaType !== "tv")
  ) {
    navigate('/404', { state: { message: 'This page is not available!' } });
    return null;
  }

  return (
    <div>
      <DetailsBanner />
      <Cast />
      <VideosSection />
      <Similar />
      <Recommendation />
    </div>
  );
};

export default Details;
