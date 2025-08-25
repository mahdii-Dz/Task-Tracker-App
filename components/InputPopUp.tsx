'use client'
import { GLobalContext } from '@/AppContext/Context'
import React, { useContext, useState } from 'react'

function InputPopUp() {
  const {setIsOpen ,setTasksList} = useContext(GLobalContext)!
  const [newTask, setNewTask] = useState('')
  console.log(newTask);
  
  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setIsOpen(false)
    setTasksList!(prev=>[...prev!,newTask])
  } 
  return (
    <div className='absolute top-0 left-0 flex w-full flex-col items-center justify-center min-h-dvh bg-black/30'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-2xl bg-white rounded px-8 py-6'>
            <input onChange={(e)=>setNewTask(e.target.value)} value={newTask} type="text" placeholder="Add a task" className="input border rounded border-gray-400 w-full outline-none px-2 py-2 min-w-xs" />
            <button className='btn bg-blue-400 w-full cursor-pointer hover:bg-blue-500 text-white text-lg font-semibold py-2 min-w-xs rounded'>Add</button>
        </form>
    </div>
  )
}

export default InputPopUp