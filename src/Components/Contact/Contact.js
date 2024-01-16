import Navbar from "../Navbar/Navbar";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-orange-container"></div>
      <div className="contact-box-container"></div>
      <div className="contact-main-container">
        <Navbar />
        <div className="contact-inner-container"></div>
      </div>
    </div>
  );
};

export default Contact;
