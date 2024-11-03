import React from "react";
import {LinkedIn, GitHub, Instagram, X} from "@mui/icons-material";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
    const links = [
        {
            href: "https://www.linkedin.com/in/rahu1ramesh/",
            label: "rahu1ramesh",
            Icon: LinkedIn,
        },
        {
            href: "https://github.com/rahu1ramesh",
            label: "rahu1ramesh",
            Icon: GitHub,
        },
        {
            href: "https://x.com/rahu1ramesh",
            label: "rahu1ramesh",
            Icon: X,
        },
        {
            href: "https://www.instagram.com/rahu1.ramesh/",
            label: "rahu1.ramesh",
            Icon: Instagram,
        },
    ];

    return (
        <footer className={styles.footer}>
            {links.map(({href, label, Icon}) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Icon className={styles.icon} />
                    {label}
                </a>
            ))}
        </footer>
    );
};

export default Footer;
