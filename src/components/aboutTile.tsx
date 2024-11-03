import React from "react";
import styles from "./aboutTile.module.css";
import {SvgIconComponent} from "@mui/icons-material";

interface AboutTileProps {
    Icon: SvgIconComponent;
    title: string;
    content: string;
}

const AboutTile: React.FC<AboutTileProps> = ({Icon, title, content}) => {
    return (
        <div className={styles.aboutTile}>
            <div>
                <Icon className={styles.aboutTileIcon} />
            </div>
            <div>
                <h4 className={styles.aboutTileTitle}>{title}</h4>
                <p className={styles.aboutTileContent}>{content}</p>
            </div>
        </div>
    );
};

export default AboutTile;
