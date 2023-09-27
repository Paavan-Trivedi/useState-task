import React, { useState } from 'react'
import './darkmode.css'

export default function Darkmode() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: '#d3d3d3'
    })

    const [btnText, setbtnText] = useState("Dark Mode")

    const toggle = () => {
        if(myStyle.color == 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: '#111b20'
            })
            setbtnText("Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: '#d3d3d3'
            })
            setbtnText("Dark Mode")
        }
    }

  return (
    <>
        <div className="main" style={myStyle}>
            <nav className="navbar">
                <ul>
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="details">
                <div className="dts">
            <h1>Paavan Trivedi</h1>
            <p>I'm a React Js Developer. Currently I'm working at <br /> Tuvoc  Technologies Pvt. Ltd. My Hobbies are <br /> Photography and I'm also a Guitarist.</p>
            <button onClick={toggle} className="btn">{btnText}</button>
            </div>
            <img src="_GOP2053.JPG" alt="" />
            </div>
        </div>
    </>
  )
}
