import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MorphingText({ words, duration = 3000 }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            scale: 0.8,
            rotateX: -90,
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            scale: 1.2,
            rotateX: 90,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            filter: {
              duration: 0.6,
            },
            scale: {
              duration: 0.6,
            },
            rotateX: {
              duration: 0.8,
            },
          }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MorphingText;
