'use client'

import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [mainSideBar, setMainSideBar] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  const toggleMainSideBar = () => setMainSideBar(!mainSideBar)
  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, toggleSidebar, toggleMainSideBar, mainSideBar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  // if (!context) {
  //   throw new Error('useSidebar must be used within a SidebarProvider');
  // }
  return context
}
