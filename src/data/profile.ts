/** Single source for identity, résumé copy, and links (hosted 3D portfolio). */



export const DISPLAY_NAME = "Shlok Kumar";

export const GITHUB_USER = "Shlok0095";

export const EMAIL = "eecc.shlok@gmail.com";

export const PHONE_DISPLAY = "+91-9934945261";

export const PHONE_TEL = "+919934945261";



export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/shlok-kumar/";

export const LINKEDIN_HANDLE = "shlok-kumar";

export const LINKEDIN_CERTS_URL =

  "https://www.linkedin.com/in/shlok-kumar/details/certifications/";



/** Path under `public/` — use with `publicUrl()` for GitHub Pages base. */

export const RESUME_PDF_PATH = "resume/Shlok-Kumar-Resume.pdf";



export const NAV_INITIALS = "SK";



export const PROFILE_HEADLINE = "AI/ML Engineer & Data Scientist";

export const TAGLINE_SHORT = "AI/ML ENGINEER";



export const PAGE_TITLE = `${DISPLAY_NAME} — ${PROFILE_HEADLINE}`;



export const LANDING_ROLE_LINE = "AI/ML Engineer &";

export const LANDING_WORD_A = "GenAI";

export const LANDING_WORD_B = "Computer Vision";

export const LANDING_MARQUEE = [

  TAGLINE_SHORT,

  "Data Scientist",

  "LLM · RAG · Agentic AI",

  "Healthcare · finance · CV",

] as const;



export const EDUCATION =

  "MCA, Machine Learning & AI — Amity University, Noida (GPA 7.8/10, July 2022 – July 2024). B.Tech Computer Science & diploma — Sarvepalli Radhakrishnan University.";



export const CERTIFICATION_HIGHLIGHT =

  "Generative AI with LLMs · Deep Learning Specialization · Microsoft AZ-305, AZ-104, DP-700, AI-300, AI-103";



/** Core summary — aligned with Desktop résumé. */

export const RESUME_SUMMARY =

  "AI/ML Engineer and Data Scientist with 4+ years of combined software and machine learning experience, including 2 years specialized in ML models, LLM pipelines, NLP, and computer vision for enterprise clients across healthcare, finance, infrastructure, pharmaceuticals, and entertainment. Reduced customer response time by 65%, improved data processing speed by 300%, and delivered measurable ROI across 15+ client engagements. Proficient in Python, PyTorch, TensorFlow, LangChain, Hugging Face, YOLO, OCR, RAG, and cloud/MLOps (AWS, GCP, Azure, Docker, Kubernetes).";



export const IMPACT_METRICS = [

  "65% reduction in customer response time",

  "300% improvement in data processing speed",

  "15+ enterprise client engagements",

  "95% accuracy on medical QA benchmark",

  "92% clustering accuracy (50K+ customers)",

] as const;



export const GITHUB_HIGHLIGHTS =

  "50+ public GitHub repositories — agentic apps, RAG, GenAI, TTS, computer vision, and production-style APIs.";



/** About section — keep short; full detail lives in résumé + career. */
export const ABOUT_TEXT =
  "I ship ML, LLMs, and computer vision for real clients — RAG, OCR, YOLO, and production APIs. 4+ years across software and data science, with wins like 65% faster support and 15+ enterprise builds.";



export type CareerEntry = {

  title: string;

  company: string;

  period: string;

  periodShort: string;

  body: string;

};



/** Experience — titles, dates, and highlights from résumé (newest first). */

