'use client'
import React, { createContext, useState } from "react";

type GlobalType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  TasksList?: string[];
  setTasksList?: React.Dispatch<React.SetStateAction<string[]>>;
};



export const GLobalContext = createContext<GlobalType | null>(null);

function Context({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [TasksList, setTasksList] = useState<string[]>([]);



  return (
    <GLobalContext.Provider value={{ isOpen, setIsOpen,TasksList, setTasksList }}>
      {children}
    </GLobalContext.Provider>
  );
}

export default Context;
