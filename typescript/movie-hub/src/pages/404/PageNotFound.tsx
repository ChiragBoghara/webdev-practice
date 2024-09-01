import "./pageNotFound.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  const message = location.state?.message || "Page not found!";
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">{message}</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
