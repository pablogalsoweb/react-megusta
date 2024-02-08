import { createContext, useState } from "react";
import {TotalMeGustaContextType, TotalMeGustaState} from "../interfaces/interface"
 

const TotalMeGustaContext = createContext <TotalMeGustaContextType>({} as TotalMeGustaContextType);

function TotalMeGustaContextProvider({children}: {children:React.ReactElement}){

    const [totalMegusta, setTotalMegusta] = useState<TotalMeGustaState>({'perros':0, 'gatos':0}); 
 
    return (
        <TotalMeGustaContext.Provider value={{totalMegusta, setTotalMegusta}} >
         {children}
        </TotalMeGustaContext.Provider>
    );
}

export { TotalMeGustaContext, TotalMeGustaContextProvider };