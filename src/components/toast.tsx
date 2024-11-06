import React from "react";
import {Toaster} from "react-hot-toast";

const Toast: React.FC = () => {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 5000,
                style: {
                    top: "4rem",
                    right: "2rem",
                    width: "30rem",
                    background: "#333",
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "1rem",
                },
                success: {
                    icon: "✅",
                },
                error: {
                    icon: "❗️",
                },
            }}
        />
    );
};

export default Toast;
