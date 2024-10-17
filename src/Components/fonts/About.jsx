import React from 'react'

const About = ({ isDark }) => {
    return (
        <div id='About' className='w-full min-h-screen px-5 space-y-10 pt-20 dark:bg-black dark:text-white'>
            <Header />
            <AboutMyself />
            <div className='space-y-16 pt-10 '>
                <div className='space-y-3 sm:space-y-5'>
                    <h1 className='myfont5 font-semibold text-[1.1rem] sm:text-xl sticky top-[60px] bg-white dark:bg-black w-[100%] z-10 pt-5'>Programming Languages</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5 sm:gap-y-10'>
                        <HTML isDark={isDark} />
                        <CSS isDark={isDark} />
                        <JS isDark={isDark} />
                        <TS isDark={isDark} />
                        <JAVA isDark={isDark} />
                        <PYTHON isDark={isDark} />
                    </div>
                </div>
                <div className='space-y-3 sm:space-y-5 '>
                    <h1 className='myfont5 font-semibold text-[1.1rem] sm:text-xl sticky top-[60px] bg-white dark:bg-black w-[100%] z-10 pt-5'>Framewors</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5 sm:gap-y-10'>
                        <REACT_JS isDark={isDark} />
                        <REACT_NATIVE isDark={isDark} />
                        <EXPRESS_JS isDark={isDark} />
                        <REDIS isDark={isDark} />
                        <TAILWIND_CSS isDark={isDark} />
                    </div>
                </div>
                <div className='space-y-3 sm:space-y-5'>
                    <h1 className='myfont5 font-semibold sticky top-[60px] bg-white dark:bg-black w-[100%] z-10 pt-5 text-[1.1rem] sm:text-xl'>Databases</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5 sm:gap-y-10'>
                        <MONGODB isDark={isDark} />
                        <MYSQL isDark={isDark} />
                        <MONGOOSE isDark={isDark} />
                        <POSTGRESQL isDark={isDark} />
                    </div>
                </div>
                <div className='space-y-3 sm:space-y-5'>
                    <h1 className='myfont5 font-semibold text-[1.1rem] sm:text-xl sticky top-[60px] bg-white dark:bg-black w-[100%] z-10 pt-5'>Also Expert In </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        <AWS isDark={isDark} />
                        <GRAPH_QL isDark={isDark} />
                        <VSCODE isDark={isDark} />
                        <GITHUB isDark={isDark} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About




const Header = () => {
    return (
        <h1 className='myfont5 text-3xl flex px-5 mb-5 relative w-[65%]'>

            <div className='absolute h-2 w-full -bottom-2 box-skew -left-[3px] flex gap-x-1 '>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[25px]'></div>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[25px]'></div>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[25px]'></div>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[25px]'></div>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[25px]'></div>
                <div className=' h-1 mt-1 bg-black dark:bg-white w-[55px]'></div>
                <div className=' h-2 mt-0 bg-black dark:bg-white w-[100px]'></div>
            </div>


            <div className='box-skew inline bg-black dark:bg-white text-white dark:text-black px-3'>
                <div className='box-skew-reverse'><span>a</span>BOUT</div>
            </div>
            <div className='box-skew px-5 border-b-2 border-black dark:border-white flex items-end '>
                <div className='box-skew-reverse text-xl -ml-2'><span className='font-semibold'>m</span>YSELF</div>
            </div>
        </h1>
    )
}


const AboutMyself = () => {
    return (
        <div className='space-y-5'>
            <h1 className='myfont3 text-xl leading-6'>Hi, I’m <span className='myfont5 font-semibold bg-black dark:bg-white text-white dark:text-black px-3 pt-1 sm:py-1 tracking-wide'>sAYEED aNWAR</span> , a passionate <span className='myfont5 font-semibold bg-black dark:bg-white text-white dark:text-black px-3 pt-1 sm:py-1'>Mern</span> stack web developer. With <span className='myfont5 bg-black dark:bg-white text-white dark:text-black px-3 pt-1 sm:py-1'>2</span> years of experience in full-stack development, I specialize in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js.</h1>
            <h1 className='myfont3 text-xl leading-6'>I hold no such computer science degree but I developed a solid foundation in computer science and web technologies from online resorces and documentations. Over the years, I have honed my skills by working on a variety of projects, ranging from small business websites to large-scale enterprise applications.</h1>
            <div className='space-y-3 pt-5'>
                <h1 className='myfont5 text-xl font-semibold sticky top-[60px] bg-white dark:bg-black w-[100%] z-10 pt-5'>mY cODING jOURNEY</h1>
                <p className='myfont3 text-xl leading-6'>My journey into web development began when I was in second semester in my college. Since then, I’ve been dedicated to mastering the MERN stack, constantly learning and adapting to new technologies and best practices.</p>
            </div>
            <div className='space-y-3 sm:space-y-1'>
                <h1 className='myfont5 text-2xl font-semibold pt-5 sticky top-[60px] bg-white dark:bg-black w-[100%] z-10' >mY sKILLS </h1>
                <div className='flex sm:flex-row flex-col'>
                    <h1 className='myfont3 text-xl bg-black dark:bg-white dark:text-black text-white  px-2 sm:w-[11rem] py-1'>Frontend Development</h1>
                    <p className='myfont3 text-xl bg-black/[0.1] dark:bg-white/[0.2] px-3 flex-1 py-1'>Proficient in React.js, HTML5, CSS3, and JavaScript (ES6+).</p>
                </div>
                <div className='flex sm:flex-row flex-col'>
                    <h1 className='myfont3 text-xl bg-black dark:bg-white dark:text-black text-white px-2 sm:w-[11rem] py-1'>Backend Development</h1>
                    <p className='myfont3 text-xl bg-black/[0.1] dark:bg-white/[0.2] px-3 flex-1 py-1'>Experienced with Node.js, Express.js, and RESTful APIs.</p>
                </div>
                <div className='flex sm:flex-row flex-col'>
                    <h1 className='myfont3 text-xl bg-black dark:bg-white dark:text-black text-white px-2 sm:w-[11rem] py-1'>Database Management</h1>
                    <p className='myfont3 text-xl bg-black/[0.1] dark:bg-white/[0.2] px-3 flex-1 py-1'>Skilled in MongoDB, Mongoose, and data modeling.</p>
                </div>
                <div className='flex sm:flex-row flex-col'>
                    <h1 className='myfont3 text-xl bg-black dark:bg-white dark:text-black text-white px-2 sm:w-[11rem] py-1'>Version Control</h1>
                    <p className='myfont3 text-xl bg-black/[0.1] dark:bg-white/[0.2] px-3 flex-1 py-1'>Proficient in Git and GitHub for version control and collaboration.</p>
                </div>
                <div className='flex sm:flex-row flex-col'>
                    <h1 className='myfont3 text-xl bg-black dark:bg-white dark:text-black text-white px-2 sm:w-[11rem] py-1 items-stretch'>Deployment </h1>
                    <p className='myfont3 text-xl bg-black/[0.1] dark:bg-white/[0.2] px-3 flex-1 py-1'>Familiar with cloud services like AWS, Heroku, and continuous integration/deployment pipelines.</p>
                </div>
            </div>
        </div>
    )
}



const HTML = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full '>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m0 32 34.9 395.8 156.6 52.2 157.6-52.2 34.9-395.8zm308.2 127.9h-183.8l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7l3.5 38.1 53.5 14.5 53.7-14.5 6-62.2h-166.9l-12.8-145.6h241.1z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>HTML</h1>
                    <h1>95%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[4.5%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}



const CSS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m1.5 0h21l-1.91 21.563-8.613 2.437-8.565-2.438zm17.09 4.413-13.18-.003.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855 5.465 1.703 5.373-1.53 1.217-13.344z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>CSS</h1>
                    <h1>95%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[4.5%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}




const JS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m0 0h24v24h-24zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Javascript</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    {/* <div className='h-full w-[9%] bg-black' />
                    <div className='h-full w-[4.5%] bg-black' /> */}
                </div>
            </div>
        </div>
    )
}


