import {School, Work} from "@mui/icons-material";
import {ResumeTileProps} from "../types/resume";

const education = [
    {
        year: "August 2018 – July 2022",
        title: "Bachelor of Technology (B.Tech)",
        location: "Govt. Model Engineering College, Thrikkakara, Kerala",
    },
];
const work = [
    {
        year: "August 2022 – Present",
        title: "Consultant Developer",
        location: "Thoughtworks Technologies (India) Pvt Ltd.",
    },
    {
        year: "April 2021 – July 2021",
        title: "Mobile Application Development (Intern)",
        location: "TechPranee",
    },
];

const workExperience = <ResumeTileProps>{
    icon: Work,
    title: "Work Experience",
    items: work,
};
const educationExperience = <ResumeTileProps>{
    icon: School,
    title: "Education",
    items: education,
};
export {workExperience, educationExperience};
