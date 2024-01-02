//components
import Circles from '../../components/Circles'

// icons
import {BsArrowRight} from 'react-icons/bs'

// framer
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'

//email
import emailjs from 'emailjs-com'
import {sendEmail} from './sendemail'

//react
import React, {useState} from 'react';




const Contact = () => {
  const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const handleChange = (event) => {
      setFormData({...formData, [event.target.name]: event.target.value})
    };
    const submitHandler = (e) => {
      e.prventDefault();
      sendEmail(formData);
      setFormData({name: '', email: '', message: ''})
    }
  }
  return (
    <div className='h-full bg-primary/30 '>
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] bg-pink/10'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's  <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            onSubmit={submitHandler}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' value={formData.name} onChange={handleChange}/>
              <input type='mail' placeholder='email' className='input' value={formData.email} onChange={handleChange}/>
            </div>
            <textarea placeholder='message' className='textarea'value={formData.message} onChange={handleChange}></textarea>
            <button
              type='submit' 
              className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y=[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
