export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  icon?: string;
}

export interface VolunteerWork {
  role: string;
  organization: string;
  location: string;
  period: string;
  details: string[];
}