const TS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Typescript</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    {/* <div className='h-full w-[9%] bg-black' />
                    <div className='h-full w-[4.5%] bg-black' /> */}
                </div>
            </div>
        </div>
    )
}


const JAVA = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m17.625 3c1.402344 3.308594-5.027344 5.335938-5.625 8.09375-.546875 2.53125 3.808594 5.5 3.8125 5.5-.664062-1.046875-1.148437-1.929687-1.8125-3.5625-1.125-2.757812 6.855469-5.246094 3.625-10.03125zm4.25 4.59375s-5.621094.355469-5.90625 4.03125c-.128906 1.636719 1.484375 2.496094 1.53125 3.6875.039063.972656-.96875 1.78125-.96875 1.78125s1.808594-.328125 2.375-1.8125c.625-1.648437-1.21875-2.773437-1.03125-4.09375.179688-1.261719 4-3.59375 4-3.59375zm1.375 8.46875c-.589844-.027344-1.253906.191406-1.84375.625 1.164063-.257812 2.15625.472656 2.15625 1.3125 0 1.882813-2.6875 3.65625-2.6875 3.65625s4.15625-.464844 4.15625-3.5625c0-1.277344-.800781-1.984375-1.78125-2.03125zm-11.03125.03125c-1.449219.050781-4.34375.289063-4.34375 1.40625 0 1.554688 6.742188 1.675781 11.5625.71875 0 0 1.3125-.914062 1.65625-1.25-3.160156.65625-10.375.757813-10.375.1875 0-.523437 2.3125-1.0625 2.3125-1.0625s-.328125-.015625-.8125 0zm-.4375 2.875c-.792969 0-1.96875.617188-1.96875 1.21875 0 1.210938 5.96875 2.140625 10.375.375l-1.53125-.9375c-2.988281.976563-8.507812.652344-6.875-.65625zm.75 2.71875c-1.082031 0-1.78125.683594-1.78125 1.1875 0 1.550781 6.464844 1.703125 9.03125.125l-1.625-1.0625c-1.914062.824219-6.730469.945313-5.625-.25zm-3.625 1.40625c-1.765625-.035156-2.90625.765625-2.90625 1.4375 0 3.574219 18.09375 3.402344 18.09375-.25 0-.605469-.714844-.894531-.96875-1.03125 1.476563 3.492188-14.78125 3.21875-14.78125 1.15625 0-.46875 1.203125-.9375 2.3125-.71875l-.9375-.53125c-.277344-.042969-.558594-.058594-.8125-.0625zm17.09375 2.40625c-2.75 2.660156-9.710937 3.613281-16.71875 1.96875 7.007813 2.929688 16.683594 1.300781 16.71875-1.96875z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Java</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    {/* <div className='h-full w-[9%] bg-black' />
                    <div className='h-full w-[4.5%] bg-black' /> */}
                </div>
            </div>
        </div>
    )
}

const PYTHON = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m23.4882 9.14v2.9663a4.2843 4.2843 0 0 1 -4.173 4.2352h-6.6721a3.4077 3.4077 0 0 0 -3.34 3.3945v6.3607c0 1.81 1.5742 2.8751 3.34 3.3945a11.1762 11.1762 0 0 0 6.6721 0c1.6817-.4869 3.34-1.4668 3.34-3.3945v-2.5467h-6.6722v-.8486h10.0121c1.9414 0 2.6648-1.3542 3.34-3.3867a11.4642 11.4642 0 0 0 0-6.7889c-.48-1.9327-1.3961-3.3867-3.34-3.3867zm-3.7526 16.1076a1.2731 1.2731 0 1 1 -1.2534 1.269 1.2607 1.2607 0 0 1 1.2534-1.269z" /><path d="m19.7356 25.2476a1.2731 1.2731 0 1 1 -1.2534 1.269 1.2607 1.2607 0 0 1 1.2534-1.269z" fill="none" /><path fill={isDark ? "#FFF" : "#000"} d="m15.8351 2a19.0717 19.0717 0 0 0 -3.192.2725c-2.8268.4994-3.34 1.5447-3.34 3.4723v2.5461h6.68v.8491h-9.1869a4.1708 4.1708 0 0 0 -4.173 3.3867 12.4855 12.4855 0 0 0 0 6.7889c.4748 1.9776 1.6088 3.3867 3.55 3.3867h2.2968v-3.0523a4.2449 4.2449 0 0 1 4.173-4.15h6.6721a3.3654 3.3654 0 0 0 3.34-3.3944v-6.3606a3.729 3.729 0 0 0 -3.34-3.4723 20.8377 20.8377 0 0 0 -3.48-.2727zm-3.6125 2.0478a1.2731 1.2731 0 1 1 -1.2534 1.2768 1.2675 1.2675 0 0 1 1.2534-1.2768z" /><g fill="none"><path d="m12.2226 4.0478a1.2731 1.2731 0 1 1 -1.2534 1.2768 1.2675 1.2675 0 0 1 1.2534-1.2768z" /><path d="m0 0h32v32h-32z" /></g></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Python</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}



const REACT_JS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>React.js</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}


