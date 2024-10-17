import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Links from './Links';

const SignUp = () => {
  const navigation = useNavigate()
  const [user, setUser] = useState({
    email : "",
    password : "",
    confirmPassword : ""
  })
  const handleChange = (e) => {
  e.preventDefault();
    const {name, value} = e.target;

    setUser({
      ...user,
      [name] : value
    })

  }

  const submitForm = async () => {
    const response = await  axios.post("http://localhost:3001/SignUp",{
      user
    });
    const data = response.data;
    // console.log(data.response);
    if(data.response){
      alert("user is exist")
      navigation('/LogIn')
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-black text-white'>
      <Links/>
      <div className='flex flex-col gap-y-5 bg-yellow-900 px-5 py-3 w-[400px]'>
        <h1 className='font-bold italic text-2xl'>SIGN UP</h1>
        <div className='space-y-5' >
          <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input onChange={handleChange} className='py-2 px-3 text-black' type="text" name='email' value={user.email} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input onChange={handleChange} className='py-2 px-3 text-black' type="password" name='password' value={user.password}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Confirm Password</label>
            <input onChange={handleChange} className='py-2 px-3 text-black' type="password" name='confirmPassword' value={user.confirmPassword}/>
          </div>
          <button onClick={submitForm} className='bg-white text-yellow-900 w-full py-2'>SIGN UP</button>
        </div>
        <div className='space-y-1'>
          <p>Already have an account?</p>
          <button onClick={() => {
            navigation('/LogIn')
          }} className='bg-red-500 px-3 py-1'>LOG IN</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp