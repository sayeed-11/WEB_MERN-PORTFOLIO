import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Links from '../Links';

const Signup = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [message, setMessage] = useState("");
  const [isShow, setIsShow] = useState(false);

  const navigation = useNavigate();

  //EROOR HANDLE
  const [error, setError] = useState('');
  const validateEmail = (email) => {
    // Regular expression for validating an email
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };


  //FOCUS
  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  }
  const handleFocusPassword = () => {
    setIsFocusedPassword(true);
  }
  const handleFocusConfirmPassword = () => {
    setIsFocusedConfirmPassword(true);
  }




  //BLUR
  const handleBlurEmail = (e) => {
    const { value } = e.target;
    if (value === "") {
      setIsFocusedEmail(false);
    }
    if (value !== "") {
      if (validateEmail(value)) {
        setError('');
      } else {
        setError('Please enter a valid email address.');
      }
    }else{
      setError('');
    }
  }
  const handleBlurPassword = () => {
    if (formData.password === "") {
      setIsFocusedPassword(false);
    }
  }
  const handleBlurConfirmPassword = () => {
    if (formData.confirmPassword === "") {
      setIsFocusedConfirmPassword(false);
    }
  }



  //VALUE
  const handleEmail = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handlePassword = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleConfirmPassword = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }


  //SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if ((formData.email !== "" && validateEmail(formData.email) ) && formData.password !=="" && formData.confirmPassword !== "") {
      const response = await  axios.post("http://localhost:3001/SignUp",{
        formData
      });
      const data = response.data;
      setMessage(data.result)
      setIsShow(true);
      clearData();
      clearMessage();
      // if(data.response){
      //   // console.log(data.result);
      // }else{
      //     // setMessage(data.response)
      // }
    }
  }

  //CLEAR
  const clearData = () => {
    setIsFocusedEmail(false);
    setIsFocusedPassword(false);
    setIsFocusedConfirmPassword(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  //CLEAR MESSAGE
  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
      setIsShow(false);
    }, 3000)
  }



  return (
    <div className='w-full min-h-screen bg-slate-100 flex justify-center items-center font-Rajdhani flex-col gap-y-5'>
      <Links/>
      {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
      {isShow && <h1 className={`w-[300px] bg-white text-center py-3 shadow-md font-semibold ${message[0] === "U" ? "text-red-500" : "text-lime-500"}`}>{message}</h1>}
      <div className='w-[300px] space-y-8 bg-white p-5 shadow-md'>
        <h1 className='font-extrabold text-3xl'>SIGN UP</h1>
        <form onSubmit={handleSubmit} className='space-y-8' action="">
          <div className={`relative border-b-[1.5px] ${isFocusedEmail ? "border-violet-700" : "border-black"} transition-all`}>
            <input
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
              onChange={handleEmail}
              className={`w-full ${isFocusedEmail ? "bg-violet-700/[0.1]" : "bg-transparent"} py-1.5 outline-none font-semibold px-1`} type="email" name="email" value={formData.email} />
            <label className={`absolute left-1 ${isFocusedEmail ? "-top-2 text-xs text-violet-700" : "top-[50%] text-sm"} -translate-y-[50%] pointer-events-none font-bold transition-all`} htmlFor="">EMAIL</label>
            {error && <p className='absolute -bottom-4 text-[0.65rem] font-bold text-red-500'>{error}</p>}
          </div>
          <div className={`relative border-b-[1.5px] ${isFocusedPassword ? "border-violet-700" : "border-black"} transition-all`}>
            <input
              onFocus={handleFocusPassword}
              onBlur={handleBlurPassword}
              onChange={handlePassword}
              className={`w-full ${isFocusedPassword ? "bg-violet-700/[0.1]" : "bg-transparent"} py-1.5 outline-none font-bold px-1`} type="password" name="password" value={formData.password} />
            <label className={`absolute left-1 ${isFocusedPassword ? "-top-2 text-xs text-violet-700" : "top-[50%] text-sm"} -translate-y-[50%] pointer-events-none font-bold transition-all`} htmlFor="">PASSWORD</label>
          </div>
          <div className={`relative border-b-[1.5px] ${isFocusedConfirmPassword ? "border-violet-700" : "border-black"} transition-all`}>
            <input
              onFocus={handleFocusConfirmPassword}
              onBlur={handleBlurConfirmPassword}
              onChange={handleConfirmPassword}
              className={`w-full ${isFocusedConfirmPassword ? "bg-violet-700/[0.1]" : "bg-transparent"} py-1.5 outline-none font-bold px-1`} type="password" name="confirmPassword" value={formData.confirmPassword} />
            <label className={`absolute left-1 ${isFocusedConfirmPassword ? "-top-2 text-xs text-violet-700" : "top-[50%] text-sm"} -translate-y-[50%] pointer-events-none font-bold transition-all`} htmlFor="">CONFIRM PASSWORD</label>
          </div>
          <button className='w-full bg-violet-700 text-white py-1.5 shadow-md' type='submit'>SIGN UP</button>
        </form>
        <div className='flex items-center gap-x-2 text-sm'>
          <p className='font-semibold'>Already have an account ? </p>
          <button onClick={() => { navigation('/') }} className='text-violet-700 font-bold'>LOG IN</button>
        </div>
      </div>

    </div>
  )
}

export default Signup