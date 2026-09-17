import { PropsWithChildren } from "react";
import {
  LANDING_ROLE_LINE,
  LANDING_WORD_A,
  LANDING_WORD_B,
} from "../data/profile";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHLOK
              <br />
              <span>KUMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{LANDING_ROLE_LINE}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{LANDING_WORD_A}</div>
              <div className="landing-h2-2">{LANDING_WORD_B}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{LANDING_WORD_B}</div>
              <div className="landing-h2-info-1">{LANDING_WORD_A}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
