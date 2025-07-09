import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, name, designation, company, image, testimonial }) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="feedback-card bg-[#1d1836] p-6 rounded-2xl sm:w-[360px] w-full shadow-lg"
    >
      <p className="text-white font-black text-[40px] mb-4">“</p>
      <p className="text-white text-[16px] leading-[28px]">{testimonial}</p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-white font-semibold text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-sm text-[#aaa6c3]">
            {designation} at {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-16  rounded-[20px] ">
      <div className={`${styles.padding}  rounded-t-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} py-10 flex flex-wrap justify-center gap-6 sm:gap-10 `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial}  />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
