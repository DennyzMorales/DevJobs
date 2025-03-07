import { User, Job } from "./types";

export const users: User[] = [
  {
    id: 1,
    name: "Denny Dev",
    email: "denny@example.com",
    phone: "+51 999 999 999",
    profilePic: "https://via.placeholder.com/100",
    education: "Computer Science - 6th Semester",
    skills: ["React", "Node.js", "TypeScript"],
    userType: "Student",
    linkedIn: "https://linkedin.com/in/dennydev",
  },
  {
    id: 2,
    name: "Alice Tech",
    email: "alice@example.com",
    phone: "+51 998 888 888",
    profilePic: "https://via.placeholder.com/100",
    education: "Software Engineer - 8th Semester",
    skills: ["Java", "Spring Boot", "Docker"],
    userType: "Student",
    linkedIn: "https://linkedin.com/in/alicetech",
  },
  {
    id: 3,
    name: "Tech Corp",
    email: "hr@techcorp.com",
    phone: "+51 997 777 777",
    profilePic: "https://via.placeholder.com/100",
    education: "N/A",
    skills: [],
    userType: "Employer",
  },
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "React Developer Intern",
    company: "Tech Corp",
    location: "Remote",
    type: "Internship",
    salary: "$500/month",
    description: "Looking for a React intern to work on our front-end team.",
    requiredSkills: ["React", "JavaScript", "CSS"],
    postedBy: 3, // Employer ID
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Startup XYZ",
    location: "Lima, Peru",
    type: "Full-time",
    salary: "$1500/month",
    description: "Looking for a Node.js developer with API experience.",
    requiredSkills: ["Node.js", "Express", "MongoDB"],
    postedBy: 3,
  },
];
