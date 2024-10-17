import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import ToDoListIcon from '../../icons/ToDoListIcon';
import Links from '../Links';

const HomePage = () => {
    const [list, setList] = useState([]);
    const [listInput, setListInput] = useState("");
    const listRef = useRef(null);
    const [isFirstTime, setTiming] = useState(true)
    const [isNullData, setunNull] = useState(false);

    const updateInput = (e) => {
        const value = e.target.value;
        setListInput(value);
    };

    const updateTodoList = async () => {
        if (listInput === "") {
            setunNull(true);
        }
        else {
            await axios.post("http://localhost:3001/to-do-list", { listInput });
            setListInput("");
            fetchTodoList(); // Fetch the updated list
            setTiming(false)
            setunNull(false);
        }
    };

    const fetchTodoList = async () => {
        const response = await axios.get("http://localhost:3001/to-do-list");
        setList(response.data);
    };

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3001/to-do-list/${id}`);
        fetchTodoList(); // Fetch the updated list
        setTiming(true)
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    useEffect(() => {
        if (listRef.current && !isFirstTime) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [list]);

    const handleChecked = async (id) => {
        await axios.patch(`http://localhost:3001/to-do-list/${id}`);
        fetchTodoList(); // Fetch the updated list
    }
    const unsetCheck = async (id) => {
        await axios.put(`http://localhost:3001/to-do-list/${id}`);
        fetchTodoList(); // Fetch the updated list
    }

    const innserHeight = window.innerHeight;

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-slate-100 font-Rajdhani'>
            <Links/>
            <div className=' bg-white fixed top-0 sm:static shadow-md min-w-[100%] md:min-w-[85%] lg:min-w-[600px] p-3'>
                <div className='space-y-5 bg-white'>
                    <div>
                        <h1 className='font-extrabold text-3xl text-violet-700 flex items-center gap-x-3'><span>TO-DO LIST</span> {<ToDoListIcon />} </h1>
                    </div>
                    <div className='relative bg-violet-700/[1] shadow-md  flex items-center'>
                        <input onChange={updateInput} className='w-full bg-transparent py-2.5 outline-none border-none pl-3 pr-20 text-white placeholder:text-white/[0.7] placeholder:font-normal font-semibold' type="text" placeholder='Add your work here' name="listInput" value={listInput} />
                        <button onClick={updateTodoList} className='absolute right-0 bg-white text-black font-extrabold mr-1 px-5 py-1.5 shadow-md'>ADD</button>
                    </div>
                    <div>
                        {
                            isNullData ? <h1 className='-mt-5  text-xs font-bold text-red-500'>*Please fill some value</h1> : ""
                        }
                    </div>
                </div>
                <div style={{
                    maxHeight: (innserHeight - 150)
                }} ref={listRef} className={` space-y-2 lg:max-h-[500px] overflow-y-auto py-1`}>
                    {
                        list.map((val, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center bg-slate-200 px-1 py-1'>
                                    <div className='flex items-center gap-x-2 pl-1'>
                                        {!val.isChecked && <input onChange={() => { handleChecked(val._id) }} checked={val.isChecked} className={`w-4 h-4 rounded-none`} type="checkbox" />}
                                        {
                                            val.isChecked &&
                                            <button onClick={() => {unsetCheck(val._id)}}
                                                className={`w-5 h-5 flex items-center justify-center border-2 rounded ${val.isChecked ? 'bg-violet-700 border-violet-700' : 'bg-white border-gray-300'}`}
                                            >
                                                {val.isChecked && (
                                                    <svg
                                                        className="w-4 h-4 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 13l4 4L19 7"
                                                        ></path>
                                                    </svg>
                                                )}
                                            </button>
                                        }
                                        <p className={` font-semibold px-2 ${val.isChecked ? "line-through text-black/[0.5]" : "text-black"}`}>{val.listInput}</p>
                                    </div>
                                    <button onClick={() => { deleteData(val._id) }} className='text-xs font-extrabold bg-violet-700 text-white py-2 px-3 outline-none shadow-md'>DELETE</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage