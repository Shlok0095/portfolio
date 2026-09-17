/** Single source for identity, LinkedIn-aligned copy, and links. */

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

/** Matches LinkedIn headline (shlok-kumar-1971s). */
export const LINKEDIN_HEADLINE =
  "AI Engineer | Data Scientist | Data Engineer · LLMs · RAG · Agentic AI · Generative AI · Backend · MLOps · DevOps · Kubernetes · AWS · Azure · GCP · HIPAA & 21 CFR Part 11";

export const PAGE_TITLE = `${DISPLAY_NAME} — AI Engineer · Data Scientist · Data Engineer`;

export const LANDING_ROLE_LINE = "AI Engineer &";
export const LANDING_WORD_A = "LLMs";
export const LANDING_WORD_B = "RAG";
export const LANDING_MARQUEE = [
  "AI Engineer",
  "Data Scientist",
  "LLMs · RAG · Agentic AI",
  "GenAI · MLOps · DevOps",
] as const;

export const EDUCATION =
  "MCA — Amity University Online (July 2022 – July 2024, GPA 7.8/10)";

export const CERTIFICATION_HIGHLIGHT =
  "Microsoft Certified: Fabric Data Engineer Associate";

export const ABOUT_TEXT = `AI/ML Engineer with ~2 years of experience designing and deploying machine learning models, LLM pipelines, and NLP systems for regulated enterprise clients in healthcare and finance. Reduced customer response time by 65%, improved data processing speed by 300%, and delivered measurable ROI across 15+ engagements. ${EDUCATION}. ${CERTIFICATION_HIGHLIGHT}. 46+ public GitHub repositories spanning RAG, diffusion, NLP, forecasting, and Python services.`;

export type CareerEntry = {
  title: string;
  company: string;
  periodShort: string;
  body: string;
};

/** Experience aligned with LinkedIn / resume timeline. */
export const CAREER_ENTRIES: CareerEntry[] = [
  {
    title: "Associate Data Scientist",
    company: "SoftSensor.ai",
    periodShort: "NOW",
    body: "June 2025 – Present. ML workloads for regulated clients—feature stores in SQL, pandas ingestion, model monitoring, and FastAPI microservices beside batch scoring. HIPAA-aware delivery and 21 CFR Part 11–style controls where required. Processing 1M+ rows/month with reproducible pipelines.",
  },
  {
    title: "AI Associate Intern",
    company: "Sroniyan Technology",
    periodShort: "2025",
    body: "Feb – May 2025. POC chat assistants and LangChain-style routing to Hugging Face endpoints; FastAPI smoke tests and async notebooks for prompt tuning.",
  },
  {
    title: "Data Science Intern",
    company: "NullClasses",
    periodShort: "2024",
    body: "Sep – Dec 2024. NLP with BERT and medical QA heuristics; chatbot latency 29s → 10s and ~95% QA accuracy via eval harnesses.",
  },
  {
    title: "Generative AI Intern",
    company: "Prodigy InfoTech",
    periodShort: "2024",
    body: "Aug – Sep 2024. GPT-2 fine-tunes on insurance corpora (PyTorch, safetensors); lean REST adapters and PDF chunk streaming.",
  },
  {
    title: "ML Engineer Intern",
    company: "Feynn Labs",
    periodShort: "2024",
    body: "May – Jul 2024. K-means and hierarchical clustering on 50k+ shoppers with SQL joins; ROI narratives for stakeholders (~92% clustering accuracy).",
  },
];

export type WorkProject = {
  title: string;
  category: string;
  tools: string;
  link: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    title: "RAG-based QA system",
    category: "Retrieval · enterprise knowledge",
    tools: "LangChain-style flows, FAISS, guardrails — 500+ queries/hr target",
    link: `${GITHUB_URL}/QA_Chatbot_PDF_upload`,
  },
  {
    title: "Language model training tool",
    category: "Transformers · benchmarking",
    tools: "PyTorch, Hugging Face, reproducible configs",
    link: GITHUB_URL,
  },
  {
    title: "Toxicity & sentiment stack",
    category: "NLP · moderation",
    tools: "BERT, Gradio, transformers, eval traceability",
    link: `${GITHUB_URL}/Comment_Toxicity-model-along-with-Graduio-simple-app-to-trace`,
  },
  {
    title: "Diffusion + UNet pipeline",
    category: "Generative AI · computer vision",
    tools: "PyTorch, UNet, training loops",
    link: `${GITHUB_URL}/Diffusionmodel_usingpytorch_and_UNEtNetwork1-`,
  },
  {
    title: "Extractive summarization",
    category: "NLP · document compression",
    tools: "Python, sentence selection, enterprise text",
    link: `${GITHUB_URL}/Text_summerization_technique`,
  },
  {
    title: "Nasdaq ticker forecasting",
    category: "Time series · LSTM / GRU",
    tools: "JSON pipelines, SimpleRNN, market series",
    link: `${GITHUB_URL}/Stock-MArket-prediction-for-each-Stock-ticker-nasdaq-`,
  },
];

export const WHAT_I_DO = [
  {
    title: "ML, LLMs & AGENTIC AI",
    subtitle: "RAG, evals, and regulated GenAI delivery",
    body: "PyTorch and Hugging Face stacks, retrieval-first apps, agentic workflows, toxicity and sentiment systems, and notebook-to-pipeline discipline with leakage checks—aligned with HIPAA and 21 CFR Part 11 expectations on client work.",
    tags: [
      "LLMs · RAG",
      "Agentic AI",
      "PyTorch · HF",
      "Eval harnesses",
      "GenAI · diffusion",
      "HIPAA-aware ML",
    ],
  },
  {
    title: "PYTHON · MLOPS · CLOUD",
    subtitle: "Services, data planes, and platform glue",
    body: "FastAPI and Flask adapters, pandas ETL, Postgres/SQL analytics, Dockerized builds, and AWS · Azure · GCP sandboxes—Microsoft Fabric Data Engineer Associate; pragmatic services without Django-heavy footprints.",
    tags: [
      "FastAPI · Flask",
      "MLOps · Docker",
      "AWS · Azure · GCP",
      "Kubernetes literacy",
      "PostgreSQL · SQL",
      "Fabric · pipelines",
    ],
  },
] as const;
