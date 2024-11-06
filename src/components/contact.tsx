import React, {useState} from "react";
import styles from "../styles/contact.module.css";
import toast from "react-hot-toast";
import {CONTACT_RESPONSE} from "@/constants/contact";

const Contact: React.FC = () => {
    const [message, setMessage] = useState("");
    const sendHandler = () => {
        setMessage("");
        toast.success(CONTACT_RESPONSE);
    };
    return (
        <div className={styles.contact}>
            <header>
                <h2 className={styles.contactTitle}>I&apos;m Here</h2>
            </header>
            <div>
                <iframe
                    className={styles.mapContent}
                    src="https://maps.google.com/maps?width=100%&amp;height=256&amp;hl=en&amp;&q=Kodungallur%2C%20Kerala&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                />
            </div>
            <header>
                <h2 className={styles.contactTitle}>Say Hi!</h2>
            </header>
            <div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required={true}
                    className={styles.contactMessage}
                    value={message ? undefined : message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className={styles.contactBtn} onClick={sendHandler}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Contact;
