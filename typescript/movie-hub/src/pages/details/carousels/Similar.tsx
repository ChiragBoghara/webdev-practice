import Carousel from "../../../components/carousel/Carousel";
import { useAppSelector } from "../../../hooks/hooks";


const Similar = () => {
    const isFetchingData = useAppSelector((state) => state.ui.loading);
    const { similar, media_type } = useAppSelector((state) => state.currentMovie.currentMovie);

    const title = media_type === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={similar}
            loading={isFetchingData}
            endpoint={media_type}
        />
    );
};

export default Similar;