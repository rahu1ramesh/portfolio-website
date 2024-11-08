import {AboutTileProps} from "@/types/about";
import {AutoStories} from "@mui/icons-material";
import {Piano} from "@mui/icons-material";

export const ABOUT_INTRO = [
    "With over two years of hands-on experience in software development, I specialize in building scalable backend systems and enhancing full-stack solutions for open-source platforms. Currently a Consultant Developer at Thoughtworks, I have contributed to major projects, such as Bahmni—an open-source EMR platform—significantly improving usability and functionality in inpatient care. ",
    "My technical expertise spans Java, Spring Boot, Docker, and frontend frameworks like React. I’m adept at Agile methodologies, CI/CD, TDD, and cloud-based systems, with a proven track record of collaborating cross-functionally to deliver high-quality software. Driven by problem-solving and a passion for backend development, I aim to leverage my skills to create solutions that make a difference.",
];

export const SKILLS = <AboutTileProps[]>[
    {Icon: AutoStories, title: "Reading", content: "Diving into diverse worlds through the pages of a good book."},
    {Icon: Piano, title: "Playing Piano", content: "Crafting melodies on keys, finding rhythm and peace."},
];
