import React from "react";
import styles from "./resume.module.css";
import ResumeTile from "./resumeTile";
import {workExperience, educationExperience} from "../constants/resume";

const Resume: React.FC = () => {
    return (
        <div className={styles.resume}>
            <header>
                <h2 className={styles.resumeTitle}>More About Me</h2>
                <ResumeTile {...workExperience} />
                <ResumeTile {...educationExperience} />
            </header>
        </div>
    );
};

export default Resume;
