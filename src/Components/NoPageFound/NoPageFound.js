import Navbar from "../Navbar/Navbar";
import "./NoPageFound.scss";
import Lottie from "lottie-react";
import ErrorPage from "../../assets/404ErrorPage.json";
import Fade from "react-reveal/Fade";

const NoPageFound = () => {
  return (
    <div className="nopagefound-container">
      <Fade left>
        <div className="nopagefound-orange-container"></div>
      </Fade>
      <Fade right>
        <div className="nopagefound-box-container"></div>
      </Fade>
      <div className="nopagefound-main-container">
        <Navbar />
        <div className="nopagefound-inner-container">
          <Lottie className="lottie-no-page-found" animationData={ErrorPage} />
        </div>
      </div>
    </div>
  );
};

export default NoPageFound;
