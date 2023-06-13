import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
       <nav>
       <ul>
            <li>Messages</li>
            <li className=" heading-disabled ">Calls</li>
            <li className=" heading-disabled ">Groups</li>
        </ul>
       </nav>
       
    </div>
  )
}

export default NavBar
