import React from 'react'
import { NavLink } from 'react-router-dom'
const ButtonClicked = ()=>{
 alert("Hey Connections!!!");
};
export default function Navbar() {
    
    return (
        <>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassname="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassname="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassname="active">Contact</NavLink>
                </li>
                <li>
                    <button onClick={ButtonClicked} className='btn'>Connect</button>
                </li>
            </ul>
        </>
    )
}
