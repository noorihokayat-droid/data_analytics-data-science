/**
 * Centralized Data Store for Noori Fatema Hokayat's Portfolio
 * Fully editable and recruiter-friendly data structure
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Noori Fatema Hokayat",
    role: "Data Scientist | Machine Learning Enthusiast | Data Analyst",
    experienceYears: "2+",
    phone: "+91 9875128487",
    whatsapp: "+91 9875128487",
    whatsappRaw: "919875128487",
    email: "noori.hokayat@example.com", // Editable placeholder
    location: "India",
    github: "https://github.com/noorihokayat",
    linkedin: "https://linkedin.com/in/noori-fatema-hokayat",
    bio: "Data Science professional with 2 years of experience transforming complex raw data into meaningful business decisions, building predictive machine learning models, developing intuitive analytical dashboards, and solving real-world challenges through data-driven approaches."
  },

  stats: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Data Projects", value: 10, suffix: "+" },
    { label: "ML & Analytics Solutions", value: 15, suffix: "+" },
    { label: "Data-Driven Approach", value: 100, suffix: "%" }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Data Science Professional",
      company: "[Company / Organization Name - Editable]",
      period: "2024 - Present (2 Years)",
      type: "Full-Time",
      location: "[Location / Remote]",
      summary: "Leading end-to-end data analytics and machine learning workflows, building predictive statistical models, constructing interactive BI dashboards, and enabling data-backed strategic decisions.",
      responsibilities: [
        "Collected and preprocessed large structured and unstructured datasets across diverse business domains.",
        "Performed thorough exploratory data analysis (EDA) to uncover trends, anomalies, and hidden statistical patterns.",
        "Built, fine-tuned, and validated predictive machine learning models (Regression, Classification, Clustering).",
        "Executed feature engineering, missing value imputation, outlier detection, and hyperparameter optimization.",
        "Evaluated model performance using Precision, Recall, F1-Score, ROC-AUC, RMSE, and Confusion Matrices.",
        "Designed and deployed intuitive data visualization dashboards in Power BI, Tableau, and Python (Streamlit/Plotly).",
        "Wrote highly optimized SQL queries for complex joins, aggregations, window functions, and data transformations.",
        "Communicated key analytical findings and actionable business recommendations to technical and non-technical stakeholders."
      ],
      technologies: ["Python", "SQL", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Git", "Docker"]
    }
  ],

  skillsCategories: [
    {
      category: "Programming & Data",
      icon: "code",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "SciPy", level: 82 }
      ]
    },
    {
      category: "Data Visualization",
      icon: "chart-bar",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 85 },
        { name: "Plotly", level: 88 },
        { name: "Seaborn", level: 90 },
        { name: "Matplotlib", level: 92 }
      ]
    },
    {
      category: "Machine Learning",
      icon: "cpu",
      skills: [
        { name: "Scikit-Learn", level: 90 },
        { name: "Regression & Classification", level: 92 },
        { name: "Clustering (K-Means)", level: 86 },
        { name: "Feature Engineering", level: 90 },
        { name: "Model Evaluation & Tuning", level: 88 }
      ]
    },
    {
      category: "Deep Learning & AI",
      icon: "brain",
      skills: [
        { name: "TensorFlow & Keras", level: 78 },
        { name: "PyTorch", level: 75 },
        { name: "Neural Networks (ANN/CNN)", level: 80 },
        { name: "NLP (NLTK/Spacy)", level: 82 },
        { name: "Computer Vision Basics", level: 75 }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "database",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 86 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "wrench",
      skills: [
        { name: "Jupyter Notebook & Colab", level: 95 },
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      category: "Data Engineering & Cloud",
      icon: "cloud",
      skills: [
        { name: "ETL Pipelines", level: 85 },
        { name: "REST APIs Integration", level: 84 },
        { name: "Apache Spark Basics", level: 72 },
        { name: "AWS / Azure Foundations", level: 70 }
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor's Degree in Computer Science / Data Analytics",
      institution: "[University / College Name - Editable]",
      period: "2020 - 2024",
      grade: "[Grade / Percentage / CGPA - Editable]",
      highlights: [
        "Core Coursework: Applied Statistics, Linear Algebra, Machine Learning, Database Management Systems, Data Structures & Algorithms, Data Mining.",
        "Completed capstone thesis on predictive analytics and algorithmic model tuning."
      ]
    }
  ],

  certifications: [
    {
      title: "Data Science & Machine Learning Professional Certificate",
      issuer: "[Certification Body / Platform - e.g., Coursera, IBM, Google]",
      year: "2024",
      skills: ["Python", "Machine Learning", "Scikit-Learn", "Model Deployment"]
    },
    {
      title: "Advanced SQL & Database Analytics",
      issuer: "[Certification Platform]",
      year: "2024",
      skills: ["Complex Queries", "Window Functions", "Query Optimization"]
    },
    {
      title: "Data Visualization & Business Intelligence Specialist",
      issuer: "[Certification Platform]",
      year: "2023",
      skills: ["Power BI", "Tableau", "Dashboard Design", "KPI Reporting"]
    }
  ],

  projects: [
    {
      id: "project-1",
      category: "Machine Learning",
      title: "01 — Customer Churn Prediction ML Engine",
      shortDesc: "Predictive machine learning pipeline to identify high-risk churn customers and optimize retention strategies.",
      image: "assets/images/project1.png",
      accuracy: "98.4%",
      dataset: "Telecom Customer Churn Dataset (7,043 records)",
      technologies: ["Python", "Pandas", "Scikit-Learn", "SQL", "Seaborn", "XGBoost"],
      githubUrl: "https://github.com/noorihokayat/customer-churn-prediction",
      liveDemoUrl: "https://churn-predictor-demo.example.com",
      caseStudy: {
        problemStatement: "Subscription-based businesses lose significant revenue due to customer churn. Identifying early warning signals before customers cancel is critical for targeted retention efforts.",
        solution: "Built a classification model combining Random Forest and XGBoost with SMOTE oversampling to resolve class imbalance, extracting key churn drivers like contract type, tenure, and monthly charges.",
        dataPreprocessing: "Handled missing data, converted categorical attributes using One-Hot Encoding, and scaled numerical features with StandardScaler.",
        featureEngineering: "Engineered tenure-to-charge ratios, total services subscribed, and interaction metrics to boost feature importance signals.",
        metrics: {
          accuracy: "98.4%",
          precision: "96.2%",
          recall: "97.8%",
          f1Score: "97.0%",
          rocAuc: "0.991"
        },
        keyInsights: [
          "Month-to-month contract holders exhibited 4.2x higher churn propensity.",
          "Electronic check payment method was strongly correlated with churn.",
          "Targeted retention offers to high-risk customers projected a 28% reduction in revenue leakage."
        ]
      }
    },
    {
      id: "project-2",
      category: "Data Analytics",
      title: "02 — Sales Forecasting & Predictive Analytics",
      shortDesc: "Time-series forecasting model analyzing multi-year retail trends to optimize inventory and demand planning.",
      image: "assets/images/project2.png",
      accuracy: "MAE: 4.2%",
      dataset: "Retail Multi-Store Sales Data (100K+ Transactions)",
      technologies: ["Python", "Pandas", "NumPy", "Plotly", "Statsmodels", "Prophet"],
      githubUrl: "https://github.com/noorihokayat/sales-forecasting-analytics",
      liveDemoUrl: "https://sales-forecasting.example.com",
      caseStudy: {
        problemStatement: "Inaccurate stock estimation led to stockouts during peak promotional periods and overstocking during off-seasons, tying up operational capital.",
        solution: "Developed an interactive time-series forecasting model incorporating seasonality, holiday multipliers, and promotional events to generate 90-day forward demand projections.",
        dataPreprocessing: "Aggregated daily transaction data to weekly metrics, smoothed extreme outliers using rolling median filters, and decomposed signals into trend/seasonality.",
        featureEngineering: "Created lag variables (t-7, t-14, t-30), rolling average window features, and holiday calendar indicators.",
        metrics: {
          mae: "4.2%",
          rmse: "124.5 units",
          mape: "3.8%",
          rSquared: "0.94"
        },
        keyInsights: [
          "Identified strong quarterly seasonality peaking in November-December.",
          "Automated safety stock recommendations reduced stockout risks by 35%.",
          "Interactive Plotly dashboard enabled regional managers to adjust forecast scenarios dynamically."
        ]
      }
    },
    {
      id: "project-3",
      category: "Machine Learning",
      title: "03 — Customer Segmentation & Behavioral Profiling",
      shortDesc: "Unsupervised machine learning model segmenting customer demographics into actionable marketing personas.",
      image: "assets/images/project3.png",
      accuracy: "Silhouette Score: 0.72",
      dataset: "E-Commerce Customer Behavior Dataset",
      technologies: ["Python", "Scikit-Learn", "K-Means", "PCA", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/noorihokayat/customer-segmentation-kmeans",
      liveDemoUrl: "https://segmentation-app.example.com",
      caseStudy: {
        problemStatement: "Generic marketing campaigns suffered from low conversion rates due to lack of personalization and understanding of customer purchase behavior.",
        solution: "Applied RFM (Recency, Frequency, Monetary) analysis and K-Means clustering reduced via Principal Component Analysis (PCA) to discover 4 distinct customer personas.",
        dataPreprocessing: "Normalized RFM parameters using PowerTransformer to remove skewness and computed pairwise cosine similarities.",
        featureEngineering: "Calculated Recency score, Frequency indices, Average Order Value (AOV), and Customer Lifetime Value (CLV).",
        metrics: {
          clusters: "4 Persona Groups",
          silhouetteScore: "0.72",
          elbowPoint: "K = 4",
          varianceExplained: "84.5%"
        },
        keyInsights: [
          "Identified 'High-Value Champions' accounting for 45% of revenue despite being 18% of user base.",
          "Targeted re-engagement campaign for 'At-Risk Bargain Hunters' boosted conversion by 19%.",
          "Segment profiles integrated directly into CRM for automated email flows."
        ]
      }
    },
    {
      id: "project-4",
      category: "Data Analytics",
      title: "04 — Interactive Business Intelligence Dashboard",
      shortDesc: "Executive-level BI dashboard consolidating multi-source financial and operational KPIs into actionable insights.",
      image: "assets/images/project4.png",
      accuracy: "Real-Time BI",
      dataset: "Enterprise Operations & Financial Dataset",
      technologies: ["Power BI", "SQL", "DAX", "Python", "Excel", "Data Modeling"],
      githubUrl: "https://github.com/noorihokayat/bi-executive-dashboard",
      liveDemoUrl: "https://powerbi-dashboard.example.com",
      caseStudy: {
        problemStatement: "Leadership teams were spending 15+ hours weekly compiling manual spreadsheet reports from fragmented SQL databases and CSV exports.",
        solution: "Architected a star-schema data model in Power BI powered by optimized SQL views and custom DAX measures for real-time KPI tracking.",
        dataPreprocessing: "Cleaned raw tables, established relational integrity constraints, and scheduled automated nightly refresh scripts.",
        featureEngineering: "Created dynamic YoY, MoM growth measures, profit margin drill-downs, and regional heatmaps.",
        metrics: {
          refreshSpeed: "< 2.5s",
          kpisTracked: "24 Metrics",
          dataVolume: "500K+ Rows",
          timeSaved: "15 hrs/week"
        },
        keyInsights: [
          "Eliminated manual reporting latency, delivering daily operational clarity.",
          "Uncovered a 14% margin drag in regional logistics routes.",
          "Adopted as the primary dashboard for weekly executive review meetings."
        ]
      }
    },
    {
      id: "project-5",
      category: "NLP & AI",
      title: "05 — Sentiment Analysis & Brand Perception Engine",
      shortDesc: "Natural Language Processing model categorizing social feedback and reviews into real-time sentiment metrics.",
      image: "assets/images/project5.png",
      accuracy: "Accuracy: 93.7%",
      dataset: "Customer Review & Social Feedback Dataset (50K text samples)",
      technologies: ["Python", "NLP", "NLTK", "Scikit-Learn", "TF-IDF", "VADER", "Flask"],
      githubUrl: "https://github.com/noorihokayat/sentiment-analysis-nlp",
      liveDemoUrl: "https://nlp-sentiment-engine.example.com",
      caseStudy: {
        problemStatement: "Brand monitoring teams needed a way to instantly flag negative customer reviews and track sentiment trends following product releases.",
        solution: "Trained a supervised Logistic Regression & Naive Bayes model on TF-IDF vectorized text paired with VADER lexicon scoring for granular sentiment classification.",
        dataPreprocessing: "Lowercased text, removed stop words, punctuation, and URLs, applied WordNet Lemmatization, and tokenized sentences.",
        featureEngineering: "Extracted n-grams (unigrams/bigrams), sentiment polarity scores, and review length indicators.",
        metrics: {
          accuracy: "93.7%",
          precision: "92.4%",
          recall: "94.1%",
          f1Score: "93.2%"
        },
        keyInsights: [
          "Automated detection flagged negative product feedback within 5 minutes of publication.",
          "Identified product packaging as the top source of negative sentiment, leading to redesign.",
          "Provided API endpoint for real-time text sentiment scoring."
        ]
      }
    },
    {
      id: "project-6",
      category: "Machine Learning",
      title: "06 — End-to-End MLOps Pipeline & Model Serving",
      shortDesc: "Production-ready machine learning pipeline featuring data validation, model training, containerization, and REST API deployment.",
      image: "assets/images/project6.png",
      accuracy: "Latency < 45ms",
      dataset: "Production Batch Inference Dataset",
      technologies: ["Python", "Scikit-Learn", "Docker", "FastAPI", "Git", "GitHub Actions"],
      githubUrl: "https://github.com/noorihokayat/end-to-end-mlops-pipeline",
      liveDemoUrl: "https://mlops-api.example.com",
      caseStudy: {
        problemStatement: "Transitioning trained Jupyter Notebook models into scalable, containerized production services was manual and error-prone.",
        solution: "Engineered a modular MLOps framework with automated data drift validation, unit tests, Docker containerization, and FastAPI deployment.",
        dataPreprocessing: "Built Scikit-Learn ColumnTransformer pipelines for reproducible scaling and categorical encoding across train/test inference splits.",
        featureEngineering: "Modular feature extractors wrapped inside serializable Pickle artifacts for deterministic real-time predictions.",
        metrics: {
          apiLatency: "38ms",
          uptime: "99.9%",
          testCoverage: "92%",
          buildTime: "< 2 mins"
        },
        keyInsights: [
          "Streamlined model re-training and deployment cycles from days to minutes.",
          "Integrated GitHub Actions CI/CD pipeline for automated testing on code commits.",
          "Packaged application in lightweight Alpine Docker container for fast cloud deployment."
        ]
      }
    }
  ],

  workflow: [
    { number: "01", title: "Understand", desc: "Define business objectives, domain context, and core success metrics." },
    { number: "02", title: "Collect", desc: "Gather structured and unstructured raw data from databases, APIs, and logs." },
    { number: "03", title: "Clean", desc: "Perform data hygiene, handle missing values, smooth noise, and format data types." },
    { number: "04", title: "Explore", desc: "Conduct thorough EDA to discover distributions, correlation matrices, and anomalies." },
    { number: "05", title: "Engineer", desc: "Construct domain-specific features, scale attributes, and optimize predictors." },
    { number: "06", title: "Model", desc: "Train diverse machine learning algorithms (Supervised & Unsupervised)." },
    { number: "07", title: "Evaluate", desc: "Rigorously test models using cross-validation, confusion matrices, and ROC metrics." },
    { number: "08", title: "Deploy", desc: "Package models into containerized APIs or intuitive analytical dashboards." },
    { number: "09", title: "Communicate", desc: "Deliver clear data-driven story, key insights, and strategic recommendations." }
  ],

  valueHighlights: [
    {
      icon: "brain-circuit",
      title: "Analytical Thinking",
      desc: "Deconstruct complex unstructured datasets into coherent, statistically validated business insights."
    },
    {
      icon: "cpu-sparkles",
      title: "Machine Learning Expertise",
      desc: "Build, evaluate, and fine-tune predictive models tailored to classification, regression, and clustering problems."
    },
    {
      icon: "briefcase-check",
      title: "Business Understanding",
      desc: "Bridge the gap between raw statistical data and practical revenue, growth, and operational objectives."
    },
    {
      icon: "chart-scatter",
      title: "Data Visualization",
      desc: "Craft intuitive, beautiful BI dashboards and custom chart visualizations that make data instantly readable."
    },
    {
      icon: "shield-check",
      title: "Structured Problem Solving",
      desc: "Approach ambiguity with methodical data-driven techniques, hypothesis testing, and rigorous evaluation."
    },
    {
      icon: "sparkles",
      title: "Continuous Innovation",
      desc: "Stay ahead of latest data science algorithms, modern MLOps practices, and cutting-edge analytical tools."
    }
  ]
};

// Freeze object to prevent unintentional mutations
Object.freeze(PORTFOLIO_DATA);
