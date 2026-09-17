import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import {
  CERTIFICATION_HIGHLIGHT,
  DISPLAY_NAME,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_CERTS_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data/profile";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href={`mailto:${EMAIL}`} data-cursor="disable">
                {EMAIL}
              </a>
            </p>
            <p>
              <a href={`tel:${PHONE_TEL}`} data-cursor="disable">
                {PHONE_DISPLAY}
              </a>
            </p>
            <h4>Profiles</h4>
            <p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shlok-kumar-1971s
              </a>
            </p>
            <p>
              <a
                href={LINKEDIN_CERTS_URL}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {CERTIFICATION_HIGHLIGHT}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={LINKEDIN_CERTS_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Certifications <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{DISPLAY_NAME}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
