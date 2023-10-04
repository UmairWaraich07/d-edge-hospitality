/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// eslint-disable-next-line react/prop-types
function AnimatedText({ text, className = "" }) {
  return (
    <div className="w-full mx-auto flex items-center justify-center text-center overflow-hidden py-2 sm:py-0">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} font-inter leading-[40px] tracking-[0px] text-4xl md:text-5xl font-bold`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
