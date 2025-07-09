import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='tech w-full flex flex-col gap-y-[4vh]'>
      {/* Animated Heading */}
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>
          My Tech Stack
        </h2>
        <p className='text-gray-400 mt-2 text-sm sm:text-base max-w-lg'>
          Tools and technologies I use to build modern and responsive web applications
        </p>
      </motion.div>

      {/* Animated Icons */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        className='flex flex-wrap justify-start gap-6 sm:gap-8 '
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-[#1f1f1f] rounded-xl shadow-lg hover:scale-110 transition-transform duration-300'
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-3/4 h-3/4 object-contain'
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
