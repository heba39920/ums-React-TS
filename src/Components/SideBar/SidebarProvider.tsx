import { createContext, ReactNode, useContext, useState } from "react";
interface SidebarContextType {  
    isCollapsed: boolean;  
    handleCollapse: () => void;  
    collapse: () => void;  

} 
const defaultContextValue: SidebarContextType = {  
    isCollapsed: false, 
    handleCollapse: () => {} ,
    collapse: () => {}

};  

export interface SidebarProviderProps {  
    children: ReactNode; 
}
const SidebarContext = createContext<SidebarContextType>(defaultContextValue);  

export const SidebarProvider: React.FC<SidebarProviderProps>= ({children}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = ()=>{
   setIsCollapsed(!isCollapsed)
  }
  const collapse = ()=>{
    setIsCollapsed(true)
   }
  return (
    <SidebarContext.Provider value={{ isCollapsed, handleCollapse, collapse }}>  
    {children}  
</SidebarContext.Provider>  
  )
}
export const useSidebar = () => {  
    return useContext(SidebarContext);  
}; 