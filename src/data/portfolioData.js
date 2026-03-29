export const personalInfo = {
  name: "Govindgari Sai Srushik",
  title: "AI/ML Engineer | Data Scientist | Software Engineer | Test Automation Engineer",
  roles: ["AI/ML Engineer", "Data Scientist", "Software Engineer", "Test Automation Engineer"],
  tagline: "Building intelligent solutions at the intersection of software engineering and data science.",
  email: "saisrushik98@gmail.com",
  location: "Hyderabad, India",
  avatarUrl: "https://placehold.co/300x300/3b82f6/ffffff?text=YN",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sai-srushik/",
  github: "https://github.com/saisrushik/",
  medium: "https://medium.com/@saisrushik98",
  kaggle: "https://www.kaggle.com/saisrushikgovindgari",
  leetcode: "https://leetcode.com/u/Sai_Srushik/",
  googleScholar: "https://scholar.google.com/citations?user=mLj1zRQAAAAJ",
  deepml: "https://www.deep-ml.com/profile/g4VpZAzefMTgTh8kZyRlqqzHgl12",
  email: "mailto:saisrushik98@gmail.com",
};

export const aboutMe = {
  summary:
    "I am a passionate software engineer and AI Engineer with experience in building scalable web applications and developing machine learning solutions. I love solving complex problems and turning data into actionable insights. With a strong background in computer science and a keen interest in research, I strive to stay at the cutting edge of technology.",
  highlights: [
    "Full-stack web development",
    "Machine Learning & Deep Learning",
    "Data Analysis & Visualization",
    "Cloud Computing & DevOps",
    "Research & Technical Writing",
  ],
};

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh, India",
    period: "Aug 2021 – May 2025",
    gpa: "8.73/10.0",
    coursework: [
      "Data Structures",
      "Machine Learning",
      "Database Management",
      "Generative AI",
      "Software Engineering",
    ],
  },
  {
    degree: "Pre-University/Intermediate",
    institution: "Pine Grove College",
    location: "Hyderabad, Telangana, India",
    period: "Jun 2019 – Apr 2021",
    gpa: "96.8%",
    coursework: [
      "Mathsematics",
      "Physics",
      "Chemistry",
    ],
  }
];

export const workExperience = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "Aug 2025 – Present",
    description: [
      "Contributed to high-stakes testing to verify functionality of the application, ensuring quality standards for critical software releases.",
      "Architected an End-to-End Generative AI Pipeline to generate Playwright Automation Scripts using Langchain, Huggingface",
      "Automated ~400+ number of test cases using Playwright/Python, resulting in reduction in manual testing time."
    ],
  },
  {
    role: "Intern",
    company: "Cognizant Technology Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "Apr 2025 – Aug 2025",
    description: [
      "Trained under the Quality Engineering and Assurance Team.",
      "Undergone training on Core Java, SQL and Selenium Automation Testing."
    ],
  },
];

