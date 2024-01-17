import "./About.scss";
import Lottie from "lottie-react";
import Navbar from "../Navbar/Navbar";
import aboutMeLottie from "../../assets/aboutUsLottie.json";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-orange-container"></div>
      <div className="about-box-container"></div>
      <div className="about-main-container">
        <Navbar />
        <div className="about-inner-container">
          <div className="about-details-container">
            <p className="about-heading">About</p>
            <p className="about-details-para">
              Welcome to my portfolio! I am a dedicated frontend developer with
              over 2 years of hands-on experience in crafting seamless and
              visually appealing digital experiences. My skill set spans HTML,
              CSS, JavaScript, Bootstrap, React JS, hooks, and Material-UI
              (MUI). From building applications from the ground up to enhancing
              existing projects, I leverage my strong frontend skills to deliver
              top-notch code that exceeds client expectations. I am fueled by a
              passion for continuous learning, always seeking to improve and
              enhance productivity. Each project I undertake becomes an
              opportunity for growth, pushing me to explore novel approaches and
              overcome challenges efficiently. My commitment to delivering
              high-quality code is unwavering, ensuring client satisfaction and
              contributing to the success of every venture. Beyond technical
              proficiency, I prioritize communication, collaboration, and
              teamwork. I believe that these aspects are essential for the
              seamless execution of projects. With a dynamic approach and
              dedication, I am ready to contribute impactful digital experiences
              and exceptional outcomes to new ventures. Let's collaborate and
              create something extraordinary together!
            </p>
          </div>
          <div className="about-img-container">
            <Lottie className="lottie" animationData={aboutMeLottie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
