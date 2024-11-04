import React from "react";
import styles from "../styles/aboutTile.module.css";
import {AboutTileProps} from "../types/about";

const AboutTile: React.FC<AboutTileProps> = ({Icon, title, content}) => {
    return (
        <div className={styles.aboutTile}>
            <div>
                <Icon className={styles.aboutTileIcon} fontSize="large" />
            </div>
            <div>
                <h4 className={styles.aboutTileTitle}>{title}</h4>
                <p className={styles.aboutTileContent}>{content}</p>
            </div>
        </div>
    );
};

export default AboutTile;
