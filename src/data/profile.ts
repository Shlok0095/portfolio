/** Single source for identity, résumé copy, and links (hosted 3D portfolio). */

export const DISPLAY_NAME = "Shlok Kumar";
export const GITHUB_USER = "Shlok0095";
export const EMAIL = "eecc.shlok@gmail.com";
export const PHONE_DISPLAY = "+91-9934945261";
export const PHONE_TEL = "+919934945261";

export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/shlok-kumar-1971s/";
export const LINKEDIN_CERTS_URL =
  "https://www.linkedin.com/in/shlok-kumar-1971s/details/certifications/";

export const NAV_INITIALS = "SK";

export const PROFILE_HEADLINE = "AI/ML Engineer & Data Scientist";
export const TAGLINE_SHORT = "AI/ML ENGINEER";

export const PAGE_TITLE = `${DISPLAY_NAME} — ${PROFILE_HEADLINE}`;

export const LANDING_ROLE_LINE = "AI/ML Engineer &";
export const LANDING_WORD_A = "GenAI";
export const LANDING_WORD_B = "NLP";
export const LANDING_MARQUEE = [
  TAGLINE_SHORT,
  "Data Scientist",
  "LLM pipelines · RAG",
  "Healthcare & finance ML",
] as const;

export const EDUCATION =
  "Master of Computer Applications (MCA) — Amity University Online, GPA 7.8/10 (July 2022 – July 2024)";

export const CERTIFICATION_HIGHLIGHT =
  "Microsoft Certified: Fabric Data Engineer Associate";

/** Core summary — matches résumé professional summary. */
export const RESUME_SUMMARY =
  "AI/ML Engineer with 2 years of experience designing and deploying machine learning models, LLM pipelines, and NLP systems for enterprise clients in healthcare and finance. Reduced customer response time by 65%, improved data processing speed by 300%, and delivered measurable ROI across 15+ client engagements.";

export const IMPACT_METRICS = [
  "65% reduction in customer response time",
  "300% improvement in data processing speed",
  "15+ enterprise client engagements",
  "95% accuracy on medical QA benchmark",
  "92% clustering accuracy (50K+ customers)",
] as const;

export const GITHUB_HIGHLIGHTS =
  "46+ public GitHub repositories — diffusion, NLP, forecasting, Jupyter experiments, dashboards, and POCs.";

export const ABOUT_TEXT = `${RESUME_SUMMARY} ${EDUCATION}. ${CERTIFICATION_HIGHLIGHT}. ${GITHUB_HIGHLIGHTS}`;

export type CareerEntry = {
  title: string;
  company: string;
  period: string;
  periodShort: string;
  body: string;
};

/** Experience — titles & dates from résumé; bullets from role write-ups. */
export const CAREER_ENTRIES: CareerEntry[] = [
  {
    title: "Associate Data Scientist",
    company: "SoftSensor.ai",
    period: "June 2025 – Present",
    periodShort: "NOW",
    body: "Owning ML workloads for regulated clients — feature stores in SQL, ingestion jobs in pandas, model monitoring hooks, and lightweight FastAPI microservices beside batch scoring. Processing 1M+ rows/month with reproducible pipelines.",
  },
  {
    title: "AI Associate Intern",
    company: "Sroniyan Technology",
    period: "Feb 2025 – May 2025",
    periodShort: "2025",
    body: "Shipped POC chat assistants and LangChain-style routing to Hugging Face endpoints. Wrapped experiments in FastAPI smoke tests and async notebooks for iterative prompt tuning.",
  },
  {
    title: "Data Science Intern",
    company: "NullClasses",
    period: "Sept 2024 – Dec 2024",
    periodShort: "2024",
    body: "NLP pipelines with BERT and medical QA heuristics. Hardened chatbot latency from 29s to 10s and reached ~95% QA accuracy through evaluation harnesses.",
  },
  {
    title: "Generative AI Intern",
    company: "Prodigy InfoTech",
    period: "Aug 2024 – Sept 2024",
    periodShort: "2024",
    body: "Fine-tuned GPT-2 on insurance corpora using PyTorch and safetensors export. Built narrow REST adapters for internal pilots and PDF chunk streaming.",
  },
  {
    title: "ML Engineer Intern",
    company: "Feynn Labs",
    period: "May 2024 – July 2024",
    periodShort: "2024",
    body: "K-means and hierarchical clustering on 50k+ shoppers with SQL joins and visualization layers. Produced ROI narrative readouts for stakeholder decks (~92% clustering accuracy).",
  },
];

