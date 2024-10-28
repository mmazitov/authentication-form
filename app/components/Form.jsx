'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Form = () => {
  const [variant, setVariant] = useState('Login');

  const toggleVariant = () => {
    setVariant(prevVariant => (prevVariant === 'Login' ? 'Signup' : 'Login'));
  };

  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // This will ensure the component re-renders properly on the client side
    setVariant('Login');
  }, []);

  return (
    <motion.form 
      initial="hidden" 
      animate="visible" 
      transition={{ duration: 0.5 }} 
      variants={formVariant} 
      className='flex flex-col items-center gap-[2.5rem] p-4'
    >
      <motion.div 
        className='flex justify-center items-center bg-[#2aa7e1] rounded-full w-16 h-16'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Users className='text-gray-100 size-10' />
      </motion.div>
      <div className='flex flex-col gap-2'>
        {variant === 'Signup' && (
          <input 
            type="text" 
            className='input-field' 
            placeholder='Username' 
          />
        )}
        <input 
          type="email" 
          className='input-field' 
          placeholder='Email' 
        />
        <input 
          type="password" 
          className='input-field' 
          placeholder='Password' 
        />
      </div>
      <button className='submit-button'>
        {variant === 'Login' ? 'Login' : 'Signup'}
      </button>
      <motion.p 
        className='text-center text-sm text-white/40 hover:text-white/60 transition duration-300 cursor-pointer'
        onClick={toggleVariant}
        whileHover={{ scale: 1.05 }}
      >
        {variant === 'Login' 
          ? 'Don’t have an account?' 
          : 'Already have an account? Login'}
      </motion.p>
    </motion.form>
  );
};

export default Form;
