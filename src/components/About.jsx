import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { Picture } from '../assets'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../HOC";

const About = () => {
  return (
    <div className={`mx-auto items-start gap-5`}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} justify-center flex md:justify-center md:flex lg:flex-none lg:justify-normal`}>About me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] full-width flex flex-col items-center lg:flex-row lg:justify-center md:flex-col sm:flex-col"
      >
        <img src={Picture} alt="Lake Picture" className="rounded-full border-2 border-blue-700 h-72 w-72 justify-center object-cover" />
        <p className='sm:py-8 md:px-16 lg:px-12 px-5 py-5 text-[#a9a6c3]'>
          <span className="text-lg">
            Good day! My name is <span className="text-[#5b6ac1]">Tao Shen</span>, I'm a computer science student at the University of Waterloo in Waterloo, Ontario. I'm a passionate learner who loves to develop meaningful solutions to people's challenges.
          </span>
          <br />
          <br />
          Hobbies: Gaming, Personal Fitness, Playing Piano, Exploring New Music
          <br />
          Areas of Interest: Full-Stack Development, iOS Development, Web Development, Artificial Intelligence, Algorithm

        </p>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about")