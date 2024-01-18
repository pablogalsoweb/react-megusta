import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Header } from "./sections/header";
import { Home } from "./pages/Home";
import { Gatitos } from "./pages/gatitos";
import { Perritos } from "./pages/perritos";
 
const rutas = createBrowserRouter([
    {
        path:"/",
        element: <Header />,
        children: [
                    {
                        path: "/",
                        element: <Home />
                    },
                    {
                        path: "/gatitos",
                        element: <Gatitos />
                    },
                    {
                        path: "/perritos",
                        element: <Perritos />
                    }
                ]
    }
]);

export function RouterApp(){
    return <RouterProvider router = {rutas}></RouterProvider>
}