import React, {useEffect, useState} from "react";
import styles from "../styles/blog.module.css";
import BlogTile from "./blogTile";
import {BlogTileProps} from "../types/blog";
import {fetchAndParseRSS} from "../service/blog";
import Loader from "./loader";
import toast from "react-hot-toast";
import {BLOG_ERROR} from "@/constants/blog";

const Blog: React.FC = () => {
    const [blogItems, setBlogItems] = useState<BlogTileProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const data = await fetchAndParseRSS();
                setBlogItems(data);
            } catch (error) {
                toast.error(BLOG_ERROR);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogData();
    }, []);

    return (
        <div className={styles.blog}>
            <h2 className={styles.blogTitle}>My Blog</h2>
            {loading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <div className={styles.blogItems}>
                    {blogItems.map((item, index) => (
                        <BlogTile key={index} {...item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;
