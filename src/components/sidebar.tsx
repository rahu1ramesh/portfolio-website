import React from "react";
import Image from "next/image";
import {LocationOn, MailOutline, PhoneAndroid, SvgIconComponent, Work} from "@mui/icons-material";
import styles from "./sidebar.module.css";

interface SidebarProps {
    icon: SvgIconComponent;
    title: string;
    content: JSX.Element;
}

const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarInfo}>
                <figure className={styles.avatarBox}>
                    <Image src="/images/profile.png" priority={true} alt="Rahul Ramesh" width={150} height={150} />
                </figure>
                <div className={styles.infoContent}>
                    <h1 className={styles.name} title="Rahul Ramesh">
                        Rahul Ramesh
                    </h1>
                    <p className={styles.title}>Developer</p>
                </div>
                <div className={styles.sidebarInfoMore}>
                    <div className={styles.separator}></div>
                    <ul className={styles.sidebarItemList}>
                        <SidebarItem
                            icon={MailOutline}
                            title="Email"
                            content={
                                <a href="mailto:rahul.ramesh.workmail@gmail.com">rahul.ramesh.workmail@gmail.com</a>
                            }
                        />
                        <SidebarItem
                            icon={PhoneAndroid}
                            title="Phone"
                            content={<a href="tel:+918086237540">+91 8086-2375-40</a>}
                        />
                        <SidebarItem icon={Work} title="Work" content={<address>Thoughtworks, Coimbatore</address>} />
                        <SidebarItem
                            icon={LocationOn}
                            title="Location"
                            content={<address>Kodungallur, Thrissur, Kerala</address>}
                        />
                    </ul>
                    <div className={styles.separator}></div>
                </div>
            </div>
        </aside>
    );
};

const SidebarItem: React.FC<SidebarProps> = ({icon: Icon, title, content}) => (
    <li className={styles.sidebarItem}>
        <div className={styles.iconBox}>
            <Icon fontSize="small" />
        </div>
        <div className={styles.sidebarItemInfo}>
            <p className={styles.sidebarItemTitle}>{title}</p>
            {content}
        </div>
    </li>
);

export default Sidebar;
