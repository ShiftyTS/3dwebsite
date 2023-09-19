import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../HOC";
import { GithubIcon, Email, LinkedIn, Resume, ResumePDF } from '../assets';

const Contact = () => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
    >
      <div className="flex items-center justify-between">
        <p className='text-white text-[18px] font-bold justify-start'>TAO</p>
        <div className="flex">
          <a href="https://github.com/ShiftyTS" target="_blank">
            <img src={GithubIcon} alt="GitHub" className="h-8 object-scale-down mr-3" />
          </a>
          <a href="https://www.linkedin.com/in/taoshenn/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" className="h-8 object-scale-down mr-3" />
          </a>
          <a href={ResumePDF} target="_blank">
            <img src={Resume} alt="Resume" className="h-8 object-scale-down mr-3" />
          </a>
          <a href="mailto:t5shen@uwaterloo.ca">
            <img src={Email} alt="Email" className="h-8 object-scale-down mr-3" />
          </a>
        </div>
      </div>
    </motion.div >
  )
}

export default SectionWrapper(Contact, "contact");