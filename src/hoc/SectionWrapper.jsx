import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component,idName) => 
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}   //I have added once false and amount 0.25 to make sure the section is animated when it comes into view
                className={` ${styles.padding} max-w-7xl mx-auto relative left-[2vh] z-0 `}
                >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }


export default SectionWrapper
