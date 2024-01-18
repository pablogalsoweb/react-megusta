import './App.css'
import { RouterApp } from './Router'; 
import { TotalMeGustaContextProvider } from './Context/totalMeGustaContextProvider';


function App() {

  return (
    <TotalMeGustaContextProvider>
        <RouterApp />
    </TotalMeGustaContextProvider>
    
  )
}

export default App
