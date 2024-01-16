import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import Left_img from "../../assets/hero_img.JPG";
import Hero_img from "../../assets/img_1.jpeg";
import { CiLinkedin, CiTwitter, CiMail, CiInstagram } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-orange-container"></div>
      <div className="home-box-container"></div>
      <div className="home-main-container">
        <Navbar />
        <div className="home-inner-container">
          <div className="left-img-container">
            <img src={Hero_img} alt="main-img" />
          </div>
          <div className="center-text-container">
            <div className="home-center-box-container"></div>
            <p className="home-name">Hello, My name is Ankush Singh</p>
            <p className="home-name-disc">
              Hi, I am a Frontend Developer. I love my work. Currenlty I am
              working in a MNC company and working as React js developer for the
              GRC product.
            </p>
          </div>
          <div className="right-img-text-container">
            <div className="home-inner-orange-container"></div>
            <img src={Left_img} alt="right_img" />
            <hr className="home-hr" />
            <div className="home-icons-container">
              <button className="home-icon-container">
                <CiLinkedin />
              </button>
              <button className="home-icon-container">
                <CiTwitter />
              </button>
              <button className="home-icon-container">
                <CiMail />
              </button>
              <button className="home-icon-container">
                <CiInstagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
