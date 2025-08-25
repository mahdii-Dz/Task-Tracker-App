'use client'
import { GLobalContext } from '@/AppContext/Context'
import { Task } from '@/Types/task'
import React, { useContext, useState } from 'react'

function InputPopUp() {
  const {setIsOpen ,setTasksList} = useContext(GLobalContext)!
  const [newTask, setNewTask] = useState<Task>({id:Date.now(),text:"",done:false})
  console.log(newTask);
  
  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    if(newTask.text.trim()==="") return
    setIsOpen(false)
    setTasksList!(prev=>[...prev!,newTask])
  } 
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setNewTask({...newTask,text:e.target.value}) 
  }
  return (
    <div className='absolute top-0 left-0 flex w-full flex-col items-center justify-center min-h-dvh bg-black/30'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-xs sm:w-2xl bg-white rounded px-8 py-6'>
            <input onChange={(e)=>handleChange(e)} value={newTask.text} type="text" placeholder="Add a task" className="input border rounded border-gray-400 w-full outline-none px-2 py-2 " />
            <button className='btn bg-blue-400 w-full cursor-pointer hover:bg-blue-500 text-white text-lg font-semibold py-2 rounded'>Add</button>
        </form>
    </div>
  )
}

export default InputPopUp