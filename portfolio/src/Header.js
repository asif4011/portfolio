import React from "react";
import myresume from "./Asif_resume.pdf";
function Header(){
    return(
        <div className="nav">
            
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href={myresume} download="resume.pdf">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header