import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../HOC";
import { languages, technologies } from "../constants";

const SkillIcon = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.25, 1.5)}>
      <div className="px-6 py-4">
        <div className="flex flex-col items-center justify-center rounded-lg">
          <img src={icon} alt={name} className="w-16 h-16 mb-2" />
          <span className="text-sm text-center">{name}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className={`mx-auto items-start`}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.skillsHeadText} justify-center flex md:justify-center md:flex items-center lg:flex-none lg:justify-normal`}>Languages</h2>
      </motion.div>

      {/* <motion.div
        // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        // className='mt-4 text-secondary text-[17px] full-width leading-[30px] items-center lg:flex lg:justify-normal lg:flex-row md:justify-center md:flex-col sm:flex-col'
        className="mt-4 text-secondary text-[17px] flex items-center"
      > */}
      <div className="full-width items-center justify-center flex flex-wrap">
        {languages.map((language, index) => (
          <SkillIcon
            index={index}
            name={language.name}
            icon={language.icon}
          />
        ))}
      </div>
      {/* </motion.div> */}

      <div className="py-5"></div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.skillsHeadText} justify-center flex md:justify-center md:flex lg:flex-none lg:justify-normal`}>Tools & Technologies</h2>
      </motion.div>

      {/* <motion.div
        // variants={fadeIn("", "", 0.1, 1)}
        // className='mt-4 text-secondary text-[17px] full-width leading-[30px] items-center lg:flex lg:justify-normal lg:flex-row md:justify-center md:flex-col sm:flex-col'
        className="mt-4 text-secondary text-[17px] flex items-center"
      > */}
      <div className="full-width items-center justify-center flex flex-wrap">
        {technologies.map((tech, index) => (
          <SkillIcon
            index={index}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>

      {/* </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Tech, "technologies")