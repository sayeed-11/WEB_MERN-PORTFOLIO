import React, { useState } from 'react'

import img1 from "../../assets/Macbook-Air-Avatar.png"
import img2 from "../../assets/iPhone-13-PRO-MAX-Avatar.png"
import img3 from "../../assets/iPad-Mini-Avatar.png"

import image1 from "../../assets/Macbook-Air-nike.png"
import image2 from "../../assets/iPhone-13-PRO-MAX-nike.png"
import image3 from "../../assets/iPad-Mini-nike.png"

import pic1 from "../../assets/Macbook-Air-foodiefaster.app.png"
import pic2 from "../../assets/iPhone-13-PRO-MAX-foodiefaster.app.png"
import pic3 from "../../assets/iPad-Mini-foodiefaster.app.png"

import thumb1 from "../../assets/Macbook-Air-foodhub.png"
import thumb2 from "../../assets/iPhone-13-PRO-MAX-foodhub.png"
import thumb3 from "../../assets/iPad-Mini-foodhub.png"

import picture1 from "../../assets/Macbook-Air-connie.png"
import picture2 from "../../assets/iPhone-13-PRO-MAX-connie.png"
import picture3 from "../../assets/iPad-Mini-connie.png"


const myProjects = [
    {
        id: 1,
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?",

    }
]

const Projects = ({ isDark }) => {
    return (
        <div id='Projects' className='w-full min-h-screen py-20 space-y-10'>
            <div className='sticky top-[60px] bg-white dark:bg-black dark:text-white py-3 z-20 px-5'>
                <h1 className='myfont5 font-semibold text-3xl'>My Works</h1>
            </div>
            <div className='space-y-40 px-5 pt-10'>
                <Project1 isDark={isDark} />
                <Project2 isDark={isDark} />
                <Project3 isDark={isDark} />
                <Project4 isDark={isDark} />
                <Project5 isDark={isDark} />
            </div>
        </div>
    )
}

export default Projects

