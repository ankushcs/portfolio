import Navbar from "../Navbar/Navbar";
import "./NoPageFound.scss";

const NoPageFound = () => {
  return (
    <div className="nopagefound-container">
      <div className="nopagefound-orange-container"></div>
      <div className="nopagefound-box-container"></div>
      <div className="nopagefound-main-container">
        <Navbar />
        <div className="nopagefound-inner-container">
          <p className="error-msg-line1">404</p>
          <p className="error-msg-line2">No Page Found</p>
        </div>
      </div>
    </div>
  );
};

export default NoPageFound;
