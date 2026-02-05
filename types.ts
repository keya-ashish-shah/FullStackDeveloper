
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Certification {
  title: string;
  issuerLogo: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  logo: string;
  cgpa?: string;
}