const REACT_NATIVE = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>React Native</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const EXPRESS_JS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45-7.16 9.66-14.31 18.86-21.02 28.43-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13-25.06-32.63c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19 8.36 10.99 16.62 22.09 25.13 33.43z" /><path fill={isDark ? "#FFF" : "#000"} d="m1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06 9.9 7.79 12.36 18.77 11.87 31.15h-55.8c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89-5.32-5.6-7.58-12.57-8.58-20.1-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Express.js</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const REDIS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m31.99 19.12c-.01.307-.417.646-1.245 1.078-1.708.891-10.552 4.531-12.438 5.51-1.885.984-2.927.974-4.417.26-1.49-.708-10.901-4.516-12.599-5.323-.844-.406-1.276-.745-1.292-1.068v3.234c0 .323.448.661 1.292 1.068 1.698.813 11.115 4.615 12.599 5.323 1.49.714 2.531.724 4.417-.26 1.885-.979 10.729-4.62 12.438-5.51.87-.448 1.255-.802 1.255-1.12 0-.302 0-3.188 0-3.188 0-.005-.005-.005-.01-.005zm0-5.271c-.016.302-.417.641-1.245 1.078-1.708.885-10.552 4.526-12.438 5.505-1.885.984-2.927.974-4.417.266-1.49-.714-10.901-4.516-12.599-5.328-.844-.401-1.276-.745-1.292-1.068v3.234c0 .323.448.667 1.292 1.068 1.698.813 11.109 4.615 12.599 5.328 1.49.708 2.531.719 4.417-.26 1.885-.984 10.729-4.62 12.438-5.51.87-.453 1.255-.807 1.255-1.125 0-.302 0-3.188 0-3.188s-.005 0-.01 0zm0-5.474c.016-.323-.406-.609-1.266-.922-1.661-.609-10.458-4.109-12.141-4.729-1.682-.615-2.37-.589-4.349.12-1.979.714-11.339 4.385-13.005 5.036-.833.328-1.24.63-1.224.953v3.234c0 .323.443.661 1.292 1.068 1.693.813 11.109 4.615 12.599 5.328 1.484.708 2.531.719 4.417-.266 1.88-.979 10.729-4.62 12.438-5.505.865-.453 1.25-.807 1.25-1.125 0-.302 0-3.193 0-3.193zm-20.532 3.063 7.417-1.135-2.24 3.281zm16.401-2.959-4.859 1.922-4.385-1.734 4.854-1.917zm-12.875-3.177-.719-1.323 2.24.875 2.109-.688-.573 1.365 2.151.807-2.771.286-.625 1.495-1-1.667-3.203-.286zm-5.526 1.87c2.193 0 3.964.688 3.964 1.531 0 .849-1.776 1.536-3.964 1.536s-3.964-.688-3.964-1.536c0-.844 1.776-1.531 3.964-1.531z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Redis</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const TAILWIND_CSS = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Tailwind Css</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const MONGODB = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-.469-.661-.974-1.911-.974-1.911-.005.026-.005.042-.01.068v.016c0 .021-.005.031-.005.052v.021h-.005v.031.036h-.005c0 .01 0 .026-.005.031v.031c0 .01 0 .021-.005.026v.026c0 .016 0 .031-.005.042v.005c0 .021-.005.047-.01.068v.01c-.005.005-.005.01-.005.016v.021h-.005v.031h-.005v.021h-.01v.031h-.005v.026h-.005v.021h-.005v.021h-.005v.021h-.005v.021h-.005v.016h-.005v.021h-.005v.005.016h-.005c-.005 0-.005.005-.005.005v.01s-.005.01-.005.01c0 .01-.005.021-.01.031-.005.005-.005.005-.005.01v.01h-.005v.01h-.01v.026h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.01h-.01v.016h-.005v.01h-.005v.01h-.005v.016h-.005v.01h-.005v.005h-.005v.01h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.005h-.005v.01h-.005v.005h-.005v.016h-.01v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005.005c-.005 0-.005.005-.005.005v.005h-.005c-.005.01-.01.016-.016.026 0 0-.01.01-.01.016-.005 0-.005.005-.005.005v.005h-.005v.005h-.005v.005.005h-.01v.005h-.005v.005h-.005v.005.01h-.005v.005h-.005v.005h-.005v.01h-.005v-.01h-.01v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.016h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.01h-.005v.005h-.005v.005h-.005v.01h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.005c-.005 0-.005.005-.005.005l-.005.005s-.005.005-.005.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005l-.01.01v.005c-.01.005-.01.01-.021.021 0 0-.01.01-.016.01-.016.01-.036.031-.052.047-.01.005-.021.016-.031.021-.021.021-.042.036-.063.052-.031.031-.063.052-.099.083h-.005c-.073.063-.156.135-.245.214h-.005c-.224.198-.49.453-.792.755l-.026.026c-1.813 1.875-4.672 5.786-4.969 12.104-.031.521-.026 1.031.005 1.526v.01c.146 2.49.927 4.615 1.906 6.344.385.688.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37.589 1.359.536 3.703.536 3.703l.859.286s-.177-2.266.068-3.365c.078-.339.255-.63.464-.88.146-.099.563-.401 1.063-.859.026-.026.042-.047.063-.073 2.026-1.891 5.813-6.547 4.516-14.13z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>MongoDB</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const MONGOOSE = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg width="38" height="38" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ fill: isDark ? "#FFF" : "#000", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} d="M69.953.309c-1.676.07-4.508.52-4.508.71 0 .079 1.996 1.079 2.149 1.079.14 0 2.457 1.156 2.972 1.476.672.43 1.153.82 1.012.82-.09 0-2.469-.921-3.371-1.308-.734-.309-3.785-1.219-5.27-1.57-.804-.188-1.144-.258-2.511-.508C58.41.64 56.039.618 55.008.957c-1.477.48-1.809 1.07-1.809 3.246 0 1.2.059 1.707.32 2.785.114.469.434 1.5.583 1.848.043.11.183.45.3.75.121.297.485 1.066.805 1.695 1.797 3.567 4.488 6.54 8.281 9.156 1.196.82 4.446 2.375 5.75 2.747.332.09.442.277.172.277-.3 0-3.05-.758-3.613-.996a9.982 9.982 0 0 0-.652-.262c-1.957-.789-4.457-2.414-6.524-4.262a21.38 21.38 0 0 1-5.312-7.257c-.793-1.79-1.332-3.875-1.465-5.692-.078-1.039-.16-1.289-.43-1.277-.09 0-.945-.031-1.887-.082-2.562-.11-6.062.172-9.527.77-6.625 1.128-13.773 3.734-21.129 7.706a94.93 94.93 0 0 0-3.625 2.067c-.14.082-.582.351-.984.601-.399.25-.871.528-1.043.637-.38.223-4.586 3.078-5.09 3.457-.188.137-.711.527-1.152.848C4.98 21.195.633 24.742.383 25.102c-.121.18.07.27.328.18.133-.052.473-.122.746-.16.281-.044 1.004-.231 1.605-.43.61-.192 1.266-.391 1.454-.442 1.488-.348 2.09-.469 2.96-.598.395-.05.977-.14 1.305-.191 4.078-.598 6.024-.746 7.84-.61 3.945.32 7.719.993 9.879 1.758 1.617.582 4.906 2.36 6.352 3.426.836.63 3.523 3.305 4.117 4.113.46.641.972 1.2 1.093 1.2.04 0 .09-2.04.102-4.524l.027-4.512 5.282-.03c4.156-.02 5.308.011 5.379.1.101.13.343.56 1.136 2.024.754 1.41 1.125 2.09 1.356 2.496.12.223.398.739.633 1.149.218.41.628 1.168.91 1.687.281.52.511.961.511.98 0 .09.414.63.485.63.039 0 .14-.153.21-.32.079-.18.29-.579.462-.88.18-.3.5-.886.722-1.296.223-.41.524-.98.684-1.25.441-.79.902-1.645 1.285-2.344A84.813 84.813 0 0 1 58.5 24.96c.129-.25.29-.512.34-.578.082-.09 1.265-.121 5.543-.102l5.43.031.03 8.817c.02 6.945.048 8.805.15 8.805.058-.012.46-.243.874-.532.582-.406.832-.656 1.102-1.117.613-1.047 2.351-2.695 3.515-3.336A16.556 16.556 0 0 1 80 35.254c1.605-.34 2.078-.39 5.723-.52 6.652-.23 7.636-.27 7.687-.32.031-.027-.058-.289-.191-.59-.14-.289-.38-.828-.551-1.187-.633-1.367-.633-1.825.031-2.496.45-.47 1.613-.88 3.613-1.278.329-.07.743-.16.91-.218.173-.051.383-.09.473-.09.254 0 2.25-.489 2.672-.649.29-.12 1.856-.46 3.723-.82.812-.16 2.922-.578 4.668-.93 1.105-.218 2.258-.449 2.558-.508.301-.058.735-.148.954-.187.222-.05.511-.113.652-.133.14-.027.844-.168 1.558-.316a33.704 33.704 0 0 1 1.614-.313c.504-.047 4.289-.957 5.16-1.238 1.387-.45 1.797-.629 2.672-1.215.941-.64 1.203-.988 2.136-2.848 1.036-2.066 1.184-2.414 1.477-3.285.45-1.386.422-1.914-.152-2.496-.403-.398-1.266-.808-1.895-.898-.472-.059-.535-.04-.765.21-.141.15-.262.329-.262.391 0 .09-.16.528-.61 1.606-.043.11-.132.379-.203.597-.058.223-.18.532-.25.7-.129.28-.14.23-.09-.547.051-.77.18-1.418.473-2.399.051-.187.121-.507.149-.707l.05-.36-1.043-.417c-1.085-.45-2.02-.84-2.558-1.082-.184-.066-.633-.246-1.004-.387-.383-.14-.844-.32-1.035-.41a23.9 23.9 0 0 0-1.055-.437c-.672-.262-3.02-1.059-5.02-1.688a458.117 458.117 0 0 0-4.011-1.21 36.162 36.162 0 0 1-1.406-.388c-.16-.043-.555-.152-.856-.23-1.766-.488-2.226-.61-2.86-.79a26.367 26.367 0 0 0-1.054-.28c-.191-.047-.71-.168-1.152-.278-.774-.191-4.016-.937-5.774-1.34l-1.254-.289c-.222-.05-.62-.129-.902-.18-.273-.05-.844-.16-1.258-.25-.41-.077-1.293-.25-1.957-.359-.66-.117-1.453-.257-1.754-.308-2.773-.5-2.96-.528-7.93-1.078-3.062-.348-7.18-.641-8.183-.59-.16 0-1.05.039-1.965.09zM58.348 5.23c2.652.86 5.23 2.028 6.996 3.168 1.406.907 3.152 2.356 3.625 3.004l.199.27-.379-.149c-.21-.09-.652-.28-.984-.441-1.766-.82-1.957-.887-1.957-.707 0 .047.41.707.902 1.445.504.75.902 1.41.902 1.47 0 .05-.187-.032-.422-.192-.902-.618-3.02-1.508-3.14-1.328-.031.05.62.878 1.457 1.847.82.969 1.504 1.797 1.504 1.86 0 .148-.16.128-.922-.153-.785-.277-.984-.308-.984-.117 0 .129 1.695 2.414 2.367 3.203.191.219.343.43.343.48 0 .239-2.351-1.288-4.015-2.605-2.38-1.898-4.68-4.445-5.89-6.55-.997-1.72-1.337-2.645-1.337-3.665 0-.597.028-.718.25-.93.13-.136.293-.25.352-.25.058 0 .562.153 1.133.34zm31.691 3.555c.961.172 2.277.399 2.91.512.633.11 1.406.238 1.707.289.301.059.73.137.953.187.22.051.653.141.954.211.992.22 1.234.27 2.859.649 1.746.41 2.129.488 2.66.597.453.09.902.262.902.34 0 .032-.328.223-.73.43-.824.41-.996.441-4.387.57-2.308.098-3.543.07-4.668-.11-2.27-.35-3.441-.987-4.355-2.366-.32-.469-.531-.61-1.266-.797-.27-.082-.683-.192-.902-.262-.223-.07-.602-.18-.844-.25-.723-.187-.312-.297 1.145-.297 1.003 0 1.707.067 3.062.297zm12.074 13.95a.54.54 0 0 1-.25 0c-.07-.032-.02-.051.121-.051.137 0 .188.02.13.05zm-.433.117c0 .05-.117.12-.27.152-.312.078-1.535.43-1.937.558-.141.051-.594.192-1.004.31-1.035.3-3.543 1.116-4.215 1.378-1.266.48-4.238 2.055-4.656 2.477-.625.609-.817 1.265-.723 2.523.027.531.098 1.2.16 1.488.121.63.05.801-.191.489-.242-.309-.754-1.426-.903-1.977-.082-.246-.171-.578-.222-.738-.18-.567-.11-1.239.172-1.645.379-.582 1.746-1.508 3.351-2.277.762-.371 2.98-1.13 5.02-1.727.41-.12.863-.261 1.004-.3 1.445-.489 4.414-.958 4.414-.711zm-31.746.671c-.032.028-.121.04-.192.008-.082-.027-.05-.058.059-.058.113-.012.172.02.133.05zm0 0" transform="translate(0 39)" />
                    <path style={{ fill: isDark ? "#FFF" : "#000", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }} d="M48.883 42.832v6.988h5c3.754 0 5.027-.03 5.117-.12.152-.15.184-13.856.031-13.856-.05 0-.12.078-.152.168-.04.09-1.133 1.797-2.438 3.793-2.066 3.156-2.64 3.925-2.64 3.535 0-.07-3.422-5.41-4.297-6.7a3.725 3.725 0 0 1-.309-.527c-.082-.152-.18-.27-.23-.27-.043 0-.082 3.145-.082 6.989zm0 0" transform="translate(0 39)" />
                </svg>

            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>Mongoose</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const MYSQL = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg className='text-xl' enable-background="new 0 0 512 512" height="38" viewBox="0 0 512 512" width="38" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m252.517 286.715h47.268v11.22h-48.077c-.487 0-1.133.107-1.62.107-5.988.541-7.769 1.514-8.577 4.966-.164.54-.164.973-.164 1.405v7.66c0 .541 0 .974.164 1.514.809 4.533 4.046 6.579 10.843 6.579h20.396c5.019 0 10.196.865 14.409 2.486 7.93 3.02 11.98 7.552 11.98 12.409v12.301c0 5.938-3.563 10.472-10.846 13.814-4.375 2.051-9.876 3.235-15.544 3.235h-48.399v-11.22h46.461c.648 0 1.131-.107 1.78-.107 3.235-.217 5.664-1.081 7.119-2.379 1.622-1.289 2.429-2.803 2.429-3.992v-9.818c0-1.077-.324-2.05-1.293-3.023-1.618-1.941-3.889-2.911-9.229-3.343-.486-.108-1.131-.108-1.779-.108h-17.485c-1.618 0-3.235-.108-4.857-.217-14.405-1.509-22.984-7.984-22.984-15.54v-9.818c0-8.633 4.371-13.599 14.407-16.729 3.237-.97 6.799-1.402 13.598-1.402zm131.05 74.292 16.584 14.967h-19.55l-13.415-12.11-13.507.857h-18.007c-3.081 0-6.325-.433-9.893-1.406-10.704-2.919-15.898-8.541-15.898-17.844v-40.01c0-10.167 7.141-16.334 21.25-18.28 1.46-.217 3.082-.324 4.541-.324h31.959c1.621 0 3.081.107 4.703.324 14.109 1.946 21.246 8.113 21.246 18.28v40.01c.001 8.246-3.026 12.662-10.013 15.536zm-5.718-54.572c0-.433 0-.974-.162-1.519-.973-4.324-5.352-6.812-11.839-6.812h-25.467c-7.465 0-12.326 3.244-12.326 8.33v38.063c0 .541.162 1.081.32 1.73.973 4.653 5.356 7.248 12.006 7.248h15.291l-14.048-12.684h19.55l12.255 11.062c2.254-1.206 3.742-3.044 4.258-5.41.162-.536.162-1.081.162-1.622zm-268.568-19.613c-12.788-3.992-21.369-.54-25.252 8.093l-25.577 57.196-24.766-57.196c-3.724-8.633-12.465-12.085-25.252-8.093-5.342 1.618-7.933 4.749-7.933 11.22v66.37h16.833v-66.478l26.064 57.953c3.075 7.016 7.284 9.498 15.538 9.498 8.257 0 12.303-2.482 15.38-9.498l26.062-57.953v66.478h16.836v-66.37c-.001-6.471-2.591-9.602-7.933-11.22zm85.227 23.305v43.606c-.295 0-31.902.075-36.607 0-9.222-.142-10.018-4.815-9.86-6.804v-36.628h-16.83c.368.366-.004 37.011.008 37.784.131 8.358 10.733 15.62 27.38 15.777h35.782v4.412c.002 1.813 1.281 7.199-9.554 8.347-.133.008-53.158 0-53.25 0v11.328h53.157c8.431-.25 26.723-3.436 26.629-18.103-.002-.254.094-59.721.015-59.721h-16.87zm306.638 43.606 4.066 6.222h-2.777l-3.705-6.122h-2.217v6.122h-2.379v-14.164h5.522c3.506 0 5.327 1.193 5.327 4.071 0 2.582-1.655 3.639-3.837 3.871zm-2.088-1.887c1.788 0 3.344-.167 3.344-2.146 0-1.654-1.722-1.921-3.145-1.921h-2.744v4.067zm12.442 1.027c0 7.41-5.855 12.404-12.409 12.404-6.546 0-12.404-4.994-12.404-12.404 0-7.411 5.858-12.405 12.404-12.405 6.554 0 12.409 4.994 12.409 12.405zm-2.778 0c0-5.627-4.3-9.827-9.631-9.827-5.39 0-9.627 4.2-9.627 9.827 0 5.622 4.237 9.826 9.627 9.826 5.331 0 9.631-4.204 9.631-9.826zm-146.659-196.89c-2.158-.04-3.685.234-5.298.588v.293h.295c1.031 2.115 2.849 3.477 4.121 5.299.978 2.061 1.959 4.119 2.94 6.177.1-.098.199-.195.295-.293 1.825-1.283 2.657-3.337 2.649-6.473-.732-.77-.841-1.732-1.473-2.649-.838-1.223-2.468-1.914-3.529-2.942zm142.417 150.955c1.389 1.019 2.32 2.599 4.121 3.239 0-.1 0-.199 0-.295-.948-1.202-1.189-2.861-2.059-4.121-1.272-1.272-2.554-2.549-3.826-3.826-3.742-4.965-8.487-9.323-13.535-12.945-4.021-2.891-13.033-6.791-14.713-11.474-.096-.1-.196-.199-.296-.299 2.853-.32 6.196-1.352 8.829-2.059 4.424-1.186 8.379-.878 12.945-2.059 2.063-.591 4.121-1.181 6.18-1.764 0-.395 0-.785 0-1.181-2.309-2.37-3.955-5.506-6.471-7.651-6.592-5.608-13.781-11.216-21.188-15.888-4.104-2.594-9.183-4.277-13.536-6.475-1.464-.738-4.034-1.123-5.003-2.354-2.283-2.916-3.53-6.611-5.294-10.006-3.692-7.113-7.323-14.881-10.596-22.365-2.229-5.102-3.688-10.134-6.471-14.713-13.361-21.967-27.746-35.227-50.023-48.26-4.744-2.771-10.45-3.865-16.479-5.295-3.235-.195-6.476-.394-9.711-.589-1.975-.825-4.029-3.241-5.884-4.414-7.382-4.662-26.315-14.805-31.779-1.47-3.452 8.415 5.156 16.627 8.237 20.893 2.163 2.991 4.928 6.346 6.476 9.709 1.015 2.211 1.188 4.43 2.063 6.769 2.138 5.764 3.996 12.034 6.762 17.362 1.401 2.694 2.944 5.535 4.712 7.944 1.085 1.479 2.939 2.13 3.23 4.414-1.813 2.543-1.917 6.489-2.936 9.71-4.6 14.502-2.865 32.524 3.826 43.258 2.05 3.293 6.886 10.362 13.531 7.649 5.813-2.368 4.517-9.708 6.18-16.183.374-1.471.146-2.55.882-3.531v.293c1.768 3.531 3.534 7.062 5.298 10.592 3.922 6.313 10.879 12.915 16.775 17.364 3.053 2.308 5.46 6.3 9.415 7.651 0-.1 0-.199 0-.299-.1 0-.2 0-.295 0-.77-1.189-1.968-1.688-2.94-2.645-2.304-2.259-4.865-5.065-6.771-7.652-5.364-7.279-10.101-15.247-14.417-23.539-2.063-3.961-3.855-8.33-5.594-12.359-.669-1.555-.661-3.904-2.059-4.709-1.904 2.952-4.707 5.342-6.18 8.828-2.354 5.574-2.657 12.371-3.53 19.42-.516.186-.287.059-.591.293-4.1-.986-5.539-5.206-7.061-8.826-3.851-9.152-4.566-23.891-1.177-34.428.877-2.725 4.845-11.312 3.235-13.83-.766-2.514-3.29-3.965-4.703-5.886-1.756-2.374-3.502-5.497-4.716-8.24-3.148-7.136-4.62-15.147-7.939-22.362-1.588-3.447-4.271-6.939-6.475-10.006-2.44-3.396-5.173-5.896-7.062-10.006-.673-1.459-1.588-3.794-.59-5.295.315-1.013.765-1.435 1.768-1.766 1.709-1.316 6.458.438 8.237 1.177 4.716 1.959 8.658 3.826 12.655 6.473 1.917 1.272 3.858 3.734 6.175 4.415h2.649c4.146.951 8.787.297 12.654 1.472 6.841 2.079 12.971 5.313 18.538 8.829 16.959 10.707 30.827 25.953 40.313 44.138 1.526 2.928 2.188 5.722 3.53 8.829 2.711 6.263 6.13 12.706 8.828 18.832 2.691 6.108 5.315 12.275 9.12 17.361 2 2.672 9.73 4.106 13.245 5.592 2.462 1.039 6.495 2.125 8.824 3.527 4.458 2.689 8.771 5.887 12.949 8.831 2.088 1.473 8.509 4.699 8.825 7.353-10.347-.274-18.252.687-25.01 3.535-1.921.807-4.982.831-5.298 3.234 1.056 1.106 1.223 2.762 2.063 4.121 1.609 2.612 4.333 6.109 6.766 7.947 2.657 2.005 5.394 4.15 8.238 5.885 5.065 3.09 10.721 4.853 15.595 7.946 2.884 1.826 5.737 4.121 8.539 6.18zm-83.486 37.838v-58.062h-16.834v58.169c0 11.544 8.579 18.02 25.899 19.316 1.617.104 3.235.212 4.857.212h43.868v-11.22h-44.193c-9.871.001-13.597-2.485-13.597-8.415z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>MySQL</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const POSTGRESQL = ({ isDark }) => {
    return (
        <div className='flex gap-x-3 w-full'>
            <div className='w-8 aspect-square'>
                <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m22.839 0c-1.245.011-2.479.188-3.677.536l-.083.027c-.751-.131-1.516-.203-2.276-.219-1.573-.027-2.923.353-4.011.989-1.073-.369-3.297-1.016-5.641-.885-1.629.088-3.411.583-4.735 1.979-1.312 1.391-2.009 3.547-1.864 6.485.041.807.271 2.124.656 3.837.38 1.709.917 3.709 1.589 5.537.672 1.823 1.405 3.463 2.552 4.577.572.557 1.364 1.032 2.296.991.652-.027 1.24-.313 1.751-.735.249.328.516.468.755.599.308.167.599.281.907.355.552.14 1.495.323 2.599.135.375-.063.771-.187 1.167-.359.016.437.032.869.047 1.307.057 1.38.095 2.656.505 3.776.068.183.251 1.12.969 1.953.724.833 2.129 1.349 3.739 1.005 1.131-.24 2.573-.677 3.532-2.041.948-1.344 1.375-3.276 1.459-6.412.02-.172.047-.312.072-.448l.224.021h.027c1.208.052 2.521-.12 3.62-.631.968-.448 1.703-.901 2.239-1.708.131-.199.281-.443.319-.86.041-.411-.199-1.063-.595-1.364-.791-.604-1.291-.375-1.828-.26-.525.115-1.063.176-1.599.192 1.541-2.593 2.645-5.353 3.276-7.792.375-1.443.584-2.771.599-3.932.021-1.161-.077-2.187-.771-3.077-2.177-2.776-5.235-3.548-7.599-3.573-.073 0-.145 0-.219 0zm-.063.855c2.235-.021 5.093.604 7.145 3.228.464.589.6 1.448.584 2.511s-.213 2.328-.573 3.719c-.692 2.699-2.011 5.833-3.859 8.652.063.047.135.088.208.115.385.161 1.265.296 3.025-.063.443-.095.767-.156 1.105.099.167.14.255.349.244.568-.02.161-.077.317-.177.448-.339.509-1.009.995-1.869 1.396-.76.353-1.855.536-2.817.547-.489.005-.937-.032-1.319-.152l-.02-.004c-.147 1.411-.484 4.203-.704 5.473-.176 1.025-.484 1.844-1.072 2.453-.589.615-1.417.979-2.537 1.219-1.385.297-2.391-.021-3.041-.568s-.948-1.276-1.125-1.719c-.124-.307-.187-.703-.249-1.235-.063-.531-.104-1.177-.136-1.911-.041-1.12-.057-2.24-.041-3.365-.577.532-1.296.88-2.068 1.016-.921.156-1.739 0-2.228-.12-.24-.063-.475-.151-.693-.271-.229-.12-.443-.255-.588-.527-.084-.156-.109-.337-.073-.509.041-.177.145-.328.287-.443.265-.215.615-.333 1.14-.443.959-.199 1.297-.333 1.5-.496.172-.135.371-.416.713-.828 0-.015 0-.036-.005-.052-.619-.02-1.224-.181-1.771-.479-.197.208-1.224 1.292-2.468 2.792-.521.624-1.099.984-1.713 1.011-.609.025-1.163-.281-1.631-.735-.937-.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-.375-1.683-.599-3.037-.631-3.688-.14-2.776.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-.151 5.213.781 5.724.979.989-.672 2.265-1.088 3.859-1.063.756.011 1.505.109 2.24.292l.027-.016c.323-.109.651-.208.984-.28.907-.215 1.833-.324 2.76-.339zm.203.89h-.197c-.76.009-1.527.099-2.271.26 1.661.735 2.916 1.864 3.801 3 .615.781 1.12 1.64 1.505 2.557.152.355.251.651.303.88.031.115.047.213.057.312 0 .052.005.105-.021.193 0 .005-.005.016-.005.021.043 1.167-.249 1.957-.287 3.072-.025.808.183 1.756.235 2.792.047.973-.072 2.041-.703 3.093.052.063.099.125.151.193 1.672-2.636 2.88-5.547 3.521-8.032.344-1.339.525-2.552.541-3.509.016-.959-.161-1.657-.391-1.948-1.792-2.287-4.213-2.871-6.24-2.885zm-6.391.343c-1.572.005-2.703.48-3.561 1.193-.887.74-1.48 1.745-1.865 2.781-.464 1.224-.625 2.411-.688 3.219l.021-.011c.475-.265 1.099-.536 1.771-.687.667-.157 1.391-.204 2.041.052.657.249 1.193.848 1.391 1.749.939 4.344-.291 5.959-.744 7.177-.172.443-.323.891-.443 1.349.057-.011.115-.027.172-.032.323-.025.572.079.719.141.459.192.771.588.943 1.041.041.12.072.244.093.38.016.052.027.109.027.167-.052 1.661-.048 3.323.015 4.984.032.719.079 1.349.136 1.849.057.495.135.875.188 1.005.171.427.421.984.875 1.364.448.381 1.093.631 2.276.381 1.025-.224 1.656-.527 2.077-.964.423-.443.672-1.052.833-1.984.245-1.401.729-5.464.787-6.224-.025-.579.057-1.021.245-1.36.187-.344.479-.557.735-.672.124-.057.244-.093.343-.125-.104-.145-.213-.291-.323-.432-.364-.443-.667-.937-.891-1.463-.104-.22-.219-.439-.344-.647-.176-.317-.4-.719-.635-1.172-.469-.896-.979-1.989-1.245-3.052-.265-1.063-.301-2.161.376-2.932.599-.688 1.656-.973 3.233-.812-.047-.141-.072-.261-.151-.443-.359-.844-.828-1.636-1.391-2.355-1.339-1.713-3.511-3.412-6.859-3.469zm-8.853.068c-.167 0-.339.005-.505.016-1.349.079-2.62.468-3.532 1.432-.911.969-1.509 2.547-1.38 5.167.027.5.24 1.885.609 3.536.371 1.652.896 3.595 1.527 5.313.629 1.713 1.391 3.208 2.12 3.916.364.349.681.495.968.485.287-.016.636-.183 1.063-.693.776-.937 1.579-1.844 2.412-2.729-1.199-1.047-1.787-2.629-1.552-4.203.135-.984.156-1.907.135-2.636-.015-.708-.063-1.176-.063-1.473 0-.011 0-.016 0-.027v-.005l-.005-.009c0-1.537.272-3.057.792-4.5.375-.996.928-2 1.76-2.819-.817-.271-2.271-.676-3.843-.755-.167-.011-.339-.016-.505-.016zm16.53 7.041c-.905.016-1.411.251-1.681.552-.376.433-.412 1.193-.177 2.131.233.937.719 1.984 1.172 2.855.224.437.443.828.619 1.145.183.323.313.547.391.745.073.177.157.333.24.479.349-.74.412-1.464.375-2.224-.047-.937-.265-1.896-.229-2.864.037-1.136.261-1.876.277-2.751-.324-.041-.657-.068-.985-.068zm-10.978.158c-.276 0-.552.036-.823.099-.537.131-1.052.328-1.537.599-.161.088-.317.188-.463.303l-.032.025c.011.199.047.667.063 1.365.016.76 0 1.728-.145 2.776-.323 2.281 1.333 4.167 3.276 4.172.115-.469.301-.944.489-1.443.541-1.459 1.604-2.521.708-6.677-.145-.677-.437-.953-.839-1.109-.224-.079-.457-.115-.697-.109zm10.557.27h.068c.083.005.167.011.239.031.068.016.131.037.183.073.052.031.088.083.099.145v.011c0 .063-.016.125-.047.183-.041.072-.088.14-.145.197-.136.151-.319.251-.516.281-.193.027-.385-.025-.547-.135-.063-.048-.125-.1-.172-.157-.047-.047-.073-.109-.084-.172-.004-.061.011-.124.052-.171.048-.048.1-.089.157-.12.129-.073.301-.125.5-.152.072-.009.145-.015.213-.02zm-10.428.224c.068 0 .147.005.22.015.208.032.385.084.525.167.068.032.131.084.177.141.052.063.077.14.073.224-.016.077-.048.151-.1.208-.057.068-.119.125-.192.172-.172.125-.385.177-.599.151-.215-.036-.412-.14-.557-.301-.063-.068-.115-.141-.157-.219-.047-.073-.067-.156-.057-.24.021-.14.141-.219.256-.26.131-.043.271-.057.411-.052zm12.079 9.791h-.005c-.192.073-.353.1-.489.163-.14.052-.251.156-.317.285-.089.152-.156.423-.136.885.057.043.125.073.199.095.224.068.609.115 1.036.109.849-.011 1.896-.208 2.453-.469.453-.208.88-.489 1.255-.817-1.859.38-2.905.281-3.552.016-.156-.068-.307-.157-.443-.267zm-10.708.125h-.027c-.072.005-.172.032-.375.251-.464.52-.625.848-1.005 1.151-.385.307-.88.469-1.875.672-.312.063-.495.135-.615.192.036.032.036.043.093.068.147.084.333.152.485.193.427.104 1.124.229 1.859.104.729-.125 1.489-.475 2.141-1.385.115-.156.124-.391.031-.641-.093-.244-.297-.463-.437-.52-.089-.043-.183-.068-.276-.084z" /></svg>
            </div>
            <div className='space-y-0 w-full'>
                <div className='flex justify-between myfont3 text-xl'>
                    <h1>PostgreSQL</h1>
                    <h1>80%</h1>
                </div>
                <div className='box-skew h-2 w-full bg-black/[0.1] dark:bg-white/[0.5] flex gap-x-[1%]'>
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                    <div className='h-full w-[9%] bg-black dark:bg-white' />
                </div>
            </div>
        </div>
    )
}

