import "./styles/Career.css";

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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Data Scientist</h4>
                <h5>SoftSensor.ai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Owning ML workloads for regulated clients—feature stores in SQL,
              ingestion jobs in pandas, model monitoring hooks, and lightweight
              FastAPI microservices beside batch scoring. Processing 1M+ rows per
              month with reproducible pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Associate Intern</h4>
                <h5>Sroniyan Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Feb–May 2025. Shipped POC chat assistants and LangChain-style routing
              to Hugging Face endpoints; FastAPI smoke tests and async notebooks for
              prompt tuning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>NullClasses</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Sep–Dec 2024. NLP pipelines with BERT and medical QA heuristics;
              improved chatbot latency (29s → 10s) and QA accuracy through eval
              harnesses.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Intern</h4>
                <h5>Prodigy InfoTech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Aug–Sep 2024. Fine-tuned GPT-2 on insurance corpora with PyTorch and
              safetensors export; narrow REST adapters for pilots and PDF chunk
              streaming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer Intern</h4>
                <h5>Feynn Labs</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              May–Jul 2024. K-means and hierarchical clustering on 50k+ shoppers
              with SQL joins and visualization layers; ROI narratives for
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