const Project1 = ({ isDark }) => {
    const [imageIndex, setImageIndex] = useState(1);
    return (
        <div className='grid lg:grid-cols-2 gap-x-32 gap-y-10 relative border-t-2 pb-20 border-black dark:border-white  pt-5'>
            <div className='space-y-5 order-1 lg:-order-1'>
                <h1 className='myfont3 text-8xl -mb-10 dark:text-white'>01</h1>
                <h1 className='myfont5 text-2xl font-semibold dark:text-white'>
                    <span>F</span>
                    <span className='text-[0.99rem]'>rontend</span>
                    <span> P</span>
                    <span className='text-[0.99rem]'>roject</span>
                </h1>
                <p className='myfont3 text-xl leading-5 dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?</p>
                <div className='myfont2 flex flex-wrap gap-6 border-b-2 text-sm border-black dark:border-white py-5 *:bg-black dark:*:bg-white *:text-white dark:*:text-black *:px-5 *:py-2 *:relative'>
                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
                        </div>
                        <span>React.js</span>
                    </span>

                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? 'white' : 'black'} d="m22.177 22.005c1.161-.099 2.057-1.12 2-2.339-.063-1.219-1.063-2.197-2.276-2.197h-.084c-1.255.041-2.239 1.099-2.197 2.359.041.641.301 1.156.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-.339-6.312.801-1.557 2-2.699 2.796-3.256-.197-.52-.437-1.395-.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276.803 0 1.641-.057 2.459-.261 5.199-1 9.131-4.115 11.385-8.708zm7.13-4.994c-3.093-3.636-7.651-5.636-12.843-5.636h-.683c-.333-.735-1.115-1.197-1.995-1.197h-.057c-1.26 0-2.24 1.083-2.199 2.339.043 1.197 1.057 2.197 2.276 2.197h.1c.9-.041 1.677-.599 2-1.401h.739c3.079 0 5.991.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197.719 1.713.677 3.396-.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-.5-3.959-.859-.479.396-1.281 1.057-1.86 1.459 1.761.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zm-20.656 5.713c.043 1.197 1.057 2.197 2.281 2.197h.079c1.281-.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-.084c-.077 0-.197 0-.301.043-1.656-2.797-2.355-5.797-2.095-9.032.157-2.437.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-.084 6.115 5.296 6.251 7.432l2 .599c-.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-.636 10.188 1.64 14.188-.197.255-.317.719-.281 1.156z" /></svg>
                        </div>
                        <span>Redux</span>
                    </span>
                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
                        </div>
                        <span>Tailwind Css</span>
                    </span>
                </div>
                <div className='flex gap-x-5  *:bg-black dark:*:bg-white *:text-white dark:*:text-black *:flex *:flex-1 *:justify-center *:py-2 *:gap-x-5 *:items-center *:relative'>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black dark:bg-white -top-1 left-0 button ' />
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={isDark ? "#000" : "#FFF"} stroke-width="1.5"><path d="m2 9c0-2.82843 0-4.24264.87868-5.12132s2.29289-.87868 5.12132-.87868h8c2.8284 0 4.2426 0 5.1213.87868s.8787 2.29289.8787 5.12132v1c0 2.8284 0 4.2426-.8787 5.1213s-2.2929.8787-5.1213.8787h-8c-2.82843 0-4.24264 0-5.12132-.8787s-.87868-2.2929-.87868-5.1213z" /><path d="m12 19v-2.5m0 2.5 6 2m-6-2-6 2" opacity=".5" stroke-linecap="round" /></g></svg>
                        <span className='myfont3 text-xl tracking-wide'>Preview</span>
                    </button>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black dark:bg-white -top-1 left-0 button ' />
                        <svg height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path fill={isDark ? "#000" : "#FFF"} d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" /></svg>
                        <span className='myfont3 text-xl tracking-wide'>Get Code</span>
                    </button>
                </div>
            </div>
            <div className='space-y-5 flex items-start justify-center relative pb-20 lg:pb-0'>
                <div className='absolute  bg-black -top-12 before:absolute before:-inset-[0.5px] before:border-[1.5px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px]'>
                    <div className='absolute h-1.5 -top-1 left-0 w-[30%] bg-black dark:bg-white button' />
                    <div className='absolute w-[3px] h-[2px] -right-[3px] top-[26px] bg-white dark:bg-black' />
                    <h1 className='myfont3 text-3xl text-white dark:text-black dark:bg-white py-1 px-10'>01. Neo Cinema</h1>
                </div>
                <div className='flex justify-center items-end transition-all duration-[1s]'>
                    {/* <img className={`${imageIndex === 1 ? "w-full" : "w-[38%]"} z-10 transition-all duration-[0.5s]`} src={imageIndex ===1 ? img1 : image3} alt="" /> */}
                    {imageIndex === 1 && <img className={`${imageIndex === 1 ? "scale-1" : " scale-50"} w-full transition-all duration-[0.5s] z-10`} src={img1} alt="" />}
                    {imageIndex === 2 && <img className='w-[38.1%]' src={img3} alt="" />}
                    {imageIndex === 3 && <img className='w-[28.5%]' src={img2} alt="" />}
                </div>
                <div className='flex gap-x-10 items-center justify-center h-16 absolute w-full -bottom-10 xl:-bottom-16'>
                    <button onClick={() => { setImageIndex(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path fill={isDark ? "#FFF" : "#000"} d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(2) }}>
                        <svg height="35" viewBox="0 0 8 8" width="35" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(3) }}>
                        <svg className='scale-[2.2]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="mobile"><g transform="translate(867 -1029.362)"><rect width="9" height="16" x="-863" y="1029.362" fill={isDark ? "#FFF" : "#000"} rx="1" ry="1.067"></rect><path fill={isDark ? "#000" : "#FFF"} d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" opacity=".98"></path><path fill={isDark ? "#FFF" : "#000"} fill-rule="evenodd" stroke="#e9eded" stroke-linecap="round" stroke-linejoin="round" d="M-859.5 1030.862h2"></path><rect width="7" height="9" x="-862" y="1032.362" fill={isDark ? "#000" : "#FFF"} ry="0"></rect></g></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}





