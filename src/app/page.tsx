import styles from "./page.module.css";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
}
