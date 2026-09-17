import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import { WORK_PROJECTS } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <p className="work-intro">
          Flagship builds — more case studies with screenshots coming soon.
        </p>

        <ul className="work-projects-list">
          {WORK_PROJECTS.map((project, index) => (
            <li className="work-project-card" key={project.title}>
              <div className="work-project-copy">
                <span className="work-project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="work-project-text">
                  <h3>{project.title}</h3>
                  <p className="work-project-category">{project.category}</p>
                  <p className="work-project-description">{project.description}</p>
                  <ul className="work-project-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="work-project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    View on GitHub <MdArrowOutward />
                  </a>
                </div>
              </div>
              <div className="work-project-media">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  aria-label={`${project.title} on GitHub`}
                >
                  <img
                    src={publicUrl(project.imagePath)}
                    alt={`${project.title} product screenshot`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
