import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Associate Data Scientist at SoftSensor.ai, shipping regulated ML
          workloads—feature stores in SQL, pandas ingestion, model monitoring,
          and lean FastAPI / Flask services beside batch scoring. I gravitate toward
          RAG-style assistants, ONNX-friendly exports, reproducible notebooks, and
          pragmatic Python without heavy Django footprints—46+ public GitHub repos
          spanning diffusion, NLP, forecasting, and dashboards.
        </p>
      </div>
    </div>
  );
};

export default About;
