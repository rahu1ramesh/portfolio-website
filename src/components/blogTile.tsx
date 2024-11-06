import React from "react";
import styles from "../styles/blogTile.module.css";
import {BlogTileProps} from "../types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogTile: React.FC<BlogTileProps> = ({image, date, title, description, link}) => {
    return (
        <Link href={link}>
            <div className={styles.blogTile}>
                <Image
                    src={image}
                    alt={title}
                    width={0}
                    height={0}
                    layout="responsive"
                    objectFit="contain"
                    className={styles.blogTileImageBox}
                />
                <div className={styles.blogTileContent}>
                    <div className={styles.blogTileMeta}>{date}</div>
                    <h3 className={styles.blogTileTitle}>{title}</h3>
                    <p className={styles.blogTileDescription}>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogTile;
