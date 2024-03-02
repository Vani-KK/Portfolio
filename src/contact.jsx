import React from "react";
import "./navbar.css"

export default function Contact() {
    return (
        <>
            <div className="main-div">
                <h3>Contact:</h3><br />
                <div className="contacts">
                    <h5>LinkedIn : </h5>
                    <a href="https://www.linkedin.com/in/vani-k-k-701253250" className="link" target="_blank" rel="noopener noreferrer">
                        linkedin.com
                    </a>
                </div>
                <div className="contacts">
                    <h5>Github : </h5>
                    <a href="https://github.com/Vani-KK" className="link" target="_blank" rel="noopener noreferrer">
                        github.com/Vani-KK
                    </a>
                </div>
                <div className="contacts">
                    <h5>Phone : 6238001189</h5>
                </div>
                <div className="contacts">
                    <h5>Email : vani.ds22@sahyadri.edu.in</h5>
                </div>
            </div>


        </>
    )
}