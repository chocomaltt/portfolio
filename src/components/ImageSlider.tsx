import { useState, useEffect } from "react";
import image1 from "../assets/DSC00046 2.png";
import image2 from "../assets/DSC00044 2.png";
import image3 from "../assets/DSC00047 1.png";

// Instead of importing Astro's Image component
// use regular img tags or an image component that works with React

const images = [image1, image2, image3];

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFadingOut(false);
            }, 500); // 500ms fade transition
        }, 3000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <img
            src={images[index].src}
            alt="Animated Profile"
            className={`w-full h-[600px] object-cover bottom-0 rounded-b-[30px] transition-opacity duration-500 ${
                isFadingOut ? "opacity-0" : "opacity-100"
            }`}
            loading="lazy"
        />
    );
};

export default ImageSlider;