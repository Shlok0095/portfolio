import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { GITHUB_URL } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";

const projects = [
  {
    title: "PDF QA chatbot",
    category: "RAG · vector search",
    tools: "Cohere, FAISS, Python",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/QA_Chatbot_PDF_upload`,
  },
  {
    title: "Toxicity · Gradio",
    category: "NLP · model UI",
    tools: "Gradio, transformers, traceability",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/Comment_Toxicity-model-along-with-Graduio-simple-app-to-trace`,
  },
  {
    title: "Diffusion + UNet",
    category: "Generative image models",
    tools: "PyTorch, UNet, training loops",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/Diffusionmodel_usingpytorch_and_UNEtNetwork1-`,
  },
  {
    title: "Extractive summarization",
    category: "NLP · document compression",
    tools: "Python, sentence selection",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/Text_summerization_technique`,
  },
  {
    title: "Neural style transfer",
    category: "Computer vision",
    tools: "PyTorch, style nets",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/Prodigy-Task-05`,
  },
  {
    title: "Nasdaq ticker RNN",
    category: "Time series · forecasting",
    tools: "LSTM, GRU, SimpleRNN, JSON pipelines",
    image: publicUrl("images/placeholder.webp"),
    link: `${GITHUB_URL}/Stock-MArket-prediction-for-each-Stock-ticker-nasdaq-`,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
