import { SkillCategory, Experience, Education, Project, Certification, VolunteerWork } from '../types';

export const skills: SkillCategory[] = [
  {
    category: "Programming & Data Analysis",
    skills: ["Python (Pandas, NumPy)", "SQL", "Microsoft Excel"]
  },
  {
    category: "Data Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["Scikit-learn", "TensorFlow", "Keras"]
  },
  {
    category: "Database Technologies",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    category: "Mobile & Web Development",
    skills: ["Flutter", "Dart", "HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Jupyter Notebook", "Git", "A/B testing methods", "Google Analytics"]
  },
  {
    category: "Core Strengths",
    skills: ["Strong problem-solving mindset", "Effective communicator", "Collaborative team player", "Highly attentive to detail"]
  }
];

export const experience: Experience[] = [
  {
    title: "Data Analyst & Flutter Developer Intern",
    company: "Tkxel",
    location: "Lahore, Pakistan",
    period: "July 2024 – September 2024",
    responsibilities: [
      "Worked closely with the data analytics team to preprocess and analyze large-scale datasets using Python and SQL, contributing to improved reporting accuracy.",
      "Designed and built dynamic Tableau dashboards to visualize sales trends and operational KPIs, enabling faster, data-backed decision-making.",
      "Performed exploratory data analysis (EDA) to identify patterns in customer behavior, leading to more targeted segmentation strategies.",
      "Streamlined monthly sales reporting by automating data pipelines in Excel, reducing manual effort by over 10 hours per cycle.",
      "Assisted in evaluating A/B test outcomes by comparing control and variant data, helping marketing teams refine campaign performance.",
      "Delivered weekly insight reports and presented findings to cross-functional teams, translating technical analysis into clear, actionable business recommendations.",
      "Contributed to Flutter-based mobile projects by supporting UI enhancements and integrating API-driven data views."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Engineering Technology",
    institution: "University of Lahore",
    location: "Lahore, Pakistan",
    period: "February 2023 – May 2027",
    gpa: "3.22/4",
    details: [
      "Relevant Coursework: Data Structures, Database Management, Machine Learning, Mobile App Development, Artificial Intelligence",
      "Final Year Project: Gesture-Controlled Robot – Developed a line following delivery robot using computer vision and machine learning.",
      "Web Development Project: Created a fully functional Tesla website, including user authentication, interactive features, and responsive design.",
      "Mobile App Project: Built a cross-platform mobile app for classroom quizzes, inspired by Kahoot, enabling real-time participation and leaderboards.",
      "Machine Learning Projects: Implemented deep learning models in Python for image classification, predictive analytics, and time series forecasting."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description: "Developed a dynamic sales dashboard that connects Tableau to MySQL for real-time sales and user engagement tracking.",
    technologies: ["Tableau", "MySQL", "SQL", "Data Visualization"],
    image: "https://images.pexels.com/photos/7947772/pexels-photo-7947772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Credit Risk Model",
    description: "Built a machine learning model to predict loan defaults using decision trees and logistic regression, achieving a 78% F1-score.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "COVID-19 Data Analysis",
    description: "Analyzed and visualized global COVID-19 data to track trends and predict future outbreaks using Python and Matplotlib.",
    technologies: ["Python", "Matplotlib", "Data Analysis", "Visualization"],
    image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const certifications: Certification[] = [
  {
    name: "Google Data Analytics Certificate",
    issuer: "Coursera"
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau"
  },
  {
    name: "Python for Data Science",
    issuer: "DataCamp"
  }
];

export const volunteerWork: VolunteerWork[] = [
  {
    role: "Founder and Leader, University Coding Club",
    organization: "University of Lahore",
    location: "Lahore, Pakistan",
    period: "September 2024 – May 2027",
    details: [
      "Founded and led a club that hosted coding challenges, workshops, and hackathons for students to enhance their technical skills.",
      "Organized a successful hackathon with 100+ participants, focusing on problem-solving and teamwork in a coding environment."
    ]
  },
  {
    role: "Volunteer Data Analyst, Tech for Good",
    organization: "Tech for Good",
    location: "Lahore, Pakistan",
    period: "March 2024 – Present",
    details: [
      "Volunteered to analyze nonprofit data, helping organizations optimize operations and fundraising efforts through data-driven insights.",
      "Created a data dashboard in Tableau to track key metrics, improving reporting efficiency by 15%."
    ]
  }
];

export const languages = [
  { language: "English", proficiency: "Fluent" },
  { language: "Urdu", proficiency: "Native" }
];

export const hobbies = [
  { category: "Creative Pursuits", items: ["Digital art", "Photography", "Graphic design"] },
  { category: "Reading", items: ["Science fiction and fantasy novels"] },
  { category: "Anime", items: ["Enjoys anime series for entertainment and storytelling inspiration"] },
  { category: "Technology", items: ["Exploring new trends in AI, machine learning, and robotics"] }
];