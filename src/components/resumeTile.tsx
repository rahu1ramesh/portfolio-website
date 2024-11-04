import React from "react";
import styles from "../styles/resumeTile.module.css";
import {ResumeTileProps, ResumeTitleProps, ResumeItemProps} from "../types/resume";

const ResumeTile: React.FC<ResumeTileProps> = ({icon, title, items}) => {
    return (
        <div className={styles.resumeTile}>
            <ResumeTitle icon={icon} title={title} />
            <ol className={styles.timeline}>
                {items.map((item, index) => (
                    <ResumeItem key={index} year={item.year} title={item.title} location={item.location} />
                ))}
            </ol>
        </div>
    );
};

const ResumeTitle: React.FC<ResumeTitleProps> = ({icon: Icon, title}) => (
    <div className={styles.resumeTileTitle}>
        <div className={styles.iconBox}>
            <Icon fontSize="medium" />
        </div>
        <h3 className={styles.title}>{title}</h3>
    </div>
);

const ResumeItem: React.FC<ResumeItemProps> = ({year, title, location}) => (
    <li className={styles.timelineItem}>
        <div className={styles.timelineMarker}></div>
        <div className={styles.timelineContent}>
            <h4 className={styles.itemTitle}>{title}</h4>
            <span className={styles.itemYear}>{year}</span>
            <p className={styles.itemLocation}>{location}</p>
        </div>
    </li>
);

export default ResumeTile;
