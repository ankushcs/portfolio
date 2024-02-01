import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Lottie from "lottie-react";
import emailLottie from "../../assets/emailLottie.json";
import "./Contact.scss";
import Fade from "react-reveal/Fade";
import Loader from "../../assets/loader_lottie.json";
import EmailSent from "../../assets/emailsent.json";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showSentAnimation, setShowSentAnimation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowLoader(true);
    emailjs
      .sendForm(
        "service_ohyj69t",
        "template_6vbmg17",
        form.current,
        "3ZliAdI9I0gYgShUD"
      )
      .then((result) => {
        console.log(result);
        setMessageStatus(true);
        setShowLoader(false);
        setShowSentAnimation(true);
        setTimeout(() => {
          setShowSentAnimation(false);
          setShowForm(true);
        }, 2500);
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const displayForm = () => (
    <div className="contact-box">
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="label-input-box">
          <label className="label-field" htmlFor="from_name">
            Name
          </label>
          <input
            required
            placeholder="Elon Musk"
            className="input-field"
            type="text"
            name="from_name"
          />
        </div>
        <div className="label-input-box">
          <label className="label-field" htmlFor="from_email">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            name="from_email"
            placeholder="elonmusk@example.com"
            required
          />
        </div>
        <div className="label-input-box">
          <label className="label-field" htmlFor="message">
            Message
          </label>
          <textarea
            required
            placeholder="Hi Ankush, I'd love to talk to you about this project we're working on ..."
            className="textarea-field"
            name="message"
          />
        </div>
        <button className="send-button" type="submit">
          Send message
        </button>
      </form>
      <div className="lottie-box">
        <Lottie className="lottie" animationData={emailLottie} />
      </div>
    </div>
  );

  const displayLoader = () => (
    <div className="lottie-box">
      <Lottie className="lottie" animationData={Loader} />
    </div>
  );

  const displaySentAnimation = () => (
    <div className="lottie-box">
      <Lottie className="lottie" animationData={EmailSent} />
    </div>
  );

  return (
    <div className="contact-container">
      <Fade left>
        <div className="contact-orange-container"></div>
      </Fade>
      <Fade right>
        <div className="contact-box-container"></div>
      </Fade>
      <div className="contact-main-container">
        <Navbar />
        <div id="contact" className="contact-inner-container">
          {showForm && displayForm()}
          {showLoader && displayLoader()}
          {showSentAnimation && displaySentAnimation()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
