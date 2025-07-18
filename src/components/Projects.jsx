import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {
  
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-[#151030] p-5 rounded-2xl w-[90vw] sm:w-[300px] md:w-[330px] lg:w-[360px] max-w-full'>

         
         <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='object-cover w-full h-full rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                 {/* Github Repo Link */}
                <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                      <img src={github} alt="GitHub" className='w-1/2 h-1/2 object-contain' />
                  </div>

                {/* Live Website Link */}
                <div onClick={() => window.open(live_site_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                      <img  src='https://cdn-icons-png.flaticon.com/512/709/709586.png'  alt="Live" className='w-1/2 h-1/2 object-contain' />
                  </div>
            </div>
         </div>

         <div className='mt-5'>
           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
           <p className='mt-2 text-[#aaa6c3] text-[14px]'>{description}</p>
         </div>

         <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color} font-semibold`}>#{tag.name}</p>
            ))}
         </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
     <motion.div variants={textVariant()} className="mt-[10vh]">
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
       </motion.div>

       <div className='w-full flex'>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
             The following projects demonstrate my skills and experience through real-world applications. Each project includes a concise description along with links to the source code and live demo. They showcase my ability to solve complex problems, adapt to various technologies, and manage development tasks efficiently from start to finish.
          </motion.p>
       </div>

       <div className='projects mt-20 flex flex-wrap gap-7 relative top-[6vh]'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project}/>
          ))}
           
       </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");