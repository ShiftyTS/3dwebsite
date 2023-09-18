import React from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextTransition, { presets } from 'react-text-transition';
import { TypeAnimation } from 'react-type-animation';

const animatedTexts = ['Software Developer', 'Full-Stack Developer', 'Web-Developer', 'iOS Developer'];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#426ceb]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroSubText} text-white`}>
            Hi, my name is
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#5b6ac1]'>Tao Shen</span>
          </h1>
          <p className={`${styles.heroAnimatedText} mt-2 text-white-100`}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Software Developer',
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                'Full-Stack Developer',
                3000,
                'iOS Developer',
                3000,
                'Web Developer',
                3000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;