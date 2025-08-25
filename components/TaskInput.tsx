'use client'
import React, { useContext, useState } from "react";
import InputPopUp from "./InputPopUp";
import { GLobalContext } from "@/AppContext/Context";

function TaskInput() {
  const {isOpen, setIsOpen} = useContext(GLobalContext)!
  return (
    <header>
      <button onClick={()=>setIsOpen(!isOpen)} className="bg-blue-400 text-xl text-white rounded hover:bg-blue-500 cursor-pointer font-semibold px-8 py-3">
        Add Task
      </button>
      {isOpen && <InputPopUp />}
    </header>
  );
}

export default TaskInput;
