import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className='w-full h-screen mx-auto relative'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col gap-10`}
      >
        {/* Top Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          {/* Left: Hero Text */}
          <div className='flex flex-row gap-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915eff]'>Syed Abdullah</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I build modern full-stack web applications <br className='sm:block hidden' />
                with sleek user interfaces and smooth user experiences.
              </p>
          {/*  Social Links + Resume Download Button*/}
          <div className='links flex flex-row lg:flex-row items-center lg:items-end gap-4 mt-6 lg:mt-0 self-end w-full lg:w-auto justify-start '>
            <a
              href='https://github.com/syedabdullah56'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#915eff] text-xl sm:text-2xl'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/syed-muhammad-abdullah-mahmood-0a88a8266/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#915eff] text-xl sm:text-2xl'
            >
              <FaLinkedin />
            </a>

            <a
              href='/Abdullah-Full-Stack-Dev.pdf'
              download
              className='resume-button bg-[#915eff] text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-[#7b48ff] flex items-center gap-2'
            >
              <BsDownload /> Resume
            </a>
          </div>
            </div>
          </div>

 
        </div>
      </div>

      {/* Canvas */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;











// import {motion} from 'framer-motion';
// import {styles} from '../styles';
// import { ComputersCanvas } from './canvas';
// const Hero = () => {
//   return (
//      <section className='w-full h-screen mx-auto relative left-[1vh] sm:left-[2vh] md:left-[4vh] lg:left-[9vh]'>

//          <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

//             <div className='flex flex-col justify-center items-center mt-5'>
//                 <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
//                 <div className='w-1 sm:h-80 h-40 violet-gradient'/>
//             </div>

//             <div>
//               <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className='text-[#915eff]'>Syed Abdullah</span></h1>
//               <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//                 I build modern full-stack web applications <br className='sm:block hidden'/> with sleek user interfaces and smooth user experiences.
//               </p>
//             </div>
            
//          </div>  

             
//              <ComputersCanvas />
          
//             {/* No need of this now */}
//             {/* <div className='absolute  xs:bottom-3 bottom-1 w-full flex justify-center items-center'>
//               <a href='#about'>
//                 <div className='w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//                   <motion.div
//                     animate={{
//                       y: [0, 24, 0]
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: 'loop'
//                     }}
//                     className='w-3 h-3 rounded-full bg-white mb-1'
//                   >  
//                   </motion.div> 

                  
//                 </div>
//               </a>
//             </div> */}
//      </section>
//   )
// }

// export default Hero