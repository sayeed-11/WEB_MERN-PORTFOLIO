import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Links from './Links';


const LogIn = () => {
  const navigation = useNavigate()

  const [user, setUser] = useState({
    email : "",
    password : "",
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
    const response = await  axios.post("http://localhost:3001/LogIn",{
      user
    });
    const data = response.data;
    // console.log(data.response);
    if(data.response){
      navigation('/');
    }
  }
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-black text-white'>
      <Links/>
      <div className='flex flex-col gap-y-5 bg-yellow-900 px-5 py-3 w-[400px]'>
        <h1 className='font-bold italic text-2xl'>LOG IN</h1>
        <div className='space-y-5'>
          <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input onChange={handleChange} className='py-2 px-3 text-black' type="text" name='email' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input onChange={handleChange} className='py-2 px-3 text-black' type="password" name='password' />
          </div>
          <button onClick={submitForm} className='bg-white text-yellow-900 w-full py-2' type='submit'>LOG IN</button>
        </div>
        <div className='space-y-1'>
          <p>Don't have any account?</p>
          <button onClick={() => {
            navigation('/SignUp')
          }} className='bg-red-500 px-3 py-1'>SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default LogIn