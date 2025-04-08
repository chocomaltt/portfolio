import { useState, useEffect } from "react";

const textOptions = [
  "Reza Arya Wijaya 👋🏼",
  "an Informatics Engineering Student 💻",
  "a Junior Machine Learning Engineer 🤖",
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const splashDuration = 3000;
  const splashFadeDelay = 500;
  const totalSplashTime = splashDuration + splashFadeDelay;

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), totalSplashTime);
    return () => clearTimeout(delayTimer);
  }, [totalSplashTime]);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsVisible(true);
      }, 500);
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
