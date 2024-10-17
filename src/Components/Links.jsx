import React from 'react'
import { useNavigate } from 'react-router-dom'

const Links = () => {
    const navigate = useNavigate();
  return (
    <div className='hidden  fixed bottom-0 right-0 sm:flex flex-col p-5 gap-y-3  *:bg-violet-700 *:text-white *:px-5 *:py-2'>
        <button onClick={() => {navigate('/')}}>Home</button>
        <button onClick={() => {navigate('/HomePage')}}>ToDoList</button>
        <button onClick={() => {navigate('/ToDoList')}}>ToDoList2</button>
        <button onClick={() => {navigate('/Login')}}>Login</button>
        <button onClick={() => {navigate('/Signup')}}>Signup</button>
        <button onClick={() => {navigate('/LogIn')}}>Login2</button>
        <button onClick={() => {navigate('/SignUp')}}>Signup2</button>
        <button onClick={() => {navigate('/Home')}}>Home2</button>
    </div>
  )
}

export default Links