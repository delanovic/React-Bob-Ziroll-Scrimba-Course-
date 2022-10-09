import React from "react"



export default function info() {
    return(
        <div className="info">
          
            <img src="../images/ls.png" />
            <h1>Laura Smith</h1>
            <small>Frontend Developer</small>
            <i>website.laura</i>
            <div className="info__links">
                <a className="email"><i class="fa-solid fa-envelope"></i>Email</a>
                <a className="linked"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
            </div>
        
            
        </div>
    )
}