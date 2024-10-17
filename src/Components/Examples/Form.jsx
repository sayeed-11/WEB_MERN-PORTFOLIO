import React, { useState } from 'react'
import Links from '../Links'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        dob: "",
        hobbies: "",
    })

    const [error, setError] = useState({})



    const hasCheckBoxdata = (name) => {
        for (let i = 0; i < formData.interests.length; i++) {
            if (formData.interests[i] === name)
                return true;
        }
        return false;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const checkInterest = (array) => {
        return array.length !== 0;
    }

    const checkvalidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const checkPhoneNumberValidation = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;

        return phoneRegex.test(phoneNumber);
    }

    function validatePassword(password) {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[@$!%*?&]/;
        const minLengthRegex = /.{8,}/;

        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        const isMinLength = minLengthRegex.test(password);

        return hasUppercase && hasLowercase && hasDigit && hasSpecialChar && isMinLength;
    }

    const isValidForm = () => {
        let newError = {};
        if (!formData.firstName) {
            newError.firstName = "Please enter your first name"
        }
        if (!formData.lastName) {
            newError.lastName = "Please enter your last Name"
        }
        if (!formData.email) {
            newError.email = "Please enter your email"
        } else {
            if (!checkvalidEmail(formData.email)) {
                newError.email = "Please enter valid email"
            }
        }
        if (!formData.phoneNumber) {
            newError.phoneNumber = "Please enter your phone number"
        } else {
            if (!checkPhoneNumberValidation(formData.phoneNumber)) {
                newError.phoneNumber = "Phone number must be 10 digits"
            }
        }
        if (!formData.password) {
            newError.password = "Please enter your password"
        } else {
            if (!validatePassword(formData.password)) {
                newError.password = "Please enter a valid password"
            }
        }
        if (!formData.confirmPassword) {
            newError.confirmPassword = "Please enter your confirm password"
        } else {
            if (formData.confirmPassword !== formData.password) {
                newError.confirmPassword = "Password must be same"
            }
        }
        if (!formData.age) {
            newError.age = "Please enter your age"
        }
        if (!formData.gender) {
            newError.gender = "Please choose your gender"
        }
        if (!checkInterest(formData.interests)) {
            newError.interests = "Please choose any option"
        }
        if (!checkInterest(formData.dob)) {
            newError.dob = "Please enter your date of birth"
        }
        if (!checkInterest(formData.hobbies)) {
            newError.hobbies = "Please choose your hobbie"
        }

        setError({
            ...newError
        })
        return Object.keys(newError).length === 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidForm()) {
            console.log(true);
            console.log(error);
        } else {
            console.log(false);
            console.log(error);
        }
    }
    const handleCheckBox = (e) => {
        const { name, checked } = e.target;
        let updateInterest = formData.interests;
        if (checked) {
            updateInterest.push(name);
        } else {
            updateInterest = updateInterest.filter((val) => { return val !== name });
        }
        setFormData({
            ...formData,
            interests: updateInterest,
        })
    }

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            age: "",
            gender: "",
            interests: [],
            dob: "",
            hobbies: "",
        })
    }


    return (
        <div className='w-full min-h-screen bg-slate-100 flex justify-center items-center'>
            <Links/>
            <form  onReset={handleReset} onSubmit={handleSubmit} className='bg-white shadow-md p-4 font-Rajdhani font-semibold space-y-5 sm:space-y-8 w-[600px]' action="">
                <h1 className='text-3xl font-bold text-violet-700'>FORM</h1>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.firstName ? "text-red-500" : "text-violet-700 "} `} htmlFor="">First Name</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.firstName ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="text" name='firstName' placeholder='Enter Your First Name' value={formData.firstName} />
                        <p className='text-xs text-red-500'>{error.firstName}</p>
                    </div>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.lastName ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Last Name</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.lastName ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="text" name='lastName' placeholder='Enter Your Last Name' value={formData.lastName} />
                        <p className='text-xs text-red-500'>{error.lastName}</p>
                    </div>
                </div>



                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.email ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Email</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.email ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="text" name='email' placeholder='Enter Your Email id' value={formData.email} />
                        <p className='text-xs text-red-500'>{error.email}</p>
                    </div>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.phoneNumber ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Phone Number</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.phoneNumber ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="tel" name='phoneNumber' placeholder='Enter Your Phone Number' value={formData.phoneNumber} />
                        <p className='text-xs text-red-500'>{error.phoneNumber}</p>
                    </div>
                </div>



                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.password ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Passowrd</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.password ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="password" name='password' placeholder='Enter Your Password' value={formData.password} />
                        <p className='text-xs text-red-500'>{error.password}</p>
                    </div>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.confirmPassword ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Confirm Passowrd</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.confirmPassword ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="password" name='confirmPassword' placeholder='Re-enter Your Password' value={formData.confirmPassword} />
                        <p className='text-xs text-red-500'>{error.confirmPassword}</p>
                    </div>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.age ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Age</label>
                        <input onChange={handleChange} className={`border-[1.5px] outline-none py-2 px-2 group ${error.age ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} type="number" name='age' placeholder='Enter Your Age' value={formData.age} />
                        <p className='text-xs text-red-500'>{error.age}</p>
                    </div>


                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.gender ? "text-red-500" : "text-violet-700 "} `} htmlFor="">gender</label>
                        <select onChange={handleChange} className={`bg-transparent border-[1.5px] outline-none py-[0.57rem] px-2 group ${error.gender ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} name="gender" id="" value={formData.gender}>
                            <option value="">Choose gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        <p className='text-xs text-red-500'>{error.gender}</p>
                    </div>
                </div>


                <div className=''>
                    <div className='flex items-center flex-wrap gap-x-5'>
                        <label className='text-violet-700 text-xl' htmlFor="">Interest :</label>
                        <div className='flex items-center flex-wrap gap-x-5'>
                            <div className='flex items-center gap-x-1'>
                                <div className='flex items-center justify-center relative'>
                                    <input className='bg-transparent appearance-none checked:bg-violet-700 checked:border-slate-300 checked:shadow-md w-4 h-4 border-[1.5px] border-black' onChange={handleCheckBox} type="checkbox" name='coding' />
                                    {hasCheckBoxdata("coding") && <svg className='absolute scale-[0.7] pointer-events-none' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" id="tick"><path fill="#FFF" fill-rule="evenodd" d="M16.7724 5.21182C17.0696 5.5003 17.0767 5.97513 16.7882 6.27236L8.53819 14.7724C8.39571 14.9192 8.19945 15.0014 7.99489 15C7.79032 14.9986 7.5952 14.9137 7.45474 14.765L3.20474 10.265C2.92033 9.96383 2.9339 9.48915 3.23503 9.20474C3.53617 8.92033 4.01085 8.93389 4.29526 9.23503L8.0074 13.1655L15.7118 5.22764C16.0003 4.93041 16.4751 4.92333 16.7724 5.21182Z" clip-rule="evenodd"></path></svg>}
                                </div>
                                <label htmlFor="">Coding</label>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <div className='flex justify-center items-center relative'>
                                    <input className='bg-transparent appearance-none checked:bg-violet-700 checked:border-slate-300 checked:shadow-md w-4  h-4 border-[1.5px] border-black' onChange={handleCheckBox} type="checkbox" name='sports' />
                                    {hasCheckBoxdata("sports") && <svg className='absolute scale-[0.7] pointer-events-none' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" id="tick"><path fill="#FFF" fill-rule="evenodd" d="M16.7724 5.21182C17.0696 5.5003 17.0767 5.97513 16.7882 6.27236L8.53819 14.7724C8.39571 14.9192 8.19945 15.0014 7.99489 15C7.79032 14.9986 7.5952 14.9137 7.45474 14.765L3.20474 10.265C2.92033 9.96383 2.9339 9.48915 3.23503 9.20474C3.53617 8.92033 4.01085 8.93389 4.29526 9.23503L8.0074 13.1655L15.7118 5.22764C16.0003 4.93041 16.4751 4.92333 16.7724 5.21182Z" clip-rule="evenodd"></path></svg>}
                                </div>
                                <label htmlFor="">Sports</label>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <div className='flex justify-center items-center relative'>
                                    <input className='bg-transparent appearance-none checked:bg-violet-700 checked:border-slate-300 checked:shadow-md w-4 h-4 border-[1.5px] border-black' onChange={handleCheckBox} type="checkbox" name='reading' />
                                    {hasCheckBoxdata("reading") && <svg className='absolute scale-[0.7] pointer-events-none' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" id="tick"><path fill="#FFF" fill-rule="evenodd" d="M16.7724 5.21182C17.0696 5.5003 17.0767 5.97513 16.7882 6.27236L8.53819 14.7724C8.39571 14.9192 8.19945 15.0014 7.99489 15C7.79032 14.9986 7.5952 14.9137 7.45474 14.765L3.20474 10.265C2.92033 9.96383 2.9339 9.48915 3.23503 9.20474C3.53617 8.92033 4.01085 8.93389 4.29526 9.23503L8.0074 13.1655L15.7118 5.22764C16.0003 4.93041 16.4751 4.92333 16.7724 5.21182Z" clip-rule="evenodd"></path></svg>}
                                </div>
                                <label htmlFor="">Reading</label>
                            </div>
                        </div>
                    </div>
                    <p className='text-xs text-red-500 w-[full]'>{error.interests}</p>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.dob ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Date of Birth</label>
                        <input onChange={handleChange} className={`bg-transparent w-full border-[1.5px] outline-none py-2 px-2 group ${error.dob ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} placeholder='DD/MM/YYYY' type="date" name='dob' value={formData.dob} />
                        <p className='text-xs text-red-500'>{error.dob}</p>
                    </div>
                    <div className='flex flex-col relative'>
                        <label className={`absolute -top-2 text-xs left-2 bg-white px-1 ${error.hobbies ? "text-red-500" : "text-violet-700 "} `} htmlFor="">Hobbies</label>
                        <select onChange={handleChange} className={`bg-transparent border-[1.5px] outline-none py-[0.57rem] px-2 group ${error.hobbies ? "border-red-500" : "border-violet-700"} placeholder:text-xs`} name="hobbies" value={formData.hobbies} id="">
                            <option value="">Choose Hobbie</option>
                            <option value="male">Listenig music</option>
                            <option value="female">Playing games</option>
                            <option value="female">Reading books</option>
                            <option value="female">Watching movies</option>
                            <option value="others">Others</option>
                        </select>
                        <p className='text-xs text-red-500'>{error.hobbies}</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-x-5 *:bg-violet-700 *:py-2 *:text-white'>
                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default Form