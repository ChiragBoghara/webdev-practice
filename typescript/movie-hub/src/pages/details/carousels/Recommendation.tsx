import Carousel from "../../../components/carousel/Carousel";
import { useAppSelector } from "../../../hooks/hooks";

const Recommendation = () => {
  const isFetchingData = useAppSelector((state) => state.ui.loading);
  const { recommendations, media_type } = useAppSelector((state) => state.currentMovie.currentMovie);

  return (
    <Carousel
      title="Recommendations"
      data={recommendations}
      loading={isFetchingData}
      endpoint={media_type}
    />
  );
};

export default Recommendation;
