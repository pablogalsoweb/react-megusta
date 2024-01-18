import { Link, Outlet } from "react-router-dom";

export function Header(){
    return (
        <>
        <header>
            <ul>
                <li><Link to={"/"}>Home</Link></li> 
                <li><Link to={"/gatitos"}>Gatitos</Link></li>
                <li><Link to={"/perritos"}>Perritos</Link></li>
            </ul> 
        </header>
        <Outlet />
        </>
    )
}