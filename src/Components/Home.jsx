import React from 'react'
import { useNavigate } from 'react-router-dom'
import Links from './Links';

const Home = () => {
    const navigation = useNavigate();
  return (
    <div className='w-full min-h-screen relative'>
        <Links/>
        <nav className='fixed top-0 w-full h-[50px] bg-black z-50 text-white flex justify-between items-center px-10 py-1'>
            <h1 className='font-bold italic text-2xl'>NIKE</h1>
            <ul className='flex items-center gap-x-5 text-xs font-bold'>
                <li><button>FEATURE</button></li>
                <li><button>MEN</button></li>
                <li><button>WOMEN</button></li>
                <li><button>KIDS</button></li>
            </ul>
            <button onClick={() => {
                navigation('/LogIn')
            }} className='px-5 h-full bg-red-500 text-sm font-bold rounded-md'>LOG IN / SIGN UP</button>
        </nav>
        <div className='absolute w-full h-full'>
            <img className='w-full h-full object-cover' src={"https://images4.alphacoders.com/632/thumb-1920-632661.jpg"} alt="" />
        </div>
    </div>
  )
}

export default Home