import React from "react";
import styles from "./navbar.module.css";
import {ComponentName, TABS} from "./constants";

interface NavbarProps {
    setDisplayedTable: (componentName: ComponentName) => void;
    activeTab: ComponentName;
}

const Navbar: React.FC<NavbarProps> = ({setDisplayedTable, activeTab}) => {
    const tabs: ComponentName[] = TABS;

    return (
        <div className={styles.navbar}>
            <ul className={styles.navbarList}>
                {tabs.map((tab) => (
                    <li key={tab} className={styles.navbarItem}>
                        <button
                            className={`${styles.navbarLink} ${activeTab === tab ? styles.active : ""}`}
                            onClick={() => setDisplayedTable(tab)}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
