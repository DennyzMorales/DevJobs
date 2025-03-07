export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    profilePic: string;
    education: string;
    skills: string[];
    userType: "Student" | "Employer" | "Mentor";
    linkedIn?: string;
    portfolio?: string;
  };
  
  export type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    type: "Full-time" | "Part-time" | "Internship" | "Remote";
    salary?: string;
    description: string;
    requiredSkills: string[];
    postedBy: number; // Employer ID
  };
  