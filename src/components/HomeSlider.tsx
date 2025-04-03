import { useState, useEffect } from "react";

const textOptions = [
    "Reza Arya Wijaya 👋🏼",
    "an Informatics Engineering Student 💻",
    "a Junior Machine Learning Engineer 🤖",
];

const HomeSlider = () => {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Start fade-out effect
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
                setIsVisible(true); // Fade-in new text
            }, 500); 
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className={`transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {textOptions[index]}
        </span>
    );
};

export default HomeSlider;
