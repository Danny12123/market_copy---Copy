import React from 'react'
import SideBar from '../../component/SideBar'
import TopBar from '@/app/component/TopBar'
import { SidebarProvider } from '@/app/context/SideBarContext'

const DashboardLayOut = ({ children }) => {
  return (
    <main>
      <TopBar />
      <SidebarProvider>
        <SideBar children={children} />
      </SidebarProvider>
    </main>
  )
}

export default DashboardLayOut
