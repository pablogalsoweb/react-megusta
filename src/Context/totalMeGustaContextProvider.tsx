import { createContext, useState } from "react";
 
const TotalMeGustaContext = createContext(null);

function TotalMeGustaContextProvider({children}: {children:React.ReactElement}){

    const [totalMegusta, setTotalMegusta] = useState({'perros':0, 'gatos':0}); 
 
    return (
        <TotalMeGustaContext.Provider value={{totalMegusta, setTotalMegusta}} >
         {children}
        </TotalMeGustaContext.Provider>
    );
}

export { TotalMeGustaContext, TotalMeGustaContextProvider };