import React from "react";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
    return (
        <div className={styles.resume}>
            <header>
                <h2 className={styles.resumeTitle}>More About Me</h2>
            </header>
        </div>
    );
};

export default Resume;