export const researchPublications = [
  {
    title: "LipReadNet: A Hybrid Deep Learning Framework for Silent-to-Speech Translation Using Visual Speech Recognition",
    authors: "Govindgari Sai Srushik, Reeja S R, Nishanth Gadey, Sahith Krishna",
    journal: "International Conference on Intelligent Systems and Machine Learning (ICISML-2026)",
    year: "2026",
    doi: "https://doi.org/10.xxxx/placeholder",
    abstract:
      "One of the most important technologies for helping those with hearing impairments and enhancing communication in noisy environments is lipreading, or visual speech recognition. Traditional machine learning models and handmade features have been the foundation of conventional lipreading techniques, which have a tendency to perform less well due to variations in camera angles, lighting, and speaker unpredictability. The state of the art in terms of obtaining spatiotemporal and temporal information from lip movements has significantly improved with the advent of deep learning, particularly Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs). The new deep learning-based lipreading system LipReadNet, which translates muted video inputs into text and audio outputs, is presented in this paper. The system uses a hybrid architecture that combines Transformer-based models, such as Vision Transformers (ViTs), and self-attention mechanisms for improved sequence modeling, with 3D CNNs for spatiotemporal feature extraction. Additionally, a Tacotron or WaveNet-based audio synthesis module successfully reconstructs spoken words from silent video sequences by synthesizing natural-sounding speech from the predicted text. The dataset used is Mohamed Bentalb's Lipreading Dataset, which consists of a wide range of labeled movies for robust model generalization, to train and evaluate our system. To lessen variances between speakers, the preprocessing pipeline uses MediaPipe-based face tracking, lip segmentation, and data augmentation techniques. In order to train the model, a loss function that combines Cross-Entropy loss and Connectionist Temporal Classification (CTC) for text prediction is optimized. A neural vocoder trained on high-quality speech samples is employed for audio reconstruction. According to preliminary findings, LipReadNet generates extremely comprehensible speech and achieves state-of-the-art silent-to-text conversion. By bridging the gap between visual and auditory communication, our approach advances the field of assistive AI and paves the way for practical applications in security, accessibility tools, and human-computer interaction. According to preliminary findings, LipReadNet achieves state-of-the-art performance in silent-to-text conversion and produces speech that is extremely comprehensible. Our approach bridges the gap between auditory and visual communication, advances assistive AI, and creates opportunities for real-world uses in accessibility tools, security, and human-computer interaction.",
  },
  {
    title: "Pneumonia Disease Prediction Using VGG19 Architecture",
    authors: "Govindgari Sai Srushik, Beebi Naseeba, Nagendra Panini Challa, Visalakshi Annepu, Chandana Gouri Tekkali",
    journal: "Springer Nature Switzerland on International Conference on Hybrid Intelligent Systems",
    year: "2023",
    doi: "https://doi.org/10.1007/978-3-031-78922-9_29",
    abstract:
      "Pneumonia, a severe and potentially fatal infectious disease, primarily impacts the lungs in humans. Its main culprit is often identified as Streptococcus pneumonia, a type of bacteria. According to the World Health Organization (WHO), Pneumonia causes many deaths in India, responsible for one out of every three reported cases. Creating an automated system to detect pneumonia holds immense potential for expediting the treatment process, especially in remote regions where access to medical expertise may be limited. With the remarkable success of deep learning algorithms, Convolutional Neural Networks (CNN) have gathered significant interest for their effectiveness in analyzing medical images and facilitating disease classification. The methodology employed in this study revolves around the execution of a CNN known as VGG19. This architecture is utilized to process X-ray images and carry out predictive analysis. To carry out the experiments, a diverse collection of chest X-ray images is employed, including both cases with pneumonia and cases without pneumonia. This dataset is utilized to train and test the CNN model. Our main discoveries highlight the impressive effectiveness of the recommended DL model in accurately predicting pneumonia. The VGG19 model, once trained, attained an extraordinary accuracy of 95.35% on the test dataset. Additionally, the model displayed a high sensitivity of 98.77%, demonstrating its proficiency in accurately identifying both positive and negative pneumonia cases. These findings strongly emphasize the capability of deep learning algorithms in assisting radiologists and clinicians by Detecting pneumonia at an early stage, enabling swift and targeted treatment intervention.",
  }
];

export const projectCategories = [
  { key: "generative-ai", label: "Generative AI / Agentic AI" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "frontend", label: "Frontend Development" },
  { key: "backend", label: "Backend Development" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "testing", label: "Testing" },
];

