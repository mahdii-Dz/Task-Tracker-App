"use client";
import { GLobalContext } from "@/AppContext/Context";
import React, { useContext } from "react";

function TasksList() {
  const { TasksList , setTasksList} = useContext(GLobalContext)!;

  function handleCheckBoxCLick(e:React.ChangeEvent<HTMLInputElement>,id:number){
    setTasksList!(prev=> prev!.map(task=> task.id===id ? {...task,done:!task.done} : task))
  }
  return (
    <main className=" w-1/2 h-full py-6 pr-1.5 bg-gray-100 ">
      <div className="w-full h-full flex flex-col items-center overflow-y-scroll overflow-x-hidden gap-4">
        {TasksList ? (
          TasksList.map((task) => (
            <div
              key={task.id}
              className="bg-white w-11/12 shadow-md rounded p-4 flex items-center gap-4"
            >
              <input onChange={(e)=> handleCheckBoxCLick(e,task.id)}  type="checkbox" className="size-6 cursor-pointer caret-blue-400" />
              <h3 className={`font-semibold w-full break-all ${task.done && "line-through text-gray-500"}`}>{task.text}</h3>
              
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
