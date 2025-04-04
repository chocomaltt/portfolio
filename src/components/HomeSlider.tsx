import { useState, useEffect } from "react";

const textOptions = [
  "Reza Arya Wijaya 👋🏼",
  "an Informatics Engineering Student 💻",
  "a Junior Machine Learning Engineer 🤖",
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  // Set the delay based on splash screen timing:
  const splashDuration = 2000; // or your custom duration value
  const splashFadeDelay = 500;
  const totalSplashTime = splashDuration + splashFadeDelay; // e.g., 5500 ms

  // Delay starting the slider animation until after the splash screen disappears
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), totalSplashTime);
    return () => clearTimeout(delayTimer);
  }, [totalSplashTime]);

  useEffect(() => {
    if (!started) return; // Do not start until after the splash screen is gone
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade-out effect
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsVisible(true); // Fade-in new text
      }, 500); // Match the CSS fade duration
    }, 3000);
    return () => clearInterval(interval);
  }, [started]);

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
