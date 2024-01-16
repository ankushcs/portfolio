import "./About.scss";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-orange-container"></div>
      <div className="about-box-container"></div>
      <div className="about-main-container">
        <Navbar />
        <div className="about-inner-container"></div>
      </div>
    </div>
  );
};

export default About;
