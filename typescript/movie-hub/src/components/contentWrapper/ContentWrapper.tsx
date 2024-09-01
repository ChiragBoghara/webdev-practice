import "./contentWrapper.scss";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
