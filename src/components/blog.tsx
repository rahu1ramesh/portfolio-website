import React from "react";
import styles from "../styles/blog.module.css";

const Blog: React.FC = () => {
    return (
        <div className={styles.blog}>
            <h2 className={styles.blogTitle}>My Blog</h2>
            <p className={styles.blogContent}>Coming Soon...</p>
        </div>
    );
};

export default Blog;
