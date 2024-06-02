'use client'
import { createContext, useContext, useState } from 'react'

const AccountContext = createContext()

export const AccountNavigatorProvider = ({ children }) => {
  const [isTab, setIsTab] = useState(1)

  return (
    <AccountContext.Provider value={{ setIsTab, isTab }}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccountNavigator = () => {
  return useContext(AccountContext)
}
