import "./styles/Career.css";
import { CAREER_ENTRIES } from "../data/profile";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {CAREER_ENTRIES.map((entry) => (
            <div className="career-info-box" key={`${entry.company}-${entry.title}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.title}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.periodShort}</h3>
              </div>
              <p>{entry.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
