import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
 
   
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='w-[42%]  sm:w-[250px] md:w-[220px] max-w-[90vw] '>
       <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-4 px-6 min-h-[220px] sm:min-h-[280px] flex justify-evenly items-center flex-col'

        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
       </motion.div>
    </Tilt>
  )
}
const About = () => { 
  return ( 
    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4  text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
      I'm a passionate full-stack developer who builds fast, modern, and responsive web applications — from pixel-perfect user interfaces to scalable back-end systems. With a strong foundation in both front-end and back-end technologies, I turn ideas into seamless digital experiences. Always curious, always evolving — let’s build something remarkable together.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 relative top-[2vh]'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>   
           ))}
    </div>
   
    </>
  )
}

export default SectionWrapper(About, "about");