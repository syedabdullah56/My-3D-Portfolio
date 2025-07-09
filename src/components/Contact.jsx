import React,{ useState,useRef} from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
//public key: 3eL71LK8onLeVlWRj
//template_v1pjfiy
//service_0a0crwj
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name,value}=e.target;
    setForm({
      ...form,
      [name]:value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_0a0crwj',
                'template_v1pjfiy',
                {
                  from_name: form.name,
                  to_name: 'Abdullah',
                  from_email: form.email,
                  to_email: 'syedabdullah8750@gmail.com',
                  message: form.message
                },
                '3eL71LK8onLeVlWRj'
              ).then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible!');
                setForm({
                  name: '',
                  email: '',
                  message: ''
                });
              }).catch((error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong.');
              });
            }
  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="contact flex-[0.75] bg-[#100d25] p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="form mt-12 flex flex-col gap-8">
            <label className=' flex flex-col'>
              <span className='sp text-white font-medium mb-4'>Your Name</span>
              <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='label bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
              placeholder="What's your name?"
            />
            </label>

            <label className=' flex flex-col'>
              <span className='sp text-white font-medium mb-4'>Your Email</span>
              <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='label bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
              placeholder="What's your email?"
            />
            </label>

            <label className=' flex flex-col'>
              <span className='sp text-white font-medium mb-4'>Your Message</span>
              <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              className='label bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
              placeholder="What do you want to say?"
            />
            <button
            type='submit'
            className='bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl'>
               {loading ? "Sending..." : "Send"}
            </button>
            </label>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");