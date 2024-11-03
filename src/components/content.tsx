import React from "react";
import styles from "./content.module.css";

type ContentProps = {
    displayedComponent: JSX.Element;
};

const Content: React.FC<ContentProps> = ({displayedComponent}) => {
    return <div className={styles.content}>{displayedComponent}</div>;
};

export default Content;
