import React from 'react'
import { useState } from 'react'

const Login = () => {

  const[currentState, setCurrentState] = useState('Sign Up');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call for authentication)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex gap-2 items-center mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Name' required /> }
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' required />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="password" placeholder='Password' required />
      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'> Forgot your password?</p>
        {
          currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Don't have an account?</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Already have an account?</p>
        }
      </div>
      <button className='cursor-pointer bg-black text-white w-full py-2 rounded text-sm'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
