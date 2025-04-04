import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  duration?: number; // Duration (in ms) for progress to reach 100%
}

const SplashScreen: React.FC<SplashScreenProps> = ({ duration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  // Increment progress until reaching 100%
  useEffect(() => {
    const interval = 50;
    const increment = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  // Hide splash screen after progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setShowSplash(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
        >
          <div className="relative w-3/4 md:w-1/2 lg:w-1/3 h-8 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-50 rounded-l-full"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 wave-overlay rounded-l-full" />
            </div>
            {/* Progress text */}
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold">
              {Math.round(progress)}%
            </div>
          </div>
          <style>
            {`
              .wave-overlay {
                background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='20' viewBox='0 0 120 20'%3E%3Cpath fill='orange' d='M0 10 Q30 0 60 10 T120 10 V20 H0 Z'/%3E%3C/svg%3E") repeat-x;
                opacity: 0.5;
                animation: wave 2s linear infinite;
              }
              @keyframes wave {
                from {
                  background-position: 0 0;
                }
                to {
                  background-position: 120px 0;
                }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
