import "./styles/About.css";
import { ABOUT_TEXT } from "../data/profile";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{ABOUT_TEXT}</p>
      </div>
    </div>
  );
};

export default About;
