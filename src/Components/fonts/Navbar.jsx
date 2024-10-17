import React, { useState } from 'react'

const Navbar = ({ isDark, setDark }) => {
    const [isBar, setBar] = useState(false);
    const [isActive, setActive] = useState("home");
    return (
        <nav className=' fixed w-full dark:bg-white dark:text-black text-white bg-black px-5 py-2 flex justify-between items-center shadow-md z-50 transition-all duration-[.7s] delay-[0.4s]'>
            <div className='absolute left-0 w-full h-2 -bottom-2 flex items-start bg-transparent backdrop-blur-3xl'>
                <div className='middle bg-black dark:bg-white h-full w-[20%] relative'>
                    <div className='inner absolute dark:bg-white bg-black h-full w-10' />
                </div>
                <div className='flex h-full gap-x-3 flex-1 items-end dark:*:bg-white'>
                    <div className=' middle bg-black h-[50%] w-[30%]'></div>
                    <div className='middle bg-black h-[50%] w-[5%] '></div>
                    <div className='middle bg-black h-[50%] w-[5%]'></div>
                    <div className='middle bg-black h-[50%] w-[5%]'></div>
                    <div className='middle bg-black h-[50%] w-[5%]'></div>
                    <div className='middle bg-black h-[50%] w-[5%]'></div>
                    <div className='middle bg-black h-[50%] w-[5%]'></div>
                    <div className='middle bg-black h-[70%] w-[40%]'>
                        <div className='inner absolute dark:bg-white bg-black h-full w-10 right-0' />
                    </div>
                </div>
            </div>
            <h1 className='myfont text-xl font-semibold'>sayeed</h1>

            <ul className={`
        *:px-2 *:md:text-[0.6rem] *:tracking-wide *:text-[1.3rem] 
        flex flex-col px-5 myfont5 absolute w-full min-h-screen  bg-white dark:bg-black text-black dark:text-white top-[51.2px] pt-5 transition-all duration-[0.5s]
        md:px-0 md:flex-row md:static md:w-auto md:min-h-0 md:bg-transparent md:text-white dark:md:bg-transparent dark:md:text-black md:pt-0
        ${isBar ? "right-0" : "right-[-100%] "}
        `}>
                <li className={`${isActive === "home" ? "md:border-white dark:md:border-black md:border-b-2" : "md:border-none"} ${isBar ? "translate-x-[0px] opacity-[1] " : "translate-x-[100px]   opacity-0 md:opacity-[1]"} transition-all md:transition-none duration-[0.2s] delay-[0.1s] md:translate-x-[0px]`}>
                    <a href="/#">
                        <button onClick={() => { setActive("home"); setBar(false) }}>
                            <span className='text-[3rem] myfont3 md:hidden'>00.</span>
                            <span className='text-[2rem] md:text-[1rem] font-semibold'>h</span>
                            <span>OME</span>
                        </button>
                    </a>
                </li>
                <li className={`${isActive === "about" ? "md:border-white dark:md:border-black md:border-b-2" : "md:border-none"} ${isBar ? "translate-x-[0px]  opacity-[1] " : "translate-x-[100px]  opacity-0 md:opacity-[1]"} transition-all duration-[0.2s] md:transition-none delay-[0.2s] md:translate-x-[0px]`}>
                    <a href="/#About">
                        <button onClick={() => { setActive("about"); setBar(false) }}>
                            <span className='text-[3rem] myfont3 md:hidden'>01.</span>
                            <span className=' text-[2rem] md:text-[1rem] font-semibold'>a</span>
                            <span>BOUT</span>
                        </button>
                    </a>
                </li>
                <li className={`${isActive === "projects" ? "md:border-white dark:md:border-black md:border-b-2" : "md:border-none"} ${isBar ? "translate-x-[0px]  opacity-[1] " : "translate-x-[100px] opacity-0 md:opacity-[1]"} transition-all duration-[0.2s] md:transition-none delay-[0.3s] md:translate-x-[0px]`}>
                    <a href="#Projects">
                        <button onClick={() => { setActive("projects"); setBar(false) }}>
                            <span className='text-[3rem] myfont3 md:hidden'>10.</span>
                            <span className='text-[2rem] md:text-[1rem] font-semibold'>p</span>
                            <span>ROJECTS</span>
                        </button>
                    </a>
                </li>
                <li className={`${isActive === "contact" ? "md:border-white dark:md:border-black md:border-b-2" : "md:border-none"} ${isBar ? "translate-x-[0px] opacity-[1" : "translate-x-[100px]  opacity-0 md:opacity-[1]"} transition-all duration-[0.2s] md:transition-none delay-[0.4s] md:translate-x-[0px]`}>
                    <a href="/#">
                        <button onClick={() => { setActive("contact") }}>
                            <span className='text-[3rem] myfont3 md:hidden'>11.</span>
                            <span className='text-[2rem] md:text-[1rem] font-semibold'>c</span>
                            <span>ONTACT</span>
                        </button>
                    </a>
                </li>
                <div className='md:hidden absolute top-5 right-5'>
                    {isDark ?
                        <button onClick={() => { setDark(!isDark); setTimeout(() => { setBar(false) }, 1000) }} className='w-12 aspect-square p-2.5'>
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#000"><path fill='#FFF' d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                        </button>
                        :
                        <button onClick={() => { setDark(!isDark); setTimeout(() => { setBar(false) }, 1000) }} className='w-12 aspect-square p-2.5 '>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill='#000' d="m283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23a258.156 258.156 0 0 0 -46.775-4.28c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" /></svg>
                        </button>
                    }
                </div>
            </ul>
            <div className='flex items-center gap-x-5'>
                <button className="myfont5 hidden md:block bg-white dark:bg-black dark:text-white text-black px-5 py-1 relative before:block before:absolute before:inset-1 before:-z-10 before:border-r-[1px] before:border-b-[1px] before:border-white dark:before:border-black before:-right-[2px] before:-bottom-[2px] active:before:-translate-x-[2px] active:before:-translate-y-[2px] active:translate-x-[1px] active:translate-y-[1px]"><span className='text-[1.3rem]'>H</span><span className='font-semibold'>ire</span> <span className='text-[1.3rem]'>M</span><span className='font-semibold'>e</span></button>
                {isDark ?
                    <button onClick={() => { setDark(!isDark) }} className='w-10 aspect-square p-2.5 hidden md:block'>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#000"><path fill='#000' d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                    </button>
                    :
                    <button onClick={() => { setDark(!isDark) }} className='w-10 aspect-square p-2.5 hidden md:block'>
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill='#FFF' d="m283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23a258.156 258.156 0 0 0 -46.775-4.28c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" /></svg>
                    </button>
                }
            </div>
            <button onClick={() => { setBar(!isBar) }} className="md:hidden myfont5 w-[2.2rem] aspect-square bg-white dark:bg-black dark:text-white text-black p-2 relative before:block before:absolute before:inset-1 before:-z-10 before:border-r-[1px] before:border-b-[1px] before:border-white dark:before:border-black before:-right-[2px] before:-bottom-[2px] active:before:-translate-x-[2px] active:before:-translate-y-[2px] active:translate-x-[1px] active:translate-y-[1px]">
                <svg className='rotate-[180deg]' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={`${isDark ? "#FFF" : "#000"}`} d="m16 128h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16h-416c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16zm480 80h-416c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176h-416c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z" /></svg>
            </button>
        </nav>
    )
}

export default Navbar