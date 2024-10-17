import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Links from '../Links';

const Login = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigation = useNavigate();

    //HANDLE FOCUS
    const handleFocusEmail = () => {
        setIsFocusedEmail(true);
    }
    const handleFocusPassword = () => {
        setIsFocusedPassword(true);
    }


    //EROOR HANDLE
    const [error, setError] = useState('');
    const validateEmail = (email) => {
        // Regular expression for validating an email
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };




    //HANDLE BLUR
    const handleBlurEmail = (e) => {
        const { value } = e.target;
        if (formData.email === "") {
            setIsFocusedEmail(false);
        }
        if (value !== "") {
            if (validateEmail(value)) {
                setError('');
            } else {
                setError('Please enter a valid email address.');
            }
        } else {
            setError('');
        }
    }
    const handleBlurPassword = () => {
        if (formData.password === "") {
            setIsFocusedPassword(false);
        }
    }


    //SET VALUE
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


    //SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if ((formData.email !== "" && validateEmail(formData.email)) && formData.password !== "") {
            clearData();
        }
    }

    //CLEAR
    const clearData = () => {
        setIsFocusedEmail(false);
        setIsFocusedPassword(false);
        setFormData({
            email: "",
            password: "",
        })
    }


    return (
        <div className='w-full min-h-screen bg-slate-100 flex justify-center items-center font-Rajdhani flex-col gap-y-10'>
            <Links/>
            {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
            <div className='w-[300px] space-y-8 bg-white p-5 shadow-md'>
                <h1 className='font-extrabold text-3xl'>LOG IN</h1>
                <form onSubmit={handleSubmit} className='space-y-8' action="">
                    <div className={`relative border-b-[1.5px] ${isFocusedEmail ? "border-violet-700" : "border-black"} transition-all`}>
                        <input
                            onFocus={handleFocusEmail}
                            onBlur={handleBlurEmail}
                            onChange={handleEmail}
                            className={`w-full ${isFocusedEmail ? "bg-violet-700/[0.1]" : "bg-transparent"} py-1.5 outline-none font-bold px-1`} type="email" name="email" value={formData.email} />
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
                    <button className='w-full bg-violet-700 text-white py-1.5 shadow-md'>LOG IN</button>
                </form>
                <div className='flex items-center gap-x-2 text-sm'>
                    <p className='font-semibold'>Don't have any account ? </p>
                    <button onClick={() => { navigation('/Signup') }} className='text-violet-700 font-bold'>SIGN UP</button>
                </div>
            </div>

        </div>
    )
}

export default Login