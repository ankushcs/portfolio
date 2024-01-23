import Navbar from "../Navbar/Navbar";
import "./NoPageFound.scss";
import Lottie from "lottie-react";
import ErrorPage from "../../assets/error_lottie.json";

const NoPageFound = () => {
  return (
    <div className="nopagefound-container">
      <div className="nopagefound-orange-container"></div>
      <div className="nopagefound-box-container"></div>
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