export const CAREER_ENTRIES: CareerEntry[] = [

  {

    title: "Associate Data Scientist",

    company: "SoftSensor.ai · Jaipur",

    period: "June 2025 – Present",

    periodShort: "NOW",

    body: "End-to-end ML and predictive modeling for 15+ healthcare and finance clients on 1M+ record datasets (Python, Pandas, SQL), cutting manual prep ~40% and time-to-insight ~30%. Shipped OCR document/cheque processing for Amneal (Dockerized APIs), real-time YOLO detection for PVR Cinemas, Isha Foundation RAG chatbots, NHAI pothole/dedup sandbox, and NHSRCL claim management for government programs.",

  },

  {

    title: "AI Associate Intern",

    company: "Sroniyan Technology · Remote",

    period: "February 2025 – May 2025",

    periodShort: "2025",

    body: "16-week AI application program across LangChain, Hugging Face, PyTorch, and scikit-learn. Built bidirectional STT/TTS for customer care, backend APIs for ML/DL/GenAI fine-tuning, and Slack/Meta automations. Delivered 3 LLM POCs with ~40% efficiency gains vs rule-based flows; 2 advanced to internal pilots.",

  },

  {

    title: "Data Science Intern",

    company: "NullClass · Tamil Nadu",

    period: "September 2024 – December 2024",

    periodShort: "2024",

    body: "Customer-service chatbot cut average response time 29s → 10s (65%) at 200+ daily queries. BERT-based medical QA reached 95% on a 100-question benchmark; integrated multiple RAG medical chatbots with local fine-tuning, plus classification and sentiment pipelines for robust healthcare NLP.",

  },

  {

    title: "Generative AI Intern",

    company: "Prodigy InfoTech · Remote",

    period: "August 2024 – September 2024",

    periodShort: "2024",

    body: "Fine-tuned GPT-2 with PyTorch for insurance document generation (+30% relevance). Optimized inference 5s → 3s per document (40%) for scalable real-time generation.",

  },

  {

    title: "Machine Learning Engineer Intern",

    company: "Feynn Labs · Remote",

    period: "May 2024 – July 2024",

    periodShort: "2024",

    body: "Led a 4-person team on clustering segmentation for 50,000+ customers (K-Means & hierarchical, ~92% accuracy, 8 segments). Cut processing time 20% and presented ROI narratives to 10+ stakeholders (+15% marketing ROI).",

  },

  {

    title: "Python Developer",

    company: "Ecom Therapy Pvt. Ltd. · Bengaluru",

    period: "April 2022 – March 2024",

    periodShort: "2022–24",

    body: "Python backend APIs with DevOps and frontend integration. Dockerized deployments for scalability and RBAC for secure multi-role access.",

  },

];



export type WorkProject = {
  title: string;
  category: string;
  description: string;
  highlights: readonly string[];
  /** File under `public/` — resolve with `publicUrl()`. */
  imagePath: string;
  link: string;
};

/** Featured projects (more repos added later with screenshots). */
export const WORK_PROJECTS: WorkProject[] = [
  {
    title: "VeilAssist",
    category: "Real-time AI meeting companion",
    description:
      "Desktop assistant for live calls and interviews: listens to speech, reads optional screen context, and answers in a floating glass panel while you stay in flow. Tunable response length, language, and tone; skill-style commands and shortcuts for screen vs audio-only capture.",
    highlights: [
      "Live speech + contextual Q&A during meetings",
      "Optional hide-from-screen-capture for privacy",
      "Interview mode, follow-ups, and summarization controls",
      "Electron-style settings for keybinds, privacy, and meeting prefs",
    ],
    imagePath: "images/projects/veil-assist.png",
    link: `${GITHUB_URL}/VeilAssist`,
  },
  {
    title: "unsensoredgpt",
    category: "Self-hosted GenAI chat",
    description:
      "Minimal ChatGPT-style web client for uncensored, research-oriented dialogue — deep-think reasoning mode, rich markdown answers, and a clean dark UI for long technical threads without vendor guardrails.",
    highlights: [
      "Streaming chat with Think / Deep Think modes",
      "Structured answers for tooling, security, and dev workflows",
      "Attachment-ready composer and keyboard-first interaction",
      "Built to pair with local or custom model backends",
    ],
    imagePath: "images/projects/unsense-ai.png",
    link: `${GITHUB_URL}/unsense`,
  },
];



/** Résumé skill groupings → What I Do panels. */

export const WHAT_I_DO = [

  {

    title: "ML · DEEP LEARNING · NLP · CV",

    subtitle: "Models, evals, vision, and production NLP",

    body: "PyTorch, TensorFlow, Keras, scikit-learn, XGBoost, and Hugging Face — BERT, RoBERTa, NER, sentiment, STT/TTS, plus YOLO, OCR, and object detection for real-time enterprise use cases.",

    tags: [

      "PyTorch · TensorFlow",

      "YOLO · OCR · CV",

      "BERT · RoBERTa",

      "Hugging Face",

      "Pandas · NumPy",

    ],

  },

  {

    title: "GENAI · LLMs · RAG · AGENTIC AI",

    subtitle: "LLM apps, retrieval, and agents",

    body: "GPT-3.5/4, LLaMA, Gemini, Claude, Falcon, OpenAI API, fine-tuning, prompt engineering, LangChain, agentic workflows, and RAG with FAISS, Pinecone, Weaviate, and ChromaDB.",

    tags: [

      "RAG · FAISS",

      "LangChain",

      "Agentic AI",

      "Fine-tuning",

      "Vector DBs",

    ],

  },

  {

    title: "PYTHON · CLOUD · MLOPS",

    subtitle: "APIs, data planes, and deployment",

    body: "Backend APIs in Python with SQL/MySQL, Java and JavaScript where needed. AWS (S3, EC2, Lambda), GCP, Azure, Docker, Kubernetes, Git, Heroku, and HIPAA / 21 CFR Part 11 aware delivery patterns.",

    tags: [

      "FastAPI · Flask",

      "AWS · GCP · Azure",

      "Docker · K8s",

      "RBAC · SQL",

      "MLOps",

    ],

  },

] as const;


