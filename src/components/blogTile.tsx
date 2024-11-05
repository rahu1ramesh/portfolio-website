import React from "react";
import styles from "../styles/blogTile.module.css";
import {BlogTileProps} from "../types/blog";

const BlogTile: React.FC<BlogTileProps> = ({image, date, title, description}) => {
    return (
        <div className={styles.blogTile}>
            <img src={image} alt={title} className={styles.blogTileImage} />
            <div className={styles.blogTileContent}>
                <div className={styles.blogTileMeta}>{date}</div>
                <h3 className={styles.blogTileTitle}>{title}</h3>
                <p className={styles.blogTileDescription}>{description}</p>
            </div>
        </div>
    );
};

export default BlogTile;
