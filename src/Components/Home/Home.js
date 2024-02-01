import "./Home.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Left_img from "../../assets/hero_img.JPG";
import Hero_img from "../../assets/img_1.jpeg";
import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Home = () => {
  return (
    <div className="home-container">
      <Fade left>
        <div className="home-orange-container"></div>
      </Fade>
      <Fade top>
        <div className="home-box-container"></div>
      </Fade>
      <div className="home-main-container">
        <Navbar />
        <div className="home-inner-container">
          <div className="left-img-container">
            <img src={Hero_img} alt="main-img" />
          </div>
          <div className="center-text-container">
            <Fade right>
              <div className="home-center-box-container"></div>
            </Fade>
            <p className="home-name">Hello, My name is Ankush Singh</p>
            <Fade left>
              <p className="home-name-disc">
                "As a passionate Front-End Developer, I thrive on the dynamic
                nature of web development. Dedication to my craft is evident in
                my ongoing commitment to learning and incorporating cutting-edge
                technologies. By staying attuned to the latest market trends, I
                ensure that my skill set is always ahead of the curve. This
                proactive approach allows me to deliver top-notch solutions to
                clients, continuously elevating the standard of my work in a
                rapidly evolving industry."
              </p>
            </Fade>
          </div>
          <div className="right-img-text-container">
            <Fade bottom>
              <div className="home-inner-orange-container"></div>
            </Fade>
            <img src={Left_img} alt="right_img" className="home-right-img" />
            <hr className="home-hr" />
            <Flip top cascade>
              <div className="home-icons-container">
                <a
                  href="https://www.linkedin.com/in/ankush-931b6483/"
                  target="_blank"
                  className="home-icon-container"
                  rel="noreferrer"
                >
                  <CiLinkedin />
                </a>
                <a
                  href="https://twitter.com/tweetofankush"
                  target="_blank"
                  className="home-icon-container"
                  rel="noreferrer"
                >
                  <CiTwitter />
                </a>
                <a
                  href="https://github.com/ankushcs"
                  className="home-icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <Link to="/contact" className="home-icon-container">
                  <CiMail />
                </Link>
              </div>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