export type WorkProject = {
  title: string;
  category: string;
  tools: string;
  link: string;
};

/** Featured deliverables from résumé + public GitHub demos. */
export const WORK_PROJECTS: WorkProject[] = [
  {
    title: "RAG-Based QA System",
    category: "Enterprise knowledge · LangChain · FAISS",
    tools: "500+ queries/hr · 88% user satisfaction · guarded retrieval over private corpora",
    link: `${GITHUB_URL}/QA_Chatbot_PDF_upload`,
  },
  {
    title: "Language Model Training Tool",
    category: "Transformers · benchmarking",
    tools: "PyTorch, Hugging Face — 40% faster training iteration with reproducible configs",
    link: GITHUB_URL,
  },
  {
    title: "Text Sentiment Analyzer",
    category: "NLP · customer feedback",
    tools: "BERT, RoBERTa — 87% accuracy on 10K+ samples, multilingual coverage",
    link: GITHUB_URL,
  },
  {
    title: "Content Moderation System",
    category: "Trust & safety · hybrid rules + models",
    tools: "TensorFlow — 75% better detection at scale with reviewer tooling",
    link: GITHUB_URL,
  },
  {
    title: "PDF QA chatbot",
    category: "RAG · document upload",
    tools: "Cohere, FAISS, Python — ask questions over uploaded PDFs",
    link: `${GITHUB_URL}/QA_Chatbot_PDF_upload`,
  },
  {
    title: "Toxicity · Gradio",
    category: "NLP · moderation UI",
    tools: "Gradio, transformers — traceable toxicity scoring surface",
    link: `${GITHUB_URL}/Comment_Toxicity-model-along-with-Graduio-simple-app-to-trace`,
  },
  {
    title: "Diffusion + UNet pipeline",
    category: "Generative AI · computer vision",
    tools: "PyTorch diffusion training loop for image generation",
    link: `${GITHUB_URL}/Diffusionmodel_usingpytorch_and_UNEtNetwork1-`,
  },
  {
    title: "Nasdaq ticker forecasting",
    category: "Time series · LSTM / GRU",
    tools: "JSON pipelines, SimpleRNN — per-ticker Nasdaq experiments",
    link: `${GITHUB_URL}/Stock-MArket-prediction-for-each-Stock-ticker-nasdaq-`,
  },
];

/** Résumé skill groupings → What I Do panels. */
export const WHAT_I_DO = [
  {
    title: "ML · DEEP LEARNING · NLP",
    subtitle: "Models, evals, and production NLP",
    body: "PyTorch, TensorFlow, Keras, scikit-learn, and Hugging Face Transformers — BERT, RoBERTa, sentiment and classification, feature engineering, and statistical analysis with reproducible benchmarks.",
    tags: [
      "PyTorch · TensorFlow",
      "scikit-learn · XGBoost",
      "BERT · RoBERTa",
      "Hugging Face",
      "Pandas · NumPy",
    ],
  },
  {
    title: "GENAI · LLMs · RAG",
    subtitle: "LLM apps, retrieval, and vector search",
    body: "GPT-3.5/4, LLaMA, Gemini, Claude, OpenAI API, fine-tuning, prompt engineering, LangChain-style orchestration, RAG with FAISS, Pinecone, Weaviate, and ChromaDB.",
    tags: [
      "RAG · FAISS",
      "LangChain-style",
      "OpenAI · Claude · Gemini",
      "Fine-tuning",
      "Vector DBs",
    ],
  },
  {
    title: "PYTHON SERVICES · CLOUD",
    subtitle: "APIs, data planes, and MLOps glue",
    body: "FastAPI and Flask services, Python and SQL backends, AWS (S3, EC2, Lambda), Google Cloud, Azure, Docker, Git, and pragmatic CI — Java and JavaScript where stacks require it.",
    tags: [
      "FastAPI · Flask",
      "AWS · GCP · Azure",
      "Docker · Git",
      "PostgreSQL · SQL",
      "MLOps · CI",
    ],
  },
] as const;
