import Parser from "rss-parser";
import * as cheerio from "cheerio";
import {BlogTileProps} from "../../src/types/blog";
import {MEDIUM_BLOG_IMAGE_REGEX, MEDIUM_URL, CORS_PROXY} from "@/constants/blog";

const extractFirstParagraph = (html: string): string => {
    const $ = cheerio.load(html);
    return $("p").first().text() || "";
};

const safeExtract = (field: string | undefined, defaultValue: string = ""): string => field || defaultValue;

export async function fetchAndParseRSS(): Promise<BlogTileProps[]> {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(CORS_PROXY+MEDIUM_URL);

        return feed.items.map((item) => {
            const contentEncoded = safeExtract(item["content:encoded"]);
            const imageMatch = contentEncoded.match(MEDIUM_BLOG_IMAGE_REGEX);
            return {
                link: safeExtract(item.link),
                image: imageMatch ? imageMatch[1] : "",
                title: safeExtract(item.title),
                date: safeExtract(item.pubDate),
                description: extractFirstParagraph(contentEncoded),
            };
        });
    } catch (error) {
        console.error("Failed to fetch RSS feed:", error);
        throw error;
    }
}
