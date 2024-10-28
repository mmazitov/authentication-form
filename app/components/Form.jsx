'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useState } from 'react';

// Form component for login and signup
const Form = () => {
  // State to toggle between Login and Signup
  const [variant, setVariant] = useState('Login');
  
  // Function to toggle form variant
  const toggleVariant = () => {
    setVariant(prevVariant => prevVariant === 'Login' ? 'Signup' : 'Login');
  }

  // Animation variants for the form
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.form 
      initial="hidden" 
      animate="visible" 
      transition={{ duration: .5 }} 
      variants={formVariant} 
      className='flex flex-col items-center gap-[2.5rem] p-4'
    >
      {/* Animated user icon */}
      <motion.div 
        className='flex justify-center items-center bg-[#2aa7e1] rounded-full w-16 h-16'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: .5 }}
      >
        <Users className='text-gray-100 size-10' />
      </motion.div>
      <div className='flex flex-col gap-2'>
        {/* Username input shown only for Signup variant */}
        {variant === 'Signup' && (
          <input 
            type="text" 
            className='input-field' 
            placeholder='Username' 
          />
        )}
        {/* Email input */}
        <input 
          type="email" 
          className='input-field' 
          placeholder='Email' 
        />
        {/* Password input */}
        <input 
          type="password" 
          className='input-field' 
          placeholder='Password' 
        />
      </div>
      {/* Submit button with dynamic text based on the variant */}
      <button className='submit-button'>
        {variant === 'Login' ? 'Login' : 'Signup'}
      </button>
      {/* Link to toggle between Login and Signup */}
      <motion.p 
        className='text-center text-sm text-white/40 hover:text-white/60 transition duration-300 cursor-pointer'
        onClick={toggleVariant}
        whileHover={{ scale: 1.05 }}
      >
        {variant === 'Login' 
          ? 'Don’t have an account' 
          : 'Already have an account? Login'}
      </motion.p>
    </motion.form>
  );
}

export default Form;
