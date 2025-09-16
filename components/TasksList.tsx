"use client";
import { GLobalContext } from "@/AppContext/Context";
import React, { useContext } from "react";

function TasksList() {
  const { TasksList , setTasksList} = useContext(GLobalContext)!;

  function handleCheckBoxCLick(e:React.ChangeEvent<HTMLInputElement>,id:number){
    setTasksList!(prev=> prev!.map(task=> task.id===id ? {...task,done:!task.done} : task))
  }
  function handleDeleteClick(id:number){
    setTasksList!(prev => prev!.filter(task=> task.id !== id))
  }

  return (
    <main className=" w-1/2 h-full py-6 pr-1.5 bg-gray-100 ">
      <div className="w-full h-full flex flex-col items-center overflow-y-scroll overflow-x-hidden gap-4">
        {TasksList ? (
          TasksList.map((task) => (
            <div
              key={task.id}
              className="bg-white w-11/12 shadow-md rounded p-4 flex justify-between items-center gap-4"
            >
              <div className="flex items-center gap-4 w-full">
                <input onChange={(e)=> handleCheckBoxCLick(e,task.id)}  type="checkbox" className="size-6 cursor-pointer caret-blue-400" />
                <h3 className={`font-semibold w-full break-all ${task.done && "line-through text-gray-500"}`}>{task.text}</h3>
              </div>
              <div onClick={()=>handleDeleteClick(task.id)} className="cursor-pointer text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-red-600"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl font-semibold text-gray-600">
            No Tasks Added
          </h2>
        )}
      </div>
    </main>
  );
}

export default TasksList;