const Project2 = ({ isDark }) => {
    const [imageIndex, setImageIndex] = useState(1);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10 '>
            <div className='space-y-5 order-1'>
                <h1 className='myfont3 text-8xl -mb-10 dark:text-white'>02</h1>
                <h1 className='myfont5 text-2xl font-semibold dark:text-white'>
                    <span>F</span>
                    <span className='text-[0.99rem]'>rontend</span>
                    <span> P</span>
                    <span className='text-[0.99rem]'>roject</span>
                </h1>
                <p className='myfont3 text-xl leading-5 dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?</p>
                <div className='myfont2 flex flex-wrap gap-6 border-b-2 text-sm border-black dark:border-white py-5 *:bg-black dark:*:bg-white *:text-white dark:*:text-black *:px-5 *:py-2 *:relative'>
                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
                        </div>
                        <span>React.js</span>
                    </span>

                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? 'white' : 'black'} d="m22.177 22.005c1.161-.099 2.057-1.12 2-2.339-.063-1.219-1.063-2.197-2.276-2.197h-.084c-1.255.041-2.239 1.099-2.197 2.359.041.641.301 1.156.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-.339-6.312.801-1.557 2-2.699 2.796-3.256-.197-.52-.437-1.395-.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276.803 0 1.641-.057 2.459-.261 5.199-1 9.131-4.115 11.385-8.708zm7.13-4.994c-3.093-3.636-7.651-5.636-12.843-5.636h-.683c-.333-.735-1.115-1.197-1.995-1.197h-.057c-1.26 0-2.24 1.083-2.199 2.339.043 1.197 1.057 2.197 2.276 2.197h.1c.9-.041 1.677-.599 2-1.401h.739c3.079 0 5.991.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197.719 1.713.677 3.396-.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-.5-3.959-.859-.479.396-1.281 1.057-1.86 1.459 1.761.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zm-20.656 5.713c.043 1.197 1.057 2.197 2.281 2.197h.079c1.281-.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-.084c-.077 0-.197 0-.301.043-1.656-2.797-2.355-5.797-2.095-9.032.157-2.437.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-.084 6.115 5.296 6.251 7.432l2 .599c-.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-.636 10.188 1.64 14.188-.197.255-.317.719-.281 1.156z" /></svg>
                        </div>
                        <span>Redux</span>
                    </span>
                    <span >
                        <div className='bg-black dark:bg-white h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black dark:border-white bg-white dark:bg-black'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
                        </div>
                        <span>Tailwind Css</span>
                    </span>
                </div>
                <div className='flex gap-x-5  *:bg-black dark:*:bg-white *:text-white dark:*:text-black *:flex *:flex-1 *:justify-center *:py-2 *:gap-x-5 *:items-center *:relative'>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black dark:bg-white -top-1 left-0 button ' />
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={isDark ? "#000" : "#FFF"} stroke-width="1.5"><path d="m2 9c0-2.82843 0-4.24264.87868-5.12132s2.29289-.87868 5.12132-.87868h8c2.8284 0 4.2426 0 5.1213.87868s.8787 2.29289.8787 5.12132v1c0 2.8284 0 4.2426-.8787 5.1213s-2.2929.8787-5.1213.8787h-8c-2.82843 0-4.24264 0-5.12132-.8787s-.87868-2.2929-.87868-5.1213z" /><path d="m12 19v-2.5m0 2.5 6 2m-6-2-6 2" opacity=".5" stroke-linecap="round" /></g></svg>
                        <span className='myfont3 text-xl tracking-wide'>Preview</span>
                    </button>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black dark:bg-white -top-1 left-0 button ' />
                        <svg height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path fill={isDark ? "#000" : "#FFF"} d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" /></svg>
                        <span className='myfont3 text-xl tracking-wide'>Get Code</span>
                    </button>
                </div>
            </div>
            <div className='space-y-5 flex items-start justify-center relative pb-20 lg:pb-0 '>
                <div className='absolute  bg-black -top-12 before:absolute before:-inset-[0.5px] before:border-[1.5px] before:border-black dark:before:border-white before:translate-x-[4px] before:translate-y-[4px]'>
                    <div className='absolute h-1.5 -top-1 left-0 w-[30%] bg-black dark:bg-white button' />
                    <div className='absolute w-[3px] h-[2px] -right-[3px] top-[26px] bg-white dark:bg-black' />
                    <h1 className='myfont3 text-3xl text-white dark:text-black dark:bg-white py-1 px-10'>01. Nike</h1>
                </div>
                <div className='flex justify-center items-end'>
                    {imageIndex === 1 && <img className='w-full' src={image1} alt="" />}
                    {imageIndex === 2 && <img className='w-[38.1%]' src={image3} alt="" />}
                    {imageIndex === 3 && <img className='w-[28.5%]' src={image2} alt="" />}
                </div>
                <div className='flex gap-x-10 items-center justify-center h-16 absolute -bottom-10 xl:-bottom-16'>
                    <button onClick={() => { setImageIndex(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path fill={isDark ? "#FFF" : "#000"} d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(2) }}>
                        <svg height="35" viewBox="0 0 8 8" width="35" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(3) }}>
                        <svg className='scale-[2.2]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="mobile"><g transform="translate(867 -1029.362)"><rect width="9" height="16" x="-863" y="1029.362" fill={isDark ? "#FFF" : "#000"} rx="1" ry="1.067"></rect><path fill={isDark ? "#000" : "#FFF"} d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" opacity=".98"></path><path fill={isDark ? "#FFF" : "#000"} fill-rule="evenodd" stroke="#e9eded" stroke-linecap="round" stroke-linejoin="round" d="M-859.5 1030.862h2"></path><rect width="7" height="9" x="-862" y="1032.362" fill={isDark ? "#000" : "#FFF"} ry="0"></rect></g></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Project3 = ({ isDark }) => {
    const [imageIndex, setImageIndex] = useState(1);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10'>
            <div className='space-y-5 order-1 lg:-order-1'>
                <h1 className='myfont3 text-8xl -mb-10'>03</h1>
                <h1 className='myfont5 text-2xl font-semibold'>
                    <span>F</span>
                    <span className='text-[0.99rem]'>rontend</span>
                    <span> P</span>
                    <span className='text-[0.99rem]'>roject</span>
                </h1>
                <p className='myfont3 text-xl leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?</p>
                <div className='myfont2 flex flex-wrap gap-6 border-b-2 text-sm border-black py-5 *:bg-black *:text-white *:px-5 *:py-2 *:relative'>
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
                        </div>
                        <span>React.js</span>
                    </span>
                    {/* <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22.177 22.005c1.161-.099 2.057-1.12 2-2.339-.063-1.219-1.063-2.197-2.276-2.197h-.084c-1.255.041-2.239 1.099-2.197 2.359.041.641.301 1.156.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-.339-6.312.801-1.557 2-2.699 2.796-3.256-.197-.52-.437-1.395-.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276.803 0 1.641-.057 2.459-.261 5.199-1 9.131-4.115 11.385-8.708zm7.13-4.994c-3.093-3.636-7.651-5.636-12.843-5.636h-.683c-.333-.735-1.115-1.197-1.995-1.197h-.057c-1.26 0-2.24 1.083-2.199 2.339.043 1.197 1.057 2.197 2.276 2.197h.1c.9-.041 1.677-.599 2-1.401h.739c3.079 0 5.991.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197.719 1.713.677 3.396-.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-.5-3.959-.859-.479.396-1.281 1.057-1.86 1.459 1.761.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zm-20.656 5.713c.043 1.197 1.057 2.197 2.281 2.197h.079c1.281-.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-.084c-.077 0-.197 0-.301.043-1.656-2.797-2.355-5.797-2.095-9.032.157-2.437.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-.084 6.115 5.296 6.251 7.432l2 .599c-.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-.636 10.188 1.64 14.188-.197.255-.317.719-.281 1.156z" /></svg>
                        </div>
                        <span>Redux</span>
                    </span> */}
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
                        </div>
                        <span>Tailwind Css</span>
                    </span>
                </div>
                <div className='flex gap-x-5  *:bg-black *:text-white *:flex *:flex-1 *:justify-center *:py-2 *:gap-x-5 *:items-center *:relative'>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button ' />
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={isDark ? "#000" : "#FFF"} stroke-width="1.5"><path d="m2 9c0-2.82843 0-4.24264.87868-5.12132s2.29289-.87868 5.12132-.87868h8c2.8284 0 4.2426 0 5.1213.87868s.8787 2.29289.8787 5.12132v1c0 2.8284 0 4.2426-.8787 5.1213s-2.2929.8787-5.1213.8787h-8c-2.82843 0-4.24264 0-5.12132-.8787s-.87868-2.2929-.87868-5.1213z" /><path d="m12 19v-2.5m0 2.5 6 2m-6-2-6 2" opacity=".5" stroke-linecap="round" /></g></svg>
                        <span className='myfont3 text-xl tracking-wide'>Preview</span>
                    </button>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button' />
                        <svg height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path fill={isDark ? "#000" : "#FFF"} d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" /></svg>
                        <span className='myfont3 text-xl tracking-wide'>Get Code</span>
                    </button>
                </div>
            </div>
            <div className='space-y-5 flex items-start justify-center relative pb-20 lg:pb-0 '>
                <div className='absolute  bg-black -top-12 before:absolute before:-inset-[0.5px] before:border-[1.5px] before:border-black before:translate-x-[4px] before:translate-y-[4px]'>
                    <div className='absolute h-1.5 -top-1 left-0 w-[30%] bg-black button' />
                    <h1 className='myfont3 text-3xl text-white py-1 px-10'>03. Foodie Faster</h1>
                </div>
                <div className='flex justify-center items-end'>
                    {imageIndex === 1 && <img className='w-full' src={pic1} alt="" />}
                    {imageIndex === 2 && <img className='w-[38.1%]' src={pic3} alt="" />}
                    {imageIndex === 3 && <img className='w-[28.5%]' src={pic2} alt="" />}
                </div>
                <div className='flex gap-x-10 items-center justify-center h-16 absolute -bottom-10 xl:-bottom-16'>
                    <button onClick={() => { setImageIndex(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(2) }}>
                        <svg height="35" viewBox="0 0 8 8" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(3) }}>
                        <svg className='scale-[2.2]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="mobile"><g transform="translate(867 -1029.362)"><rect width="9" height="16" x="-863" y="1029.362" fill={isDark ? "#FFF" : "#000"} rx="1" ry="1.067"></rect><path fill={isDark ? "#000" : "#FFF"} d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" opacity=".98"></path><path fill={isDark ? "#FFF" : "#000"} fill-rule="evenodd" stroke="#e9eded" stroke-linecap="round" stroke-linejoin="round" d="M-859.5 1030.862h2"></path><rect width="7" height="9" x="-862" y="1032.362" fill={isDark ? "#000" : "#FFF"} ry="0"></rect></g></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Project4 = ({ isDark }) => {
    const [imageIndex, setImageIndex] = useState(1);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10'>
            <div className='space-y-5 order-1'>
                <h1 className='myfont3 text-8xl -mb-10'>04</h1>
                <h1 className='myfont5 text-2xl font-semibold'>
                    <span>F</span>
                    <span className='text-[0.99rem]'>rontend</span>
                    <span> P</span>
                    <span className='text-[0.99rem]'>roject</span>
                </h1>
                <p className='myfont3 text-xl leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?</p>
                <div className='myfont2 flex flex-wrap gap-6 border-b-2 text-sm border-black py-5 *:bg-black *:text-white *:px-5 *:py-2 *:relative'>
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
                        </div>
                        <span>React.js</span>
                    </span>
                    {/* <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22.177 22.005c1.161-.099 2.057-1.12 2-2.339-.063-1.219-1.063-2.197-2.276-2.197h-.084c-1.255.041-2.239 1.099-2.197 2.359.041.641.301 1.156.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-.339-6.312.801-1.557 2-2.699 2.796-3.256-.197-.52-.437-1.395-.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276.803 0 1.641-.057 2.459-.261 5.199-1 9.131-4.115 11.385-8.708zm7.13-4.994c-3.093-3.636-7.651-5.636-12.843-5.636h-.683c-.333-.735-1.115-1.197-1.995-1.197h-.057c-1.26 0-2.24 1.083-2.199 2.339.043 1.197 1.057 2.197 2.276 2.197h.1c.9-.041 1.677-.599 2-1.401h.739c3.079 0 5.991.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197.719 1.713.677 3.396-.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-.5-3.959-.859-.479.396-1.281 1.057-1.86 1.459 1.761.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zm-20.656 5.713c.043 1.197 1.057 2.197 2.281 2.197h.079c1.281-.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-.084c-.077 0-.197 0-.301.043-1.656-2.797-2.355-5.797-2.095-9.032.157-2.437.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-.084 6.115 5.296 6.251 7.432l2 .599c-.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-.636 10.188 1.64 14.188-.197.255-.317.719-.281 1.156z" /></svg>
                        </div>
                        <span>Redux</span>
                    </span> */}
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
                        </div>
                        <span>Tailwind Css</span>
                    </span>
                </div>
                <div className='flex gap-x-5  *:bg-black *:text-white *:flex *:flex-1 *:justify-center *:py-2 *:gap-x-5 *:items-center *:relative'>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button ' />
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={isDark ? "#000" : "#FFF"} stroke-width="1.5"><path d="m2 9c0-2.82843 0-4.24264.87868-5.12132s2.29289-.87868 5.12132-.87868h8c2.8284 0 4.2426 0 5.1213.87868s.8787 2.29289.8787 5.12132v1c0 2.8284 0 4.2426-.8787 5.1213s-2.2929.8787-5.1213.8787h-8c-2.82843 0-4.24264 0-5.12132-.8787s-.87868-2.2929-.87868-5.1213z" /><path d="m12 19v-2.5m0 2.5 6 2m-6-2-6 2" opacity=".5" stroke-linecap="round" /></g></svg>
                        <span className='myfont3 text-xl tracking-wide'>Preview</span>
                    </button>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button' />
                        <svg height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path fill={isDark ? "#000" : "#FFF"} d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" /></svg>
                        <span className='myfont3 text-xl tracking-wide'>Get Code</span>
                    </button>
                </div>
            </div>
            <div className='space-y-5 flex items-start justify-center relative pb-20 lg:pb-0'>
                <div className='absolute  bg-black -top-12 before:absolute before:-inset-[0.5px]  before:border-[1.5px] before:border-black before:translate-x-[4px] before:translate-y-[4px]'>
                    <div className='absolute h-1.5 -top-1 left-0 w-[30%] bg-black button' />
                    <h1 className='myfont3 text-3xl text-white py-1 px-10'>04. Food Hub</h1>
                </div>
                <div className='flex justify-center items-end'>
                    {imageIndex === 1 && <img className='w-full' src={thumb1} alt="" />}
                    {imageIndex === 2 && <img className='w-[38.1%]' src={thumb3} alt="" />}
                    {imageIndex === 3 && <img className='w-[28.5%]' src={thumb2} alt="" />}
                </div>
                <div className='flex gap-x-10 items-center justify-center h-16 absolute -bottom-10 xl:-bottom-16'>
                    <button onClick={() => { setImageIndex(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(2) }}>
                        <svg height="35" viewBox="0 0 8 8" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(3) }}>
                        <svg className='scale-[2.2]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="mobile"><g transform="translate(867 -1029.362)"><rect width="9" height="16" x="-863" y="1029.362" fill={isDark ? "#FFF" : "#000"} rx="1" ry="1.067"></rect><path fill={isDark ? "#000" : "#FFF"} d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" opacity=".98"></path><path fill={isDark ? "#FFF" : "#000"} fill-rule="evenodd" stroke="#e9eded" stroke-linecap="round" stroke-linejoin="round" d="M-859.5 1030.862h2"></path><rect width="7" height="9" x="-862" y="1032.362" fill={isDark ? "#000" : "#FFF"} ry="0"></rect></g></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Project5 = ({ isDark }) => {
    const [imageIndex, setImageIndex] = useState(1);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-10'>
            <div className='space-y-5 order-1 lg:-order-1'>
                <h1 className='myfont3 text-8xl -mb-10'>05</h1>
                <h1 className='myfont5 text-2xl font-semibold'>
                    <span>F</span>
                    <span className='text-[0.99rem]'>rontend</span>
                    <span> P</span>
                    <span className='text-[0.99rem]'>roject</span>
                </h1>
                <p className='myfont3 text-xl leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae. Necessitatibus odit impedit omnis ab consequatur deleniti optio perferendis quae assumenda, consequuntur voluptate eius blanditiis illum voluptatibus itaque enim dignissimos?</p>
                <div className='myfont2 flex flex-wrap gap-6 border-b-2 text-sm border-black py-5 *:bg-black *:text-white *:px-5 *:py-2 *:relative'>
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zm-135.3-84.9c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-115.7 215.2c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zm-103.1-112.5c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zm-116-61.3c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8-45.8 20.5-45.8 45.8 20.5 45.8 45.8 45.8z" /></svg>
                        </div>
                        <span>React.js</span>
                    </span>
                    {/* <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22.177 22.005c1.161-.099 2.057-1.12 2-2.339-.063-1.219-1.063-2.197-2.276-2.197h-.084c-1.255.041-2.239 1.099-2.197 2.359.041.641.301 1.156.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-.339-6.312.801-1.557 2-2.699 2.796-3.256-.197-.52-.437-1.395-.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276.803 0 1.641-.057 2.459-.261 5.199-1 9.131-4.115 11.385-8.708zm7.13-4.994c-3.093-3.636-7.651-5.636-12.843-5.636h-.683c-.333-.735-1.115-1.197-1.995-1.197h-.057c-1.26 0-2.24 1.083-2.199 2.339.043 1.197 1.057 2.197 2.276 2.197h.1c.9-.041 1.677-.599 2-1.401h.739c3.079 0 5.991.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197.719 1.713.677 3.396-.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-.5-3.959-.859-.479.396-1.281 1.057-1.86 1.459 1.761.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zm-20.656 5.713c.043 1.197 1.057 2.197 2.281 2.197h.079c1.281-.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-.084c-.077 0-.197 0-.301.043-1.656-2.797-2.355-5.797-2.095-9.032.157-2.437.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-.084 6.115 5.296 6.251 7.432l2 .599c-.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-.636 10.188 1.64 14.188-.197.255-.317.719-.281 1.156z" /></svg>
                        </div>
                        <span>Redux</span>
                    </span> */}
                    <span >
                        <div className='bg-black h-1.5 w-[30%] -top-1 right-0 absolute name-box' />
                        <div className='w-8 h-8 p-1  absolute -top-3 -left-3 border-[2px] border-black bg-white'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill={isDark ? "#FFF" : "#000"} d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" /></svg>
                        </div>
                        <span>Tailwind Css</span>
                    </span>
                </div>
                <div className='flex gap-x-5  *:bg-black *:text-white *:flex *:flex-1 *:justify-center *:py-2 *:gap-x-5 *:items-center *:relative'>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button ' />
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={isDark ? "#000" : "#FFF"} stroke-width="1.5"><path d="m2 9c0-2.82843 0-4.24264.87868-5.12132s2.29289-.87868 5.12132-.87868h8c2.8284 0 4.2426 0 5.1213.87868s.8787 2.29289.8787 5.12132v1c0 2.8284 0 4.2426-.8787 5.1213s-2.2929.8787-5.1213.8787h-8c-2.82843 0-4.24264 0-5.12132-.8787s-.87868-2.2929-.87868-5.1213z" /><path d="m12 19v-2.5m0 2.5 6 2m-6-2-6 2" opacity=".5" stroke-linecap="round" /></g></svg>
                        <span className='myfont3 text-xl tracking-wide'>Preview</span>
                    </button>
                    <button className='before:absolute before:inset-[1px] before:border-b-[2px] before:border-r-[2px] before:border-black before:translate-x-[4px] before:translate-y-[4px] active:before:-translate-x-[1px] active:before:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px]'>
                        <div className='absolute w-[30%] h-1.5 bg-black -top-1 left-0 button' />
                        <svg height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path fill={isDark ? "#000" : "#FFF"} d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" /></svg>
                        <span className='myfont3 text-xl tracking-wide'>Get Code</span>
                    </button>
                </div>
            </div>
            <div className='space-y-5 flex items-start justify-center relative pb-20 lg:pb-0'>
                <div className='absolute  bg-black -top-12 before:absolute before:-inset-[0.5px] before:border-[1.5px] before:border-black before:translate-x-[4px] before:translate-y-[4px]'>
                    <div className='absolute h-1.5 -top-1 left-0 w-[30%] bg-black button' />
                    <h1 className='myfont3 text-3xl text-white py-1 px-10'>05. Connie</h1>
                </div>
                <div className='flex justify-center items-end'>
                    {imageIndex === 1 && <img className='w-full' src={picture1} alt="" />}
                    {imageIndex === 2 && <img className='w-[38.1%]' src={picture3} alt="" />}
                    {imageIndex === 3 && <img className='w-[28.5%]' src={picture2} alt="" />}
                </div>
                <div className='flex gap-x-10 items-center justify-center h-16 absolute -bottom-10 xl:-bottom-16'>
                    <button onClick={() => { setImageIndex(1) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(2) }}>
                        <svg height="35" viewBox="0 0 8 8" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" /></svg>
                    </button>
                    <button onClick={() => { setImageIndex(3) }}>
                        <svg className='scale-[2.2]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="mobile"><g transform="translate(867 -1029.362)"><rect width="9" height="16" x="-863" y="1029.362" fill={isDark ? "#FFF" : "#000"} rx="1" ry="1.067"></rect><path fill={isDark ? "#000" : "#FFF"} d="M-857.5 1043.362a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" opacity=".98"></path><path fill={isDark ? "#FFF" : "#000"} fill-rule="evenodd" stroke="#e9eded" stroke-linecap="round" stroke-linejoin="round" d="M-859.5 1030.862h2"></path><rect width="7" height="9" x="-862" y="1032.362" fill={isDark ? "#000" : "#FFF"} ry="0"></rect></g></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}