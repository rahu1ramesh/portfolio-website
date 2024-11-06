"use client";
import React, {useState} from "react";
import styles from "../styles/mainContent.module.css";
import Navbar from "./navbar";
import Content from "./content";
import {ComponentName, COMPONENTS} from "./constants";

const MainContent: React.FC = () => {
    const [displayedTable, setDisplayedTable] = useState<ComponentName>("About");
    return (
        <div className={styles.mainContent}>
            <Navbar setDisplayedTable={setDisplayedTable} activeTab={displayedTable} />
            <Content displayedComponent={COMPONENTS[displayedTable]} />
        </div>
    );
};

export default MainContent;
