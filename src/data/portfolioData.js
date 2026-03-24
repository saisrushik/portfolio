export const personalInfo = {
  name: "Your Name",
  title: "Software Engineer | Data Scientist | Researcher",
  tagline: "Building intelligent solutions at the intersection of software engineering and data science.",
  email: "saisrushik98@gmail.com",
  location: "City, Country",
  avatarUrl: "https://placehold.co/300x300/3b82f6/ffffff?text=YN",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  medium: "https://medium.com/@your-username",
  kaggle: "https://kaggle.com/your-username",
  leetcode: "https://leetcode.com/your-username",
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  deepml: "https://www.deep-ml.com/profile/your-username",
  email: "mailto:saisrushik98@gmail.com",
};

export const aboutMe = {
  summary:
    "I am a passionate software engineer and data scientist with experience in building scalable web applications and developing machine learning solutions. I love solving complex problems and turning data into actionable insights. With a strong background in computer science and a keen interest in research, I strive to stay at the cutting edge of technology.",
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
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    location: "City, State",
    period: "Aug 2022 – May 2024",
    gpa: "3.9/4.0",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Cloud Computing",
      "Algorithms & Data Structures",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "Aug 2016 – May 2020",
    gpa: "8.5/10.0",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Database Management",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];

export const workExperience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    location: "City, State",
    period: "Jun 2024 – Present",
    description: [
      "Developed and maintained scalable microservices processing 1M+ requests daily using Java and Spring Boot.",
      "Designed and implemented RESTful APIs that improved system throughput by 40%.",
      "Led migration of monolithic application to cloud-native architecture on AWS, reducing deployment time by 60%.",
      "Implemented CI/CD pipelines using Jenkins and Docker for automated testing and deployment.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Company Name",
    location: "City, State",
    period: "May 2023 – Aug 2023",
    description: [
      "Built machine learning models for customer churn prediction achieving 92% accuracy.",
      "Developed data pipelines using Python and Apache Spark for processing large-scale datasets.",
      "Created interactive dashboards with Tableau to visualize key business metrics.",
      "Conducted A/B testing and statistical analysis to optimize product features.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Company Name",
    location: "City, Country",
    period: "Jul 2020 – Jul 2022",
    description: [
      "Built responsive web applications using React.js and Node.js serving 50K+ users.",
      "Optimized database queries resulting in 35% improvement in page load times.",
      "Collaborated with cross-functional teams in Agile sprints to deliver features on schedule.",
      "Mentored junior developers and conducted code reviews to maintain code quality.",
    ],
  },
];

export const researchPublications = [
  {
    title: "Deep Learning Approaches for Natural Language Understanding: A Comprehensive Survey",
    authors: "Your Name, Co-Author A, Co-Author B",
    journal: "IEEE Transactions on Neural Networks and Learning Systems",
    year: "2024",
    doi: "https://doi.org/10.xxxx/placeholder",
    abstract:
      "This paper presents a comprehensive survey of deep learning methods for natural language understanding tasks, comparing transformer-based architectures with traditional approaches.",
  },
  {
    title: "Efficient Federated Learning for Edge Computing: A Privacy-Preserving Framework",
    authors: "Your Name, Co-Author C",
    journal: "ACM Computing Surveys",
    year: "2023",
    doi: "https://doi.org/10.xxxx/placeholder",
    abstract:
      "We propose a novel federated learning framework optimized for edge devices that maintains model accuracy while ensuring data privacy through differential privacy mechanisms.",
  },
  {
    title: "Scalable Real-time Anomaly Detection in IoT Networks Using Graph Neural Networks",
    authors: "Your Name, Co-Author D, Co-Author E",
    journal: "Journal of Network and Computer Applications",
    year: "2023",
    doi: "https://doi.org/10.xxxx/placeholder",
    abstract:
      "This work introduces a graph neural network-based approach for detecting anomalies in IoT networks in real-time, achieving state-of-the-art performance on multiple benchmark datasets.",
  },
];

export const projectCategories = [
  { key: "generative-ai", label: "Generative AI / Agentic AI" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "frontend", label: "Frontend Development" },
  { key: "backend", label: "Backend Development" },
  { key: "fullstack", label: "Full-Stack" },
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
