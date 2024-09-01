import "./cast.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/image";
import avatar from "../../../assets/avatar.png";
import { useAppSelector } from "../../../hooks/hooks";

const Cast = () => {
  const isFetchingData = useAppSelector((state) => state.ui.loading);
  const { url } = useAppSelector((state) => state.home);
  const { casts } = useAppSelector((state) => state.currentMovie.currentMovie);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!isFetchingData ? (
          <div className="listItems">
            { casts.length!==0 ?
            casts.map((item: any) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            }) : <div className="thirdHeader">No Cast Found</div>}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
