import {createContext,useState} from "react";

export const IsAuthContext = createContext();

export const IsAuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(true);

    const handleToggleAuth =()=>{
        setIsAuth((pre)=>!pre);
    }
    return (
        <IsAuthContext.Provider value={{isAuth,handleToggleAuth}}>
        {children}
    </IsAuthContext.Provider>

    )
}
    