export const projects = [
  // ── Generative AI / Agentic AI ──
  {
    title: "LangChain: Summarize Text From YouTube or Website",
    category: "generative-ai",
    description:
      "A Streamlit web application that summarizes content from YouTube videos or any website URL using LangChain and Groq's LLM.",
    technologies: ["Python", "Streamlit", "LangChain", "Groq LLM", "BeautifulSoup"],
    imageUrl: "https://images.indianexpress.com/2021/06/YouTube-logo.jpg?w=1200",
    liveUrl: "https://text-summarization-using-langchain-groq.streamlit.app/",
    githubUrl: "https://github.com/saisrushik/youtube-video-summarizer",
  },
  {
    title: "Text Summarization using LangChain and Groq",
    category: "generative-ai",
    description:
      "This project demonstrates advanced text summarization techniques using LangChain and the Groq API. It supports summarizing both direct text input and PDF documents using various summarization strategies.",
    technologies: ["Python", "LangChain", "Streamlit", "Groq LLM", "PyPDF2"],
    imageUrl: "https://www.vennify.ai/content/images/size/w960/2021/06/text-sum-thumbnail.png",
    liveUrl: "https://text-summarization-using-langchain-groq.streamlit.app/",
    githubUrl: "https://github.com/saisrushik/Text-summarization-using-langchain",
  },
  {
    title: "Chat-SQL: A ChatBot with SQL DB using LangChain Toolkit",
    category: "generative-ai",
    description:
      "A ChatBot that allows users to interact with a SQL database using natural language queries.",
    technologies: ["Python", "Stable Diffusion", "ControlNet", "React", "Flask"],
    imageUrl: "https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/banner.webp",
    liveUrl: "https://chat-sql---a-chatbot-with-sql-db-uisng-langchain-toolkit-x3las.streamlit.app/",
    githubUrl: "https://github.com/saisrushik/Chat-SQL---a-ChatBot-with-SQL-DB-uisng-langchain-Toolkit",
  },
  {
    title: "Playwright Automation Script Generator",
    category: "generative-ai",
    description:
      "An AI-powered tool that generates Playwright automation scripts (Web & API) using test scenarios, test cases, and test steps. Built with Streamlit and open-source LLMs.",
    technologies: ["Python", "Streamlit", "Ollama", "LangChain", "Azure OpenAI"],
    imageUrl: "https://logowik.com/content/uploads/images/playwright1721168008.logowik.com.webp",
    liveUrl: "https://playwright-automation-scripts-generato-spgc9anufcfq47n3jrwrrg.streamlit.app/",
    githubUrl: "https://github.com/saisrushik/Playwright-Automation-Scripts-Generator",
  },
  {
    title: "PDF Data Extraction using NER (SpaCy)",
    category: "generative-ai",
    description:
      "This project is a Full-Stack NLP based application that extracts structured data (Name, Phone Number, Address, and Job) from PDF files, displays the data in a user-friendly HTML table, and allows users to download the extracted data in CSV and JSON formats.",
    technologies: ["Python", "React", "Flask", "Spacy", "NLP", "pdfplumber"],
    imageUrl: "https://www.pngall.com/wp-content/uploads/2/Downloadable-PDF-Button-PNG-HD-Image.png",
    liveUrl: "",
    githubUrl: "https://github.com/saisrushik/PDF-Data-Extraction-using-NER-(SpaCy)",
  },
  // ── Machine Learning ──
  {
    title: "E-Commerce Analytics Dashboard",
    category: "machine-learning",
    description:
      "An interactive analytics dashboard for e-commerce platforms providing real-time sales tracking, customer behavior analysis, and predictive forecasting using ML models.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Analytics+Dashboard",
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/your-username/project2",
  },
  {
    title: "NLP Text Summarization Tool",
    category: "machine-learning",
    description:
      "An NLP-based tool that generates concise summaries from long documents using transformer models, with support for multiple languages and document formats.",
    technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI", "React"],
    imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=NLP+Tool",
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/your-username/project4",
  },
  {
    title: "Fraud Detection System",
    category: "machine-learning",
    description:
      "A real-time fraud detection pipeline using ensemble ML models and anomaly detection algorithms, processing millions of transactions with 98% precision.",
    technologies: ["Python", "XGBoost", "Kafka", "Spark", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400/ef4444/ffffff?text=Fraud+Detection",
    liveUrl: "https://example.com/project-fraud",
    githubUrl: "https://github.com/your-username/fraud-detection",
  },
  // ── Frontend Development ──
  {
    title: "NxtTrnedz E-Commerce Application",
    category: "frontend",
    description:
      "A modern e-commerce web application with a sleek UI, product catalog, shopping cart, and checkout flow. Built with React and Bootstrap for a responsive design.",
    technologies: ["React", "Bootstrap", "JavaScript"],
    imageUrl: "https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg",
    liveUrl: "https://example.com/project-portfolio",
    githubUrl: "https://github.com/saisrushik/Nxtrendz-Ecommerce-Application",
  },
  {
    title: "Portfolio",
    category: "frontend",
    description:
      "A personal portfolio website showcasing projects, skills, and experience. Features a clean design, smooth animations, and responsive layout for optimal viewing on all devices.",
    technologies: ["React", "React-Animations", "Vite", "Tailwind CSS", "JavaScript"],
    imageUrl: "https://placehold.co/600x400/06b6d4/ffffff?text=Portfolio+Builder",
    liveUrl: "https://shiny-liger-6996cd.netlify.app/",
    githubUrl: "https://github.com/saisrushik/portfolio",
  },
  // ── Backend Development ──
  {
    title: "Twwitter API Clone Application",
    category: "backend",
    description:
      "A RESTful API clone of Twitter's core functionality, implemented with Node.js and Express, featuring user authentication, tweet creation, and real-time updates.",
    technologies: ["JavaScript", "Node.js", "Express"],
    imageUrl: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_incoming&w=740&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/saisrushik/Twitter-API-clone-application",
  },
  // ── Full-Stack ──

  // ── Testing ──
  {
    title: "MakeMyTrip Automation Testing",
    category: "testing",
    description:
      "Automated testing suite for the MakeMyTrip website using Selenium WebDriver, Cucumber for BDD, and TestNG for test management. Covers end-to-end scenarios for flight booking, hotel reservations, and user authentication.",
    technologies: ["Java", "Selenium", "Cucumber", "TestNG", "Maven"],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.svg",
    liveUrl: "",
    githubUrl: "https://github.com/saisrushik/MakeMyTrip-Automation-Testing",
  }
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals - 5B1F2867F3F3FC03",
    issuer: "Microsoft",
    date: "Jun 2023",
    credentialUrl: "https://learn.microsoft.com/en-gb/users/saisrushik/credentials/certification/azure-ai-fundamentals",
  },
];

export const testimonial = {
  quote:
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  author: "Steve Jobs",
};
