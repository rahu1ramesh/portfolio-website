import React from "react";
import styles from "../styles/about.module.css";
import AboutTile from "./aboutTile";
import {ABOUT_INTRO, SKILLS} from "../constants/about";

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <header>
                <h2 className={styles.aboutTitle}>About</h2>
            </header>
            {ABOUT_INTRO.map((intro, index) => (
                <p key={index} className={styles.aboutContent}>
                    {intro}
                </p>
            ))}
            <header>
                <h2 className={styles.aboutTitle}>What I like</h2>
            </header>
            <div className={styles.aboutServices}>
                {SKILLS.map((skill, index) => (
                    <AboutTile key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default About;
