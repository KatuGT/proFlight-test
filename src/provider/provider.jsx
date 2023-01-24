import { createContext, useContext, useState } from "react";


const buttonContext = createContext();
const changeButtonContext = createContext();

export const useBottonContext = () => { 
    return useContext(buttonContext)
 }

 export const useChangeButtonContext = () => { 
    return useContext(changeButtonContext)
 }


export const ButtonProvider = ({ children }) => { 
    const [currentButton, setCurrentButton] = useState({
        first:true,
        last:false,
    });
    return (
        <buttonContext.Provider value={currentButton}>
            <changeButtonContext.Provider value={setCurrentButton}>
                {children}
            </changeButtonContext.Provider>
        </buttonContext.Provider>
    )
 }