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
  medium: "https://medium.com/@your-username",
  kaggle: "https://kaggle.com/govindgarisaisrushik",
  leetcode: "https://leetcode.com/your-username",
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
      "Developed and maintained web applications using Java, Spring Boot, and React.js, improving user experience and performance.",
    ],
  },
  {
    role: "Intern",
    company: "Cognizant Technology Solutions",
    location: "Chennai, Tamil Nadu, India",
    period: "Apr 2025 – Aug 2025",
    description: [
      "Assisted in the development of a microservices-based application, contributing to API design and implementation using Spring Boot.",
    ],
  },
];

export const researchPublications = [
  {
    title: "Scalable Real-time Anomaly Detection in IoT Networks Using Graph Neural Networks",
    authors: "Your Name, Co-Author D, Co-Author E",
    journal: "Journal of Network and Computer Applications",
    year: "2024",
    doi: "https://doi.org/10.xxxx/placeholder",
    abstract:
      "This work introduces a graph neural network-based approach for detecting anomalies in IoT networks in real-time, achieving state-of-the-art performance on multiple benchmark datasets.",
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
    title: "AI-Powered Chat Application",
    category: "generative-ai",
    description:
      "A full-stack chat application with AI-powered response generation, real-time messaging, and sentiment analysis. Built with React, Node.js, and OpenAI API.",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=AI+Chat+App",
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/your-username/project1",
  },
  {
    title: "Autonomous Research Agent",
    category: "generative-ai",
    description:
      "An agentic AI system that autonomously searches the web, synthesizes information, and generates comprehensive research reports using LangChain and GPT-4.",
    technologies: ["Python", "LangChain", "GPT-4", "Pinecone", "FastAPI"],
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=Research+Agent",
    liveUrl: "https://example.com/project-agent",
    githubUrl: "https://github.com/your-username/research-agent",
  },
  {
    title: "AI Image Generation Studio",
    category: "generative-ai",
    description:
      "A creative studio allowing users to generate, edit, and upscale images using Stable Diffusion and ControlNet with an intuitive drag-and-drop interface.",
    technologies: ["Python", "Stable Diffusion", "ControlNet", "React", "Flask"],
    imageUrl: "https://placehold.co/600x400/a855f7/ffffff?text=AI+Image+Studio",
    liveUrl: "https://example.com/project-imggen",
    githubUrl: "https://github.com/your-username/ai-image-studio",
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
    title: "Interactive Portfolio Builder",
    category: "frontend",
    description:
      "A drag-and-drop portfolio builder with live preview, theme customization, and export-to-PDF functionality built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "DnD Kit", "Framer Motion", "Vite"],
    imageUrl: "https://placehold.co/600x400/06b6d4/ffffff?text=Portfolio+Builder",
    liveUrl: "https://example.com/project-portfolio",
    githubUrl: "https://github.com/your-username/portfolio-builder",
  },
  {
    title: "Real-Time Data Visualization",
    category: "frontend",
    description:
      "A responsive dashboard with real-time charts, maps, and animated data visualizations using D3.js and WebSocket connections.",
    technologies: ["React", "D3.js", "WebSocket", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://placehold.co/600x400/14b8a6/ffffff?text=Data+Viz",
    liveUrl: "https://example.com/project-dataviz",
    githubUrl: "https://github.com/your-username/data-viz",
  },
  // ── Backend Development ──
  {
    title: "Cloud-Native Microservices Platform",
    category: "backend",
    description:
      "A containerized microservices platform with service discovery, load balancing, and auto-scaling capabilities deployed on AWS using Kubernetes.",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "AWS"],
    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Microservices",
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/your-username/project3",
  },
  {
    title: "High-Throughput Event Pipeline",
    category: "backend",
    description:
      "A distributed event-driven architecture processing 500K+ events/sec using Kafka, Redis, and Go, with exactly-once delivery and dead-letter queues.",
    technologies: ["Go", "Kafka", "Redis", "gRPC", "Prometheus"],
    imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Event+Pipeline",
    liveUrl: "https://example.com/project-pipeline",
    githubUrl: "https://github.com/your-username/event-pipeline",
  },
  // ── Full-Stack ──
  {
    title: "Social Learning Platform",
    category: "fullstack",
    description:
      "A collaborative learning platform with video courses, live Q&A, code playgrounds, and progress tracking. Features real-time collaboration and AI-assisted tutoring.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    imageUrl: "https://placehold.co/600x400/ec4899/ffffff?text=Learning+Platform",
    liveUrl: "https://example.com/project-learn",
    githubUrl: "https://github.com/your-username/social-learning",
  },
  {
    title: "Healthcare Appointment System",
    category: "fullstack",
    description:
      "An end-to-end healthcare platform with appointment booking, telemedicine video calls, prescription management, and HIPAA-compliant data storage.",
    technologies: ["React", "Express", "MongoDB", "WebRTC", "Docker"],
    imageUrl: "https://placehold.co/600x400/0ea5e9/ffffff?text=Healthcare+App",
    liveUrl: "https://example.com/project-health",
    githubUrl: "https://github.com/your-username/healthcare-app",
  },
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    credentialUrl: "https://example.com/cert1",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Sep 2023",
    credentialUrl: "https://example.com/cert2",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "Jun 2023",
    credentialUrl: "https://example.com/cert3",
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta",
    date: "Mar 2023",
    credentialUrl: "https://example.com/cert4",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera – DeepLearning.AI",
    date: "Dec 2022",
    credentialUrl: "https://example.com/cert5",
  },
];

export const testimonial = {
  quote:
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  author: "Steve Jobs",
};
