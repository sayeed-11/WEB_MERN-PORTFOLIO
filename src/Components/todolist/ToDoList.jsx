import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import Links from '../Links';


const ToDoList = () => {
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


    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-black font-quickSand'>
            <Links/>
            <div className='space-y-5 bg-gradient-to-bl from-white to-slate-600 w-[500px] p-3 rounded-md'>
                <div>
                    <h1 className='font-quickSand font-bold text-xl'>TO-DO LIST</h1>
                </div>
                <div className='relative bg-black text-white rounded-full flex items-center'>
                    <input onChange={updateInput} className='w-full bg-transparent py-3 outline-none border-none pl-3 pr-20 rounded-full' type="text" name="listInput" value={listInput} />
                    <button onClick={updateTodoList} className='absolute right-0 bg-gradient-to-bl text-black font-extrabold from-white to-slate-600 mr-1 rounded-full px-5 py-2'>ADD</button>
                </div>
                <div>
                    {
                        isNullData ? <h1 className='-mt-5 ml-3 text-xs font-bold text-red-900'>*Please fill some value</h1> : ""
                    }
                </div>
                <div ref={listRef} className=' space-y-2 max-h-[300px] overflow-y-auto'>
                    {
                        list.map((val, index) => {
                            return (
                                <div key={index} className='flex justify-between items-start bg-white/[0.3] rounded-lg px-1 py-1'>
                                    <p className='text-black font-bold px-2'>{val.listInput}</p>
                                    <button onClick={() => { deleteData(val._id) }} className='text-xs font-extrabold bg-black text-white rounded-md py-2 px-3 outline-none'>DELETE</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoList