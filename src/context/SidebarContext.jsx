import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const value = { isDrawerOpen, setIsDrawerOpen }

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }