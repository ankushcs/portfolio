import "./About.scss";
import Lottie from "lottie-react";
import Navbar from "../Navbar/Navbar";
import aboutMeLottie from "../../assets/aboutMeLottie.json";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import Project_1 from "../../assets/project_job.json";
import Project_2 from "../../assets/project_food.json";
import { CiMobile3 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { SiHyperledger } from "react-icons/si";

const iconsArr = [
  {
    id: 1,
    iconName: FaHtml5,
    text: "HTML",
  },
  {
    id: 2,
    iconName: FaCss3Alt,
    text: "CSS",
  },
  {
    id: 3,
    iconName: IoLogoJavascript,
    text: "Javascript",
  },
  {
    id: 4,
    iconName: FaReact,
    text: "React",
  },
  {
    id: 5,
    iconName: FaGithub,
    text: "Github",
  },
  {
    id: 6,
    iconName: TbBrandVscode,
    text: "VS Code",
  },
];

const projectDetails = [
  {
    id: 1,
    heading: "Jobby App",
    img: Project_1,
    description:
      "Developed a React application featuring Login, Home, Jobs, and Job item details pages with components, props, state, lists, event handlers, and form inputs. Implemented secure authentication through HTTP API calls, persisted user login state using JWT tokens, and utilized React Router for route management.",
    loginDetails: "Login Details : rahul, rahul@2021.",
    link: "https://ajobbyapp.netlify.app",
    tech_used: "React JS, REST API, JWT Token, Authorization, Authentication",
  },
  {
    id: 3,
    heading: "Restaurant Website",
    img: Project_2,
    description:
      "Crafted a dynamic website employing a blend of HTML, CSS, JS, and React JS, complemented by other frontend languages. The development process incorporated the versatile react-reveal package to infuse engaging motion effects seamlessly. The website boasts various sections meticulously designed to ensure full responsiveness across diverse screen sizes.",
    link: "https://restaurantcloneankush.netlify.app/",
    tech_used: "React JS, JS, CSS, React-Reveal",
  },
];

const aboutCards = [
  {
    id: 1,
    icon: CiMobile3,
    title: "Responsive Design",
    content:
      "Embrace the mobile era with a responsive website design. I specialize in ensuring your content is visible to users across all devices, eliminating concerns about accessibility.",
  },
  {
    id: 2,
    title: "Clean Code",
    icon: FaLaptopCode,
    content:
      "I prioritize ensuring smooth and efficient code execution, freeing you to attend to other business aspects. Simplified code translates to reduced maintenance and decreased bug risks – a continual advantage!",
  },
  {
    id: 3,
    title: "Cutting Edge",
    icon: SiHyperledger,
    content:
      "I stay current with the latest tools and technologies, including ReactJS, NextJS, and Tailwind CSS, among others. I select the most suitable tools for each task, implementing them in the most efficient manner.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-orange-container"></div>
      <div className="about-box-container"></div>
      <div className="about-main-container">
        <Navbar />
        <div className="about-inner-container">
          <div className="about-img-container">
            <Lottie className="lottie" animationData={aboutMeLottie} />
          </div>
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
        </div>
        <div className="about-icons-container">
          {iconsArr.map((icon) => (
            <div className="about-icon-name-container" key={icon.id}>
              <icon.iconName className="about-icons" />
              <p>{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-projects-container">
        <p className="about-projects-heading">My Recent Projects</p>
        <div className="about-my-projects-container">
          {projectDetails.map((project) => (
            <div className="about-project-container" key={project.id}>
              <p className="project-heading">{project.heading}</p>
              <Lottie className="lottie-project" animationData={project.img} />
              <p className="project-description">{project.description}</p>
              {project.loginDetails && (
                <p className="project-description">{project.loginDetails}</p>
              )}
              <p className="project-techs">Tech Used : {project.tech_used}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Check out here
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="about-card-container">
        <div className="about-card-heading-para-container">
          <p className="about-card-heading">
            A Front End Developer with{" "}
            <span className="about-card-sub-heading">Design Sense</span>.
          </p>
          <p className="about-card-para">
            Creating visually appealing websites is vital, but equally crucial
            is ensuring the code is clear and maintainable. Prioritize
            readability and organization to facilitate easy maintenance and
            future development.
          </p>
        </div>
        <div className="about-card-inner-container">
          {aboutCards.map((card) => (
            <div className="about-card" key={card.id}>
              <div className="about-card-icon-container">
                <card.icon className="about-card-icon" />
              </div>
              <p className="about-card-inner-heading">{card.title}</p>
              <p className="about-card-inner-para">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
