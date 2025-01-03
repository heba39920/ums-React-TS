import { createContext, useContext, useState, useEffect } from "react";
import { SidebarProviderProps } from "../SideBar/SidebarProvider";
import { jwtDecode } from "jwt-decode";
interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    image: string,
    birthDate: string,
    age: number,
}
 interface AuthContextType {  
    saveData: () => void;
     userData: User | null;
} 

const defaultContextValue: AuthContextType = {  
    saveData: () => {},
     userData: null

};

export  const AuthContext = createContext<AuthContextType| null>(defaultContextValue);


export const AuthContextProvider: React.FC<SidebarProviderProps> = ({children}) => {
    const [userData, setUserData] = useState(null);
    const saveData = ()=>{
       const encodedUser = localStorage.getItem("userToken");
       if (encodedUser) { 
            
            const decodedUser = jwtDecode<User | null>(encodedUser);  
            
            setUserData(decodedUser);  
    } 
}  

    useEffect(()=>{
        if(localStorage.getItem("userToken")){
            saveData();
        }
    },[])
  return (
<AuthContext.Provider value={{saveData,userData}}>
    {children}
</AuthContext.Provider>
  )
}
export const useAuthContext = () => {  
    return useContext(AuthContext);  
}; 