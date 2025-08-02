import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div className='mainBox relative w-[28vw] max-sm:w-[70vw] h-[65vh] max-sm:h-[50vh] rounded-[15px] border-2 flex flex-col items-center gap-3 pt-7 backdrop-blur-sm'>
      <div className='relative font-[900] mb-2.5'><h1 >Create an Account</h1></div>
      <div className='w-[85%] h-[80%]'>
        <form action="submit" className="flex flex-col justify-around items-center h-full">
          <input type="text" name="name" id="name" placeholder='Full Name' />
          <input type="text" name="mail" id="mail" placeholder='Email Address' />
          <input type="password" name="pass" id="pass" placeholder='Password' />
          <input type="password" name="cpass" id="cpass" placeholder='Confirm Password' />
          <div className='flex felx-row w-full gap-2'><input type="checkbox" name='tnc' id='tnc' className='w-[4%]' /> <label htmlFor="tnc">I agree to terms and conditions</label></div>
          <button className='w-full h-[15%] rounded-xl'>REGISTER</button>
          <p>Already have an account? <a href="" className=' underline'>Log In</a></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