const AWS = ({ isDark }) => {
    return (
        <div className='flex flex-col justify-between gap-x-3 w-full bg-black dark:bg-white dark:text-black text-white p-5 gap-y-5 relative before:absolute before:inset-[0.5px] before:border-r-[2px] before:border-black dark:before:border-white before:border-b-[2px] before:translate-x-[3.5px] before:translate-y-[3.5px]'>
            <div className='h-8 w-full aspect-square flex justify-between items-end  border-b-2 border-white relative before:absolute before:-inset-[6px]   before:border-b-2 before:border-white dark:before:border-black before:-translate-x-[1.5px]'>
                <svg className='border-2 border-white dark:border-black w-14 h-12 ' height="40" viewBox="0 0 32 32" width="40" xmlns="http://www.w3.org/2000/svg"><path fill={`${isDark ? "#000" : "#FFF"}`} d="m9.016 13.38c0 .396.047.714.12.948.083.234.193.49.339.766.057.089.078.172.078.245 0 .109-.068.214-.203.323l-.672.443c-.083.063-.177.094-.276.099-.109 0-.214-.052-.318-.151-.146-.151-.271-.318-.385-.5-.12-.203-.229-.411-.328-.625-.833.979-1.875 1.469-3.13 1.469-.896 0-1.609-.255-2.13-.766-.521-.516-.786-1.193-.786-2.047 0-.901.318-1.641.969-2.193s1.51-.828 2.609-.828c.359 0 .734.031 1.125.083.396.052.802.141 1.224.234v-.776c0-.807-.167-1.375-.5-1.703-.339-.328-.911-.49-1.734-.49-.37 0-.755.042-1.151.135-.391.099-.776.214-1.146.365-.125.057-.25.099-.375.141-.052.016-.109.026-.167.031-.151 0-.224-.109-.224-.333v-.521c0-.167.021-.297.073-.37.078-.099.182-.177.297-.224.375-.193.818-.354 1.339-.479.547-.141 1.104-.208 1.661-.203 1.271 0 2.193.286 2.792.865.583.573.88 1.443.88 2.615v3.448zm-4.318 1.62c.349 0 .714-.063 1.094-.193.385-.125.724-.359 1.01-.677.172-.203.302-.427.365-.682s.104-.568.104-.927v-.448c-.323-.078-.646-.141-.979-.182-.328-.042-.661-.063-1-.063-.714 0-1.234.141-1.583.427-.354.286-.521.693-.521 1.224 0 .5.125.87.391 1.125.255.266.63.396 1.12.396zm8.547 1.151c-.193 0-.323-.031-.406-.109-.083-.063-.161-.214-.224-.411l-2.5-8.229c-.047-.141-.083-.281-.094-.427 0-.172.083-.266.25-.266h1.047c.203 0 .339.031.411.104.089.063.151.214.214.417l1.792 7.047 1.661-7.047c.052-.214.115-.354.198-.417.13-.078.276-.115.427-.104h.849c.203 0 .344.031.427.104.083.063.161.214.203.417l1.682 7.13 1.839-7.13c.068-.214.141-.354.214-.417.125-.078.271-.115.417-.104h.99c.172 0 .266.083.266.266 0 .052-.01.104-.021.172-.016.089-.042.177-.073.266l-2.568 8.224c-.063.214-.135.354-.224.417-.12.078-.26.115-.401.104h-.917c-.203 0-.339-.031-.427-.104-.083-.073-.156-.214-.198-.427l-1.651-6.865-1.641 6.854c-.052.214-.115.354-.203.427-.083.073-.234.104-.427.104zm13.672.287c-.552 0-1.104-.068-1.635-.193s-.948-.266-1.224-.427c-.172-.094-.286-.198-.328-.297-.042-.094-.068-.193-.068-.297v-.542c0-.224.089-.333.245-.333.063 0 .13.01.193.031.063.026.161.068.266.109.365.161.755.286 1.172.37.427.089.839.13 1.266.13.672 0 1.193-.12 1.552-.354.354-.214.568-.599.557-1.01.005-.276-.099-.542-.286-.745-.193-.198-.557-.38-1.078-.552l-1.542-.479c-.776-.245-1.354-.604-1.703-1.083-.344-.443-.531-.984-.536-1.547 0-.448.099-.839.292-1.182.193-.339.448-.635.766-.87.318-.245.682-.427 1.104-.552.427-.13.875-.182 1.344-.182.234 0 .479.01.714.042.245.031.469.073.693.12.208.052.411.104.604.167s.344.13.448.193c.125.063.234.156.318.266.073.104.104.229.099.354v.5c0 .224-.089.339-.245.339-.146-.016-.281-.057-.406-.125-.641-.286-1.339-.427-2.042-.417-.609 0-1.089.094-1.417.297-.333.203-.5.51-.5.948 0 .297.104.552.318.755s.609.406 1.172.589l1.51.474c.766.245 1.323.589 1.651 1.026.328.432.49.932.49 1.49 0 .453-.099.87-.276 1.234-.193.359-.448.677-.776.938-.333.266-.724.453-1.182.594-.479.146-.979.224-1.526.224zm2.015 5.171c-3.505 2.589-8.589 3.958-12.964 3.958-6.13 0-11.656-2.266-15.828-6.036-.328-.297-.031-.703.365-.464 4.51 2.615 10.078 4.203 15.833 4.203 3.885 0 8.151-.813 12.083-2.469.583-.271 1.083.38.51.807zm1.459-1.661c-.448-.573-2.964-.276-4.099-.135-.339.042-.396-.26-.083-.484 2-1.401 5.286-1 5.672-.531.38.484-.109 3.771-1.979 5.344-.286.245-.568.12-.438-.203.427-1.052 1.375-3.422.927-3.99z" /></svg>
                <h1 className='myfont3 text-xl bg-white dark:bg-black dark:text-white text-black px-5 py-2.5  flex-1 relative before:absolute before:-inset-[1px] before:translate-x-1 before:translate-y-[3px]  before:border-r-2  before:border-white dark:before:border-black '>
                    Amazon Web Services
                </h1>
            </div>
            <div >
                <p className='myfont3 text-xl leading-5'>Amazon Web Services (AWS) is a comprehensive cloud computing platform by Amazon, offering a wide range of services such as computing power, storage, and databases on a pay-as-you-go basis. It enables businesses to scale and grow with its reliable, secure, and flexible infrastructure.</p>
            </div>
            <button className='bg-white dark:bg-black dark:text-white text-black py-2 myfont5 font-semibold relative before:absolute before:inset-[0.5px] before:border-r-[1.5px] before:border-white dark:before:border-black before:border-b-[1.5px] before:translate-x-[3px] before:translate-y-[3px] active:translate-x-[1px] active:translate-y-[1px] active:before:translate-x-0 active:before:translate-y-0'>
                <span>k</span>
                <span className='text-xs'>NOW</span>
                <span className='ml-2'>m</span>
                <span className='text-xs'>ORE</span>
            </button>

        </div>
    )
}
const GRAPH_QL = ({ isDark }) => {
    console.log(isDark);
    return (
        <div className='flex flex-col justify-between gap-x-3 w-full bg-black text-white dark:bg-white dark:text-black p-5 gap-y-5 relative before:absolute before:inset-[0.5px] before:border-r-[2px] before:border-black dark:before:border-white before:border-b-[2px] before:translate-x-[3.5px] before:translate-y-[3.5px]'>
            <div className='h-8  w-full aspect-square flex items-end relative before:absolute before:-inset-1   before:border-b-2 before:border-white dark:before:border-black'>
                <svg className={`w-14 h-12 p-1 border-2 border-white dark:border-black fill-white dark:fill-black`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.051 2.751 4.935 2.85a2.144 2.144 0 0 1 3.409.4 2.146 2.146 0 0 1 -1.354 3.151v5.699a2.132 2.132 0 0 1 1.348 3.15 2.143 2.143 0 0 1 -3.453.353l-4.905 2.832a2.14 2.14 0 1 1 -4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 1 1 -2.052-3.559l.001-5.699a2.141 2.141 0 0 1 -1.357-3.15 2.143 2.143 0 0 1 3.407-.405l4.938-2.85a2.138 2.138 0 0 1 2.051-2.745 2.137 2.137 0 0 1 2.051 2.751zm-.515.877a.793.793 0 0 1 -.058.058l6.461 11.19c.026-.009.056-.016.082-.023v-5.707a2.135 2.135 0 0 1 -1.558-2.588l.019-.072zm-3.015.059-.06-.06-4.946 2.852a2.136 2.136 0 0 1 -1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044zm.986 16.227 4.913-2.838a1.748 1.748 0 0 1 -.038-.142h-12.916l-.021.083 4.939 2.852a2.126 2.126 0 0 1 1.54-.653c.627 0 1.19.269 1.583.698z" /></svg>
                <h1 className='myfont3 text-xl bg-white dark:bg-black text-black dark:text-white px-5  py-2.5  flex-1 relative before:absolute before:-inset-[1px] before:translate-x-1 before:translate-y-[3px]  before:border-r-2  before:border-white dark:before:border-black'>GraphQL</h1>
            </div>
            <div >
                <p className='myfont3 text-xl leading-5'>GraphQL is a query language for APIs that allows clients to request exactly the data they need. Developed by Facebook, it provides more efficient, powerful, and flexible data retrieval compared to REST by enabling clients to specify the shape and structure of the response.</p>
            </div>
            <button className='bg-white dark:bg-black dark:text-white text-black py-2 myfont5 font-semibold relative before:absolute before:inset-[0.5px] before:border-r-[1.5px] before:border-white dark:before:border-black before:border-b-[1.5px] before:translate-x-[3px] before:translate-y-[3px] active:translate-x-[1px] active:translate-y-[1px] active:before:translate-x-0 active:before:translate-y-0'>
                <span>k</span>
                <span className='text-xs'>NOW</span>
                <span className='ml-2'>m</span>
                <span className='text-xs'>ORE</span>
            </button>

        </div>
    )
}
const VSCODE = ({ isDark }) => {
    return (
        <div className='flex flex-col justify-between gap-x-3 w-full bg-black dark:bg-white dark:text-black text-white p-5 gap-y-5 relative before:absolute before:inset-[0.5px] before:border-r-[2px] before:border-black dark:before:border-white before:border-b-[2px] before:translate-x-[3.5px] before:translate-y-[3.5px]'>
            <div className='h-8 aspect-square flex items-end relative before:absolute before:-inset-1   before:border-b-2 before:border-white dark:before:border-black '>
                <svg className=' border-2 border-white dark:border-black w-14 h-12' xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="vs-code"><path fill={isDark ? "#000" : "#FFF"} d="m33.87 7.28-15.38 14.8-9-7-2.15 1.17V32l1.93 1.28L18.62 26l15.25 14.72 6.79-2.82V10.23Zm-23.58 21V19.7l4.16 4.3Zm22.29 1.83L24 24l8.58-6.13Z"></path></svg>
                <h1 className='myfont3 text-xl bg-white dark:bg-black dark:text-white text-black px-5  py-2.5 flex-1 relative before:absolute before:-inset-[1px] before:translate-x-1 before:translate-y-[3px]  before:border-r-2  before:border-white dark:before:border-black'>Visual Studio Code</h1>
            </div>
            <div >
                <p className='myfont3 text-xl leading-5 md:pt-2 lg:-mt-4'>Visual Studio Code (VSCode) is a free, open-source code editor developed by Microsoft. It supports various programming languages, offers features like debugging, version control, and extensions, making it a popular choice for developers.</p>
            </div>
            <button className='bg-white dark:bg-black dark:text-white text-black py-2 myfont5 font-semibold relative before:absolute before:inset-[0.5px] before:border-r-[1.5px] before:border-white dark:before:border-black before:border-b-[1.5px] before:translate-x-[3px] before:translate-y-[3px] active:translate-x-[1px] active:translate-y-[1px] active:before:translate-x-0 active:before:translate-y-0'>
                <span>k</span>
                <span className='text-xs'>NOW</span>
                <span className='ml-2'>m</span>
                <span className='text-xs'>ORE</span>
            </button>

        </div>
    )
}
const GITHUB = ({ isDark }) => {
    return (
        <div className='flex flex-col justify-between gap-x-3 w-full bg-black dark:bg-white dark:text-black text-white p-5 gap-y-5 relative before:absolute before:inset-[0.5px] before:border-r-[2px] before:border-black dark:before:border-white before:border-b-[2px] before:translate-x-[3.5px] before:translate-y-[3.5px]'>
            <div className='space-y-5'>
                <div className='h-8  w-full aspect-square flex items-end relative before:absolute before:-inset-1   before:border-b-2 before:border-white dark:before:border-black'>
                    <svg className='w-14 h-12 border-2 border-white dark:border-black p-[1px]' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#000" : "#FFF"} d="m400 32h-352c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48zm-122.7 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" /></svg>
                    <h1 className='myfont3 text-xl flex-1 bg-white dark:bg-black dark:text-white text-black px-5  py-2.5 relative before:absolute before:-inset-[1px] before:translate-x-1 before:translate-y-[3px] before:border-r-2 before:border-white dark:before:border-black'>Github</h1>
                </div>
                <div >
                    <p className='myfont3 text-xl leading-5'>GitHub is a web-based platform for version control and collaboration, using Git. It allows developers to host, review, and manage code, track issues, and work together on projects.</p>
                </div>
            </div>
            <button className='bg-white dark:bg-black dark:text-white text-black py-2 myfont5 font-semibold relative before:absolute before:inset-[0.5px] before:border-r-[1.5px] before:border-white dark:before:border-black before:border-b-[1.5px] before:translate-x-[3px] before:translate-y-[3px] active:translate-x-[1px] active:translate-y-[1px] active:before:translate-x-0 active:before:translate-y-0'>
                <span>k</span>
                <span className='text-xs'>NOW</span>
                <span className='ml-2'>m</span>
                <span className='text-xs'>ORE</span>
            </button>
        </div>
    )
}