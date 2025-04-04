import { useState, useEffect } from "react";
import image1 from "../assets/DSC00046 2.png";
import image2 from "../assets/DSC00044 2.png";
import image3 from "../assets/DSC00047 1.png";

const images = [image1, image2, image3];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [started, setStarted] = useState(false);

  // Splash screen timing: progress duration + fade-out delay.
  const splashDuration = 2000; // e.g. 5000ms for the progress bar
  const splashFadeDelay = 500; // extra 500ms fade-out time
  const totalSplashTime = splashDuration + splashFadeDelay; // 5500ms

  // Delay starting the image slider until the splash screen is done
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, totalSplashTime);
    return () => clearTimeout(delayTimer);
  }, [totalSplashTime]);

  useEffect(() => {
    if (!started) return; // don't start the slider until after the delay
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFadingOut(false);
      }, 500); // 500ms fade transition duration
    }, 3000); // Change image every 3000ms
    return () => clearInterval(interval);
  }, [started]);

  return (
    <img
      src={images[index].src}
      alt="Animated Profile"
      className={`w-11/12 sm:w-full lg:w-full sm:h-[800px] object-cover bottom-0 rounded-b-[30px] transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      loading="lazy"
    />
  );
};

export default ImageSlider;
