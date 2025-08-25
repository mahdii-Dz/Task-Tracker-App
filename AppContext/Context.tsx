'use client'
import { Task } from "@/Types/task";
import React, { createContext, useState } from "react";

type GlobalType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  TasksList?: Task[];
  setTasksList?: React.Dispatch<React.SetStateAction<Task[]>>;
};



export const GLobalContext = createContext<GlobalType | null>(null);

function Context({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [TasksList, setTasksList] = useState<Task[]>([]);

  

  return (
    <GLobalContext.Provider value={{ isOpen, setIsOpen,TasksList, setTasksList }}>
      {children}
    </GLobalContext.Provider>
  );
}

export default Context;
