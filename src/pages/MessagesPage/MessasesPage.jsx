import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import "./MessagesPage.css";

const MessasesPage = ({ data }) => {
  const [toggleSearch, setToggleSearch] = useState(false);

  

  return (
    <div >
      {toggleSearch ? (
        <div className="search-container">
          <HiOutlineArrowLeft  className="arrow-icon" onClick={() => {
              setToggleSearch(false);
            }}/>
          
           <input className="search-bar" />
           <RiSearchLine className="search-icon" />
          </div>
       
        
      ) : (
        <div className="search-container">
          <HiOutlineArrowLeft />
          <RiSearchLine
            onClick={() => {
              setToggleSearch(true);
            }}
          />
        </div>
      )}

    <nav>
      <ul>
        <li>Meassages</li>
        <li>Calls</li>
        <li>Groups</li>
      </ul>
       
    </nav>
    </div>
  );
};

export default MessasesPage;
